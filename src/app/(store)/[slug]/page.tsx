import { notFound } from "next/navigation"
import { productsData } from "./data"
import { ProductDetailView } from "./product-detail-view"

export function generateStaticParams() {
  return productsData.map((p: any) => ({ slug: p.slug }))
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = productsData.find((p: any) => p.slug === slug)
  if (!product) notFound()
  return <ProductDetailView product={product} />
}