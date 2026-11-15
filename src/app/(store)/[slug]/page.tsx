import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/products/product-card";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: category } = await supabase.from("categories").select("*").eq("slug", slug).maybeSingle();
  if (!category) notFound();
  const { data } = await supabase.from("products").select("*").eq("category_id", category.id).eq("status", "published");
  const products = data ?? [];
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">{category.name}</h1>
        {products.length === 0 ? (
          <p className="py-20 text-center text-slate-500">لا توجد منتجات حالياً</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (<ProductCard key={p.id} product={p} />))}
          </div>
        )}
      </div>
    </main>
  );
}
