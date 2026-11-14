"use client"

import { useState } from "react"
import Link from "next/link"
import { productsData } from "@/app/(store)/[slug]/data"

export default function HomePage() {
  const [lang, setLang] = useState<"ar" | "en">("ar")
  const isAr = lang === "ar"

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen bg-white text-slate-900 ${isAr ? "font-arabic" : "font-sans"}`}
    >
      {/* القسم الرئيسي */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-b from-orange-50 to-white">
        <button
          onClick={() => setLang(isAr ? "en" : "ar")}
          className="absolute top-4 end-4 text-sm font-bold px-3 py-1 rounded-full border border-slate-300 bg-white hover:border-orange-500"
        >
          {isAr ? "English" : "عربي"}
        </button>

        <div className="max-w-4xl mx-auto space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-bold text-orange-600">
            🚀 {isAr ? "الجيل الجديد من المنتجات الرقمية" : "The Next Generation of Digital Products"}
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            {isAr ? "اكتشف عالم المنتجات" : "Discover Digital Products"}
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              {isAr ? "والحلول الرقمية" : "& Digital Solutions"}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? "نحن نجمع لك أفضل الأدوات والمواقع والبوتات الذكية من هدهد وشركائنا، لنوفر لك تجربة رقمية متكاملة."
              : "We bring you the best tools, websites and smart bots from Hodhod and our partners, for a complete digital experience."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg"
            >
              {isAr ? "تصفح جميع المنتجات" : "Browse All Products"}
            </Link>
            <Link
              href="/about"
              className="bg-white border border-slate-200 hover:border-orange-500 font-bold px-8 py-4 rounded-xl"
            >
              {isAr ? "تعرف علينا" : "About Us"}
            </Link>
          </div>
        </div>
      </section>

      {/* المنتجات */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black">
            {isAr ? "منتجاتنا المميزة" : "Featured Products"}
          </h2>
          <Link href="/shop" className="text-orange-600 font-bold hover:underline">
            {isAr ? "عرض الكل ←" : "View all →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product: any) => (
            <div
              key={product.slug}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition"
            >
              {product.tag && (
                <span className="absolute top-3 end-3 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              )}

              <div className="h-48 bg-slate-50 flex items-center justify-center text-7xl">
                {product.emoji}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-extrabold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-xl">{product.price}</span>
                    <span className="text-sm text-slate-500">
                      <span className="text-orange-500">★</span> ({product.participants})
                    </span>
                  </div>
                  <Link
                    href={`/${product.slug}`}
                    className="block w-full text-center py-2.5 bg-slate-900 hover:bg-orange-600 text-white font-bold rounded-xl transition"
                  >
                    {isAr ? "اكتشف المنتج" : "Discover Product"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}