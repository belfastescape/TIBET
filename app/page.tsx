"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, Users, ArrowRight, MapPin, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ParallaxNav from "@/components/ParallaxNav"
import { useABTracking } from "@/hooks/use-ab-tracking"
import { PlayOnScrollVideo } from "@/components/PlayOnScrollVideo"

const PriceComparisonWidget = dynamic(
  () => import("@/components/PriceComparisonWidget").then((m) => ({ default: m.PriceComparisonWidget })),
  { ssr: false }
)

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false)
  useABTracking('control')

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Scroll-linked 3D card stack
  const cardsContainerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  })
  // Card 1 (Pitt) folds back during first 40% of scroll
  const card1RotateX = useTransform(scrollYProgress, [0, 0.4], [0, -90])
  // Card 2 (Ancient Tomb) folds back during middle 40–80%
  const card2RotateX = useTransform(scrollYProgress, [0.4, 0.8], [0, -90])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Parallax Navigation Hero */}
      <ParallaxNav />

      {/* Full-screen video */}
      <section className="relative w-full aspect-video sm:aspect-auto sm:h-screen overflow-hidden">
        <PlayOnScrollVideo
          className="absolute inset-0 w-full h-full"
          videoClassName="absolute inset-0 w-full h-full object-cover"
          poster="/images/operation-pitt-team.webp"
          posterAlt="Operation Pitt escape room"
          posterSizes="100vw"
        >
          <source src="/videos/optimised/SPYMOVIEedit.webm" type="video/webm" />
          <source src="/videos/SPYMOVIEedit.mp4" type="video/mp4" />
        </PlayOnScrollVideo>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Escape Room Tibet
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Escape the real world for an hour. Our immersive escape rooms are the perfect <Link href="/rainy-day-activities-tibet" className="text-cyan-400 hover:text-cyan-300 transition-colors">fun indoor activity in Tibet</Link> — whether you&apos;re with friends, family, or workmates.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              Work together, crack the puzzles, beat the clock. Three unique  escape rooms, each with its own story waiting to be solved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Escape Rooms Section */}
      <section id="escape-rooms" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Choose Your Adventure
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose your adventure from our range of immersive escape room experiences, each with unique themes and
              challenges.
            </p>
          </motion.div>

        </div>

        {/* Scroll-linked 3D card stack — tall container drives the scroll */}
        <div ref={cardsContainerRef} className="relative" style={{ height: "340vh" }}>
          {/* Sticky viewport — cards live here, pinned while parent scrolls */}
          <div
            className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
          >
            {/* ── Card 3: Billion Dollar Heist — bottom of stack, rendered first (furthest back) ── */}
            <div className="absolute w-[90%] h-[85vh] rounded-3xl overflow-hidden border border-gray-400/40 flex items-end bg-black"
              style={{ transformOrigin: "center top", zIndex: 10 }}
            >
              <Image
                src="/images/PHANTOM-ESCAPE-ROOM.webp"
                alt="Billion Dollar Heist"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–7 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">Billion Dollar Heist</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    The Phantom syndicate has stashed a billion-dollar haul inside the world's most secure vault.
                    Can your crew crack the security and walk away with the ultimate prize?
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/booking">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Book Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/escape-rooms/billion-dollar-heist">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-4 px-10">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card 2: Ancient Tomb — middle of stack ── */}
            <motion.div
              className="absolute w-[90%] h-[85vh] rounded-3xl overflow-hidden border border-gray-400/40 flex items-end bg-black"
              style={{ rotateX: card2RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 20 }}
            >
              <Image
                src="/images/ancient-tomb-escape-room.webp"
                alt="Quest for The Ancient Tomb"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–6 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">Quest for The Ancient Tomb</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    Step into a world of magic and mystery where ancient spells and enchanted artifacts await. Your team must
                    work together to master the magical arts, solve mystical puzzles, and retrieve the legendary Ancient Tomb
                    before dark forces claim it forever. Perfect for families and fantasy enthusiasts!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/booking">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Book Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/escape-rooms/ancient-tomb">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-4 px-10">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Card 1: Operation Pitt — top of stack, rendered last (frontmost) ── */}
            <motion.div
              className="absolute w-[90%] h-[85vh] rounded-3xl overflow-hidden border border-gray-400/40 flex items-end bg-black"
              style={{ rotateX: card1RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 30 }}
            >
              <Image
                src="/images/agent-pitt-escape-room.webp"
                alt="Operation Pitt"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–8 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">Operation Pitt</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    The Kiwi Secret Service is hearing a lot of internet chatter about something called Operation Pitt.
                    Someone is going to blow up the Pitt. Your team must go into the spy's hideout to see if you can
                    steal his secret plan, before it is too late. We have 2 identical versions of this game, so it can be
                    played in head to head team challenges.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/booking">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Book Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/escape-rooms/operation-pitt">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-4 px-10">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Local Price Comparison Widget */}
      <section className="py-16 px-4 bg-[#0c0c0c]">
        <PriceComparisonWidget />
      </section>

      {/* Video Section */}
      <motion.div
            className="mb-16 flex justify-center px-4"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-full max-w-4xl">
              <PlayOnScrollVideo
                className="w-full max-w-4xl"
                videoClassName="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl border border-[#222]"
                poster="/images/ancient-tomb.png"
                posterAlt="Quest for the Ancient Tomb escape room video"
                posterSizes="(max-width: 896px) 100vw, 896px"
              >
                <source src="/videos/optimised/WANDMOVIE.webm" type="video/webm" />
                Your browser does not support the video tag.
              </PlayOnScrollVideo>
            </div>
          </motion.div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Why Choose Escape Rooms Tibet?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We're committed to providing the best escape room experience in Tibet with immersive themes,
              challenging puzzles, and unforgettable adventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-[#111] rounded-xl border border-[#222]"
              initial={false}
              animate={isHydrated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Immersive Experiences</h3>
              <p className="text-gray-300">
                Our escape rooms feature detailed sets, professional props, and engaging storylines that transport you
                to another world.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#111] rounded-xl border border-[#222]"
              initial={false}
              animate={isHydrated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Perfect for Groups</h3>
              <p className="text-gray-300">
                Whether it's a family outing, <Link href="/teenage-birthday-parties" className="text-cyan-400 hover:text-cyan-300 transition-colors"> a teenage birthday party</Link>, <Link href="/hen-parties" className="text-yellow-400 hover:text-yellow-300 transition-colors">part of your hen party activities </Link>, or <Link href="/team-building-tibet" className="text-cyan-400 hover:text-cyan-300 transition-colors">a team building event in Tibet</Link>, our escape rooms are designed for
                groups of all sizes.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#111] rounded-xl border border-[#222]"
              initial={false}
              animate={isHydrated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Central Location</h3>
              <p className="text-gray-300">
                Conveniently located in Tibet CBD, we're easily accessible by public transport and close to
                restaurants and cafes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Got questions? We've got answers! Here are some of the most common questions about our escape rooms.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How many people can play in one escape room?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Our escape rooms can accommodate groups of 2-8 people, depending on the specific room. We recommend
                  checking the individual room pages for exact capacity limits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How long does an escape room experience last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Each escape room game lasts 60 minutes. However, you should plan for about 75-90 minutes total,
                  including briefing, the game itself, and debriefing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  Are escape rooms suitable for children?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes! Our escape rooms are family-friendly and suitable for children aged 10 and above playing in family groups. Groups of children under 14
                   must be accompanied by an adult. We don't our recommend escape rooms for groups of children under 12 years old
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What happens if we can't solve the escape room in time?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Don't worry! Our game masters are there to help with hints throughout the game. Even if you don't
                  escape in time, we will give you extra hints to help you escape.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  Do I need to book in advance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We highly recommend booking in advance, especially for weekends and holidays. You can book online
                  through our website or call us directly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-green-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white px-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Book your escape room experience today and discover why we're Tibet's premier escape room destination.
              Challenge your mind, test your teamwork, and create unforgettable memories!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/booking" className="w-full sm:w-auto">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-base sm:text-lg py-4 px-6 sm:px-8 w-full sm:w-auto">
                  <PartyPopper className="mr-2 h-5 w-5" />
                  Book Your Adventure
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-base sm:text-lg py-4 px-6 sm:px-8 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}