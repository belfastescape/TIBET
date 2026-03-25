'use client'

import { useEffect } from 'react'

export type Variant = 'control' | 'homeA'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

/**
 * Fires GA4 dataLayer event (ab_test_assignment with ab_variant).
 * Uses the page-provided expectedVariant (no cookie; A/B middleware removed).
 */
export function useABTracking(expectedVariant: Variant) {
  useEffect(() => {
    const variant = expectedVariant

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'ab_test_assignment',
      ab_test_name: 'home_page_redesign',
      ab_variant: variant,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // fire once on mount only
}
