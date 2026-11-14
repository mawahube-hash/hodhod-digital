"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const pathname = usePathname();
  const router = useRouter();

  // مزامنة حالة اللغة مع الـ HTML عند التحميل الأول (اختياري)
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    // هنا يمكنك إضافة منطق تغيير المسار إذا كنت تستخدم i18n routing
    // router.push(pathname.replace(`/${lang}`, `/${newLang}`));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 max-w-7xl flex items-center justify-between">
        
        {/* 1. الشعار (ثابت في مكانه) */}
        <Link href="/" className="flex items-center gap-2 text-white font-black text-2xl tracking-tighter">
          <span className="text-blue-500">◈</span> هدهد ديجيتال
        </Link>

        {/* 2. روابط التنقل (في المنتصف) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/products" className="hover:text-white transition">المنتجات</Link>
          <Link href="/services" className="hover:text-white transition">الخدمات</Link>
          <Link href="/affiliates" className="hover:text-white transition">المسوقون</Link>
        </nav>

        {/* 3. المنطقة اليمنى/اليسرى (الأدوات) - يتم تثبيت زر اللغة فيها */}
        <div className="flex items-center gap-4">
          
          {/* زر السلة (مثال) */}
          <button className="text-gray-400 hover:text-white transition relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          {/* ======================================================= */}
          {/* زر تبديل اللغة - التثبيت المكاني (Fixed Positioning) */}
          {/* ======================================================= */}
          <div className="flex-shrink-0 w-[90px] h-[36px] relative">
            <button
              onClick={toggleLanguage}
              className="absolute inset-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-colors duration-200"
            >
              {lang === "ar" ? "English" : "العربية"}
            </button>
          </div>
          {/* ======================================================= */}

        </div>
      </div>
    </header>
  );
}