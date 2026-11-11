"use client"

import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [lang, setLang] = useState<"ar" | "en">("ar")
  const isAr = lang === "ar"

  return (
    <main className={`min-h-screen bg-white text-slate-900 ${isAr ? "font-arabic" : "font-sans"}`} dir={isAr ? "rtl" : "ltr"}>
      
      {/* قسم الترحيب الرئيسي (Hero Section) */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center overflow-hidden">
        
        {/* توهج برتقالي خفيف جداً في الخلفية */}
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

      {/* قسم المنتجات المميزة */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-4 pb-24 pt-10">
        <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-4">
          <h2 className="text-3xl font-bold text-slate-900">
            {isAr ? "منتجات مميزة" : "Featured Products"}
          </h2>
          <Link href="/shop" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors flex items-center gap-2">
            {isAr ? "عرض الكل" : "View All"} 
            <span>{isAr ? "←" : "→"}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* بطاقة المنتج الأول (أكاديمية هدهد) مع روابط Whop الحقيقية */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 group flex flex-col relative">
            <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
              {isAr ? "الأكثر مبيعاً" : "Best Seller"}
            </span>
            
            <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
              <div className="text-center">
                <span className="text-6xl block mb-2">🎓</span>
                <span className="text-slate-400 font-bold text-sm">Hodhod Academy</span>
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                {isAr ? "أكاديمية هدهد - منهج التمكين المعرفي" : "Hodhod Academy - Knowledge Empowerment"}
              </h3>
              <p className="text-slate-500 text-sm mb-5 line-clamp-2 flex-1">
                {isAr 
                  ? "برنامج تدريبي حصري يجمع بين عمق التفكير وقوة الحفظ ونشاطة الإبداع." 
                  : "An exclusive training program combining deep thinking, memory power, and creativity."}
              </p>
              
              {/* أزرار الشراء والأفيلييت بروابط Whop الحقيقية */}
              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-100">
                <a 
                  href="https://whop.com/hodhod/ad9f9668-2805-49c6-b948-502ede6cc3b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-center font-bold rounded-lg transition-all text-sm"
                >
                  {isAr ? "اشترِ الآن" : "Buy Now"}
                </a>
                <a 
                  href="https://whop.com/hodhod/affiliates/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-center font-bold rounded-lg transition-all text-sm"
                >
                  {isAr ? "سوّق واربح عمولة" : "Promote & Earn"}
                </a>
              </div>
            </div>
          </div>

          {/* بقية البطاقات (تجريبية) */}
          {[
            { id: 2, titleAr: "بوت واتساب ذكي", titleEn: "Smart WhatsApp Bot", descAr: "أتمتة ردود واتساب لشركتك.", descEn: "Automate your business WhatsApp replies.", price: "$49.00", tag: "مميز" },
            { id: 3, titleAr: "قالب موقع شركة", titleEn: "Corporate Website Template", descAr: "قالب عصري جاهز للاستخدام.", descEn: "Modern ready-to-use template.", price: "$99.00", tag: "" },
            { id: 4, titleAr: "خدمة تصميم UI/UX", titleEn: "UI/UX Design Service", descAr: "تصميم واجهات احترافية لمشروعك.", descEn: "Professional interfaces for your project.", price: "$199.00", tag: "خدمة" },
          ].map((product) => (
            <div key={product.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 group flex flex-col">
              
              <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center">
                {product.tag && (
                  <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                    {product.tag}
                  </span>
                )}
                <span className="text-4xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">📦</span>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                  {isAr ? product.titleAr : product.titleEn}
                </h3>
                <p className="text-slate-500 text-sm mb-5 line-clamp-2 flex-1">
                  {isAr ? product.descAr : product.descEn}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-orange-600 font-bold text-lg">{product.price}</span>
                  <button className="px-4 py-2 bg-slate-900 hover:bg-orange-600 text-white text-sm font-bold rounded-lg transition-all">
                    {isAr ? "اكتشف" : "Discover"}
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  )
}
