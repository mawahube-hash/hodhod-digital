"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig, type Locale } from "@/config/site";

export default function SiteHeader() {
  const [lang, setLang] = useState<Locale>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") setLang(saved);
  }, []);

  const toggle = () => {
    const next: Locale = lang === "ar" ? "en" : "ar";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  };

  return (
    <header dir="ltr" className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <Link href="/" className="flex-shrink-0 text-lg font-bold text-slate-900">{siteConfig.name}</Link>
        <nav className="hidden flex-1 items-center gap-5 lg:flex">
          {siteConfig.nav.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap text-sm text-slate-700 transition hover:text-[#008060]">{link.label[lang]}</Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <button onClick={toggle} className="h-9 w-24 rounded-full border border-slate-300 text-sm font-medium text-slate-700 transition hover:bg-slate-100">{lang === "ar" ? "English" : "العربية"}</button>
          <Link href={siteConfig.affiliate.href} className="whitespace-nowrap rounded-lg bg-[#008060] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#006e52]">{siteConfig.affiliate.label[lang]}</Link>
        </div>
      </div>
    </header>
  );
}
