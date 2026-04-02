import Link from "next/link"
import { Lock } from "lucide-react"
import { BOOKING_HELP_PHONE_DISPLAY, BOOKING_HELP_PHONE_TEL } from "@/lib/contact-info"
import { cn } from "@/lib/utils"

export type BookingTrustBlockProps = {
  quote: string
  attribution: string
  /** Shown in micro-testimonial context, e.g. room title */
  roomName?: string
  className?: string
  /** Light text on dark backgrounds */
  variant?: "dark" | "light"
}

export function BookingTrustBlock({
  quote,
  attribution,
  roomName,
  className,
  variant = "dark",
}: BookingTrustBlockProps) {
  const muted = variant === "dark" ? "text-gray-400" : "text-gray-600"
  const body = variant === "dark" ? "text-gray-300" : "text-gray-700"
  const strong = variant === "dark" ? "text-white" : "text-gray-900"

  return (
    <div className={cn("max-w-md space-y-3 text-sm", className)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className={cn("inline-flex items-center gap-1.5 font-medium", strong)}>
          <Lock className="h-4 w-4 shrink-0 text-cyan-500" aria-hidden />
          Secure checkout
        </span>
        <span className={muted}>·</span>
        <span className={muted}>Visa · Mastercard</span>
      </div>
      <p className={muted}>Free cancellation up to 48 hours before your booking.</p>
      <blockquote className={cn("border-l-2 border-cyan-500/60 pl-3", body)}>
        <p className="italic leading-snug">&ldquo;{quote}&rdquo;</p>
        <footer className={cn("mt-1.5 not-italic text-xs", muted)}>
          — {attribution}
          {roomName ? <span> · {roomName}</span> : null}
        </footer>
      </blockquote>
      <p className={cn("text-xs leading-relaxed", muted)}>
        Need help? Call us:{" "}
        {BOOKING_HELP_PHONE_TEL ? (
          <a href={`tel:${BOOKING_HELP_PHONE_TEL}`} className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline">
            {BOOKING_HELP_PHONE_DISPLAY}
          </a>
        ) : (
          <>
            <span className={strong}>{BOOKING_HELP_PHONE_DISPLAY}</span>
            {" "}
            <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline">
              or contact us
            </Link>
          </>
        )}
      </p>
    </div>
  )
}
