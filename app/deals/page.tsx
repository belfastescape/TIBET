"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Users, Star, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DealsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px] bg-black flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Special Deals</h1>
          <p className="text-xl text-white max-w-2xl">
            Take advantage of our exclusive offers and save on your escape room adventure
          </p>
        </div>
      </section>

      {/* Saturday Morning Special */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Saturday Morning Special</h2>
              <p className="text-gray-300 mb-6">
                Start your weekend with an exciting adventure! Book our Saturday morning sessions and enjoy special rates.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Available every Saturday morning before Noon.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">$130 maximum price. Up to 8 players</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Perfect for families and early birds</span>
                </li>
              </ul>
              <Link href="/booking">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Winter Teams Deal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Summer Teams Deal</h2>
              <p className="text-gray-300 mb-6">
                Keep your team engaged during the summer months with our special corporate team building rates.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Special rates for groups of 8 or more</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Available for corporate bookings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Perfect for team building events</span>
                </li>
              </ul>
              <Link href="/team-building">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                  Learn More About Team Building
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  )
} 