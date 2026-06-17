import { PRODUCT_CATEGORIES } from '../../lib/data';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailClient slug={params.slug} />;
}
