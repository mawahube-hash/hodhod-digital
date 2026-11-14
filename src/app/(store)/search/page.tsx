import { supabase } from "@/lib/supabase";
import { ProductGrid } from "@/components/products/product-grid";
import type { Product } from "@/types/database";

export const dynamic = "force-dynamic";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const term = (q ?? "").trim().replace(/[%,]/g, "");
  let products: Product[] = [];
  if (term) {
    const { data } = await supabase.from("products").select("*").eq("status", "active").ilike("name", `%${term}%`);
    products = (data ?? []) as Product[];
  }
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">{term ? `نتائج البحث عن: ${term}` : "ابحث عن منتج"}</h1>
        {term && <ProductGrid products={products} />}
      </div>
    </main>
  );
}
