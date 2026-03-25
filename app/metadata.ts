import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.escaperoomstibet.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://escaperoomstibet.com',
    siteName: 'Escape Rooms Tibet',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@escaperoomstibet',
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