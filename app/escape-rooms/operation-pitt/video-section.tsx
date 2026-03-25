"use client"

import { useEffect, useRef } from "react"
import { getOptimizedPosterUrl } from "@/lib/image"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasPlayed = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true
          video.play().catch(() => {})
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-[#0c0c0c] py-16 md:py-24">
      <div className="w-full">
        <div className="relative w-full overflow-hidden bg-[#111] shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: "grayscale(1)" }}
              muted
              playsInline
              preload="metadata"
              poster={getOptimizedPosterUrl("/images/operation-pitt-spies.webp")}
            >
              <source src="/videos/optimised/SPYMOVIEedit.webm" type="video/webm" />
              <source src="/videos/SPYMOVIEedit.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
