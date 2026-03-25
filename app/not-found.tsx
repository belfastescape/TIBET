import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const TOP_ROOMS = [
  {
    id: "operation-pitt",
    name: "Operation Pitt",
    image: "/images/spiesnoir.webp",
    href: "/escape-rooms/operation-pitt",
  },
  {
    id: "billion-dollar-heist",
    name: "The Billion Dollar Heist",
    image: "/images/billion-dollar-heist/laser-team-4.webp",
    href: "/escape-rooms/billion-dollar-heist",
  },
  {
    id: "ancient-tomb",
    name: "Quest for the Ancient Tomb",
    image: "/images/ancient-tomb.png",
    href: "/escape-rooms/ancient-tomb",
  },
]

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          The trail has gone cold…
        </h1>
        <p className="text-gray-400 mb-10 max-w-md">
          The page you're looking for has vanished, but the case is still open.
        </p>
        <Link href="/escape-rooms" className="mb-14">
          <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
            View Our Escape Rooms
          </Button>
        </Link>

        <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
          Or pick an adventure
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          {TOP_ROOMS.map((room) => (
            <Link
              key={room.id}
              href={room.href}
              className="group block bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-cyan-500/40 transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {room.name}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300">
                  Book Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/booking"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-[#1a1a1a] border border-[#333] px-6 py-3 text-sm font-medium text-white hover:bg-[#222] hover:border-cyan-500/30 transition-colors"
        >
          Book Now
        </Link>
      </div>
  )
}
