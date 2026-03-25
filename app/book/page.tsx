'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

function setCookie(name: string, value: string, days = 30): void {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}

export default function BookRedirect() {
  const router = useRouter()
  useEffect(() => {
    // ============================================================
    // A/B TESTING PAUSED - Payment gateway issue with Off the Couch
    // All traffic now goes to original Resova booking system
    // Uncomment the original code below when Off the Couch payment is fixed
    // ============================================================
    
    router.replace('/booking') // Always go to original Resova booking system
    
    /*
    // ORIGINAL A/B TESTING CODE - PAUSED
    let variant = getCookie('bookingVariant')

    if (!variant) {
      // Assign new visitors randomly to A or B (50/50 split)
      variant = Math.random() < 0.5 ? 'A' : 'B'
      setCookie('bookingVariant', variant)
    }

    if (variant === 'A') {
      router.replace('/booking') // Original Resova booking system
    } else {
      router.replace('/booking1') // New booking system
    }
    */
  }, [router])

  // Show a minimal loading state while redirecting
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading booking system...</p>
      </div>
    </div>
  )
}

