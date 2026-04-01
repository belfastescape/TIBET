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

const title = "The Billion Dollar Heist | Multi-room escape game"
const description =
  "Our toughest vault job: multiple rooms, layered puzzles, and a laser gauntlet. Best for experienced crews of 2–7. 60 minutes."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/escape-rooms/billion-dollar-heist" },
  robots: indexableRobots,
  openGraph: buildOpenGraph({
    title,
    description,
    path: "/escape-rooms/billion-dollar-heist",
    imagePath: "/images/billion-dollar-heist.png",
    imageAlt: "The Billion Dollar Heist escape room",
  }),
  twitter: buildTwitter(title, description, `${SITE_URL}/images/billion-dollar-heist.png`),
}

const diamondHeistSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The Billion Dollar Heist — multi-room escape adventure",
  description,
  image: `${SITE_URL}/images/billion-dollar-heist.png`,
  url: `${SITE_URL}/escape-rooms/billion-dollar-heist`,
  brand: { "@type": "Brand", name: "Escape Rooms Tibet" },
  seller: { "@id": ORGANIZATION_ID },
  offers: {
    "@type": "Offer",
    priceCurrency: "NZD",
    price: "35",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/escape-rooms/billion-dollar-heist`,
    validFrom: "2024-01-01",
  },
  category: "Escape room experience",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Duration", value: "60 minutes" },
    { "@type": "PropertyValue", name: "Players", value: "2-7" },
    { "@type": "PropertyValue", name: "Difficulty", value: "Hard" },
  ],
}

export default function BillionDollarHeistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={diamondHeistSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Escape rooms", path: "/escape-rooms" },
          { name: "The Billion Dollar Heist", path: "/escape-rooms/billion-dollar-heist" },
        ]}
      />
      {children}
    </>
  )
}
