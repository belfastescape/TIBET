"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Clock, CheckCircle2, ArrowRight, Building2, Brain, Puzzle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import GoogleIcon from '@/components/GoogleIcon'
import { JsonLd } from '@/components/JsonLd'

export default function GroupBookingsPage() {
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
            src="/placeholder.svg?key=9hhyq"
            alt="Group Bookings at Escape Rooms Tibet"
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
              Group Bookings
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The perfect adventure for groups of all kinds. We can accommodate up to 30 people in each session!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                asChild
              >
                <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Check Availability
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              The Ultimate Group Experience
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Looking for an exciting and memorable activity for your group? Our escape rooms offer the perfect blend of
              fun, challenge, and teamwork for groups of all types and sizes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-[#111] rounded-xl border border-[#222] p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Group Size</h3>
              <p className="text-gray-300">
                We can accommodate groups of up to 30 people in a single session, spread across our different escape
                room adventures.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#111] rounded-xl border border-[#222] p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Group Rates</h3>
              <p className="text-gray-300">
                Special group rates starting at just $33 per person, with custom packages available for different group
                types and needs.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#111] rounded-xl border border-[#222] p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Booking</h3>
              <p className="text-gray-300">
                Dedicated time slots for groups with flexible scheduling options. Advanced booking recommended for
                larger groups.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Group Types Section */}
      <section id="group-types" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Perfect for Any Group
            </h2>
            <p className="text-xl text-gray-300">
              We cater to a variety of groups with customized experiences to meet your specific needs.
            </p>
          </motion.div>

          <Tabs defaultValue="work" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-[#111] border border-[#222] rounded-lg p-1 mb-8">
              <TabsTrigger
                value="work"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-md"
              >
                <Users className="w-4 h-4 mr-2" />
                Work Teams
              </TabsTrigger>
              <TabsTrigger
                value="school"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-md"
              >
                <Users className="w-4 h-4 mr-2" />
                School Groups
              </TabsTrigger>
              <TabsTrigger
                value="party"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-md"
              >
                <Users className="w-4 h-4 mr-2" />
                Hen & Stag Parties
              </TabsTrigger>
            </TabsList>

            <TabsContent value="work" className="mt-0">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="order-2 lg:order-1">
                  <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                    <div className="flex items-center mb-6">
                      <Building2 className="w-8 h-8 text-cyan-400 mr-4" />
                      <h3 className="text-2xl font-bold text-white">Corporate Teams</h3>
                    </div>

                    <p className="text-gray-300 mb-6">
                      Our escape rooms are perfect for <Link href="/team-building-tibet" className="text-cyan-400 hover:text-cyan-300 transition-colors">corporate team building</Link>. They naturally encourage communication,
                      problem-solving, and collaboration - all essential skills in the workplace.
                    </p>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Improves team communication and collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Develops problem-solving and critical thinking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Builds trust and team cohesion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Creates shared memories and strengthens relationships</span>
                      </li>
                    </ul>

                    <div className="bg-[#0a0a0a] rounded-lg p-4 mb-6 border border-[#222]">
                      <p className="text-cyan-400 font-medium mb-2">Corporate Package:</p>
                      <p className="text-white">Starting at $33 per person (min. 7 people)</p>
                      
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                        asChild
                      >
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="order-1 lg:order-2">
                  <Image
                    src="/images/corporate-team.png"
                    alt="Corporate team building at Escape Rooms Tibet"
                    width={800}
                    height={600}
                    className="rounded-xl"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="school" className="mt-0">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn}>
                  <Image
                    src="/images/teenage-escape-success.png"
                    alt="School groups at Escape Rooms Tibet"
                    width={800}
                    height={600}
                    className="rounded-xl"
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                    <div className="flex items-center mb-6">
                      <Building2 className="w-8 h-8 text-cyan-400 mr-4" />
                      <h3 className="text-2xl font-bold text-white">School & Educational Groups</h3>
                    </div>

                    <p className="text-gray-300 mb-6">
                      Our escape rooms offer an exciting educational experience that combines fun with critical
                      thinking. Students will practice teamwork, communication, and problem-solving in an engaging
                      environment.
                    </p>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Develops critical thinking and logical reasoning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Encourages collaboration and communication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Safe, supervised environment with dedicated game masters</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          Great chance for groups from the more rural areas of the country to experience escape rooms
                          for the first time.
                        </span>
                      </li>
                    </ul>

                    <div className="bg-[#0a0a0a] rounded-lg p-4 mb-6 border border-[#222]">
                      <p className="text-cyan-400 font-medium mb-2"><Link href="/school-groups" className="text-cyan-400 hover:text-cyan-300 transition-colors">School Group Deal</Link></p>
                      <p className="text-white">Starting at $25 per student (min. 10 students)</p>
                      <p className="text-gray-400 text-sm mt-2">We can do evening sessions starting aroundabout 7-730pm. Contact Us to see if we can do it.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                        asChild
                      >
                        <Link href="/contact">School Trip Enquiry</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="party" className="mt-0">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="order-2 lg:order-1">
                  <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                    <div className="flex items-center mb-6">
                      <Users className="w-8 h-8 text-cyan-400 mr-4" />
                      <h3 className="text-2xl font-bold text-white">Hen & Stag Parties</h3>
                    </div>

                    <p className="text-gray-300 mb-6">
                      Looking for something different for your hen or stag party? Our escape rooms offer an exciting
                      alternative to traditional celebrations. Start your night with an adrenaline-pumping adventure!
                    </p>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Unique and memorable pre-night out activity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          Perfect ice-breaker for friends and family who haven&apos;t met
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">Group photos with props available</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          Central location, close to Tibet&apos;s best bars and restaurants
                        </span>
                      </li>
                    </ul>

                    <div className="bg-[#0a0a0a] rounded-lg p-4 mb-6 border border-[#222]">
                      <p className="text-cyan-400 font-medium mb-2"><Link href="/hen-parties" className="text-cyan-400 hover:text-cyan-300 transition-colors">Fun Tibet Hen Party Activity</Link></p>
                      <p className="text-white">Starting at $33 per person.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                        asChild
                      >
                        <Link href="/booking">Check Availability</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                        asChild
                      >
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="order-1 lg:order-2">
                  <Image
                    src="/images/hen-party-celebration.png"
                    alt="Hen and stag parties at Escape Rooms Tibet"
                    width={800}
                    height={600}
                    className="rounded-xl"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about group bookings at Escape Rooms Tibet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#111] rounded-xl border border-[#222] p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-[#222]">
                    <AccordionTrigger className="text-white hover:text-cyan-400">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                        <span>How far in advance should we book?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      For small groups (under 10 people), we recommend booking at least a week in advance. For larger
                      groups, 3-4 weeks notice is ideal, especially during peak seasons.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-b border-[#222]">
                    <AccordionTrigger className="text-white hover:text-cyan-400">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                        <span>How long does the experience last?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Each escape room experience lasts 60 minutes. We recommend arriving 15 minutes before your
                      scheduled time for briefing and preparation. For larger groups, please allow additional time for
                      group organization and photos.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-[#111] rounded-xl border border-[#222] p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-4" className="border-b border-[#222]">
                    <AccordionTrigger className="text-white hover:text-cyan-400">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-cyan-400" />
                        <span>Can we split into multiple rooms?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Yes! For larger groups, we can split you into multiple rooms. This is a great way to add some
                      friendly competition to your event. We can accommodate up to 30 people across our different
                      rooms.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-b border-[#222]">
                    <AccordionTrigger className="text-white hover:text-cyan-400">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                        <span>What is your cancellation policy?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      We understand that plans can change. For group bookings, we ask for 48 hours notice for
                      cancellations or rescheduling. Please contact us as soon as possible if you need to make changes
                      to your booking.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Ready to Book Your Group Experience?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose your preferred way to get in touch with us. We're here to help make your group event unforgettable!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                  asChild
                >
                  <Link href="/booking">Check Availability</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#111] rounded-xl border border-[#222] p-8"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>
                <p className="text-gray-300 mb-2">42 Barkhor Street</p>
                <p className="text-gray-300 mb-2">Lhasa, Tibet 6011</p>
                <p className="text-gray-300 mb-4">New Zealand</p>
                <div className="mt-6">
                  <Link
                    href="https://maps.google.com/?q=Escape+Rooms+Tibet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#111] rounded-xl border border-[#222] p-8"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                <p className="text-gray-300 mb-2">Phone: 021 555 0198</p>
                <p className="text-gray-300 mb-4">Email: info@escaperoomstibet.com</p>
                <p className="text-gray-300">
                  For group bookings and special arrangements, please use our contact page or give us a call.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
