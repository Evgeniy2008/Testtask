import { useMemo, useState } from 'react'
import { CatalogFooter } from './components/catalog/CatalogFooter'
import { CatalogHeader } from './components/catalog/CatalogHeader'
import { Pagination } from './components/catalog/Pagination'
import { ProductGrid } from './components/catalog/ProductGrid'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'
import './App.css'

const ITEMS_PER_PAGE = 12

function byPopularity(a: Product, b: Product) {
  const left = a.reviews_count * a.rating
  const right = b.reviews_count * b.rating
  return right - left
}

function App() {
  const { products, isLoading, error } = useProducts()
  const [page, setPage] = useState(1)
  const [sortDescending, setSortDescending] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const sortedProducts = useMemo(() => {
    const next = [...products].sort(byPopularity)
    return sortDescending ? next : next.reverse()
  }, [products, sortDescending])

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) {
      return sortedProducts
    }

    return sortedProducts.filter((product) => {
      const text = `${product.name} ${product.category} ${product.slug}`.toLowerCase()
      return text.includes(query)
    })
  }, [sortedProducts, searchQuery])

  const pagesCount = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE))
  const currentPage = Math.min(page, pagesCount)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleToggleSort = () => {
    setSortDescending((prev) => !prev)
    setPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setPage(1)
  }

  return (
    <div className="catalog-page">
      <CatalogHeader
        totalCount={filteredProducts.length}
        sortDescending={sortDescending}
        onToggleSort={handleToggleSort}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {isLoading && (
        <div className="state-block">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="card-skeleton" />
          ))}
        </div>
      )}

      {!isLoading && error && <div className="state-error">{error}</div>}

      {!isLoading && !error && (
        <>
          <ProductGrid products={visibleProducts} />
          {filteredProducts.length === 0 ? (
            <div className="state-error">По вашему запросу ничего не найдено.</div>
          ) : (
            <Pagination
              currentPage={currentPage}
              pagesCount={pagesCount}
              onChangePage={setPage}
            />
          )}
        </>
      )}

      <CatalogFooter />
    </div>
  )
}

export default App
