"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const AnimatedImage = ({ src, alt, width, height, className = "" }: AnimatedImageProps) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, 200) // Reduced delay for faster animation start

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`overflow-hidden rounded-xl ${className}`}>
      <div
        className={`transition-all duration-400 ease-out ${
          hasAnimated ? "scale-[1.3] shadow-2xl shadow-cyan-500/30" : "scale-100"
        }`}
        style={{
          transformOrigin: "center 40%", // Focus the zoom effect more on the upper part of the image
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

export default AnimatedImage
