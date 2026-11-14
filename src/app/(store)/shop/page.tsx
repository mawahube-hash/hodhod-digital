import { getProducts, getCategories } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">جميع المنتجات</h1>
        <p className="mb-6 text-slate-600">{products.length} منتج</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c.id} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">{c.name}</span>
          ))}
        </div>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
