import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Team Building Tibet | Escape Rooms Tibet",
  description: "Discover the best team building activities in Tibet with our immersive escape room experiences. Perfect for corporate teams and groups.",
  openGraph: {
    title: "Team Building Tibet | Escape Rooms Tibet",
    description: "Discover the best team building activities in Tibet with our immersive escape room experiences. Perfect for corporate teams and groups.",
    url: "https://www.escaperoomstibet.com/team-building-tibet",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Team Building Tibet",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Building Tibet | Escape Rooms Tibet",
    description: "Discover the best team building activities in Tibet with our immersive escape room experiences. Perfect for corporate teams and groups.",
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

export default function TeamBuildingTibetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 