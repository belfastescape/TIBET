import type { Metadata, Viewport } from "next"

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
  title: "Special Offers & Discounts | Escape Rooms Tibet",
  description:
    "Find the best deals and special offers for our escape rooms. Perfect for groups, families, and special occasions.",
  openGraph: {
    title: "Special Offers & Discounts | Escape Rooms Tibet",
    description:
      "Find the best deals and special offers for our escape rooms. Perfect for groups, families, and special occasions.",
    url: "https://www.escaperoomstibet.com/discounts",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Special Offers & Discounts",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offers & Discounts | Escape Rooms Tibet",
    description:
      "Find the best deals and special offers for our escape rooms. Perfect for groups, families, and special occasions.",
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

export default function DiscountsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 