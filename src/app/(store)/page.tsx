import { getWhopProducts } from "@/lib/whop";
import Link from "next/link";

export default async function StorePage() {
  const products = await getWhopProducts();

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-center">متجر ديجيتال هدهد</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد منتجات متاحة حالياً من Whop. تأكد من إضافة مفتاح WHOP_API_KEY الصحيح في ملف .env.local</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <div key={p.id} className="bg-white p-6 rounded-xl shadow-md border flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{p.name}</h2>
                <p className="text-gray-600 mb-4 text-sm">{p.description || "منتج رقمي حصري عبر ديجيتال هدهد"}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-[#008060]">
                  {p.price ? `${p.price / 100} ${p.currency || "USD"}` : ""}
                </span>
                <a
                  href={p.checkout_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#008060] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition text-sm"
                >
                  شراء عبر Whop
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
