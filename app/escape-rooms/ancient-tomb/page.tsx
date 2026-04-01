"use client"

import Link from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HeroSection } from "./hero-section"
import { DescriptionSection } from "./description-section"
import { GameStats } from "./game-stats"
import { VideoSection } from "./video-section"
import { ReviewsStack } from "./reviews-stack"
import { CtaSection } from "./cta-section"
import { FaqSection } from "./faq-section"

export default function MagicWandPage() {
  return (
    <div className="min-h-screen bg-[#1a0a2e]">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-24 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/escape-rooms">Escape Rooms</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Quest for the Ancient Tomb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <HeroSection />
      <DescriptionSection />
      <GameStats />
      <VideoSection />
      <ReviewsStack />
      <CtaSection />

      <section className="py-20 bg-[#1a0a2e] border-t border-purple-800/40">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono leading-[1.2] tracking-tight text-balance">
            Perfect escape room for small groups
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Quest for the Ancient Tomb is our most family-friendly adventure. Check out our{" "}
            <Link href="/group-bookings" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors font-semibold">
              teenage birthday party deal
            </Link>
            {" "}or browse{" "}
            <Link href="/escape-rooms" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors font-semibold">
              all of our rooms
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqSection />
    </div>
  )
}
