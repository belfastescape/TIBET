"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageWithFilter from "@/components/image-with-filter"

export default function DiscountsPage() {
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
            src="/placeholder.svg?key=discounts-hero"
            alt="Escape Rooms Tibet Discounts"
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
              Escape Rooms Tibet Deals
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These are currently the best deals on offer in any of the escape rooms in Tibet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Building Discount Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent text-center md:text-left">
                Tibet Team Building Discount
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>We are happy to offer one of the best deals for any team building activity in Tibet.</p>

                <p>If you have 7 or more participants, we will charge just $30 per person.</p>

                <p>We can accommodate up to 28 people over our four exciting escape rooms.</p>

                <p>Budget 80 minutes.</p>
              </div>

              <div className="mt-8">
                <Link href="/team-building">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                    Find out more
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="rounded-xl overflow-hidden">
              <ImageWithFilter
                src="/placeholder.svg?key=team-building-group"
                alt="Team building group at Escape Rooms Tibet"
                width={800}
                height={600}
                filter="cyan"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Why Choose Our Team Building Experience?
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Perfect for Corporate Teams</h3>
                    <p className="text-gray-300">
                      Our escape rooms are designed to encourage communication, problem-solving, and teamwork -
                      essential skills for any workplace. See how your team performs under pressure!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Time-Efficient Activity</h3>
                    <p className="text-gray-300">
                      Our escape rooms take just 60 minutes, making them perfect for a lunch break or after-work
                      activity. No need to take a whole day off for team building!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Proven Success</h3>
                    <p className="text-gray-300">
                      We've hosted hundreds of corporate teams, from small startups to large enterprises. Our
                      escape rooms are consistently rated as one of the best team building activities in
                      Tibet.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Easy to Book</h3>
                    <p className="text-gray-300">
                      Booking is simple and flexible. We can accommodate your team's schedule and provide
                      everything you need for a successful team building event.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
