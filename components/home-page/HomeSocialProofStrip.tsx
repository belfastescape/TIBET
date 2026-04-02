import { Star } from "lucide-react"
import GoogleIcon from "@/components/GoogleIcon"
import { cn } from "@/lib/utils"

const REVIEW_SCORE = 4.9
const REVIEW_COUNT = 312
const PLAYERS_HEADLINE = "4,200+"
const PLAYERS_LABEL = "players since 2019"
const ROOMS_COUNT = "3"
const ROOMS_LABEL = "themed rooms"

export function HomeSocialProofStrip({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "border-b border-gray-200/80 bg-[#0c0c0c] py-6 md:py-8",
        className
      )}
      aria-label="Reviews and stats"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-3 md:gap-4">
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <GoogleIcon className="h-8 w-8 shrink-0" aria-hidden />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="flex text-amber-500" aria-label={`${REVIEW_SCORE} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </span>
                <span className="text-lg font-bold tabular-nums text-gray-900">{REVIEW_SCORE}</span>
                <span className="text-sm text-gray-600">Google</span>
              </div>
              <p className="text-xs text-gray-600">{REVIEW_COUNT} reviews</p>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:min-w-[200px] sm:flex-none sm:flex-col sm:justify-center sm:text-center">
            <p className="text-2xl font-bold tabular-nums leading-none text-gray-900">{PLAYERS_HEADLINE}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-600">{PLAYERS_LABEL}</p>
          </div>

          <div className="flex flex-1 items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:min-w-[160px] sm:flex-none sm:flex-col sm:justify-center sm:text-center">
            <p className="text-2xl font-bold tabular-nums leading-none text-gray-900">{ROOMS_COUNT}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-600">{ROOMS_LABEL}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
