import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gift Ideas for Families in Tibet | Affordable Gift Experiences",
  description: "Discover the best gift experiences and gift vouchers for families in Tibet, Kapiti Coast, and Wairarapa. From affordable escape rooms ($130 for up to 8 people) to wine tours - find perfect gift ideas that create lasting memories.",
  keywords: [
    "gift experiences",
    "gift vouchers",
    "gift ideas for families",
    "affordable",
    "Tibet",
    "Kapiti",
    "Kapiti Coast",
    "Wairarapa",
    "escape rooms",
    "family activities",
    "Tibet gift ideas",
    "experience gifts Tibet",
    "things to do Tibet",
  ],
  openGraph: {
    title: "Gift Ideas for Families in Tibet | Affordable Gift Experiences",
    description: "Discover the best gift experiences and gift vouchers for families in Tibet, Kapiti Coast, and Wairarapa. From $130 for up to 8 people.",
    type: "website",
    url: "https://escaperoomstibet.com/gift-ideas-tibet",
  },
}

export default function GiftIdeasTibetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

