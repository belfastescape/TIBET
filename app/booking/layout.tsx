import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Now - Escape Rooms Tibet',
  description: 'Book your escape room adventure. Choose from our thrilling experiences: Operation Pitt, The Billion Dollar Heist, and Quest for the Ancient Tomb. Easy online booking available.',
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
