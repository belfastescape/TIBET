"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function WinterTeamsDealPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-20 pb-20 bg-[#0c0c0c]">
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="bg-[#111] rounded-2xl overflow-hidden border border-[#222] mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-[320px] md:h-[400px]">
            <Image
              src="/images/winter-teams-deal.webp"
              alt="Winter Teams Deal at Escape Rooms Tibet"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Winter Teams Deal
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              <span className="font-bold text-white">Just $30 per person</span> for groups of <span className="font-bold text-white">6 or more</span>!<br />
              We can accommodate up to <span className="font-bold text-white">30 people per session</span>.<br />
              <span className="text-cyan-400">Contact us directly to book this special deal.</span>
            </p>
            <p className="text-gray-400 mb-6">Available Monday to Friday at Escape Rooms Tibet.</p>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8"
              asChild
            >
              <Link href="/contact">
                Book Your Team Deal <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 