import { useEffect, useState } from 'react'
import { fetchProducts } from '../api/productsApi'
import type { Product } from '../types/product'

type UseProductsState = {
  products: Product[]
  isLoading: boolean
  error: string
}

export function useProducts(): UseProductsState {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      try {
        setIsLoading(true)
        setError('')
        const items = await fetchProducts(controller.signal)
        setProducts(items)
      } catch (loadError) {
        if (!(loadError instanceof DOMException && loadError.name === 'AbortError')) {
          setError('Ошибка загрузки каталога. Попробуйте обновить страницу.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    load()

    return () => controller.abort()
  }, [])

  return { products, isLoading, error }
}
