"use client"

import { useState } from "react"
import Link from "next/link"
import { productsData } from "@/app/(store)/[slug]/data"

export default function HomePage() {
  const [lang, setLang] = useState<"ar" | "en">("ar")
  const isAr = lang === "ar"

  return (
    <main className={`min-h-screen bg-white text-slate-900 ${isAr ? "font-arabic" : "font-sans"}`} dir={isAr ? "rtl" : "ltr"}>
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold shadow-sm">
            {isAr ? "🚀 الجيل الجديد من المنتجات الرقمية" : "🚀 The Next Generation of Digital Products"}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            {isAr ? "اكتشف عالم المنتجات" : "Discover Digital Products"} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              {isAr ? "والحلول الرقمية" : "& Digital Solutions"}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {isAr 
              ? "نحن نجمع لك أفضل الأدوات والمواقع والبوتات الذكية من هدهد وشركائنا، لنوفر لك تجربة رقمية متكاملة." 
              : "We bring together the best tools, websites, and smart bots from Hodhod and our partners to provide you with an integrated digital experience."}
          </p>
          <div className="flex items-center justify-center gap-4 pt-6">
            <Link href="/shop" className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 transition-all font-bold text-white shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1">
              {isAr ? "تصفح جميع المنتجات" : "Browse All Products"}
            </Link>
            <Link href="/about" className="px-8 py-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all font-bold text-slate-700">
              {isAr ? "تعرف علينا" : "About Us"}
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-[1440px] mx-auto px-4 pb-24 pt-10">
        <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-4">
          <h2 className="text-3xl font-bold text-slate-900">
            {isAr ? "منتجاتنا المميزة" : "Featured Products"}
          </h2>
          <Link href="/shop" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors flex items-center gap-2">
            {isAr ? "عرض الكل" : "View All"} 
            <span>{isAr ? "←" : "→"}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div key={product.slug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 group flex flex-col">
              <Link href={`/${product.slug}`} className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-6 block">
                {product.tag && (
                  <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                    {product.tag}
                  </span>
                )}
                <span className="text-6xl block group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <Link href={`/${product.slug}`}>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                    {isAr ? product.titleAr : product.titleEn}
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1">
                  {isAr ? product.descriptionAr : product.descriptionEn}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-900 font-bold text-xl">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-orange-500 font-bold text-sm">★</span>
                    <span className="text-slate-500 text-xs">({product.participants})</span>
                  </div>
                </div>
                <Link href={`/${product.slug}`} className="w-full py-2.5 bg-slate-900 hover:bg-orange-600 text-white text-center font-bold rounded-lg transition-all text-sm">
                  {isAr ? "اكتشف المنتج" : "Discover Product"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}