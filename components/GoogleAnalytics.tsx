'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useLayoutEffect, useEffect, useRef, Suspense } from 'react'
import { pageview, getABVariant, GOOGLE_ADS_CONVERSION_ID, GA_MEASUREMENT_ID, isGa4Configured } from '@/lib/gtag'

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
    // Skip initial mount — inline script already sent page_view with user_properties
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    const qs = searchParams.toString()
    const url = pathname + (qs ? '?' + qs : '')
    pageview(url)
  }, [pathname, searchParams])

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

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          const script = document.createElement('script')
          script.textContent = patchHistory
          document.head.appendChild(script)
        }}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          (function(){
            function getVariant(){
              return window.location.pathname === '/homeA' ? 'homeA' : 'control';
            }
            var variant = getVariant();
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              user_properties: { ab_variant: variant },
              ${process.env.NODE_ENV === 'development' ? 'debug_mode: true,' : ''}
            });
            ${GOOGLE_ADS_CONVERSION_ID ? `var _gadsId = "${GOOGLE_ADS_CONVERSION_ID}"; if (_gadsId) { var _gadsBase = _gadsId.split("/")[0]; if (_gadsBase) gtag("config", _gadsBase); }` : ''}
            gtag('set', 'user_properties', { ab_variant: variant });
            gtag('event', 'page_view', {
              page_location: window.location.href,
              page_title: document.title,
              page_path: window.location.pathname
            });
          })();
        `}
      </Script>
    </>
  )
}

export default function GoogleAnalytics() {
  if (!isGa4Configured()) return null
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsScript />
    </Suspense>
  )
} 