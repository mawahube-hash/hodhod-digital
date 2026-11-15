# Digital Hodhod - حالة المشروع (اقرأه قبل أي تعديل)

## الفكرة
منصة تجمع منتجات (دورات، ملفات رقمية، خدمات، ذكاء اصطناعي) في بطاقات. الشريك يسجّل، يختار ما يروّج له، ويحصل على رابطه الخاص.

## التقنيات
Next.js 16 + Supabase (المنتجات والحسابات) + Whop (الدفع).

## قواعد العمل بين الأدوات
1. اقرأ هذا الملف ثم نفّذ git status قبل أي تعديل.
2. لا تستبدل ملفات كاملة ولا تمسح .env.local. أضف فقط.
3. قبل تغيير الأداة: git add -A ثم git commit، وحدّث قسم "ما أُنجز" هنا.
4. لا تكتب أي مفتاح سري في ملف محفوظ أو في محادثة.
5. الفحص: npx tsc --noEmit. التشغيل: npm run dev في طرفية مستقلة.

## متغيرات .env.local (أسماء فقط، القيم سرية)
GEMINI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_BASE_URL, WHOP_API_KEY, WHOP_COMPANY_ID

## ما أُنجز
- جداول Supabase: affiliate_enrollments و conversions، وحقول العمولة و whop_plan_id في products.
- أنواع Supabase مولّدة في src/types/database.ts (وفي آخره Product و Category يدوياً، أعدهما إن ولّدت الأنواع من جديد).
- نسخة احتياطية: src/types/database.backup.ts. آخر حفظ مستقر: 10d2e25 في فرع cleanup.
- تسجيل النقرات: src/components/products/track-click.tsx (يعمل مع ?ref=).
- زر ابدأ الترويج: src/components/products/promote-button.tsx، يكتب في affiliate_enrollments.
- نوع العمولة المسموح في القاعدة: percentage أو fixed (وليس percent).

## قرار معلّق (اسأل المالك قبل أي حذف)
هل Whop هو النظام كله (المنتجات والشراء والأفلييت)، أم نبقي موقعنا ومنتجاتنا في Supabase و Whop للشراء والأفلييت فقط؟

## ملفات من جلسة أخرى لم تُراجع بعد
src/lib/whop.ts، src/app/api/create-product/route.ts، src/app/(store)/[slug]، ai-router.ts

## ما بقي
1. لوحة الشريك تعرض المنتجات التي اختارها فقط وروابطها.
2. ربط الأفلييت مع Whop (إنشاء الأفلييت والعمولة، وقراءة الأرباح بالاستعلام الدوري).
3. لوحة إدارة المنتجات، وصفحة تسجيل الدخول والخروج، والترجمة، والصفحة الرئيسية.
4. قبل النشر: تفعيل Confirm email، ومراجعة RLS، ثم Vercel.
