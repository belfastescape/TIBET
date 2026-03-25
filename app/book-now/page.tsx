import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Now - Escape Rooms Tibet',
  description: 'Book your escape room adventure in Tibet. Choose from our thrilling escape room experiences including Operation Pitt, Billion Dollar Heist, and Quest for the Ancient Tomb. Easy online booking available.',
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Book Your Escape Room Adventure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your preferred date and time to experience Tibet's premier escape rooms.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-[#111] rounded-xl border border-[#222] p-8">
            <iframe
              src="https://escaperoomstibet.resova.us?widget=true"
              className="w-full h-[800px] border-0"
              title="Booking Widget"
              allow="payment; fullscreen"
            />
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about booking or need assistance, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0215550198"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Call: 021 555 0198
              </a>
              <span className="text-gray-500 hidden sm:inline">|</span>
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