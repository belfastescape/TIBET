import type { Metadata, Viewport } from "next"
import { JsonLd } from '@/components/JsonLd'
import { teamBuildingSchema } from './schema'

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Team Building Activities | Escape Rooms Tibet",
  description: "Enhance team collaboration and problem-solving skills with our exciting team building escape room experiences in Tibet.",
  openGraph: {
    title: "Team Building Activities | Escape Rooms Tibet",
    description: "Enhance team collaboration and problem-solving skills with our exciting team building escape room experiences in Tibet.",
    url: "https://www.escaperoomstibet.com/team-building",
    siteName: "Escape Rooms Tibet",
    images: [
      {
        url: "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
        width: 1200,
        height: 630,
        alt: "Team Building Activities",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Building Activities | Escape Rooms Tibet",
    description: "Enhance team collaboration and problem-solving skills with our exciting team building escape room experiences in Tibet.",
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

export default function TeamBuildingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={teamBuildingSchema} />
      {children}
    </>
  )
} 