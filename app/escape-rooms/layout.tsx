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

const title = "Escape rooms in Tibet | Operation Pitt, Heist & Ancient Tomb"
const description =
  "Explore three live escape games: a spy mission at the Pitt, a multi-room billion-dollar heist, and a family-friendly tomb quest. Book online."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/escape-rooms" },
  robots: indexableRobots,
  openGraph: buildOpenGraph({
    title,
    description,
    path: "/escape-rooms",
    imageAlt: "Escape rooms at Escape Rooms Tibet",
  }),
  twitter: buildTwitter(title, description),
}

const roomsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Escape room games",
  description,
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Operation Pitt",
      url: `${SITE_URL}/escape-rooms/operation-pitt`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Billion Dollar Heist",
      url: `${SITE_URL}/escape-rooms/billion-dollar-heist`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Quest for the Ancient Tomb",
      url: `${SITE_URL}/escape-rooms/ancient-tomb`,
    },
  ],
}

export default function EscapeRoomsSectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={roomsItemList} />
      {children}
    </>
  )
}
