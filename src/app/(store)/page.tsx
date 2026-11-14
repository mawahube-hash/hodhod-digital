import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Digital Hodhod</h1>
        <p className="mb-8 text-lg text-slate-600">أدوات ومنتجات رقمية مختارة بعناية</p>
        <Link href="/shop" className="rounded-lg bg-[#008060] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#006e52]">تصفح المنتجات</Link>
      </section>
    </main>
  );
}
