"use client"

import Link from "next/link"
import { Search, ShoppingBag, User, Heart } from "lucide-react"
import { useState } from "react"
import { useCartStore } from "@/store/cart"

export function Header() {
  const { items } = useCartStore()
  const [searchOpen, setSearchOpen] = useState(false)
  
  // حالة اللغة
  const [lang, setLang] = useState<"ar" | "en">("ar")
  const isAr = lang === "ar"

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* اللوجو */}
          <Link href="/" className="flex items-center gap-1 text-xl font-black hover:opacity-80 transition-opacity">
            <span className="text-orange-500">HODHOD</span>
            <span className="text-slate-900">DIGITAL</span>
          </Link>

          {/* روابط التنقل وزر اللغة */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <Link href="/shop" className="hover:text-orange-600 transition-colors">
              جميع المنتجات
            </Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">
              من نحن
            </Link>
            <button 
              onClick={() => {
                setLang(isAr ? "en" : "ar")
                document.documentElement.dir = isAr ? "ltr" : "rtl"
              }}
              className="text-slate-600 hover:text-orange-600 font-bold transition-colors"
            >
              {isAr ? "English" : "عربي"}
            </button>
          </nav>

          {/* الأيقونات */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setSearchOpen(true)}
              className="text-slate-500 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-slate-50"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="text-slate-500 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-slate-50">
              <Heart className="w-5 h-5" />
            </button>
            <Link href="/cart" className="text-slate-500 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-slate-50 relative">
              <ShoppingBag className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            <button className="text-slate-500 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-slate-50">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* نافذة البحث المنبثقة (بيضاء) */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="ابحث عن منتج، أداة، أو خدمة..." 
                className="w-full bg-transparent text-slate-900 px-4 py-5 outline-none placeholder:text-slate-400"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-slate-500 hover:text-slate-900 text-sm font-bold"
              >
                إغلاق
              </button>
            </div>
            <div className="p-4">
              <p className="text-slate-400 text-sm text-center py-8">ابدأ الكتابة للبحث في المنتجات...</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}