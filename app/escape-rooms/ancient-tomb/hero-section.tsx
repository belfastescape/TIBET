import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ancient-tomb-escape-room.webp"
          alt="Quest for the Ancient Tomb escape room — magical fantasy adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-[#1a0a2e]/80 to-[#1a0a2e]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white font-mono leading-none text-balance">
            Quest for the
            <br />
            <span className="text-amber-400">Ancient Tomb</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 font-mono">A Magical Fantasy Escape Room &mdash; Ages 10+</p>
        </div>
      </div>
    </section>
  )
}
