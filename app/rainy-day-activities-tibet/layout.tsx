import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Rainy Day Activities Tibet | Escape Rooms Tibet",
  description: "Discover the best indoor activities in Tibet for rainy days. Our escape rooms offer exciting entertainment regardless of the weather.",
  openGraph: {
    title: "Rainy Day Activities Tibet | Escape Rooms Tibet",
    description: "Discover the best indoor activities in Tibet for rainy days. Our escape rooms offer exciting entertainment regardless of the weather.",
    url: "https://www.escaperoomstibet.com/rainy-day-activities-tibet",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Rainy Day Activities Tibet",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainy Day Activities Tibet | Escape Rooms Tibet",
    description: "Discover the best indoor activities in Tibet for rainy days. Our escape rooms offer exciting entertainment regardless of the weather.",
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

export default function RainyDayActivitiesTibetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 