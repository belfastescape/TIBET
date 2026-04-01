import type { Metadata, Viewport } from "next"
import { JsonLd } from "@/components/JsonLd"
import { buildOpenGraph, buildTwitter, indexableRobots } from "@/lib/seo/metadata-helpers"
import { SITE_URL } from "@/lib/seo/site"

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

const title = "Location & directions"
const description =
  "Find Escape Rooms Tibet in the Khumbu region near Mt Everest—access via Kathmandu & Lukla, with guesthouses and dining nearby."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/location" },
  robots: indexableRobots,
  openGraph: buildOpenGraph({
    title,
    description,
    path: "/location",
    imageAlt: "Location map — Escape Rooms Tibet",
  }),
  twitter: buildTwitter(title, description),
}

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Escape Rooms Tibet",
  url: `${SITE_URL}/location`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mt Everest",
    addressLocality: "Solukhumbu",
    addressRegion: "Koshi Province",
    postalCode: "56000",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.9881564,
    longitude: 86.9253667,
  },
}

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={placeSchema} />
      {children}
    </>
  )
}
