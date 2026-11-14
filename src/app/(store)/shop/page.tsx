import Link from "next/link"
import { productsData } from "../[slug]/data"

export default function ShopPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black mb-2">جميع المنتجات</h1>
        <p className="text-slate-500 mb-8">{productsData.length} منتجات</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((p: any) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-slate-50 flex items-center justify-center text-7xl">
                {p.emoji}
              </div>
              <div className="p-5">
                <h2 className="font-bold text-lg mb-1">{p.name ?? p.title}</h2>
                <div className="font-extrabold text-orange-600">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}