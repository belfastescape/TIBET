import Link from "next/link"
import { Phone } from "lucide-react"
import { StickyCallAnalyticsLink } from "@/components/StickyCallAnalyticsLink"

/**
 * Sticky mobile CTA — Server Component so "Check availability" / "Book now" are in the
 * initial HTML and are not blocked on MainLayoutWrapper hydration or its JS chunk.
 */
export function StickyBookingCta() {
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
      <StickyCallAnalyticsLink
        href="tel:0215550198"
        className="w-[30%] min-h-full flex flex-col items-center justify-center py-3 px-3 bg-green-800 border-l border-green-700/50 text-white active:bg-green-900 transition-colors"
        aria-label="Call now: 021 555 0198"
      >
        <Phone className="w-8 h-8 text-white mb-1" aria-hidden />
        <span className="text-sm font-semibold tracking-wide text-white uppercase">
          Call now
        </span>
      </StickyCallAnalyticsLink>
    </div>
  )
}
