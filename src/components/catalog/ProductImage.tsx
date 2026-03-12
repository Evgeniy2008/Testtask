import { useEffect, useMemo, useState } from 'react'
import placeholderImage from '../../assets/product-placeholder.svg'

type ProductImageProps = {
  image: string
  name: string
}

export function ProductImage({ image, name }: ProductImageProps) {
  const sourceCandidates = useMemo(
    () => [
      `https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/images/${image}`,
      `https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/assets/${image}`,
      `https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/uploads/${image}`,
      placeholderImage,
    ],
    [image],
  )

  const [sourceIndex, setSourceIndex] = useState(0)

  useEffect(() => {
    setSourceIndex(0)
  }, [image])

  return (
    <img
      className="product-image"
      src={sourceCandidates[sourceIndex]}
      alt={name}
      onError={() => setSourceIndex((index) => Math.min(index + 1, sourceCandidates.length - 1))}
      loading="lazy"
    />
  )
}
