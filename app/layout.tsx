import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { JsonLd } from '@/components/JsonLd'
import MainLayoutWrapper from '@/components/layout/main-layout-wrapper'
import { StickyBookingCta } from '@/components/StickyBookingCta'
import { inter } from './fonts'
import { isGa4Configured } from '@/lib/gtag'

const GA_ID = 'G-R4Y4HC2V3Q'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.escaperoomstibet.com'),
  title: "Escape Room Tibet | Fun Group Activities in Tibet",
  description: "Experience Tibet's premier escape rooms. Challenge your mind, test your teamwork, and race against the clock in our immersive escape room adventures. Perfect for groups, families, and team building.",
  openGraph: {
    title: "Escape Room Tibet | Fun Group Activities in Tibet",
    description: "Experience Tibet's premier escape rooms. Challenge your mind, test your teamwork, and race against the clock in our immersive escape room adventures. Perfect for groups, families, and team building.",
    images: [
      {
        url: '/images/escape-room-portal-large.webp',
        width: 1920,
        height: 1080,
        alt: 'Escape Room Tibet - Enter a new world',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Escape Rooms Tibet | Best Indoor Activities in Tibet",
    description: "Experience Tibet's premier escape rooms. Challenge your mind, test your teamwork, and race against the clock in our immersive escape room adventures.",
    images: ['/images/escape-room-portal-large.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction", "EntertainmentBusiness"],
    "name": "Escape Rooms Tibet",
    "url": "https://www.escaperoomstibet.com",
    "logo": "https://www.escaperoomstibet.com/images/logo.png",
    "image": "https://www.escaperoomstibet.com/images/escape-room-portal-large.webp",
    "description": "Tibet's premier escape room experience. Perfect for team building, birthday parties, and group activities. Three immersive themed rooms in the Khumbu region at Mt Everest.",
    "priceRange": "$$",
    "currenciesAccepted": "NZD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mt Everest",
      "addressLocality": "Solukhumbu",
      "addressRegion": "Koshi Province",
      "postalCode": "56000",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.9881564,
      "longitude": 86.9253667
    },
    "telephone": "+64215550198",
    "email": "info@escaperoomstibet.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/YOUR_FACEBOOK_PAGE"
    ],
    "hasMap": "https://www.google.com/maps/place/Mt+Everest/@27.9881564,86.9253667,12z",
    "areaServed": {
      "@type": "City",
      "name": "Solukhumbu",
      "addressCountry": "NP"
    },
    "keywords": "escape room tibet, escape rooms tibet, team building tibet, birthday party venue tibet, tourist attraction tibet, indoor activities tibet, things to do tibet"
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Escape Rooms Tibet",
    "url": "https://www.escaperoomstibet.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.escaperoomstibet.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to own domain for faster resource loading */}
        <link rel="preconnect" href="https://www.escaperoomstibet.com" />
        
        {isGa4Configured() && (
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        )}
        {/* <link rel="dns-prefetch" href="https://cdn.trustindex.io" /> */}
        {/* <link rel="dns-prefetch" href="https://www.google-analytics.com" /> */}
        
        {/* Preload LCP image (optimized variant so browser fetches smaller file) */}
        <link
          rel="preload"
          href="/_next/image?url=%2Fimages%2Fescape-room-portal.webp&amp;w=828&amp;q=75"
          as="image"
          fetchPriority="high"
        />
        
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        {/* GA4 — hardcoded plain script tags so they are present in the initial
            server-rendered HTML. next/script beforeInteractive is unsupported in
            the App Router, and NEXT_PUBLIC_* env vars can be empty on Vercel. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          id="gtag-bootstrap"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
          <StickyBookingCta />
        </ThemeProvider>
      </body>
    </html>
  )
}
