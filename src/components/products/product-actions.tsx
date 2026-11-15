"use client";
import PromoteButton from "./promote-button";
import type { Product } from "@/types/database";
import { useEffect, useState } from "react";

export function ProductActions({ product }: { product: Product }) {
  const [buyUrl, setBuyUrl] = useState(product.purchase_url || "");

  useEffect(() => {
    if (!product.purchase_url) return;
    const match = document.cookie.match(new RegExp('(^| )ref=([^;]+)'));
    const ref = match ? match[2] : localStorage.getItem("hodhod_ref");
    if (ref) {
      const sep = product.purchase_url.includes("?") ? "&" : "?";
      setBuyUrl(`${product.purchase_url}${sep}ref=${ref}`);
    }
  }, [product.purchase_url]);

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {buyUrl && (
        <a
          href={buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#008060] text-white px-5 py-2 font-medium hover:opacity-90 transition"
        >
          شراء الآن عبر Whop
        </a>
      )}
      {product.affiliate_enabled && <PromoteButton productId={product.id} />}
    </div>
  );
}
