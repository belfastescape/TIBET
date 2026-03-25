"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { event as gtagEvent } from "@/lib/gtag"

/**
 * Sticky mobile CTA bar at the bottom of the screen.
 * Book now (70% width) links to /booking. Call now button (30%) opens tel:0215550198.
 * Shown only on small viewports (hidden from md and up).
 */
export function StickyBookingCta() {
  const handleCallClick = () => {
    gtagEvent({
      action: "call now mobile",
      category: "engagement",
      label: "sticky bar call",
    })
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-stretch border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] bg-black"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <Link
        href="/booking"
        className="w-[70%] flex flex-col items-center justify-center py-3 px-4 bg-black text-center active:bg-gray-900 transition-colors"
        aria-label="Book now — check availability"
      >
        <span className="text-[22px] font-semibold tracking-[0.2em] text-white uppercase">
          Check availability
        </span>
        <span className="text-2xl font-bold tracking-wide text-white mt-1 uppercase">
          Book now
        </span>
      </Link>
      <a
        href="tel:0215550198"
        onClick={handleCallClick}
        className="w-[30%] min-h-full flex flex-col items-center justify-center py-3 px-3 bg-green-600 border-l border-green-500/30 active:bg-green-700 transition-colors"
        aria-label="Call now: 021 555 0198"
      >
        <Phone className="w-8 h-8 text-white mb-1" aria-hidden />
        <span className="text-sm font-semibold tracking-wide text-white uppercase">
          Call now
        </span>
      </a>
    </div>
  )
}
