import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-black text-orange-600">
            هدهد ديجيتال
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-base font-bold">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-orange-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.affiliate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold px-4 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-500"
          >
            {siteConfig.affiliate.shortLabel}
          </Link>
        </div>
      </header>

      {children}
    </div>
  )
}