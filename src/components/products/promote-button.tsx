"use client";

export default function PromoteButton({
  href = "/affiliate",
}: {
  href?: string;
  productId?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
    >
      ابدأ الترويج لهذا المنتج
    </a>
  );
}
