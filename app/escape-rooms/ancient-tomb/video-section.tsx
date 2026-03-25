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
    <section className="w-full bg-[#1a0a2e] py-16 md:py-24">
      <div className="w-full">
        <div className="relative w-full overflow-hidden bg-[#111] shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              muted
              playsInline
              preload="metadata"
              poster={getOptimizedPosterUrl("/images/ancient-tomb.png")}
            >
              <source src="/videos/optimised/WANDMOVIE.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
