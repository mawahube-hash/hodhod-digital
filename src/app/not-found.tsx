import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="mb-2 text-5xl font-bold text-slate-900">404</h1>
      <p className="mb-6 text-slate-600">الصفحة التي تبحث عنها غير موجودة</p>
      <Link href="/" className="rounded-lg bg-[#008060] px-5 py-2 text-sm font-medium text-white hover:bg-[#006e52]">العودة للرئيسية</Link>
    </main>
  );
}
