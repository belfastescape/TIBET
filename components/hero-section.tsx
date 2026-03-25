"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonAction?: () => void
  imageSrc: string
  imageAlt: string
}

export function HeroSection({ title, subtitle, buttonText, buttonAction, imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a] z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">{subtitle}</p>
          {buttonText === "Book Your Team Event" ? (
            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-6 px-8">
                {buttonText}
              </Button>
            </Link>
          ) : buttonText === "Book Your Quest" ? (
            <Link href="/booking">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-6 px-8">
                {buttonText}
              </Button>
            </Link>
          ) : (
            <Button onClick={buttonAction} className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-6 px-8">
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
