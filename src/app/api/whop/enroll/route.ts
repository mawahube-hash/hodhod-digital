import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { WhopClient } from "@whop/sdk";

export const runtime = "nodejs";

function fail(error: string, status: number, detail?: string) {
  return NextResponse.json({ error, detail }, { status });
}

export async function POST(req: NextRequest) {
  const token = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!token) return fail("unauthorized", 401);

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const whopKey = process.env.WHOP_API_KEY;
  const companyId = process.env.WHOP_COMPANY_ID;
  if (!url || !anon || !whopKey || !companyId) return fail("server_not_configured", 500);

  const supabase = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: auth } = await supabase.auth.getUser(token);
  const user = auth.user;
  if (!user) return fail("unauthorized", 401);

  const body = await req.json().catch(() => ({}));
  const productId = typeof body?.productId === "string" ? body.productId : "";
  if (!productId) return fail("missing_product", 400);

  const { data: profile } = await supabase
    .from("profiles")
    .select("whop_username")
    .eq("id", user.id)
    .maybeSingle();
  const whopUsername = profile?.whop_username?.trim();
  if (!whopUsername) return fail("whop_username_required", 409);

  const { data: product } = await supabase
    .from("products")
    .select("id, whop_plan_id, affiliate_enabled, commission_type, commission_value")
    .eq("id", productId)
    .maybeSingle();
  if (!product || !product.affiliate_enabled) return fail("product_not_available", 404);
  if (!product.whop_plan_id) return fail("product_not_linked_to_whop", 422);

  const { data: enrollment } = await supabase
    .from("affiliate_enrollments")
    .select("id, affiliate_link, product_link")
    .eq("affiliate_id", user.id)
    .eq("product_id", productId)
    .maybeSingle();
  if (!enrollment) return fail("not_enrolled", 403);
  if (enrollment.affiliate_link) {
    return NextResponse.json({ link: enrollment.affiliate_link, productLink: enrollment.product_link });
  }

  try {
    const client = new WhopClient({ token: whopKey });
    const affiliate: any = await client.affiliates.create({
      account_id: companyId,
      user_identifier: whopUsername,
    });
    const override: any = await client.affiliates.overrides.create({
      id: affiliate.id,
      body: {
        id: affiliate.id,
        override_type: "standard",
        plan_id: product.whop_plan_id,
        commission_type: product.commission_type === "fixed" ? "flat_fee" : "percentage",
        commission_value: Number(product.commission_value),
        applies_to_payments: "first_payment",
      },
    } as any);

    const checkout = override.checkout_direct_link || null;
    const productLink = override.product_direct_link || null;
    if (!checkout) return fail("whop_no_link", 502);

    const { error } = await supabase
      .from("affiliate_enrollments")
      .update({
        whop_affiliate_id: affiliate.id,
        whop_override_id: override.id,
        product_link: productLink,
        affiliate_link: checkout,
      })
      .eq("id", enrollment.id);
    if (error) return fail("save_failed", 500, error.message);

    return NextResponse.json({ link: checkout, productLink });
  } catch (e: any) {
    console.error("whop enroll error:", e?.message || e);
    return fail("whop_failed", 502, String(e?.message || "unknown").slice(0, 300));
  }
}