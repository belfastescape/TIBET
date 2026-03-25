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
  title: "Best Hen Party Activities in Tibet | Escape Rooms",
  description:
    "Make your hen party unforgettable with our exciting escape rooms in Tibet. Perfect for groups of 4-28 people. Special hen party packages available. Located in Tibet CBD.",
  openGraph: {
    title: "Best Hen Party Activities in Tibet",
    description:
      "Make your hen party unforgettable with our exciting escape rooms. Perfect for groups looking for a unique and fun pre-wedding experience.",
    url: "https://www.escaperoomstibet.com/hen-parties",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1920,
        height: 1080,
        alt: "Hen Party Activities at Escape Rooms Tibet",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hen Parties | Escape Rooms Tibet",
    description:
      "Make your hen party unforgettable with our exciting escape rooms. Perfect for groups looking for a unique and fun experience.",
    images: ["https://www.escaperoomstibet.com/images/escape-room-portal-large.webp"],
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

const henPartySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hen Party Escape Room Activities Tibet",
  "description": "Create unforgettable hen party memories with our escape room experiences in Tibet. Perfect for groups of 4-28 people. Multiple rooms available for larger parties. Located in Tibet CBD, close to bars and restaurants.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Escape Rooms Tibet",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 Barkhor Street",
      "addressLocality": "Lhasa",
      "addressRegion": "Tibet",
      "postalCode": "850000",
      "addressCountry": "CN"
    },
    "telephone": "+64215550198",
    "url": "https://www.escaperoomstibet.com"
  },
  "serviceType": "Hen Party Activities",
  "areaServed": {
    "@type": "City",
    "name": "Tibet",
    "addressCountry": "CN"
  },
  "offers": {
    "@type": "Offer",
    "description": "Hen party escape room packages for groups of 4-28 people",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "NZD"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Hen Parties, Bachelorette Groups, Pre-Wedding Celebrations"
  }
}

export default function HenPartiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={henPartySchema} />
      {children}
    </>
  )
}
