import rightArrow from '../../assets/rightArrow.svg'

type PaginationProps = {
  currentPage: number
  pagesCount: number
  onChangePage: (page: number) => void
}

export function Pagination({ currentPage, pagesCount, onChangePage }: PaginationProps) {
  const pageItems: Array<number | 'ellipsis'> =
    pagesCount <= 5 ? Array.from({ length: pagesCount }, (_, index) => index + 1) : [1, 2, 3, 4, 'ellipsis', pagesCount]

  return (
    <nav className="pagination" aria-label="Пагинация">
      <button
        type="button"
        className="page-arrow"
        onClick={() => onChangePage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <img src={rightArrow} alt="Предыдущая страница" className="page-arrow-icon page-arrow-left" />
      </button>

      {pageItems.map((item, index) => {
        if (item === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} className="page-ellipsis" aria-hidden="true">
              ...
            </span>
          )
        }

        return (
          <button
            key={item}
            type="button"
            className={item === currentPage ? 'page-number active' : 'page-number'}
            onClick={() => onChangePage(item)}
          >
            {item}
          </button>
        )
      })}

      <button
        type="button"
        className="page-arrow"
        onClick={() => onChangePage(Math.min(pagesCount, currentPage + 1))}
        disabled={currentPage === pagesCount}
      >
        <img src={rightArrow} alt="Следующая страница" className="page-arrow-icon" />
      </button>
    </nav>
  )
}
