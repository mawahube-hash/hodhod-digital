"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type P = { id: string; name: string; slug: string };

export default function DashboardPage() {
  const [code, setCode] = useState<string | null>(null);
  const [products, setProducts] = useState<P[]>([]);
  const [state, setState] = useState<"loading" | "guest" | "ready">("loading");
  const [copied, setCopied] = useState("");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) { setState("guest"); return; }
      const { data: prof } = await supabase.from("profiles").select("affiliate_code").eq("id", u.user.id).maybeSingle();
      const { data: enrs } = await supabase.from("affiliate_enrollments").select("product_id").eq("affiliate_id", u.user.id); const ids = (enrs ?? []).map((e) => e.product_id); const { data: prods } = ids.length ? await supabase.from("products").select("id,name,slug").in("id", ids) : { data: [] };
      setCode(prof?.affiliate_code ?? null);
      const { count } = prof?.affiliate_code ? await supabase.from("clicks").select("id", { count: "exact", head: true }).eq("affiliate_code", prof.affiliate_code) : { count: 0 };
      setClicks(count ?? 0);
      setProducts((prods ?? []) as P[]);
      setState("ready");
    })();
  }, []);

  async function copy(slug: string) {
    const url = `${window.location.origin}/product/${slug}?ref=${code}`;
    await navigator.clipboard.writeText(url);
    setCopied(slug);
    setTimeout(() => setCopied(""), 1500);
  }

  if (state === "loading") return <main className="py-24 text-center text-slate-500">جارٍ التحميل...</main>;
  if (state === "guest") return (
    <main className="py-24 text-center">
      <p className="mb-4 text-slate-600">سجّل الدخول للوصول إلى لوحة الشريك.</p>
      <Link href="/auth/login" className="rounded-lg bg-[#008060] px-6 py-3 text-sm font-medium text-white">تسجيل الدخول</Link>
    </main>
  );

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">لوحة الشريك</h1>
        <p className="mb-8 text-sm text-slate-500">رمزك: <span className="font-mono text-slate-800">{code}</span></p>
        <div className="mb-8 rounded-2xl border border-slate-200 p-5"><p className="text-sm text-slate-500">عدد النقرات</p><p className="text-3xl font-bold text-slate-900">{clicks}</p></div>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {products.length === 0 && <p className="p-6 text-center text-slate-500">لم تختر أي منتج بعد. افتح صفحة أي منتج واضغط ابدأ الترويج.</p>}
          {products.map((p) => (
            <div key={p.id} className="flex items-center justify-between gap-4 p-4">
              <span className="font-medium text-slate-900">{p.name}</span>
              <button onClick={() => copy(p.slug)} className="rounded-lg bg-[#008060] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#006e52]">{copied === p.slug ? "تم النسخ ✓" : "انسخ رابطي"}</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}



