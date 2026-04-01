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

const title = "Operation Pitt | Spy escape room (2–8 players)"
const description =
  "The Tibetan Secret Service is tracking chatter on Operation Pitt—infiltrate the hideout, steal the secret plan, and beat the clock. Two identical rooms for head-to-head teams. 2–8 players, 60 minutes."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/escape-rooms/operation-pitt" },
  robots: indexableRobots,
  openGraph: buildOpenGraph({
    title,
    description,
    path: "/escape-rooms/operation-pitt",
    imagePath: "/images/operation-pitt.png",
    imageAlt: "Operation Pitt escape room",
  }),
  twitter: buildTwitter(title, description, `${SITE_URL}/images/operation-pitt.png`),
}

const operationPittSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Operation Pitt — Tibet spy escape room",
  description,
  image: `${SITE_URL}/images/operation-pitt.png`,
  url: `${SITE_URL}/escape-rooms/operation-pitt`,
  brand: { "@type": "Brand", name: "Escape Rooms Tibet" },
  seller: { "@id": ORGANIZATION_ID },
  offers: {
    "@type": "Offer",
    priceCurrency: "NZD",
    price: "35",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/escape-rooms/operation-pitt`,
    validFrom: "2024-01-01",
  },
  category: "Escape room experience",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Duration", value: "60 minutes" },
    { "@type": "PropertyValue", name: "Players", value: "2-8" },
    { "@type": "PropertyValue", name: "Difficulty", value: "Intermediate" },
  ],
}

export default function OperationPittLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={operationPittSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Escape rooms", path: "/escape-rooms" },
          { name: "Operation Pitt", path: "/escape-rooms/operation-pitt" },
        ]}
      />
      {children}
    </>
  )
}
