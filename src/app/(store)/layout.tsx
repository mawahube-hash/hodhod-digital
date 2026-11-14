import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
          <Link href="/" className="flex-shrink-0 text-lg font-bold text-slate-900">
            {siteConfig.name}
          </Link>

          <nav className="hidden flex-1 items-center gap-5 lg:flex">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm text-slate-700 transition hover:text-[#008060]"
              >
                {link.label.ar}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.affiliate.href}
            className="ms-auto whitespace-nowrap rounded-lg bg-[#008060] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#006e52]"
          >
            {siteConfig.affiliate.label.ar}
          </Link>
        </div>
      </header>

      {children}
    </div>
  );
}