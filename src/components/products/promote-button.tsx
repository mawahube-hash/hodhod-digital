"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type State = "loading" | "guest" | "idle" | "saving" | "enrolled" | "error";

export default function PromoteButton({ productId }: { productId: string }) {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    (async () => {
      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;
      if (!user) return setState("guest");
      const { data } = await supabase
        .from("affiliate_enrollments")
        .select("id")
        .eq("affiliate_id", user.id)
        .eq("product_id", productId)
        .maybeSingle();
      setState(data ? "enrolled" : "idle");
    })();
  }, [productId]);

  async function start() {
    setState("saving");
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) return setState("guest");
    const { error } = await supabase
      .from("affiliate_enrollments")
      .insert({ affiliate_id: auth.user.id, product_id: productId });
    if (error && error.code !== "23505") {
      console.error("enroll error:", error.message);
      return setState("error");
    }
    setState("enrolled");
  }

  const base = "inline-block rounded-lg px-4 py-2 text-sm font-medium";

  if (state === "loading") return null;
  if (state === "guest")
    return (
      <Link href="/auth/register" className={base + " border"}>
        سجّل كشريك لتبدأ الترويج
      </Link>
    );
  if (state === "enrolled")
    return (
      <Link href="/dashboard" className={base + " border"}>
        أنت تروّج لهذا المنتج - افتح لوحتك
      </Link>
    );
  return (
    <div>
      <button
        onClick={start}
        disabled={state === "saving"}
        className={base + " bg-black text-white disabled:opacity-50"}
      >
        {state === "saving" ? "جارٍ الحفظ..." : "ابدأ الترويج لهذا المنتج"}
      </button>
      {state === "error" && (
        <p className="mt-2 text-sm text-red-600">تعذّر الحفظ، حاول مرة أخرى.</p>
      )}
    </div>
  );
}
