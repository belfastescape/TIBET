import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/agent-pitt-escape-room.webp"
          alt="Operation Pitt escape room - a mysterious spy research facility"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white font-mono leading-none text-balance">
            Operation
            <br />
            <span className="text-cyan-400">Pitt</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 font-mono">The Ultimate Spy Escape Room &mdash; Ages 12+</p>
        </div>
      </div>
    </section>
  )
}
