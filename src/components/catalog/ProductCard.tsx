import basketIcon from '../../assets/basket.png'
import categoryIcon from '../../assets/category_img.png'
import type { Product } from '../../types/product'
import { ProductImage } from './ProductImage'
import { RatingStars } from './RatingStars'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const hasVolumeChoice = product.volumes.length > 1
  const selectedVolume =
    product.volumes.find((volume) => volume.id === product.selected_volume_id) || product.volumes[0]

  return (
    <article className="product-card">
      <div className="image-wrap">
        <ProductImage image={product.image} name={product.name} />
      </div>

      <div className="price-row">
        <span className="old-price">{product.old_price}</span>
        <span className="current-price">
          {product.price} {product.currency}
        </span>
        <span className="discount">{product.discount_percent}%</span>
      </div>

      <h2 className="product-name">{product.name}</h2>

      <div className="meta-row rating-row">
        <RatingStars value={product.rating} />
        <span className="reviews">{product.reviews_count}</span>
      </div>

      <div className="meta-row stock-row">
        <span className={product.in_stock ? 'stock in' : 'stock out'}>
          <span className="dot">✓</span>
          {product.in_stock ? 'В наличии' : 'Нет в наличии'}
        </span>
        <img src={categoryIcon} alt="Категория" className="category-icon" />
        <span className="category">{product.category}</span>
      </div>

      <div className={hasVolumeChoice ? 'actions-row' : 'actions-row actions-row-single'}>
        {hasVolumeChoice && (
          <select className="volume-select" defaultValue={selectedVolume?.id}>
            {product.volumes.map((volume) => (
              <option key={volume.id} value={volume.id} disabled={!volume.in_stock}>
                {volume.label}
              </option>
            ))}
          </select>
        )}

        <button type="button" className="cart-button" disabled={!product.in_stock}>
          <img src={basketIcon} alt="Корзина" className="cart-icon" />
          <span>В корзину</span>
        </button>
      </div>
    </article>
  )
}
