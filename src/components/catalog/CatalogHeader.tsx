import logoImage from '../../assets/logo.png'
import popularArrow from '../../assets/popular-arrow.png'
import downArrow from '../../assets/downArrow.svg'
import searchIcon from '../../assets/search.svg'

type CatalogHeaderProps = {
  totalCount: number
  sortDescending: boolean
  onToggleSort: () => void
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function CatalogHeader({
  totalCount,
  sortDescending,
  onToggleSort,
  searchQuery,
  onSearchChange,
}: CatalogHeaderProps) {
  return (
    <header className="catalog-header">
      <div className="header-main-row">
        <img src={logoImage} alt="AQVEX" className="brand-image" />
      </div>

      <div className="header-search-row">
        <label className="search-input" aria-label="Поиск">
          <img src={searchIcon} alt="Поиск" className="search-icon" />
          <input
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>
      </div>

      <div className="header-toolbar-row">
        <div className="products-count">{totalCount} товаров</div>
        <button type="button" className="sort-button" onClick={onToggleSort}>
          <img src={popularArrow} alt="Популярность" className="sort-icon-left" />
          <span className="sort-label">По популярности</span>
          <img
            src={downArrow}
            alt="Открыть сортировку"
            className={sortDescending ? 'sort-icon-right' : 'sort-icon-right sort-icon-right-up'}
          />
        </button>
      </div>
    </header>
  )
}
