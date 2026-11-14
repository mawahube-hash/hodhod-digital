interface Product {
  id: number;
  title: string;
  price: number;
  comparePrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white">
            {product.badge}
          </span>
        )}
        <button
          className="absolute top-3 left-3 rounded-full bg-white/90 p-2 text-slate-600 opacity-0 backdrop-blur-sm transition-all duration-300 hover:text-slate-900 group-hover:opacity-100"
          aria-label="أضف للمفضلة"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating) ? "text-amber-400" : "text-slate-200"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-slate-500">({product.reviews})</span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
          {product.title}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900">
            {product.price} <span className="text-xs font-medium">ر.س</span>
          </span>
          {product.comparePrice && (
            <>
              <span className="text-sm text-slate-400 line-through">
                {product.comparePrice} ر.س
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                -{discount}%
              </span>
            </>
          )}
        </div>

        {/* Button */}
        <a
  href="https://hop.com/hodhod/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 block text-center w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition shadow-sm"
>
  احصل عليه الآن
</a>
      </div>
    </article>
  );
}