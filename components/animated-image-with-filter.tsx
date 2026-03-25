"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedImageWithFilterProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  filterEffect?: "cyan" | "green" | "purple" | "warm" | "cool" | "vintage" | "none"
}

const AnimatedImageWithFilter = ({
  src,
  alt,
  width,
  height,
  className = "",
  filterEffect = "none",
}: AnimatedImageWithFilterProps) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  // Define filter styles based on the selected effect
  const getFilterStyle = () => {
    if (!isHovered) return ""

    switch (filterEffect) {
      case "cyan":
        return "brightness-110 contrast-110 saturate-150 hue-rotate-[-10deg]"
      case "green":
        return "brightness-110 contrast-110 saturate-150 hue-rotate-[45deg]"
      case "purple":
        return "brightness-110 contrast-110 saturate-150 hue-rotate-[70deg]"
      case "warm":
        return "brightness-105 contrast-105 saturate-130 sepia-[0.2]"
      case "cool":
        return "brightness-105 contrast-105 saturate-120 hue-rotate-[340deg]"
      case "vintage":
        return "brightness-105 contrast-105 saturate-[0.8] sepia-[0.15]"
      default:
        return ""
    }
  }

  return (
    <div
      className={cn("overflow-hidden rounded-xl", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "transition-all duration-700 ease-out",
          hasAnimated ? "scale-[1.3] shadow-2xl shadow-cyan-500/30" : "scale-100",
          getFilterStyle(),
        )}
        style={{
          transformOrigin: "center 40%",
          transform: hasAnimated ? "scale(1.3) translateY(-8px)" : "scale(1) translateY(0)",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default AnimatedImageWithFilter
