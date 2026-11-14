export const siteConfig = {
  name: "Digital Hodhod",
  nav: [
    { key: "home", label: { ar: "الرئيسية", en: "Home" }, href: "/" },
    { key: "shop", label: { ar: "جميع المنتجات", en: "All Products" }, href: "/shop" },
    { key: "learning", label: { ar: "التعلّم", en: "Learning" }, href: "/learning" },
    { key: "health", label: { ar: "الصحة", en: "Health" }, href: "/health" },
    { key: "services", label: { ar: "الخدمات", en: "Services" }, href: "/services" },
    { key: "about", label: { ar: "من نحن", en: "About" }, href: "/about" },
  ],
  affiliate: { label: { ar: "برنامج الشركاء", en: "Affiliate Program" }, href: "/affiliate" },
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/" },   // ضع الرابط الحقيقي
    { name: "YouTube", href: "https://www.youtube.com/" },
    { name: "TikTok", href: "https://www.tiktok.com/" },
  ],
} as const;

export type Locale = "ar" | "en";