import { useEffect, useRef, useState } from 'react'

export function useInView(rootMargin = '160px') {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible || !ref.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [isVisible, rootMargin])

  return { ref, isVisible }
}
