import type { Product } from '../../types/product'
import { LazyProductCard } from './LazyProductCard'

type ProductGridProps = {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <main className="products-grid">
      {products.map((product) => (
        <LazyProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}
