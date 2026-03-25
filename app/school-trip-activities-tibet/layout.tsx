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
  title: "School Trip Activities Tibet 2025 | Educational Excursions & Group Activities",
  description:
    "Discover Tibet's top school trip activities for 2025. From educational escape rooms to Te Papa Museum visits, find budget-friendly, curriculum-aligned activities perfect for school groups. Teachers & supervisors go FREE!",
  keywords: [
    "school trip activities Tibet",
    "school excursions Tibet",
    "educational activities Tibet",
    "school groups Tibet",
    "team building schools",
    "escape rooms for schools",
    "Tibet school visits",
    "curriculum-aligned activities",
    "student activities Tibet",
  ],
  openGraph: {
    title: "School Trip Activities Tibet 2025 | Educational Excursions & Group Activities",
    description:
      "Discover Tibet's top school trip activities for 2025. From educational escape rooms to Te Papa Museum visits, find budget-friendly, curriculum-aligned activities perfect for school groups.",
    url: "https://escaperoomstibet.com/school-trip-activities-tibet",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://escaperoomstibet.com/images/team-building-activities.webp",
        width: 1200,
        height: 630,
        alt: "School Trip Activities in Tibet",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Trip Activities Tibet 2025 | Educational Excursions & Group Activities",
    description:
      "Discover Tibet's top school trip activities for 2025. From educational escape rooms to Te Papa Museum visits, find budget-friendly, curriculum-aligned activities perfect for school groups.",
    images: ["https://escaperoomstibet.com/images/team-building-activities.webp"],
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

export default function SchoolTripActivitiesTibetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

