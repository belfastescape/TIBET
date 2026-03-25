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
  title: "School Groups | Educational Escape Rooms Tibet",
  description:
    "Educational escape room experiences for school groups in Tibet. Perfect for team building, problem-solving, and fun learning. Special school rates available for groups of 4-28 students.",
  openGraph: {
    title: "School Groups | Educational Escape Rooms Tibet",
    description:
      "Educational escape room experiences for school groups in Tibet. Perfect for team building, problem-solving, and fun learning. Special school rates available for groups of 4-28 students.",
    url: "https://www.escaperoomstibet.com/school-groups",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "School Groups - Educational Escape Rooms",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Groups | Educational Escape Rooms Tibet",
    description:
      "Educational escape room experiences for school groups in Tibet. Perfect for team building, problem-solving, and fun learning. Special school rates available for groups of 4-28 students.",
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

export default function SchoolGroupsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 