import Link from "next/link";

async function getWhopProducts() {
  const apiKey = process.env.WHOP_API_KEY;
  if (!apiKey) return [];
  try {
    const res = await fetch("https://api.whop.com/api/v1/products", {
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    { const list = data.products || data.data || data || []; console.log("WHOP_SAMPLE", JSON.stringify(list[0], null, 2)); return list; }
  } catch (err) {
    return [];
  }
}

export default async function StorePage() {
  const products = await getWhopProducts();

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">هدهد ديجيتال</Link>
          <nav className="flex items-center gap-7">
            <Link href="/store" className="text-sm font-medium text-slate-900">المتجر</Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900">من نحن</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">متجر ديجيتال هدهد</h1>
          <p className="mt-4 text-lg text-slate-600">اكتشف منتجاتنا الرقمية المختارة بعناية</p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <p className="text-slate-600">لا توجد منتجات متاحة حالياً. يرجى التأكد من إضافة منتجات في لوحة تحكم Whop.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: any) => (
              <article key={product.id} className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="p-6">
                  <h2 className="mb-3 text-lg font-bold text-slate-900">{product.title || product.name}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {product.description || "لا يوجد وصف متاح."}
                  </p>
                </div>
                <div className="border-t border-slate-100 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900">
                      {product.plans?.[0]?.initial_price ? (product.plans[0].initial_price / 100) : "0"} $
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a 
                      href={`https://whop.com/hodhod/${product.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                      شراء الآن
                    </a>
                    <a 
                      href={`https://whop.com/hodhod/${product.id}/affiliates`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      نظام الأفلييت
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
