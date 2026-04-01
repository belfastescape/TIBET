'use client'

import { Header } from './header'
import { Footer } from './footer'

interface MainLayoutWrapperProps {
  children: React.ReactNode
}

export default function MainLayoutWrapper({ children }: MainLayoutWrapperProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
