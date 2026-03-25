"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

export default function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!window.fbq) return
    try {
      window.fbq('track', 'PageView')
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams?.toString()])

  return null
}


