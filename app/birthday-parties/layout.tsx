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
  title: "Birthday Parties | Escape Rooms Tibet",
  description:
    "Make your birthday party unforgettable with our exciting escape rooms in Tibet. Perfect for groups looking for a unique and fun experience. Special birthday party packages available.",
  openGraph: {
    title: "Birthday Parties | Escape Rooms Tibet",
    description:
      "Make your birthday party unforgettable with our exciting escape rooms in Tibet. Perfect for groups looking for a unique and fun experience.",
    url: "https://www.escaperoomstibet.com/birthday-parties",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1920,
        height: 1080,
        alt: "Birthday Parties at Escape Rooms Tibet",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Parties | Escape Rooms Tibet",
    description:
      "Make your birthday party unforgettable with our exciting escape rooms. Perfect for groups looking for a unique and fun experience.",
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

const birthdayPartySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Birthday Party Escape Room Experiences Tibet",
  "description": "Celebrate your birthday with an unforgettable escape room adventure in Tibet. Perfect for kids, teens, and adults. Special birthday party packages available with exclusive room bookings.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Escape Rooms Tibet",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mt Everest",
      "addressLocality": "Solukhumbu",
      "addressRegion": "Koshi Province",
      "postalCode": "56000",
      "addressCountry": "NP"
    },
    "telephone": "+64215550198",
    "url": "https://www.escaperoomstibet.com"
  },
  "serviceType": "Birthday Party Venue",
  "areaServed": {
    "@type": "City",
    "name": "Solukhumbu",
    "addressCountry": "NP"
  },
  "offers": {
    "@type": "Offer",
    "description": "Birthday party escape room packages",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "NZD"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Families, Kids, Teenagers, Adults"
  }
}

export default function BirthdayPartiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={birthdayPartySchema} />
      {children}
    </>
  )
}
