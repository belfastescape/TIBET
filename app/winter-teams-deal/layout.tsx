import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Winter Teams Deal | Escape Rooms Tibet",
  description: "Special winter team building packages for corporate groups. Book now for the best rates!",
  openGraph: {
    title: "Winter Teams Deal | Escape Rooms Tibet",
    description: "Special winter team building packages for corporate groups. Book now for the best rates!",
    url: "https://www.escaperoomstibet.com/winter-teams-deal",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Winter Teams Deal",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Teams Deal | Escape Rooms Tibet",
    description: "Special winter team building packages for corporate groups. Book now for the best rates!",
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

export default function WinterTeamsDealLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 