import type { Metadata, Viewport } from "next"
import { buildOpenGraph, buildTwitter, indexableRobots } from "@/lib/seo/metadata-helpers"

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

const title = "Escape room pricing & deals"
const description =
  "Transparent per-person rates from $33, Saturday-morning specials, weekday team pricing, and teen birthday offers. Compare before you book."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  robots: indexableRobots,
  openGraph: buildOpenGraph({
    title,
    description,
    path: "/pricing",
    imageAlt: "Escape room pricing",
  }),
  twitter: buildTwitter(title, description),
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
