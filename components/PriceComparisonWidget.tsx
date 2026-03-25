"use client"

import { useState, useEffect } from "react"
import { Star, Users, UserRound, Minus, Plus, Sparkles, Mail, Check, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { event as gtagEvent } from "@/lib/gtag"
import Link from "next/link"

interface Competitor {
  name: string
  shortName: string
  adultPrice: number
  childPrice: number
  rating: number
  isUs: boolean
}

const competitors: Competitor[] = [
  { name: "Escape Rooms Tibet", shortName: "OUR PRICE", adultPrice: 35, childPrice: 28, rating: 4.9, isUs: true },
  { name: "Exodus Games", shortName: "EXODUS GAMES", adultPrice: 40, childPrice: 33, rating: 4.9, isUs: false },
  { name: "XFACTOR", shortName: "XFACTOR", adultPrice: 44, childPrice: 39, rating: 4.9, isUs: false },
  { name: "LLASHA LEGENDS", shortName: "LLASHS LEGENDS", adultPrice: 37, childPrice: 33, rating: 4.6, isUs: false },
]

/** Overrides: (shortName, adults, children) -> fixed value or N/A. Returns null for N/A. */
function getPriceOverride(shortName: string, adults: number, children: number): number | null | undefined {
  const ppl = adults + children

  // Our price overrides
  if (shortName === "OUR PRICE") {
    if (adults === 2 && children === 0) return 90          // 2 adults
    if (adults === 2 && children === 1) return 118         // 2 adults + 1 child
    if (adults === 2 && children === 2) return 146         // 2 adults + 2 children
    if (adults === 2 && children === 3) return 174         // 2 adults + 3 children
    if (adults === 2 && children === 4) return 202         // 2 adults + 4 children
    if (adults === 1 && children === 1) return 73          // 1 adult + 1 child
    if (adults === 1 && children === 2) return 101         // 1 adult + 2 children
    if (adults === 3 && children === 0) return 120         // 3 adults
    if (adults === 4 && children === 0) return 152         // 4 adults
  }

  // Escape Mate: any 2 or 3 people
  if (shortName === "ESCAPE MATE" && (ppl === 2 || ppl === 3)) {
    return 133
  }

  // 2 or more children only (no adults): N/A for everyone
  if (adults === 0 && children >= 2) {
    return null
  }

  // Escape Masters: by total party size (2/3/4 people)
  if (shortName === "ESCAPE MASTERS") {
    if (ppl === 2) return 80
    if (ppl === 3) return 114
    if (ppl === 4) return 144
  }
  return undefined // use calculated price
}

export function PriceComparisonWidget() {
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [animateResults, setAnimateResults] = useState(false)
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [showShareSuccess, setShowShareSuccess] = useState(false)

  const calculatePrice = (competitor: Competitor, a: number, c: number) => {
    return competitor.adultPrice * a + competitor.childPrice * c
  }

  /** Display price for a competitor: number or null (N/A). */
  const getDisplayPrice = (competitor: Competitor, index: number): number | null => {
    const override = getPriceOverride(competitor.shortName, adults, children)
    if (override === null) return null
    if (override !== undefined) return override
    return calculatePrice(competitor, adults, children)
  }

  const handleCalculate = () => {
    if (adults + children > 0) {
      if (typeof window !== "undefined") {
        gtagEvent({
          action: "compare_prices",
          category: "Price Comparison Widget",
          label: "Compare Prices",
          value: adults + children,
        })
      }
      setShowResults(true)
      setAnimateResults(false)
      setTimeout(() => setAnimateResults(true), 50)
    }
  }

  useEffect(() => {
    if (showResults) {
      setAnimateResults(false)
      setTimeout(() => setAnimateResults(true), 50)
    }
  }, [adults, children, showResults])

  const ourPrice = getDisplayPrice(competitors[0], 0)
  const competitorPrices = competitors.slice(1).map((c, i) => getDisplayPrice(c, i + 1))
  const validCompetitorPrices = competitorPrices.filter((p): p is number => p !== null)
  const averageCompetitorPrice = validCompetitorPrices.length > 0
    ? validCompetitorPrices.reduce((a, b) => a + b, 0) / validCompetitorPrices.length
    : null
  const averageSavings = ourPrice !== null && averageCompetitorPrice !== null
    ? Math.round(averageCompetitorPrice - ourPrice)
    : null

  const handleSendQuote = async () => {
    if (!email || !email.includes("@")) return
    setIsSending(true)
    // Simulate sending email - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSending(false)
    setEmailSent(true)
  }

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      gtagEvent({
        action: "share",
        category: "Price Comparison Widget",
        label: "Share with friends",
        value: adults + children,
      })
    }

    const pricePart = ourPrice !== null
      ? averageSavings !== null && averageSavings > 0
        ? ` for just $${ourPrice} at Escape Rooms Tibet - that's $${averageSavings} less than the average competitor!`
        : ` for just $${ourPrice} at Escape Rooms Tibet!`
      : " at Escape Rooms Tibet!"
    const shareText = `Check out this escape room deal! ${adults} adult${adults !== 1 ? 's' : ''}${children > 0 ? ` + ${children} child${children !== 1 ? 'ren' : ''}` : ''}${pricePart}`
    const shareUrl = "https://escaperoomstibet.com/#price-comparison"

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Escape Rooms Tibet - Price Comparison",
          text: shareText,
          url: shareUrl,
        })
      } catch (err) {
        // User cancelled or share failed, fall back to clipboard
        copyToClipboard(shareText + " " + shareUrl)
      }
    } else {
      copyToClipboard(shareText + " " + shareUrl)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setShowShareSuccess(true)
      setTimeout(() => setShowShareSuccess(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setShowShareSuccess(true)
      setTimeout(() => setShowShareSuccess(false), 2000)
    }
  }

  return (
    <div id="price-comparison" className="w-full max-w-3xl mx-auto scroll-mt-24">
      <div className="bg-[#020b09] rounded-2xl border border-emerald-900/60 overflow-hidden shadow-2xl shadow-emerald-500/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-700/80 to-transparent px-6 py-5 border-b border-emerald-800/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-foreground">
                INSTANT LOCAL PRICE COMPARISON
              </h2>
              <p className="text-sm text-muted-foreground">
                See how we stack up against the competition
              </p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="p-6">
          <p className="text-foreground font-medium mb-5">
            How many people are you looking to book for?
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Adults Input */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <UserRound className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Adults</span>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-lg"
                  onClick={() => setAdults(Math.max(0, adults - 1))}
                  disabled={adults === 0}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-2xl font-bold text-foreground tabular-nums w-12 text-center">
                  {adults}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-lg"
                  onClick={() => setAdults(adults + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Children Input */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Children</span>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-lg"
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  disabled={children === 0}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-2xl font-bold text-foreground tabular-nums w-12 text-center">
                  {children}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-lg"
                  onClick={() => setChildren(children + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          {!showResults && (
            <Button
              className="w-full h-12 text-base font-semibold rounded-xl"
              onClick={handleCalculate}
              disabled={adults + children === 0}
            >
              Compare Prices
            </Button>
          )}

          {/* Results Table */}
          {showResults && (
            <div
              className={cn(
                "transition-all duration-500 ease-out",
                animateResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              {/* Savings Banner */}
              {averageSavings !== null && averageSavings > 0 && (adults + children) > 0 && (
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-5 text-center">
                  {adults === 2 && children === 0 ? (
                    <>
                      <p className="text-white font-bold text-lg">
                        ESCAPE ROOMS WELLINGTON
                      </p>
                      <p className="text-yellow-400 font-semibold text-sm tracking-wide">
                        BEST LOCATION. HIGHEST RATING
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-primary font-bold text-lg">
                        Save ${averageSavings} on average with us!
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Compared to average competitor pricing for {adults + children} {adults + children === 1 ? 'person' : 'people'}
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Comparison Table */}
              <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3 pl-2">
                        
                      </th>
                      {competitors.map((competitor) => (
                        <th
                          key={competitor.name}
                          className="text-center pb-3 px-2"
                        >
                          <span
                            className={cn(
                              "text-xs font-bold tracking-wider",
                              competitor.isUs ? "text-primary" : "text-foreground"
                            )}
                          >
                            {competitor.shortName}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Google Rating Row */}
                    <tr className="border-t border-border">
                      <td className="py-4 pl-2">
                        <span className="text-sm font-medium text-foreground">Google Rating</span>
                      </td>
                      {competitors.map((competitor) => (
                        <td
                          key={`${competitor.name}-rating`}
                          className={cn(
                            "text-center py-4 px-2",
                            competitor.isUs && "bg-primary/5 rounded-t-lg"
                          )}
                        >
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span
                              className={cn(
                                "text-sm font-semibold",
                                competitor.isUs ? "text-primary" : "text-foreground"
                              )}
                            >
                              {competitor.rating}/5
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Price Row */}
                    <tr className="border-t border-border">
                      <td className="py-4 pl-2">
                        <span className="text-sm font-medium text-foreground">Price</span>
                      </td>
                      {competitors.map((competitor, index) => {
                        const price = getDisplayPrice(competitor, index)
                        const isUs = competitor.isUs
                        return (
                          <td
                            key={`${competitor.name}-price`}
                            className={cn(
                              "text-center py-4 px-2",
                              isUs && "bg-primary/5 rounded-b-lg"
                            )}
                          >
                            <span
                              className={cn(
                                "text-xl font-bold tabular-nums",
                                price === null && "text-muted-foreground",
                                price !== null && isUs && "text-primary",
                                price !== null && !isUs && ourPrice !== null && price > ourPrice && "text-muted-foreground",
                                price !== null && !isUs && (ourPrice === null || price <= ourPrice) && "text-foreground"
                              )}
                            >
                              {price === null ? "N/A" : `$${price}`}
                            </span>
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Share Button */}
              <div className="flex justify-end mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  {showShareSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      Share with friends
                    </>
                  )}
                </Button>
              </div>

              {/* Email Quote Section */}
              <div className="pt-5 border-t border-border">
                <div className="bg-muted/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      Send this guaranteed price quote to your email
                    </span>
                  </div>
                  
                  {emailSent ? (
                    <div className="flex items-center gap-2 text-primary py-2">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Quote sent! Check your inbox.</span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 h-11 bg-background border-border"
                      />
                      <Button
                        onClick={handleSendQuote}
                        disabled={!email || !email.includes("@") || isSending}
                        className="h-11 px-5 font-semibold"
                      >
                        {isSending ? "Sending..." : "Send Quote"}
                      </Button>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link href="/booking">
                  <Button className="w-full h-12 text-base font-semibold rounded-xl">
                    Book Now & Save
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
