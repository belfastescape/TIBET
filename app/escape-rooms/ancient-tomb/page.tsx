"use client"

import Link from "next/link"
import { BookingTrustBlock } from "@/components/booking/BookingTrustBlock"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ROOM_TRUST_TESTIMONIALS } from "@/lib/room-offers"
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

      <section className="border-y border-purple-800/40 bg-[#1a0a2e] py-12 md:py-16">
        <div className="container mx-auto flex max-w-3xl flex-col items-center gap-6 px-4">
          <BookingTrustBlock
            quote={ROOM_TRUST_TESTIMONIALS["ancient-tomb"].quote}
            attribution={ROOM_TRUST_TESTIMONIALS["ancient-tomb"].attribution}
            roomName={ROOM_TRUST_TESTIMONIALS["ancient-tomb"].roomLabel}
            className="w-full"
          />
          <Link
            href="/booking"
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-violet-600 px-6 py-5 text-center text-base font-bold leading-snug text-white shadow-lg shadow-amber-500/20 transition hover:from-amber-400 hover:to-violet-500 hover:shadow-amber-500/30 md:px-10 md:py-6 md:text-xl lg:text-2xl"
          >
            Book Quest for the Ancient Tomb
          </Link>
        </div>
      </section>

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
