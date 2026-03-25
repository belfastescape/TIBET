"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Users, Star } from "lucide-react"

export default function EveningDealPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-20 pb-20 bg-[#0c0c0c]">
      <section className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-[320px] md:h-[450px]">
            <Image
              src="/images/spiesnoir.webp"
              alt="Evening Deal at Escape Rooms Tibet"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
          </div>
          
          <div className="p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Evening Deal
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-4 font-bold">
                Maximum price $130 per game!
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Perfect for groups of up to <span className="font-bold text-white">8 players</span>
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="bg-[#0c0c0c] p-6 rounded-xl border border-[#222]">
                <Users className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Up to 8 Players</h3>
                <p className="text-gray-400 text-sm">
                  Bring your friends, family, or colleagues
                </p>
              </div>

              <div className="bg-[#0c0c0c] p-6 rounded-xl border border-[#222]">
                <Star className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Maximum Price</h3>
                <p className="text-gray-400 text-sm">
                  Maximum $130 per game regardless of group size
                </p>
              </div>

              <div className="bg-[#0c0c0c] p-6 rounded-xl border border-[#222]">
                <Clock className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Evening Sessions</h3>
                <p className="text-gray-400 text-sm">
                  Perfect for after-work adventures. Deal runs Wed, Thurs and Friday evenings until Nov 28th 2025. All games from 530pm start
                </p>
              </div>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto mb-10 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our Evening Deal?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    <span className="font-bold text-white">Best Value:</span> Maximum price of $130 for up to 8 players - that's just $16.25 per person with a full group!
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    <span className="font-bold text-white">All Rooms Available:</span> Choose from Operation Pitt, The Billion Dollar Heist, or Quest for the Ancient Tomb
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    <span className="font-bold text-white">Perfect for Groups:</span> Ideal for friends, families, date nights, or team bonding
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    <span className="font-bold text-white">Premium Experience:</span> Full 60-minute escape room adventure with professional game masters
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Button
                className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-10"
                asChild
              >
                <Link href="/how-to-book">
                  Book Your Evening Adventure <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-gray-400 mt-4 text-sm">
                Book now to secure your evening slot!
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Information Section */}
        <motion.div
          className="mt-12 bg-[#111] rounded-2xl p-8 md:p-12 border border-[#222]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-white font-bold mb-2">Choose Your Room</h3>
              <p className="text-gray-400">
                Select from our three thrilling escape rooms
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-white font-bold mb-2">Book Online</h3>
              <p className="text-gray-400">
                Select your preferred evening time slot
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-white font-bold mb-2">Enjoy Your Adventure</h3>
              <p className="text-gray-400">
                Arrive and experience an unforgettable evening
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

