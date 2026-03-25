"use client"

import Image from "next/image"
import Link from "next/link"

interface SelfDestructLinkProps {
  imageSrc: string
  href: string
  alt?: string
  warning?: string
}

export function SelfDestructLink({ imageSrc, href, alt = "Book your mission", warning }: SelfDestructLinkProps) {
  return (
    <div className="relative w-full">
      <Link
        href={href}
        className="relative block w-full hover:brightness-110 transition-[filter] duration-300"
        aria-label={alt}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        {warning && (
          <p className="mt-2 text-neutral-300 text-2xl text-center pb-4 animate-[pulse-bright_1.5s_ease-in-out_infinite]">
            {warning}
          </p>
        )}
      </Link>
    </div>
  )
}
