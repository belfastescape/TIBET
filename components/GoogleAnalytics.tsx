"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"

/** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local` to override (optional). */
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-EC4DGK9H26"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstNavigation = useRef(true)

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false
      return
    }
    const query = searchParams?.toString()
    const pagePath = query ? `${pathname}?${query}` : pathname
    try {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pagePath,
      })
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams?.toString()])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
