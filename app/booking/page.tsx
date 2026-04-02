'use client'

import { useRef } from 'react'
import { BookingTrustBlock } from '@/components/booking/BookingTrustBlock'
import { BOOKING_PAGE_TESTIMONIAL } from '@/lib/room-offers'

export default function BookingPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Booking Widget Section */}
      <section className="py-8">
        <div className="container mx-auto max-w-3xl px-4">
          <BookingTrustBlock
            quote={BOOKING_PAGE_TESTIMONIAL.quote}
            attribution={BOOKING_PAGE_TESTIMONIAL.attribution}
            className="mb-8"
          />
          <div className="bg-[#333] rounded-xl p-6 md:p-8">
            {/* Booking widget placeholder — replace with your booking system */}
            <div
              ref={containerRef}
              id="bookingContainer"
              className="flex flex-col items-center justify-center rounded-lg bg-[#1a1a1a] text-center p-16"
              style={{ minHeight: '600px' }}
            >
              <p className="text-2xl font-bold text-white mb-3">Booking System Placeholder</p>
              <p className="text-gray-400 text-lg mb-2">
                Replace this section with your booking widget or iframe.
              </p>
              <p className="text-gray-500 text-sm">
                e.g. <code className="text-cyan-400">YOUR_BOOKING_SYSTEM_URL</code>
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about booking or need assistance, please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@escaperoomstibet.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Email: info@escaperoomstibet.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
