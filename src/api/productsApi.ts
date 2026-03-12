import type { Product, ProductsApiResponse } from '../types/product'

const API_URL = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products'

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(API_URL, { signal })
  if (!response.ok) {
    throw new Error('Не удалось загрузить товары')
  }

  const payload: ProductsApiResponse = await response.json()
  if (!payload.success || !payload.data?.products) {
    throw new Error('Некорректный формат ответа API')
  }

  return payload.data.products
}
