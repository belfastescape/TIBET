"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Users, Star, ArrowRight, Building2, Brain, Puzzle, Send, MapPin, Mail, Clock, Facebook, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import GoogleIcon from '@/components/GoogleIcon'

export default function TeamBuildingTibetPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Team Building Tibet Enquiry",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "Team Building Tibet Enquiry", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.details || data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Network error — please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Tibet Team Building Adventures"
        subtitle="Unite your colleagues with unforgettable escape room experiences"
        buttonText="Plan Your Team Event"
        imageSrc="/images/team-building-mission-accomplished.webp"
        imageAlt="Celebrating team success in Tibet"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Elevate Your Team in Tibet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Searching for a unique way to boost teamwork in Tibet? Our escape rooms offer a dynamic setting for teams to connect, communicate, and conquer challenges together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Escape Rooms for Your Team?</h3>
              <p className="text-gray-300 mb-6">
                Escape rooms naturally foster the essential skills every team needs: open communication, creative thinking, and effective collaboration.
              </p>
              <p className="text-gray-300 mb-6">
                In our immersive environments, your group will solve puzzles, uncover clues, and achieve shared goals—all within a thrilling 60-minute countdown. It's a fun way to discover hidden talents and strengthen bonds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Encourages teamwork and trust</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Reveals leadership and problem-solving skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Strengthens communication under pressure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Creates lasting memories for your team</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="rounded-xl overflow-hidden"
            >
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/optimised/teambuilding.webm" type="video/webm" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Key Advantages of Team Building in Escape Rooms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Tibet escape rooms are crafted to unlock your team's full potential and foster essential workplace skills.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Stronger Connections</h3>
              <p className="text-gray-400">
                Teams build trust and rapport as they work together to escape. Our rooms encourage open dialogue and mutual support.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Creative Problem Solving</h3>
              <p className="text-gray-400">
                Each puzzle is a new challenge, pushing teams to think outside the box and collaborate on inventive solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Puzzle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Unified Team Spirit</h3>
              <p className="text-gray-400">
                Overcoming obstacles together creates a sense of unity and accomplishment that lasts long after the game ends.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Leadership in Action</h3>
              <p className="text-gray-400">
                Escape rooms highlight natural leaders and encourage everyone to take initiative in a supportive environment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              How Your Team Building Journey Unfolds
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We make it easy for your team to enjoy a seamless and memorable experience from start to finish.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Discovery Call</h3>
              <p className="text-gray-400">
                We'll chat about your team's needs and recommend the best escape room adventure for your group.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Welcome Briefing</h3>
              <p className="text-gray-400">
                On arrival, our hosts will introduce the rules and set the stage for your team's mission.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Escape Challenge</h3>
              <p className="text-gray-400">
                Your team will have one hour to solve puzzles, crack codes, and escape before time runs out.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Team Debrief</h3>
              <p className="text-gray-400">
                After the game, we'll guide a discussion to reflect on your team's performance and celebrate your achievements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Real Teams, Real Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Tibet teams have transformed their workplace dynamics through our escape room adventures.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "Our department left the escape room energized and more connected than ever. The puzzles were clever and everyone contributed. Highly recommended for any Tibet business!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Alex Morgan</h4>
                      <p className="text-gray-400">Team Lead, Tibet</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "We wanted something different for our annual team event and this was perfect. The staff were fantastic and the experience brought out the best in everyone."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Priya Singh</h4>
                      <p className="text-gray-400">HR Manager, Tibet</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "As a small business, we found the escape room to be a fun and affordable way to build trust and communication. We'll definitely be back!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Jamie Chen</h4>
                      <p className="text-gray-400">Owner, Tibet</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Workplace events: Q&amp;A
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Planning an offsite or morale day? Start here.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {/* FAQ items copied from the original page */}
              <AccordionItem value="item-1" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What headcount can you handle?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  From tight-knit pods of 8–10 up to corporate waves around 30—we scale by running multiple rooms and
                  mirrored missions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Any prerequisites or prep?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  No résumé required. Wear something easy to move in and come ready to talk. Curiosity and cooperation
                  beat niche expertise every time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  How early should we pencil a date?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Under ten guests: aim for two weeks out. Bigger builds or bespoke packages: three to four weeks is
                  safer in peak season. Still, ping us for short notice—we sometimes have gaps.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Why run a team event in a puzzle room?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  The format forces clear talk, quick decisions, and shared wins under a deadline—so strengths and blind
                  spots show up naturally. Afterwards, a short debrief turns the play into takeaways you can use Monday.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Can you tailor things for our org?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Often, yes—tell us your goals and constraints and we’ll see what’s possible within the format.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What does the debrief cover?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  A concise recap of how the group moved through the game—what clicked, what stalled, and where
                  collaboration shone—tailored to what you want to reinforce.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Do you cater on-site?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  We don’t run a kitchen, but we’re near solid dining and drink options—ask and we’ll point you to spots
                  walking distance away.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Cancellation for large team bookings?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Plans shift—we get it. Message us as soon as dates move and we’ll work within the policy to find a fair
                  outcome.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What are some unique team building packages offered in Tibet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Looking to bolster team spirit and camaraderie? Tibet offers a variety of exciting team-building packages that cater to diverse interests and preferences. See how we compare:

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-bold text-white">1. Abseiling Adventure</h4>
                      <p>Spend half a day exploring waterfalls, ziplining, and abseiling. This package is perfect for thrill-seekers looking for an exhilarating team bonding experience. Price: $249</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">2. Amazing Race Adventure</h4>
                      <p>Unleash your competitive spirit with a well-crafted race that doubles as a team-building exercise. Ideal for festive occasions or mid-year events. Price: $1650</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">3. Axe Throwing & Dining Experience</h4>
                      <p>Combine the fun of axe throwing with a delectable meal at a nearby elegant restaurant. This package provides both excitement and nourishment. Price: $142</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">4. Circus Teambuilding Session</h4>
                      <p>Experience the wonders of the circus in a unique team-building activity. Accommodates groups ranging from 18 to 32 participants. Price: $48</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">5. Clay Shooting Challenge</h4>
                      <p>Engage in a friendly competition with colleagues through this dynamic clay shooting activity. Price: $85</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">6. Fling It! Team Challenge</h4>
                      <p>Push your team's synergy to the limits with this imaginative challenge, suitable for groups of 15 or more. We are scratching our heads at this one. It is offered by GoBananas. Price: $78</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">7. Murder Mystery Dinner</h4>
                      <p>Transport your group into a thrilling narrative with a murder mystery dinner experience, ideal for 15 to 28 participants. Price: $179</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">8. Paintball Extravaganza</h4>
                      <p>Enjoy an action-packed day of paintball, where teams can compete as vigorously or casually as they prefer. Price: $72.50</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">9. Rock Climbing Activity</h4>
                      <p>For those looking for a physically demanding and fun challenge, rock climbing offers the perfect setting for team-building. Minimum group size is 20. Price: $29</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">10. Highropes Adventure Course</h4>
                      <p>Navigate a treetop obstacle course designed to test your team's agility and cooperation. Price: $59</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">11. Scenic Rafting Experience</h4>
                      <p>Immerse in a two-hour rafting journey that combines beautiful scenery with thrilling rapids. Price: $149</p>
                    </div>
                  </div>

                  <p className="mt-4">Each of these packages offers unique opportunities for teams to connect and grow stronger together through shared adventures and challenges in Tibet.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What options are available for indoor team building events in Tibet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  <p className="mb-4">Planning a team building day in Tibet and want to keep it indoors? You're in luck! Tibet offers a range of exciting and engaging activities perfect for team bonding.</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-white mb-2">Interactive and Creative Experiences</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-cyan-400">Mixology Classes</h5>
                          <p>Stir up some fun with cocktail-making sessions, where your team can learn the art of mixology from seasoned bartenders. It's a great way to unleash creativity and discover new favorites. Not everyone will be comfortable with an alcohol related team building activity. Best to ask everyone's thoughts first.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-cyan-400">Culinary Workshops</h5>
                          <p>Sharpen your cooking skills together under the guidance of professional chefs. These workshops provide a delicious way to foster teamwork and communication.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-2">Action-Packed Adventures</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-cyan-400">Indoor Kart Racing</h5>
                          <p>Feel the thrill of competition with indoor go-karting. It gets the heart racing and spirit soaring while also encouraging teamwork and sportsmanship.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-cyan-400">Escape Rooms</h5>
                          <p>Challenge yourselves in themed escape rooms that test problem-solving abilities and teamwork under pressure. It's a perfect blend of fun and brain-power. And extremely budget friendly!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6">With these varied options, your team is sure to have a day filled with laughter, learning, and lasting memories. Whether crafting cocktails or racing around a track, Tibet has plenty to offer for an unforgettable indoor team-building experience.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <p className="text-gray-300 mb-6">Have more questions about our team building experiences?</p>
            <Link href="/contact" className="inline-block">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                Contact Our Team Building Specialists
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Rooms for Team Building */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Explore Our Tibet Escape Rooms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of immersive rooms, each designed to challenge and inspire your team.
            </p>
          </motion.div>

          {/* Tabs and room content copied exactly from the original */}
          <Tabs defaultValue="operation-pitt" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-[#111] border border-[#222] p-1">
              <TabsTrigger value="operation-pitt" className="flex-1">
                Operation Pitt
              </TabsTrigger>
              <TabsTrigger value="billion-dollar-heist" className="flex-1">
                The Billion Dollar Heist
              </TabsTrigger>
              <TabsTrigger value="ancient-tomb" className="flex-1">
                Quest for the Ancient Tomb
              </TabsTrigger>
            </TabsList>

            <TabsContent value="operation-pitt">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/operation-pitt-team-challenge.webp"
                    alt="Operation Pitt Escape Room"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Operation Pitt</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      DIFFICULTY: CHALLENGING
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-8 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Navigate through political intrigue and government secrets in this Tibet-themed adventure.
                    Operation Pitt tests strategic thinking and careful attention to detail.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Strategic planning and delegation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Attention to detail and information management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Critical thinking under pressure</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Reserve
                  </Link>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="billion-dollar-heist">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/billion-dollar-heist/laser-team-1.webp"
                    alt="The Billion Dollar Heist Escape Room"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Billion Dollar Heist</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      DIFFICULTY: EXPERIENCED
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-7 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Plan the perfect heist to steal THE  priceless diamond in this thrilling challenge. With multiple rooms
                    and complex puzzles, The Billion Dollar Heist is perfect for larger teams that need to coordinate across
                    different areas.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Communication across team members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Resource management and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Leadership and role assignment</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Reserve
                  </Link>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="ancient-tomb">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/ancient-tomb.png"
                    alt="Quest for the Ancient Tomb Escape Room"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Quest for the Ancient Tomb</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      DIFFICULTY: CHALLENGING
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-6 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Embark on a magical journey to find the legendary wand in this enchanting adventure. Quest for the
                    Ancient Tomb is ideal for teams new to escape rooms or those looking to build creative problem-solving
                    skills.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Creative thinking and imagination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Collaborative problem-solving</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Pattern recognition and logical reasoning</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Reserve
                  </Link>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Take Your Team to the Next Level
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Reserve your Tibet team building experience now and see the difference teamwork can make in our escape rooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                    Check Availability
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Request Information
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
                <p className="text-gray-400 mb-6">Have a question or want to discuss your team event? Send us a message and our Tibet team will be in touch soon.</p>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400 text-sm">Message sent successfully! We&apos;ll be in touch soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tb-name" className="text-gray-300 text-sm font-medium">Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input
                          id="tb-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tb-email" className="text-gray-300 text-sm font-medium">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        id="tb-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tb-subject" className="text-gray-300 text-sm font-medium">Subject *</Label>
                    <Input
                      id="tb-subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                      placeholder="e.g. Team Building Tibet Enquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tb-message" className="text-gray-300 text-sm font-medium">Message *</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <Textarea
                        id="tb-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                        placeholder="Tell us about your team, preferred date, group size, and any questions..."
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
            >
              <div className="bg-[#111] rounded-xl border border-[#222] p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <ul className="space-y-6">
                  <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Address</h3>
                      <p className="text-gray-300">Mt Everest</p>
                      <p className="text-gray-300">Khumbu, Solukhumbu, Nepal</p>
                      <p className="text-gray-300">New Zealand</p>
                    </div>
                  </motion.li>

                  <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Email</h3>
                      <p className="text-gray-300">
                        <Link
                          href="mailto:info@escaperoomstibet.com"
                          className="hover:text-cyan-400 transition-colors"
                        >
                          info@escaperoomstibet.com
                        </Link>
                      </p>
                    </div>
                  </motion.li>

                  <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Opening Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 09:00 AM - 7:00 PM</p>
                      <p className="text-gray-300">Saturday - Sunday: 09:00 - 7:30 PM</p>
                    </div>
                  </motion.li>
                </ul>

                <div className="mt-8 pt-8 border-t border-[#222]">
                  <h3 className="font-bold text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
                      className="w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-[#333] hover:border-cyan-500 transition-colors"
                      aria-label="Escape Rooms Tibet on Facebook (opens in a new tab)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Map */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="bg-[#111] rounded-xl border border-[#222] p-8 h-[400px] relative overflow-hidden"
              >
                <h2 className="text-2xl font-bold mb-4 text-white">Find Us</h2>
                <div className="absolute inset-0 pt-16 px-8 pb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14092.750377749018!2d86.9253667!3d27.988156449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2snz!4v1774825629232!5m2!1sen!2snz"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "0.5rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mt Everest on Google Maps"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 