import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Group Bookings | Escape Rooms Tibet",
  description: "Book your group event at Escape Rooms Tibet. Perfect for corporate teams, birthday parties, and special occasions.",
  openGraph: {
    title: "Group Bookings | Escape Rooms Tibet",
    description: "Book your group event at Escape Rooms Tibet. Perfect for corporate teams, birthday parties, and special occasions.",
    url: "https://www.escaperoomstibet.com/group-bookings",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Group Bookings at Escape Rooms Tibet",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Bookings | Escape Rooms Tibet",
    description: "Book your group event at Escape Rooms Tibet. Perfect for corporate teams, birthday parties, and special occasions.",
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

export default function GroupBookingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 