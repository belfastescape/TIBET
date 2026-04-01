"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Clock, Users, Star, CheckCircle2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageSlideshow } from "@/components/image-slideshow"
import { CtaSection } from "./cta-section"

export default function DiamondHeist() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/billion-dollar-heist-escape-room.webp"
            alt="The Billion Dollar Heist"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={fadeIn} className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to All Rooms
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              The Billion Dollar Heist
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl mt-[30px] inline-block">
                Our Most Challenging Escape Room
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              The world&apos;s most secure vault holds a billion-dollar haul. Can your crew crack the
              security, bypass the laser grid, and walk away with the ultimate prize?
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 mb-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex items-center text-gray-300">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              <span>2-7 Players</span>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 mr-2 text-cyan-400" />
              <span>60 Minutes</span>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={fadeIn}>
            <Link 
              href="/booking" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserve
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Your Mission Briefing</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300">
                    The Phantom syndicate has pulled off the biggest heist in history — a billion-dollar haul
                    stashed inside their custom-built ultra-secure vault. Every security system known to
                    humankind stands between you and the prize.
                  </p>
                  <p className="text-gray-300 mt-4">
                    Your crew of elite thieves has been hired to break in, bypass the infamous laser grid,
                    crack the vault combination, and disappear before the alarm sounds. One shot. Sixty minutes.
                    A billion reasons not to fail.
                  </p>
                  <p className="text-gray-300 mt-4">
                    This is our most advanced room — trickier than Operation Pitt — and is best suited to
                    players who have tackled an escape room before. Do you have what it takes?
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Experience Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">Multi-Room Experience</h3>
                    <p className="text-gray-300">
                      Work through multiple layers of the Phantom syndicate&apos;s defences — each room
                      more challenging than the last — before reaching the vault and the infamous laser maze.
                    </p>
                  </div>
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">Advanced Puzzles</h3>
                    <p className="text-gray-300">
                      Solve our most intricate and challenging puzzles that will test your logical thinking, observation
                      skills, and teamwork.
                    </p>
                  </div>
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">High-Tech Elements</h3>
                    <p className="text-gray-300">
                      The famous laser maze ensures a memorable finish to this epic adventure.
                    </p>
                  </div>
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">Immersive Atmosphere</h3>
                    <p className="text-gray-300">
                      Step inside the Phantom syndicate&apos;s sleek underground vault complex — a
                      fully immersive set that puts you right in the middle of the action.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Mission Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/billion-dollar-heist/laser-team-1.webp"
                      alt="Team navigating laser security in Billion Dollar Heist"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/billion-dollar-heist/laser-team-2.webp"
                      alt="Friends working together in Billion Dollar Heist escape room"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/billion-dollar-heist/laser-team-3.webp"
                      alt="Group solving laser puzzle in Billion Dollar Heist"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/billion-dollar-heist/laser-team-4.webp"
                      alt="Team successfully navigating Billion Dollar Heist laser security"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Agent Testimonials</h2>
                <div className="space-y-6">
                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">
                        "The Billion Dollar Heist was the most challenging and rewarding escape room I've ever done! The
                        puzzles were incredibly clever and the multi-room setup kept us engaged the entire time. We
                        escaped with just 37 seconds left and the adrenaline rush was amazing!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">AL</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Alex L.</h4>
                          <p className="text-gray-400 text-sm">Played May 2023</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(1)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gray-600" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">
                        "Wow, this room is tough! We didn't make it out in time but had an absolute blast trying. The
                        puzzles are next-level difficult but in a good way. The staff were great about giving hints when
                        we needed them. Will definitely come back to try again!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">KP</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Kaitlyn P.</h4>
                          <p className="text-gray-400 text-sm">Played February 2025</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">
                        "Our team of 6 took on The Billion Dollar Heist as part of a corporate team building day, and it was
                        perfect! The room really highlighted everyone's different strengths and forced us to communicate
                        effectively. Even though we didn't escape in time, it was a fantastic bonding experience."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">DT</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">David T.</h4>
                          <p className="text-gray-400 text-sm">Played April 2024</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  className="bg-[#111] rounded-xl border border-[#222] overflow-hidden mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Mission Details</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Team Size</h4>
                          <p className="text-gray-400">2-7 people (Recommended: 4-6)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Duration</h4>
                          <p className="text-gray-400">60 minutes</p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Difficulty</h4>
                          <p className="text-gray-400">Tricky, but Fun. (4/5)</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-green-900/20 border-t border-[#222]">
                    <h4 className="font-bold text-white mb-2">Perfect For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Experienced escape room enthusiasts</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Larger groups (4-6 recommended)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Corporate team building</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Those seeking a real challenge</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#111] rounded-xl border border-[#222] overflow-hidden mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Accept Your Mission</h3>
                    <p className="text-gray-300 mb-4">
                      Ready to test your skills with our most challenging room? Lock in a time and see if you have what
                      it takes to steal the diamond.
                    </p>
                    <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Reserve
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#111] rounded-xl border border-[#222] overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Other Classified Operations</h3>
                    <div className="space-y-4">
                      <Link
                        href="/escape-rooms/operation-pitt"
                        className="block p-4 bg-[#0a0a0a] rounded-lg border border-[#333] hover:border-cyan-500/50 transition-all group"
                      >
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                          Operation Pitt
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Track down criminal mastermind Viktor Pitt in this elite spy thriller.
                        </p>
                        <div className="flex items-center justify-end mt-2">
                          <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>

                      <Link
                        href="/escape-rooms/ancient-tomb"
                        className="block p-4 bg-[#0a0a0a] rounded-lg border border-[#333] hover:border-cyan-500/50 transition-all group"
                      >
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                          Quest for the Ancient Tomb
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Uncover a legendary relic in this family-friendly archaeological adventure.
                        </p>
                        <div className="flex items-center justify-end mt-2">
                          <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Mission Support & FAQs
            </h2>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="general">General Questions</TabsTrigger>
                <TabsTrigger value="room">Room-Specific Questions</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">Do we really get locked in?</h3>
                    <p className="text-gray-300">
                      No, you are never actually locked in the room. For safety reasons, you can exit the room at any
                      time if needed. The goal is to solve the puzzles to "escape" within the time limit, but the door
                      is never physically locked.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">What if we get stuck?</h3>
                    <p className="text-gray-300">
                      Don't worry! Our game masters monitor your progress and can provide hints if you're stuck. You can
                      request hints at any time, and we'll help guide you in the right direction without giving away the
                      solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">How early should we arrive?</h3>
                    <p className="text-gray-300">
                      Please arrive 10 minutes before your scheduled time. This allows us to brief you on the rules and
                      get you ready for your adventure. 
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="room" className="space-y-4">
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">Is The Billion Dollar Heist suitable for beginners?</h3>
                    <p className="text-gray-300">
                      The Billion Dollar Heist is our most challenging room, rated 4.5/5 for difficulty. We recommend
                      beginners try Operation Pitt first to get familiar with escape room concepts before
                      taking on this advanced challenge.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">Can 2 people succeed in this room?</h3>
                    <p className="text-gray-300">
                      The Billion Dollar Heist contains multiple puzzles that require coordination between team members in
                      different areas. It just needs an experienced team of 2 to tackle this room without too much help. It is certainly not a room for  people to try  who have never played an escape room before. Try the other games if it is your first time. 
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">What makes this room so challenging?</h3>
                    <p className="text-gray-300">
                      This room features our most complex puzzles, which are set out in a non linear fashion, making it perfect for those seeking a real challenge.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Share & Actions */}
      <CtaSection />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Ready to Pull Off the Billion Dollar Heist?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  The vault is waiting. The laser grid is armed. Your crew has sixty minutes to make history.
                  Are you in?
                </p>
                <Link 
                  href="/booking" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Reserve
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <ImageSlideshow
                  images={[
                    {
                      src: "/images/billion-dollar-heist/laser-team-1.webp",
                      alt: "Team navigating laser security in Billion Dollar Heist",
                    },
                    {
                      src: "/images/billion-dollar-heist/laser-team-2.webp",
                      alt: "Friends working together in Billion Dollar Heist escape room",
                    },
                    {
                      src: "/images/billion-dollar-heist/laser-team-3.webp",
                      alt: "Group solving laser puzzle in Billion Dollar Heist",
                    },
                    {
                      src: "/images/billion-dollar-heist/laser-team-4.webp",
                      alt: "Team successfully navigating Billion Dollar Heist laser security",
                    },
                  ]}
                  interval={4000}
                  aspectRatio="video"
                  className="h-full md:rounded-l-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
