"use client"

import type { ComponentProps } from "react"

/** Client-only tel link so the sticky bar shell can stay a Server Component (better LCP). */
export function StickyCallAnalyticsLink({
  onClick,
  ...rest
}: ComponentProps<"a">) {
  return <a {...rest} onClick={onClick} />
}
