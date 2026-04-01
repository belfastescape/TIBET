import type React from "react"
import { Suspense } from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import MainLayoutWrapper from "@/components/layout/main-layout-wrapper"
import { StickyBookingCta } from "@/components/StickyBookingCta"
import { inter } from "./fonts"
import { SiteGraphJsonLd } from "@/components/seo/SiteGraphJsonLd"
import { DEFAULT_OG_IMAGE_URL, defaultDescription, SITE_NAME, SITE_URL } from "@/lib/seo/site"
import { indexableRobots } from "@/lib/seo/metadata-helpers"
import GoogleAnalytics from "@/components/GoogleAnalytics"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Escape rooms & team events in the Everest region`,
  description: defaultDescription,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: indexableRobots,
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Escape rooms & team events in the Everest region`,
    description: defaultDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — immersive escape room experiences`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Escape rooms & team events in the Everest region`,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NZ" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href={SITE_URL} />
        <link
          rel="preload"
          href="/_next/image?url=%2Fimages%2Fescape-room-portal.webp&amp;w=828&amp;q=75"
          as="image"
          fetchPriority="high"
        />
        <SiteGraphJsonLd />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
          <StickyBookingCta />
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
