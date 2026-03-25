"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

/**
 * Video that plays when scrolled into view and pauses when out of view.
 * Uses preload="none" so no video data is fetched until the video is visible.
 * The poster is rendered as a Next.js <Image> for responsive sizing.
 */
export function PlayOnScrollVideo({
  className,
  videoClassName,
  poster,
  posterAlt = "Video preview",
  posterSizes = "100vw",
  captionsSrc,
  captionsLabel = "English",
  children,
}: {
  className?: string
  videoClassName?: string
  /** Path to poster image — rendered via Next.js Image for responsive sizing */
  poster?: string
  posterAlt?: string
  /** sizes attribute for the poster <Image> (default: "100vw") */
  posterSizes?: string
  /** WebVTT URL for captions (e.g. /videos/my-captions.vtt) */
  captionsSrc?: string
  captionsLabel?: string
  children: React.ReactNode
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const video = videoRef.current
    if (!wrapper || !video) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.2, rootMargin: "0px" }
    )

    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className={`relative ${className ?? ""}`}>
      <video
        ref={videoRef}
        className={videoClassName}
        muted
        loop
        playsInline
        preload="none"
      >
        {children}
        {captionsSrc ? (
          <track kind="captions" srcLang="en" label={captionsLabel} src={captionsSrc} />
        ) : null}
      </video>

      {!playing && poster && (
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={poster}
            alt={posterAlt}
            fill
            className="object-cover"
            sizes={posterSizes}
            quality={75}
          />
        </div>
      )}
    </div>
  )
}
