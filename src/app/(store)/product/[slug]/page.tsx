import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

function youtubeId(url: string | null) {
  if (!url) return null;
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: p } = await supabase.from("products").select("*").eq("slug", slug).eq("status", "published").maybeSingle();
  if (!p) notFound();
  const rating = Number(p.rating ?? 0);
  const gallery: string[] = [p.image_url, ...(p.gallery ?? [])].filter(Boolean);
  const vid = youtubeId(p.video_url);
  return (
    <main className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden rounded-2xl bg-slate-100">
            {gallery[0] && <img src={gallery[0]} alt={p.name} className="h-full w-full object-cover" />}
          </div>
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {gallery.slice(1, 5).map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl bg-slate-100"><img src={src} alt="" className="h-full w-full object-cover" /></div>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-slate-900">{p.name}</h1>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="text-amber-500">{"★".repeat(Math.round(rating))}<span className="text-slate-300">{"★".repeat(5 - Math.round(rating))}</span></span>
            <span>{rating.toFixed(1)} ({p.rating_count ?? 0} تقييم)</span>
            <span>·</span>
            <span>{p.sales_count ?? 0} مشتري</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">${Number(p.price)}</p>
          <p className="leading-7 text-slate-600">{p.description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {p.purchase_url && <a href={p.purchase_url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#008060] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#006e52]">شراء المنتج</a>}
            {p.website_url && <a href={p.website_url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">زيارة الموقع</a>}
            {p.affiliate_enabled && <Link href="/affiliate" className="rounded-lg border border-[#008060] px-6 py-3 text-sm font-medium text-[#008060] transition hover:bg-emerald-50">احصل على رابط الإحالة</Link>}
          </div>
        </div>
      </div>
      {(vid || p.article) && (
        <div className="mx-auto max-w-3xl space-y-8 border-t border-slate-200 px-4 py-12">
          {vid && (
            <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100">
              <iframe src={`https://www.youtube.com/embed/${vid}`} title={p.name} className="h-full w-full" allowFullScreen />
            </div>
          )}
          {p.article && <div className="whitespace-pre-line leading-8 text-slate-700">{p.article}</div>}
        </div>
      )}
    </main>
  );
}
