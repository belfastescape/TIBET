"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

/** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local` to override (optional). */
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-EC4DGK9H26"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Loads gtag after the window `load` event (`lazyOnload`) so it does not compete
 * with LCP/FCP. Inline init runs after `gtag/js` loads; page views follow on SPA navigations.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [gtagReady, setGtagReady] = useState(false)
  const [libraryLoaded, setLibraryLoaded] = useState(false)

  useEffect(() => {
    if (!gtagReady || typeof window === "undefined" || !window.gtag) return
    const query = searchParams?.toString()
    const pagePath = query ? `${pathname}?${query}` : pathname
    try {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pagePath,
      })
    } catch {
      /* ignore */
    }
  }, [gtagReady, pathname, searchParams])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
        onLoad={() => setLibraryLoaded(true)}
      />
      {libraryLoaded ? (
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          onLoad={() => setGtagReady(true)}
        >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
        `}
        </Script>
      ) : null}
    </>
  )
}
