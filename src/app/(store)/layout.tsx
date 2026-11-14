import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      {children}
    </div>
  );
}
