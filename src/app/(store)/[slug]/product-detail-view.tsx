"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Heart, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react"

export function ProductDetailView({ product }: { product: any }) {
  const [lang, setLang] = useState<"ar" | "en">("ar")
  const isAr = lang === "ar"

  return (
    <div className={`min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8 ${isAr ? "font-arabic" : "font-sans"}`} dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto">
        
        {/* مسار التنقل */}
        <div className="text-sm text-slate-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">{isAr ? "الرئيسية" : "Home"}</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-orange-600">{isAr ? "المنتجات" : "Products"}</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{isAr ? "أكاديمية هدهد" : "Hodhod Academy"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* صورة المنتج */}
          <div className="bg-slate-50 rounded-3xl p-10 aspect-square flex items-center justify-center border border-slate-200 relative overflow-hidden">
            <span className="text-[150px]">🎓</span>
            <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {isAr ? "الأكثر مبيعاً" : "Best Seller"}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="space-y-6">
            <h1 className="text-4xl font-black leading-tight">
              {isAr ? "أكاديمية هدهد" : "Hodhod Academy"} <br />
              <span className="text-orange-600">{isAr ? "منهج التمكين المعرفي" : "Knowledge Empowerment"}</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {isAr 
                ? "برنامج تدريبي حصري يجمع بين عمق التفكير وقوة الحفظ ونشاطة الإبداع. صُمم هذا المنهج ليكون رحلة متكاملة تأخذك من التشتت إلى التركيز العميق."
                : "An exclusive training program combining deep thinking, memory power, and creativity. Designed to take you from distraction to deep focus."}
            </p>

            {/* المميزات */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
              <h3 className="font-bold text-lg text-slate-900">{isAr ? "ماذا ستتعلم؟" : "What will you learn?"}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600"><strong>{isAr ? "تقنيات الحفظ المتقدم:" : "Advanced Memory:"}</strong> {isAr ? "كيف تحفظ المعلومات المعقدة بسرعة." : "How to memorize complex info quickly."}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600"><strong>{isAr ? "عمق التفكير:" : "Deep Thinking:"}</strong> {isAr ? "أدوات عملية للتفكير النقدي." : "Practical tools for critical thinking."}</span>
                </li>
              </ul>
            </div>

            {/* أزرار الشراء */}
            <div className="space-y-3 pt-4">
              <a 
                href="https://whop.com/hodhod/ad9f9668-2805-49c6-b948-502ede6cc3b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all shadow-lg text-lg"
              >
                {isAr ? "اشترِ الآن" : "Buy Now"}
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="https://whop.com/hodhod/affiliates/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all"
              >
                {isAr ? "سوّق واربح عمولة" : "Promote & Earn"}
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 justify-center pt-2">
              <ShieldCheck className="w-4 h-4" />
              {isAr ? "دفع آمن 100% عبر منصة Whop" : "100% Secure Payment via Whop"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}