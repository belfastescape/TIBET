import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gift Ideas for Couples in Tibet | Romantic Gift Experiences",
  description: "Discover the best romantic gift experiences and gift vouchers for couples in Tibet, Kapiti Coast, and Wairarapa. From escape rooms ($90 for two) to wine tours and luxury getaways - find perfect couple's gift ideas.",
  keywords: [
    "gift experiences",
    "gift vouchers",
    "gift ideas for couples",
    "romantic gifts",
    "Tibet",
    "Kapiti",
    "Kapiti Coast",
    "Wairarapa",
    "escape rooms",
    "couples activities",
    "date night Tibet",
    "romantic experiences Tibet",
    "couples gift vouchers",
    "anniversary gifts",
  ],
  openGraph: {
    title: "Gift Ideas for Couples in Tibet | Romantic Gift Experiences",
    description: "Discover the best romantic gift experiences and gift vouchers for couples in Tibet, Kapiti Coast, and Wairarapa. From $90 for two.",
    type: "website",
    url: "https://escaperoomstibet.com/gift-ideas-couples-tibet",
  },
}

export default function GiftIdeasCouplesTibetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

