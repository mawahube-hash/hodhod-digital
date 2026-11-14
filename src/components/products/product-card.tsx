import Link from "next/link";
import type { Product } from "@/types/database";
import { ProductActions } from "./product-actions";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <Link href={`/${product.slug}`} className="block aspect-[4/3] bg-slate-50">
        {product.image_url && (
          <img src={product.image_url} alt={product.name} className="h-full w-full object-cover" />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/${product.slug}`} className="font-bold text-slate-900 hover:text-[#008060]">{product.name}</Link>
        {product.description && <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>}
        {product.price !== null && <p className="text-sm font-semibold text-slate-900">{product.price} {product.currency}</p>}
        <div className="mt-auto pt-2"><ProductActions product={product} /></div>
      </div>
    </div>
  );
}

export default ProductCard;
