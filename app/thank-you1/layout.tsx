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
  title: "Thanks for Booking with us! | Escape Rooms Tibet",
  description: "Thank you for your booking with Escape Rooms Tibet. We look forward to seeing you soon!",
  openGraph: {
    title: "Thank You | Escape Rooms Tibet",
    description: "Thank you for your booking with Escape Rooms Tibet. We look forward to seeing you soon!",
    url: "https://www.escaperoomstibet.com/thank-you",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Thank You",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Escape Rooms Tibet",
    description: "Thank you for your booking with Escape Rooms Tibet. We look forward to seeing you soon!",
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

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


