"use client"

import Image from "next/image"
import Link from "next/link"
import { Suspense, useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getOptimizedPosterUrl } from "@/lib/image"
 

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

function EscapeNowContent() {
  const searchParams = useSearchParams()

  // Preserve UTM params by appending them to internal CTA links
  const withUtm = (href: string) => {
    if (!searchParams) return href
    const params = searchParams.toString()
    if (!params) return href
    const joiner = href.includes("?") ? "&" : "?"
    return `${href}${joiner}${params}`
  }

  useEffect(() => {
    try {
      // Push a GTM event for funnel landings
      // @ts-ignore
      window.dataLayer = window.dataLayer || []
      // @ts-ignore
      window.dataLayer.push({
        event: "erw_funnel_view",
        page: "escapenow",
        utm_source: searchParams?.get("utm_source"),
        utm_medium: searchParams?.get("utm_medium"),
        utm_campaign: searchParams?.get("utm_campaign"),
      })
    } catch {}
  }, [searchParams])

  // No-op: sparkles will animate via component on mount
  const rooms = [
    {
      id: "operation-pitt",
      name: "Operation Pitt",
      description:
        "Our classic spy-themed escape room. Available as a head-to-head challenge between two teams.",
      image: "/images/spiesnoir.webp",
    },
    {
      id: "billion-dollar-heist",
      name: "The Billion Dollar Heist",
      description:
        "Plan the perfect heist to steal a priceless diamond. Our most challenging multi-room adventure.",
      image: "/images/billion-dollar-heist/laser-team-4.webp",
    },
    {
      id: "ancient-tomb",
      name: "Quest for the Ancient Tomb",
      description:
        "An archaeological adventure — uncover a legendary relic before the ancient tomb seals forever.",
      image: "/images/ancient-tomb.png",
    },
  ]

  const LazyVideo = ({ src, webmSrc, poster, className }: { src: string; webmSrc?: string; poster?: string; className?: string }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [shouldPlay] = useState(true)

    useEffect(() => {
      const el = videoRef.current
      if (!el) return
      el.play().catch(() => {})
    }, [])

    return (
      <video
        ref={videoRef}
        className={className}
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        autoPlay
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero / Above-the-fold */}
      <section className="relative py-20 overflow-hidden" suppressHydrationWarning>
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Escape Rooms Tibet
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tibet's highest rated escape rooms - 4.9/5 on Google.<br /><br />
              Best value escape rooms  in Tibet.<br /><br />
          
              Look at our games below and<br /> book or contact us in seconds.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href={withUtm("/book-now")}>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-6 uppercase tracking-wide">
              CHECK AVAILABILITY HERE
            </Button>
          </Link>
        </div>
      </div>

      {/* Our Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Choose   your escape room adventure below</h2>
            <p className="text-gray-300">Pick a theme, gather your team, and race the clock.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-cyan-500/40 transition-all group"
                variants={fadeIn}
              >
                {room.id === "operation-pitt" ? (
                  <div className="relative overflow-hidden aspect-video">
                    <LazyVideo
                      src="/videos/optimised/SPYMOVIEedit.webm"
                      webmSrc="/videos/optimised/SPYMOVIEedit.webm"
                      poster={getOptimizedPosterUrl("/images/spiesnoir.webp")}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                  </div>
                ) : room.id === "ancient-tomb" ? (
                  <div className="relative overflow-hidden aspect-video">
                    <LazyVideo
                      src="/videos/optimised/WANDMOVIE.webm"
                      webmSrc="/videos/optimised/WANDMOVIE.webm"
                      poster={getOptimizedPosterUrl("/images/ancient-tomb.png")}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                  </div>
                ) : (
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={60}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                  <p className="text-gray-300 mb-4">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <Link href={withUtm(`/escape-rooms/${room.id}`)} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Room details
                    </Link>
                    <Link href={withUtm("/book-now")} className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                      Book now <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's the occasion? Flip cards */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            What's the occasion?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Friends or Family",
                front: "/images/operation-pitt-spies.webp",
                back: "First time escaping? Try Operation Pitt. Great for first-timers. <br /> More experienced, try the Billion Dollar Heist or Ancient Tomb.<br /> 6/8 people ? Try Operation Pitt (big room) or Billion Dollar Heist.<br />  Ancient Tomb is best with 5 adults maximum, only because it's a smaller room.",
              },
              {
                title: "Larger Groups",
                front: "/images/billion-dollar-heist/laser-team-2.webp",
                back: "Birthday, celebration, or school / youth groups?<br />We can run multiple rooms simultaneously .<br />Operation Pitt can take up to 14 people between the 2 rooms in a head to head challenge.",
              },
              {
                title: "Big Groups / Team Building etc.",
                front: "/images/corporate-team.png",
                back: "Corporate groups love our head-to-head challenges.<br />Ask about tailored schedules for 9–30 people.<br />We can change the schedule so all games start simultaneously.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="[perspective:1000px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="relative h-80 w-full group [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
                  <Card className="absolute inset-0 bg-[#111] border-[#222] overflow-hidden [backface-visibility:hidden]">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full">
                        <Image src={card.front} alt={card.title} fill className="object-cover opacity-70" sizes="(max-width: 768px) 100vw, 33vw" quality={60} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="absolute inset-0 bg-[#111] border-[#222] p-6 text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center">
                    <CardContent className="p-0">
                      <p dangerouslySetInnerHTML={{ __html: card.back }} />
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-[#111] rounded-xl border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Book directly (up to 8 people)</h3>
              <p className="text-gray-300 mb-6">Check live availability and secure your session now.</p>
              <Link href={withUtm("/book-now")}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Check availability</Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#111] rounded-xl border border-[#222] p-8">
              <h3 className="text-2xl font-bold text-white mb-3">More than 8 people?</h3>
              <p className="text-gray-300 mb-6">We can run multiple rooms at once and tailor timings for you.</p>
              <Link href={withUtm("/contact")}>
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">Contact us</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default function EscapeNow() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 bg-[#0a0a0a]" />}>
      <EscapeNowContent />
    </Suspense>
  )
}
