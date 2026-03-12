type RatingStarsProps = {
  value: number
}

export function RatingStars({ value }: RatingStarsProps) {
  const filledStars = Math.round(value)
  const stars = Array.from({ length: 5 }, (_, index) => index < filledStars)

  return (
    <div className="rating" aria-label={`Рейтинг ${value}`}>
      {stars.map((isFilled, index) => (
        <span key={index} className={isFilled ? 'star star-filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  )
}
