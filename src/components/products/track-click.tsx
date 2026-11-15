"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function TrackClick({ slug }: { slug: string }) {
  const ref = useSearchParams().get("ref");
  useEffect(() => {
    if (!ref) return;
    const key = `clk:${ref}:${slug}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    supabase.from("clicks").insert({ affiliate_code: ref, product_slug: slug }).then(({ error }) => { if (error) console.error("click error:", error.message); });
  }, [ref, slug]);
  return null;
}

