"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ currentLocale = "ar" }: { currentLocale?: "ar" | "en" }) {
  const pathname = usePathname();
  const isArabic = currentLocale === "ar";
  const label = isArabic ? "English" : "العربية";
  const targetHref = isArabic ? `/en${pathname === "/" ? "" : pathname}` : pathname.replace(/^\/en/, "") || "/";

  return (
    <Link
      href={targetHref}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      dir="ltr"
      className="inline-flex h-9 w-[92px] flex-shrink-0 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
    >
      <svg className="h-3.5 w-3.5 flex-shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
      <span className="flex-shrink-0 whitespace-nowrap leading-none">{label}</span>
    </Link>
  );
}