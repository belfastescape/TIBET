import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reserve a room - Escape Rooms Tibet',
  description: 'Choose a time slot for Operation Pitt, The Billion Dollar Heist, or Quest for the Ancient Tomb. Secure checkout and instant confirmation.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
