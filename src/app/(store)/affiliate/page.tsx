import Link from "next/link";

const steps = [
  { n: "1", title: "سجّل حسابك", text: "أنشئ حساب شريك مجاناً في دقيقة واحدة." },
  { n: "2", title: "انسخ رابطك", text: "لكل منتج رابط إحالة خاص بك، انسخه وانشره في موقعك أو حساباتك." },
  { n: "3", title: "اربح عمولة", text: "عن كل عملية شراء تتم من رابطك تحصل على عمولتك." },
];

export default function AffiliatePage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">برنامج الشركاء</h1>
        <p className="mb-8 text-lg text-slate-600">شارك منتجاتنا واربح عمولة على كل عملية بيع.</p>
        <Link href="/auth/register" className="rounded-lg bg-[#008060] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#006e52]">انضم كشريك</Link>
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-24 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-slate-200 p-6 text-right">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-[#008060]">{s.n}</div>
            <h3 className="mb-2 font-semibold text-slate-900">{s.title}</h3>
            <p className="text-sm leading-6 text-slate-600">{s.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
