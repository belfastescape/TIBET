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
  title: "About Us | Escape Rooms Tibet",
  description:
    "Learn about Escape Rooms Tibet, our mission, and our commitment to providing the best escape room experience in Tibet.",
  openGraph: {
    title: "About Us | Escape Rooms Tibet",
    description:
      "Learn about Escape Rooms Tibet, our mission, and our commitment to providing the best escape room experience in Tibet.",
    url: "https://www.escaperoomstibet.com/about",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "About Us",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Escape Rooms Tibet",
    description:
      "Learn about Escape Rooms Tibet, our mission, and our commitment to providing the best escape room experience in Tibet.",
    images: ["https://www.escaperoomstibet.com/images/escape-room-portal-large.webp"],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 