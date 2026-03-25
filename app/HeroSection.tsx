import Image from "next/image"

/**
 * Server-rendered hero image and overlay only.
 * Rendered in initial HTML so the LCP image is not delayed by client hydration.
 */
export function HeroSection() {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-800 to-black"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/portal-new.webp"
          alt="Escape Room Portal"
          fill
          className="object-cover object-left md:object-center"
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRo4AAABXRUJQVlA4TIEAAAAvAAAAAAfA//8+kP1/gAAAAA=="
        />
      </div>
      <div className="absolute inset-0 bg-black/60" aria-hidden />
    </div>
  )
}
