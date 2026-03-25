"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { useAnimate } from "framer-motion"

function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

interface SparklesProps {
  text?: string
  auto?: boolean
  count?: number
  className?: string
}

export default function Sparkles({ text, auto = true, count = 24, className }: SparklesProps) {
  const [scope, animate] = useAnimate()
  const [starCount, setStarCount] = useState<number>(count)

  useEffect(() => {
    if (!auto) return

    const sparkles = Array.from({ length: starCount })

    // Reset to center and invisible
    const sparkleReset = sparkles.map((_, index) => [
      `.stars-${index}`,
      { x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 },
      { duration: 0.00000000001, at: "<" },
    ]) as any

    // Burst upward with slight horizontal scatter from bottom center
    const burstUp = sparkles.map((_, index) => [
      `.stars-${index}`,
      {
        x: randomNumber(-160, 160),
        y: randomNumber(-260, -140),
        scale: randomNumber(0.7, 1.2),
        opacity: 1,
        rotate: randomNumber(-90, 90),
      },
      { duration: 0.6, at: "<" },
    ]) as any

    // Fall down with gravity-like motion, fading out
    const fallDown = sparkles.map((_, index) => [
      `.stars-${index}`,
      {
        x: `+=${randomNumber(-80, 80)}` as any,
        y: randomNumber(300, 560),
        opacity: 0,
        scale: 0.5,
        rotate: `+=${randomNumber(-160, 160)}` as any,
      },
      { duration: 1.3, at: "<" },
    ]) as any

    const start = () => {
      animate([
        ...sparkleReset,
        ...burstUp,
        ...fallDown,
      ])
    }

    const raf = requestAnimationFrame(start)
    return () => cancelAnimationFrame(raf)
  }, [animate, auto, starCount])

  return (
    <div ref={scope} className={className || "relative w-full h-full z-[60]"}>
      {text ? (
        <div className="relative inline-block">
          {text}
        </div>
      ) : null}
      {Array.from({ length: starCount }).map((_, index) => (
        <Star
          key={index}
          className={`stars-${index} absolute left-1/2 bottom-6 -translate-x-1/2 opacity-0 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]`}
          width={20}
          height={20}
          strokeWidth={2.5}
        />)
      )}
    </div>
  )
}


