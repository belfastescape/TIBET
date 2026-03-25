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
  title: "Contact Us | Escape Rooms Tibet",
  description:
    "Get in touch with Escape Rooms Tibet. We're here to help with bookings, inquiries, and any questions you may have.",
  openGraph: {
    title: "Contact Us | Escape Rooms Tibet",
    description:
      "Get in touch with Escape Rooms Tibet. We're here to help with bookings, inquiries, and any questions you may have.",
    url: "https://www.escaperoomstibet.com/contact",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Contact Us",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Escape Rooms Tibet",
    description:
      "Get in touch with Escape Rooms Tibet. We're here to help with bookings, inquiries, and any questions you may have.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 