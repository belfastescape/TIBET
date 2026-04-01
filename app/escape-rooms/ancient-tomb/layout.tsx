import type { Metadata, Viewport } from "next"
import { JsonLd } from "@/components/JsonLd"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { buildOpenGraph, buildTwitter, indexableRobots } from "@/lib/seo/metadata-helpers"
import { ORGANIZATION_ID, SITE_URL } from "@/lib/seo/site"

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

const title = "Quest for the Ancient Tomb | Family-friendly escape room"
const description =
  "Fantasy tomb adventure with magical puzzles—ideal for beginners and families. 2–6 players, 60 minutes."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/escape-rooms/ancient-tomb" },
  robots: indexableRobots,
  openGraph: buildOpenGraph({
    title,
    description,
    path: "/escape-rooms/ancient-tomb",
    imagePath: "/images/escape-room-portal-large.webp",
    imageAlt: "Quest for the Ancient Tomb escape room",
  }),
  twitter: buildTwitter(title, description),
}

const ancientTombSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Quest for the Ancient Tomb — family-friendly escape room",
  description,
  image: `${SITE_URL}/images/escape-room-portal-large.webp`,
  url: `${SITE_URL}/escape-rooms/ancient-tomb`,
  brand: { "@type": "Brand", name: "Escape Rooms Tibet" },
  seller: { "@id": ORGANIZATION_ID },
  offers: {
    "@type": "Offer",
    priceCurrency: "NZD",
    price: "35",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/escape-rooms/ancient-tomb`,
    validFrom: "2024-01-01",
  },
  category: "Escape room experience",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Duration", value: "60 minutes" },
    { "@type": "PropertyValue", name: "Players", value: "2-6" },
    { "@type": "PropertyValue", name: "Difficulty", value: "Beginner-friendly" },
  ],
}

export default function AncientTombLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={ancientTombSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Escape rooms", path: "/escape-rooms" },
          { name: "Quest for the Ancient Tomb", path: "/escape-rooms/ancient-tomb" },
        ]}
      />
      {children}
    </>
  )
}
