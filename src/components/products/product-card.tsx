import Link from "next/link";
import type { Product } from "@/types/database";

type P = Product & { image_url?: string | null; rating?: number | null; rating_count?: number | null; sales_count?: number | null };

function Stars({ value }: { value: number }) {
  return (
    <span className="text-sm tracking-tight text-amber-500" aria-label={`${value} / 5`}>
      {"★".repeat(Math.round(value))}<span className="text-slate-300">{"★".repeat(5 - Math.round(value))}</span>
    </span>
  );
}

export function ProductCard({ product }: { product: P }) {
  const rating = Number(product.rating ?? 0);
  return (
    <Link href={`/product/${product.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="aspect-[4/3] w-full bg-slate-100">
        {product.image_url && <img src={product.image_url} alt={product.name} className="h-full w-full object-cover" />}
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-900">{product.name}</h3>
        <p className="line-clamp-2 min-h-[2.5rem] text-sm text-slate-500">{product.description}</p>
        <div className="flex items-center gap-2">
          <Stars value={rating} />
          <span className="text-xs text-slate-500">{rating.toFixed(1)} ({product.rating_count ?? 0})</span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-slate-900">${Number(product.price)}</span>
          <span className="text-xs text-slate-500">{product.sales_count ?? 0} مشتري</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
