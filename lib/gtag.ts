// Google Analytics configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'YOUR_GA4_MEASUREMENT_ID'

/** Google Ads conversion ID (e.g. AW-123456789/AbCdEfGhIjKlMnOp). Set in env to record conversion value. */
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || ''

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
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
} 