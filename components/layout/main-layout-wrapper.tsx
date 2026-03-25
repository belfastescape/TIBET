'use client'

import { usePathname } from 'next/navigation'
import { Header } from './header'
import { Footer } from './footer'

interface MainLayoutWrapperProps {
  children: React.ReactNode
}

// Routes that provide their own navigation (no global header)
const NO_HEADER_ROUTES = ['/homeA']

export default function MainLayoutWrapper({ children }: MainLayoutWrapperProps) {
  const pathname = usePathname()
  const showHeader = !NO_HEADER_ROUTES.includes(pathname)

  return (
    <>
      {showHeader && <Header />}
      {children}
      <Footer />
    </>
  )
}
