import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const event = body.action || body.type;
    const data = body.data || body;

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    if (event === "payment.succeeded" || event === "checkout.completed") {
      const paymentId = data.id || data.payment_id;
      const productId = data.product_id;
      const metadata = data.metadata || {};
      const affiliateCode = metadata.ref || metadata.affiliate_code;

      let affiliateId = null;
      if (affiliateCode) {
        const { data: prof } = await supabaseAdmin
          .from("profiles")
          .select("id")
          .eq("affiliate_code", affiliateCode)
          .maybeSingle();
        if (prof) affiliateId = prof.id;
      }

      await supabaseAdmin.from("conversions").insert({
        whop_payment_id: paymentId,
        product_id: productId,
        affiliate_id: affiliateId,
        status: "completed",
        paid_at: new Date().toISOString(),
      });
    } else if (event === "payment.refunded" || event === "subscription.ended") {
      const paymentId = data.id || data.payment_id;
      if (paymentId) {
        await supabaseAdmin
          .from("conversions")
          .update({ status: "refunded" })
          .eq("whop_payment_id", paymentId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
