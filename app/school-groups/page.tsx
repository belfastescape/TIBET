"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageWithFilter from "@/components/image-with-filter"
import { GraduationCap, Clock, Users, Calendar as CalendarIcon, Brain, Sparkles, BookOpen, Lightbulb, Trophy } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function SchoolGroupsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref: imageRef, isInView: imageIsInView } = useScrollAnimation()
  const { ref: cardRef, isInView: cardIsInView } = useScrollAnimation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 z-0"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <motion.div
              initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4"
            >
              <GraduationCap className="h-16 w-16 text-blue-400" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            >
              School Group Adventures
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl"
            >
              Educational, engaging, and exciting escape room experiences designed specifically for school groups.
              Perfect for team building, problem-solving, and fun learning!
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-full">
                Contact Us For Availability
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111] p-6 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Perfect for Groups</h3>
              </div>
              <p className="text-gray-300">
                Accommodates groups of 4-28 students. Multiple rooms available for larger classes.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#111] p-6 rounded-xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">60 Minute Experience</h3>
              </div>
              <p className="text-gray-300">
                A perfect length for school groups, including briefing and debriefing time.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#111] p-6 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <CalendarIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Special School Rates</h3>
              </div>
              <p className="text-gray-300">Discounted rates for school groups with special packages available.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Benefits Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Educational Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#111] p-8 rounded-xl border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Key Learning Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Brain className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300">Critical thinking and problem-solving skills</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Users className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">Teamwork and communication development</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Lightbulb className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300">Creative thinking and innovation</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Trophy className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">Confidence building and leadership skills</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#111] p-8 rounded-xl border border-cyan-500/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Curriculum Alignment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300">Mathematics and logical reasoning</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">Science and technology concepts</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Brain className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300">History and cultural understanding</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Users className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">Social studies and group dynamics</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about booking a school group
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="booking" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger
                  value="booking"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-blue-400"
                >
                  Booking
                </TabsTrigger>
                <TabsTrigger
                  value="safety"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-blue-400"
                >
                  Safety
                </TabsTrigger>
                <TabsTrigger
                  value="preparation"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-blue-400"
                >
                  Preparation
                </TabsTrigger>
              </TabsList>

              <TabsContent value="booking" className="space-y-4">
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">How far in advance should we book?</h3>
                  <p className="text-gray-300">
                    We recommend booking at least 2-3 weeks in advance for school groups, especially for popular time slots.
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">What is the minimum/maximum group size?</h3>
                  <p className="text-gray-300">
                    Our rooms accommodate 4-8 students each. For larger groups, we can run multiple rooms simultaneously.
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">Do you require a deposit?</h3>
                  <p className="text-gray-300">
                    Yes, we require a $90 refundable deposit per room to be paid at least 7 days in advance. The balance is due on the day of your visit.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="safety" className="space-y-4">
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">What safety measures are in place?</h3>
                  <p className="text-gray-300">
                    All rooms are monitored by our staff, and emergency exits are clearly marked. We maintain a safe environment for all participants.
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">Do you have first aid trained staff?</h3>
                  <p className="text-gray-300">
                    Yes, all our staff are first aid trained and we have first aid kits readily available.
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">What supervision is required?</h3>
                  <p className="text-gray-300">
                    We require at least one teacher or adult supervisor per room. Our staff will also be present to assist and monitor.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="preparation" className="space-y-4">
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">What should students bring?</h3>
                  <p className="text-gray-300">
                    Students should bring comfortable clothing and closed-toe shoes. Lockers are available for bags and belongings.
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">Should we arrive early?</h3>
                  <p className="text-gray-300">
                    Yes, please arrive 10 minutes before your scheduled time for check-in and briefing.
                  </p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">Can you accommodate special needs?</h3>
                  <p className="text-gray-300">
                    Yes, we can accommodate various needs. Please let us know in advance so we can make appropriate arrangements.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Ready to Book Your School Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to check availability and customize your perfect educational experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                >
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 