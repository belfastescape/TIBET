'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useLayoutEffect, useEffect, useRef, Suspense } from 'react'
import { pageview, getABVariant, isGa4Configured } from '@/lib/gtag'

function GoogleAnalyticsScript() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isInitialMount = useRef(true)

  // Re-apply user_properties periodically (other configs e.g. OTC iframe can clear them)
  useEffect(() => {
    const refresh = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('set', 'user_properties', { ab_variant: getABVariant() })
      }
    }
    const id = setInterval(refresh, 5000)
    return () => clearInterval(id)
  }, [])

  useLayoutEffect(() => {
    // Skip initial mount — root layout beforeInteractive script already sent page_view
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    const qs = searchParams.toString()
    const url = pathname + (qs ? '?' + qs : '')
    pageview(url)
  }, [pathname, searchParams])

  useEffect(() => {
    const patchHistory = `
      (function(){
        function getVariant(){
          return window.location.pathname === '/homeA' ? 'homeA' : 'control';
        }
        var origPush = history.pushState;
        var origReplace = history.replaceState;
        history.pushState = function(){
          if (window.gtag) window.gtag('set', 'user_properties', { ab_variant: getVariant() });
          return origPush.apply(this, arguments);
        };
        history.replaceState = function(){
          if (window.gtag) window.gtag('set', 'user_properties', { ab_variant: getVariant() });
          return origReplace.apply(this, arguments);
        };
      })();
    `
    const script = document.createElement('script')
    script.textContent = patchHistory
    document.head.appendChild(script)
  }, [])

  return null
}

export default function GoogleAnalytics() {
  if (!isGa4Configured()) return null
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsScript />
    </Suspense>
  )
} 