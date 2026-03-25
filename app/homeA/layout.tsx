import type { Metadata } from 'next'

// Keep homeA out of search indexes — it is an A/B variant, not a canonical page.
export const metadata: Metadata = {
  title: "New Home Page.",
  description: "Fun and Exciting Escape rooms in Tibet City Centre",
  robots: {
    index: false,
    follow: false,
  },
}

export default function HomeALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
