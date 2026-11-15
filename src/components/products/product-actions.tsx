import PromoteButton from "./promote-button";
import Link from "next/link";
import type { Product } from "@/types/database";

export function ProductActions({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap gap-2">
      {product.purchase_url && (
        <a href={product.purchase_url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#008060] px-4 py-2 text-sm font-medium text-white hover:bg-[#006e52]">شراء المنتج</a>
      )}
      {product.website_url && (
        <a href={product.website_url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">زيارة الموقع</a>
      )}
      {product.affiliate_enabled && <PromoteButton productId={product.id} />}
    </div>
  );
}

