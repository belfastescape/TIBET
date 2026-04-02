export type RoomSlug = "operation-pitt" | "billion-dollar-heist" | "ancient-tomb"

/** Matches public copy on the pricing page (“From $33 per Adult”). */
export const DEFAULT_FROM_PRICE_PER_PERSON = 33

export const ROOM_OFFERS: Record<
  RoomSlug,
  {
    playerRangeLabel: string
  }
> = {
  "billion-dollar-heist": { playerRangeLabel: "2–7 players" },
  "operation-pitt": { playerRangeLabel: "2–8 players" },
  "ancient-tomb": { playerRangeLabel: "2–6 players" },
}

export function roomPriceAndPlayersLine(slug: RoomSlug): string {
  const { playerRangeLabel } = ROOM_OFFERS[slug]
  return `From $${DEFAULT_FROM_PRICE_PER_PERSON} per person · ${playerRangeLabel}`
}

/** Site-wide quote for pages that are not tied to one room (e.g. booking). */
export const BOOKING_PAGE_TESTIMONIAL = {
  quote: "Easy to book online and the whole team had a blast — we’re already planning our next visit.",
  attribution: "Chris M.",
}

export const ROOM_TRUST_TESTIMONIALS: Record<
  RoomSlug,
  { quote: string; attribution: string; roomLabel: string }
> = {
  "billion-dollar-heist": {
    roomLabel: "The Billion Dollar Heist",
    quote:
      "The most challenging escape room I've done — we escaped with seconds to spare and the rush was incredible.",
    attribution: "Alex L.",
  },
  "operation-pitt": {
    roomLabel: "Operation Pitt",
    quote: "Brilliant spy theme and perfect for our work social — two teams, one winner!",
    attribution: "Jamie R.",
  },
  "ancient-tomb": {
    roomLabel: "Quest for the Ancient Tomb",
    quote: "Our kids loved the magic theme — puzzles were tough but fair. Great family afternoon.",
    attribution: "Sam T.",
  },
}
