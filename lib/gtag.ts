// Google Analytics 4 — default is this site's production stream ID.
// You can override it by setting NEXT_PUBLIC_GA_ID in your environment.
const rawGaId = (process.env.NEXT_PUBLIC_GA_ID || 'G-R4Y4HC2V3Q').trim()

/** True when a GA4 web stream measurement ID is configured. */
export function isGa4Configured(): boolean {
  return /^G-[A-Z0-9]+$/i.test(rawGaId)
}

export const GA_MEASUREMENT_ID = isGa4Configured() ? rawGaId : ''

/** Google Ads conversion ID (e.g. AW-123456789/AbCdEfGhIjKlMnOp). Set in env to record conversion value. */
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || ''

/**
 * Inline bootstrap for root layout (`beforeInteractive`) so gtag appears in the **initial HTML**.
 * Google's setup verifier and many crawlers do not run your React client bundle.
 */
export function getGtagBootstrapInlineScript(): string {
  if (!isGa4Configured()) return ''
  const id = GA_MEASUREMENT_ID
  const ads = GOOGLE_ADS_CONVERSION_ID.trim()
  const adsSnippet = ads
    ? `var _gadsId = ${JSON.stringify(ads)}; if (_gadsId) { var _gadsBase = _gadsId.split("/")[0]; if (_gadsBase) gtag("config", _gadsBase); }`
    : ''
  const debugSnippet = process.env.NODE_ENV === 'development' ? 'debug_mode: true,' : ''
  return `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
(function(){
  function getVariant(){
    return window.location.pathname === '/homeA' ? 'homeA' : 'control';
  }
  var variant = getVariant();
  gtag('config', ${JSON.stringify(id)}, {
    send_page_view: false,
    user_properties: { ab_variant: variant },
    ${debugSnippet}
  });
  ${adsSnippet}
  gtag('set', 'user_properties', { ab_variant: variant });
  gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: document.title,
    page_path: window.location.pathname
  });
})();
`.trim()
}

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetIdOrCommand: string,
      config?: Record<string, unknown>
    ) => void
  }
}

/**
 * Fire a Google Ads conversion with the actual booking/purchase value.
 * Call this when a booking or purchase completes so Google Ads records the real amount (not $1).
 * Requires NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID to be set (e.g. AW-XXXX/YYYY from Google Ads > Goals > Conversions).
 */
export function trackGoogleAdsConversion({
  value,
  currency = 'NZD',
  transactionId,
}: {
  value: number
  currency?: string
  transactionId?: string
}) {
  if (!GOOGLE_ADS_CONVERSION_ID || typeof window === 'undefined' || !window.gtag) return
  if (typeof value !== 'number' || value <= 0) return

  const params: Record<string, unknown> = {
    send_to: GOOGLE_ADS_CONVERSION_ID,
    value,
    currency,
  }
  if (transactionId) params.transaction_id = transactionId

  window.gtag('event', 'conversion', params)
}

/** Variant for GA4 (control | homeA). Based on pathname since we no longer use A/B middleware. */
export function getABVariant(): 'control' | 'homeA' {
  if (typeof window === 'undefined') return 'control'
  return window.location.pathname === '/homeA' ? 'homeA' : 'control'
}

// Helper: ensure ab_variant is set before any event (gtag set can be cleared by other configs)
function ensureABVariant() {
  const variant = getABVariant()
  window.gtag('set', 'user_properties', { ab_variant: variant })
  return variant
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!isGa4Configured() || typeof window === 'undefined' || !window.gtag) return
  const variant = ensureABVariant()
  window.gtag('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_location: typeof window !== 'undefined' ? window.location.href : url,
    page_title: typeof document !== 'undefined' ? document.title : '',
    page_path: url,
    user_properties: { ab_variant: variant },
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (!isGa4Configured() || typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
} 