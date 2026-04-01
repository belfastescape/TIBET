"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageWithFilter from "@/components/image-with-filter"
import { HeroSection } from "@/components/hero-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import GoogleIcon from '@/components/GoogleIcon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RoomCardProps {
  room: {
    id: string
    name: string
    description: string
    image: string
    hoverImage?: string
    
    minPeople: number
    maxPeople: number
    duration: number
    tags: string[]
  }
}

function RoomCard({ room }: RoomCardProps) {
  return (
    <motion.div
      className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-cyan-500/30 transition-all group h-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={room.image || "/placeholder.svg"}
          alt={room.name}
          width={800}
          height={600}
          className="object-cover w-full h-full transition-all duration-500 absolute inset-0 group-hover:scale-110 group-hover:filter group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150"
        />
        {room.hoverImage && (
          <Image
            src={room.hoverImage || "/placeholder.svg"}
            alt={`${room.name} - Alternate View`}
            width={800}
            height={600}
            className="object-cover w-full h-full transition-all duration-500 absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:filter group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] to-transparent h-20"></div>
        <div className="absolute top-4 right-4">
         
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
          <p className="text-gray-300 mb-4">{room.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-[#0a0a0a] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center">
            <Users className="w-3 h-3 mr-1 text-cyan-400" />
            {room.minPeople}-{room.maxPeople} people
          </div>
          <div className="bg-[#0a0a0a] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center">
            <Clock className="w-3 h-3 mr-1 text-cyan-400" />
            {room.duration} minutes
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link
            href={`/escape-rooms/${room.id}`}
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
          >
            Full briefing <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Reserve
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function EscapeRoomsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")

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

  const rooms = [
    {
      id: "operation-pitt",
      name: "Operation Pitt",
      description:
        "Tibetan Secret Service intel on Operation Pitt—raid the spy hideout and steal the plan. Two identical rooms for head-to-head team play.",
      image: "/images/spiesnoir.webp",

      minPeople: 2,
      maxPeople: 14,
      duration: 60,
      tags: ["spy themed", "advanced", "teamwork"],
    },
    {
      id: "billion-dollar-heist",
      name: "The Billion Dollar Heist",
      description:
        "The Phantom syndicate has stashed a billion-dollar haul inside the world's most secure vault. Can your crew crack the security and walk away with the ultimate prize?",
      image: "/images/billion-dollar-heist/laser-team-4.webp",
    
      minPeople: 2,
      maxPeople: 7,
      duration: 60,
      tags: ["heist", "expert", "multi-room"],
    },
    {
      id: "ancient-tomb",
      name: "Quest for the Ancient Tomb",
      description:
        "Step into magic and mystery—solve mystical puzzles and retrieve the legendary Ancient Tomb before dark forces claim it. Perfect for families and fantasy fans.",
      image: "/images/ancient-tomb.png",
      
      minPeople: 2,
      maxPeople: 6,
      duration: 60,
      tags: ["fantasy", "family-friendly", "beginner"],
    },
  ]

  const filteredRooms = filter === "all" ? rooms : rooms.filter((room) => room.tags.includes(filter))

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?key=yjanr"
            alt="Escape Rooms Tibet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Browse our live games
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Three original scenarios—spy, heist, and tomb—each tuned for a different mood and difficulty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Filter by vibe</h2>
                <TabsList className="bg-[#111] border border-[#222]">
                  <TabsTrigger value="all">Every room</TabsTrigger>
                  <TabsTrigger value="beginner">Easier</TabsTrigger>
                  <TabsTrigger value="family-friendly">All ages</TabsTrigger>
                  <TabsTrigger value="expert">Tougher</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="beginner" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="family-friendly" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="expert" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            className="bg-[#111] rounded-xl border border-[#222] p-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Bigger groups</h2>
                <p className="text-gray-300 mb-6">
                  Hosting a crowd? We can spin several rooms at once so nobody waits on the sidelines—great for work
                  offsites, birthdays, or any excuse to compete in parallel storylines.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-300">Concurrent games across multiple sets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-300">Mirror missions for head-to-head bragging rights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-300">Around thirty guests per combined wave</span>
                  </li>
                </ul>
                <Link href="/team-building">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                    Team-building options
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/corporate-team.png"
                  alt="Group Booking"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
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
              Room FAQs
            </h2>

            <div className="space-y-4">
              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">How do I pick between games?</h3>
                <p className="text-gray-300">
                  New to the format? Operation Pitt sits around a 3/5 on our scale. After a few wins, Quest for the
                  Ancient Tomb (about 4/5) or The Billion Dollar Heist (about 4.5/5) raise the bar. Theme matters too—spy,
                  vault, or fantasy—choose what your crew will talk about all week.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">What if the clock runs out?</h3>
                <p className="text-gray-300">
                  Plenty of teams need the full hour, especially on harder rooms. If time’s up, we’ll usually give you a
                  little runway to see the finale—our stories are written to land, not to cut off mid-reveal.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Photography during play?</h3>
                <p className="text-gray-300">
                  Snap away in the lobby; inside the sets we keep cameras tucked away so puzzles stay secret for the
                  next group. We’ll grab a team shot afterward so you still go home with proof.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Gift vouchers?</h3>
                <p className="text-gray-300">
                  Yes—buy through the booking flow. Codes last twelve months from purchase, deliver by email, and we can
                  send a souvenir card on request. If life gets in the way and the date lapses, ask us—we’d rather extend
                  than leave credit on the table.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Pick a date
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Lock in a slot and see how your crew handles the pressure when the countdown starts.
              </p>
              <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Reserve online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
