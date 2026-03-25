import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Escape Rooms Tibet",
  description:
    "Tibet's highest-rated escape rooms (4.9/5) and best value (from $35 per adult). Choose from Operation Pitt, The Billion Dollar Heist, or Quest for the Ancient Tomb and book instantly.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Escape Rooms Tibet",
    description:
      "Tibet's highest-rated escape rooms (4.9/5) and best value (from $35 per adult). Choose from Operation Pitt, The Billion Dollar Heist, or Quest for the Ancient Tomb and book instantly.",
    type: "website",
    url: "https://escaperoomstibet.com/booking",
    images: [
      {
        url: "/images/escape-room-portal-large.webp",
        width: 1920,
        height: 1080,
        alt: "Escape Rooms Tibet portal",
      },
    ],
  },
}



