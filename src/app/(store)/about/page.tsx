export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-slate-100">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-500">من نحن</h1>
      
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-slate-200">أكاديمية هدهد</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          أكاديمية هدهد هي منصة رقمية متخصصة تقدم منتجات وحلول عالية الجودة: دورات تدريبية متقدمة في التمكين المعرفي، قوالب مواقع احترافية، روبوتات ذكاء اصطناعي لـ WhatsApp، وخدمات رقمية متكاملة تمنحك أدوات عملية لتطوير عملك ونمو مشاريعك بسرعة وأمان.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-slate-200">شركاء النجاح والأفلييت</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          نحن ندعم المسوقين والشركاء من خلال برامج أفلييت مجزية بنسب تصل إلى 50% لمنتجاتنا عبر نظام Whop، لتتمكن من تحقيق عوائد مالية مستدامة بكل سهولة.
        </p>
      </div>
    </div>
  );
}