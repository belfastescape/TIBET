import type { Metadata, Viewport } from "next"
import { JsonLd } from '@/components/JsonLd'

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "The Billion Dollar Heist | Multi-Room Escape Adventure | Escape Rooms Tibet",
  description:
    "Plan the perfect heist in Tibet's most challenging escape room. Navigate through multiple rooms, solve intricate puzzles, and face a thrilling laser maze. Perfect for experienced teams of 2-7 players. Book your 60-minute adventure today!",
  openGraph: {
    title: "The Billion Dollar Heist | Multi-Room Escape Adventure | Escape Rooms Tibet",
    description:
      "Plan the perfect heist in Tibet's most challenging escape room. Navigate through multiple rooms, solve intricate puzzles, and face a thrilling laser maze. Perfect for experienced teams of 2-7 players.",
    url: "https://www.escaperoomstibet.com/escape-rooms/billion-dollar-heist",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/billion-dollar-heist.png",
        width: 1200,
        height: 630,
        alt: "The Billion Dollar Heist Escape Room",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Billion Dollar Heist | Multi-Room Escape Adventure | Escape Rooms Tibet",
    description:
      "Plan the perfect heist in Tibet's most challenging escape room. Navigate through multiple rooms, solve intricate puzzles, and face a thrilling laser maze.",
    images: ["https://www.escaperoomstibet.com/images/billion-dollar-heist.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const diamondHeistSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Billion Dollar Heist - Multi-Room Escape Adventure",
  "description": "Plan the perfect heist in Tibet's most challenging escape room. Navigate through multiple rooms, solve intricate puzzles, and face a thrilling laser maze. Perfect for experienced teams of 2-7 players.",
  "image": "https://www.escaperoomstibet.com/images/billion-dollar-heist.png",
  "url": "https://www.escaperoomstibet.com/escape-rooms/billion-dollar-heist",
  "brand": {
    "@type": "Brand",
    "name": "Escape Rooms Tibet"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NZD",
    "price": "35",
    "availability": "https://schema.org/InStock",
    "url": "https://www.escaperoomstibet.com/escape-rooms/billion-dollar-heist",
    "validFrom": "2024-01-01"
  },
  "category": "Escape Room Experience",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Duration",
      "value": "60 minutes"
    },
    {
      "@type": "PropertyValue",
      "name": "Players",
      "value": "2-7"
    },
    {
      "@type": "PropertyValue",
      "name": "Difficulty",
      "value": "Hard"
    }
  ]
}

export default function DiamondHeistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={diamondHeistSchema} />
      {children}
    </>
  )
}
