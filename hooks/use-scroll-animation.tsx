"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 30% of the element is visible
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return { ref, isInView }
}
