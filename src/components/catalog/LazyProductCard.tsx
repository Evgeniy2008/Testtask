import type { Product } from '../../types/product'
import { useInView } from '../../hooks/useInView'
import { ProductCard } from './ProductCard'

type LazyProductCardProps = {
  product: Product
}

export function LazyProductCard({ product }: LazyProductCardProps) {
  const { ref, isVisible } = useInView()

  return (
    <div ref={ref} className="lazy-card-shell">
      {isVisible ? <ProductCard product={product} /> : <div className="card-skeleton card-skeleton-inline" />}
    </div>
  )
}
