import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { JsonLd } from '@/components/JsonLd'
import { inter } from './fonts'
import { isGa4Configured } from '@/lib/gtag'

// Dynamically import the ENTIRE main layout wrapper (Header + Footer)
// This creates a separate code chunk for Header/Footer CSS
const MainLayoutWrapper = dynamic(
  () => import('@/components/layout/main-layout-wrapper'),
  {
    ssr: true,
    loading: () => (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5 border-b border-transparent">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="h-16 w-[160px]" />
        </div>
      </header>
    ),
  }
)

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
    "description": "Tibet's premier escape room experience. Perfect for team building, birthday parties, hen parties, and group activities. Three immersive themed rooms in the heart of Tibet CBD.",
    "priceRange": "$$",
    "currenciesAccepted": "NZD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 Barkhor Street",
      "addressLocality": "Lhasa",
      "addressRegion": "Tibet",
      "postalCode": "850000",
      "addressCountry": "CN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.6522,
      "longitude": 91.1197
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
    "hasMap": "https://maps.google.com/?cid=YOUR_GOOGLE_MAPS_CID",
    "areaServed": {
      "@type": "City",
      "name": "Tibet",
      "addressCountry": "CN"
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
          href="/_next/image?url=%2Fimages%2Fescape-room-portal.webp&amp;w=828&amp;q=65" 
          as="image"
          fetchPriority="high"
        />
        
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        {/* Review platform certificate badge placeholder — add your provider script here */}
        {/* <Script id="reviews-cert" src="YOUR_REVIEW_PLATFORM_SCRIPT_URL" strategy="lazyOnload" /> */}
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
