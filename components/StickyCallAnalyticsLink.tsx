"use client"

import type { ComponentProps } from "react"
import { event as gtagEvent } from "@/lib/gtag"

/** Client-only tel link so the sticky bar shell can stay a Server Component (better LCP). */
export function StickyCallAnalyticsLink({
  onClick,
  ...rest
}: ComponentProps<"a">) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        gtagEvent({
          action: "call now mobile",
          category: "engagement",
          label: "sticky bar call",
        })
        onClick?.(e)
      }}
    />
  )
}
