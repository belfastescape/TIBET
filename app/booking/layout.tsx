import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a room - Escape Rooms Tibet',
  description: 'Choose a time slot for Operation Pitt, The Billion Dollar Heist, or Quest for the Ancient Tomb. Secure checkout and instant confirmation.',
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
