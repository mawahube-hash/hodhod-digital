"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
    setLoading(false);
    if (error) { setError(error.message); return; }
    router.push("/shop");
  }

  const input = "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#008060]";

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900">انضم كشريك</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input className={input} placeholder="الاسم" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className={input} type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className={input} type="password" placeholder="كلمة المرور (6 أحرف على الأقل)" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#008060] py-3 text-sm font-medium text-white transition hover:bg-[#006e52] disabled:opacity-60">{loading ? "جارٍ التسجيل..." : "إنشاء حساب"}</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">لديك حساب؟ <Link href="/auth/login" className="text-[#008060]">تسجيل الدخول</Link></p>
      </div>
    </main>
  );
}
