"use client"

import dynamic from "next/dynamic"
import ParallaxNav from "@/components/ParallaxNav"
import { PlayOnScrollVideo } from "@/components/PlayOnScrollVideo"

const HomeBelowHero = dynamic(
  () => import("@/components/home-page/HomeBelowHero").then((m) => ({ default: m.HomeBelowHero })),
  { loading: () => <div className="min-h-[50vh] bg-[#0a0a0a]" aria-hidden /> }
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <ParallaxNav />

      <section className="relative w-full aspect-video sm:aspect-auto sm:h-screen overflow-hidden">
        <PlayOnScrollVideo
          className="absolute inset-0 w-full h-full"
          videoClassName="absolute inset-0 w-full h-full object-cover"
          poster="/images/escape-rooms-tibet-hero.webp"
          posterAlt="Escape Rooms Tibet intro"
          posterSizes="100vw"
          captionsSrc="/videos/escape-rooms-tibet-intro-captions.vtt"
        >
          <source src="/videos/escape-rooms-tibet-intro.mp4" type="video/mp4" />
        </PlayOnScrollVideo>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      <HomeBelowHero />
    </div>
  )
}
