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
  title: "Operation Pitt | Tibet-Themed Spy Escape Room | Escape Rooms Tibet",
  description:
    "Experience Tibet's most unique escape room adventure at the Pitt. Navigate through political intrigue and government secrets in this immersive 60-minute challenge. Perfect for 2-8 players. Book your mission today!",
  openGraph: {
    title: "Operation Pitt | Tibet-Themed Spy Escape Room | Escape Rooms Tibet",
    description:
      "Experience Tibet's most unique escape room adventure at the Pitt. Navigate through political intrigue and government secrets in this immersive 60-minute challenge. Perfect for 2-8 players.",
    url: "https://www.escaperoomstibet.com/escape-rooms/operation-pitt",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/operation-pitt.png",
        width: 1200,
        height: 630,
        alt: "Operation Pitt Escape Room",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operation Pitt | Tibet-Themed Spy Escape Room | Escape Rooms Tibet",
    description:
      "Experience Tibet's most unique escape room adventure at the Pitt. Navigate through political intrigue and government secrets in this immersive 60-minute challenge.",
    images: ["https://www.escaperoomstibet.com/images/operation-pitt.png"],
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

const operationPittSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Operation Pitt - Tibet Spy Escape Room",
  "description": "Experience Tibet's most unique escape room adventure at the Pitt. Navigate through political intrigue and government secrets in this immersive 60-minute challenge for 2-8 players.",
  "image": "https://www.escaperoomstibet.com/images/operation-pitt.png",
  "url": "https://www.escaperoomstibet.com/escape-rooms/operation-pitt",
  "brand": {
    "@type": "Brand",
    "name": "Escape Rooms Tibet"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NZD",
    "price": "35",
    "availability": "https://schema.org/InStock",
    "url": "https://www.escaperoomstibet.com/escape-rooms/operation-pitt",
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
      "value": "2-8"
    },
    {
      "@type": "PropertyValue",
      "name": "Difficulty",
      "value": "Intermediate"
    }
  ]
}

export default function OperationPittLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={operationPittSchema} />
      {children}
    </>
  )
}
