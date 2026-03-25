"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ImageWithFilterProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  filter?: string
  quality?: number
}

export default function ImageWithFilter({
  src,
  alt,
  width = 800,
  height = 533,
  className,
  priority = false,
  sizes = "100vw",
  filter = "none",
  quality = 75,
}: ImageWithFilterProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300 w-full h-auto",
          isLoaded ? "opacity-100" : "opacity-0",
          filter !== "none" && `filter ${filter}`
        )}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        sizes={sizes}
        quality={quality}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </div>
  )
}
