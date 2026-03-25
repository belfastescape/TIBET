"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Cake,
  PartyPopper,
  Clock,
  Users,
  CalendarCheck,
  Sparkles,
  Gift,
  ArrowRight,
  BadgeDollarSign,
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"


const SUBJECT_LABEL = "Teenage Birthday Party Enquiry"

export default function TeenageBirthdayPartiesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const confettiRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECT_LABEL,
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
        setFormData({ name: "", email: "", phone: "", subject: SUBJECT_LABEL, message: "" })
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

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (confettiRef.current) {
      const canvas = document.createElement("canvas")
      canvas.style.position = "fixed"
      canvas.style.inset = "0"
      canvas.style.width = "100vw"
      canvas.style.height = "100vh"
      canvas.style.pointerEvents = "none"
      canvas.style.zIndex = "100"
      document.body.appendChild(canvas)

      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true,
      })

      // Launch confetti
      myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#22d3ee", "#10b981", "#f472b6", "#f59e0b", "#8b5cf6"],
      })

      // Clean up
      setTimeout(() => {
        canvas.remove()
      }, 3000)
    }
  }, [confettiRef])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a0a] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fillRule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%2322d3ee%27%20fillOpacity%3D%270.2%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <PartyPopper className="w-16 h-16 text-pink-400 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
              Teenage Birthday Parties in Tibet
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most exciting and memorable birthday experience in Tibet from just $25 per person!
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                The Ultimate Tibet Teenage Birthday Party Activity
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Escape Rooms Tibet is a great idea for fun teenage birthday parties in Tibet City Centre.
              </p>
              <p className="text-gray-300 mb-6">
                Escape rooms are one of the most popular teenage birthday activities, offering an exciting, immersive
                experience that creates lasting memories.
              </p>
              <p className="text-gray-300 mb-6">
                While some escape rooms charge up to $45 per person, we&apos;ve set our prices at just{" "}
                <span className="text-pink-400 font-bold">$25 per person</span> for teenage parties booked Sunday to
                Friday. On Saturdays, we charge $28 per person for under 16&apos;s - still a great deal compared to
                other escape rooms in town!
              </p>
              <p className="text-gray-300 mb-6">Our escape rooms can take up to 8 players in the one room.</p>
              <p className="text-gray-300 mb-6">
                If you have more than 8 people, we have 2 identical rooms so that larger groups can take part in a team
                challenge.. ie if you have 10 players, they can split into 2 teams 5 vs 5 and challenge the other team
                to see who escapes first.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-[#111] rounded-xl border border-[#222] p-4 flex items-start">
                  <Clock className="w-10 h-10 text-cyan-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">80 Minutes</h3>
                    <p className="text-gray-400">Fun-filled activity</p>
                  </div>
                </div>

                <div className="bg-[#111] rounded-xl border border-[#222] p-4 flex items-start">
                  <Users className="w-10 h-10 text-cyan-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">Up to 8 Players</h3>
                    <p className="text-gray-400">Per escape room</p>
                  </div>
                </div>

                <div className="bg-[#111] rounded-xl border border-[#222] p-4 flex items-start">
                  <BadgeDollarSign className="w-10 h-10 text-cyan-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">$25 Per Person</h3>
                    <p className="text-gray-400">$28 on Saturdays</p>
                  </div>
                </div>

                <div className="bg-[#111] rounded-xl border border-[#222] p-4 flex items-start">
                  <CalendarCheck className="w-10 h-10 text-cyan-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">Ages 12+</h3>
                    <p className="text-gray-400">Perfect for teenagers. Under 14's games work best are best with an adult helping out. </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" ref={confettiRef}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <Image
                  src="/images/teenage-birthday-party.png"
                  alt="Teenagers celebrating a birthday party"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full transform rotate-12">
                  Only $25pp!
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#111] rounded-xl border border-[#222] p-4 shadow-xl">
                <div className="flex items-center">
                  <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
                  <p className="text-white font-bold">Unforgettable Memories!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Birthday Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how other birthday groups have enjoyed their escape room adventure!
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 max-w-4xl mx-auto">
            <Image
              src="/images/teenage-escape-success.png"
              alt="Teenagers celebrating their successful escape"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">They Escaped!</h3>
                <p className="text-gray-300">
                  Our birthday groups love the thrill of solving puzzles and escaping together!
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#111] rounded-xl border border-[#222] p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Team Challenge</h3>
              </div>
              <p className="text-gray-300">
                If you have more than 8 people, we have 2 identical rooms so larger groups can take part in a team
                challenge. With 10 players, split into 2 teams of 5 vs 5 and see who escapes first!
              </p>
            </div>

            <div className="bg-[#111] rounded-xl border border-[#222] p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Cake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Be the Best Mum / Dad!</h3>
              </div>
              <p className="text-gray-300">
                The kids love doing our escape rooms, especially when they get to invite all of their friends! Be the
                best mum / dad in the world and book your birthday escape now. The kids will love you for doing it.
              </p>
            </div>

            <div className="bg-[#111] rounded-xl border border-[#222] p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Perfect Gift</h3>
              </div>
              <p className="text-gray-300">
                Looking for a gift idea? We offer gift vouchers that make the perfect present for teenagers who love
                adventure and problem-solving challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section id="booking-info" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                How to Book Your Birthday Party
              </h2>
              <p className="text-xl text-gray-300">
                Booking your birthday escape  adventure is easy! Follow these simple steps:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#111] rounded-xl border border-[#222] p-6 relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center absolute -top-6 left-6">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-4">Choose Your Date</h3>
                <p className="text-gray-300">
                  Select your preferred date and time for the birthday party. We recommend booking at least 2 weeks in
                  advance to secure your spot.
                </p>
              </div>

              <div className="bg-[#111] rounded-xl border border-[#222] p-6 relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center absolute -top-6 left-6">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-4">Pay Deposit</h3>
                <p className="text-gray-300">
                  We ask for a $90 refundable deposit to be paid at least 7 days in advance. The remaining balance is
                  due on the day of the party.
                </p>
              </div>

              <div className="bg-[#111] rounded-xl border border-[#222] p-6 relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center absolute -top-6 left-6">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-4">Enjoy Your Party!</h3>
                <p className="text-gray-300">
                  Arrive 10 minutes before your scheduled time. Our game masters will brief your group and guide you
                  through an unforgettable birthday experience.
                </p>
              </div>
            </div>

            <div className="bg-[#111] rounded-xl border border-[#222] p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CalendarCheck className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Book Your Birthday Adventure?</h3>
                  <p className="text-gray-300">
                    Contact us today to check availability and secure your booking. Our friendly team is ready to help
                    make your birthday celebration unforgettable!
                  </p>
                </div>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-6 py-3 flex-shrink-0"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about birthday parties at Escape Rooms Tibet
              </p>
            </div>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#111] border border-[#222] rounded-lg p-1 mb-8">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-md"
                >
                  General Questions
                </TabsTrigger>
                <TabsTrigger
                  value="booking"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-md"
                >
                  Booking &amp; Payment
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">What age is suitable for escape rooms?</h3>
                      <p className="text-gray-300">
                        Our escape rooms are suitable for ages 12 and up. Teenagers particularly enjoy the challenge and
                        excitement of solving puzzles against the clock. Groups under 14yrs work best with an adult helping out. younger kids can come along and have fun with the rest of the family, but we dont recommend escape rooms for groups of 10 year olds. 
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">How many people can participate?</h3>
                      <p className="text-gray-300">
                        Each escape room can accommodate 2-8 players. For larger groups, we can split you into teams and
                        you can compete to see who escapes first!
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">How long does the experience last?</h3>
                      <p className="text-gray-300">
                        The escape room itself lasts 60 minutes. With briefing and debriefing, you should allow
                        approximately 80 minutes for the complete experience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">Are the rooms scary?</h3>
                      <p className="text-gray-300">
                        Our rooms are designed to be exciting and challenging, not scary. We focus on puzzles and
                        adventure rather than fear factors, making them perfect for birthday celebrations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="booking" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">How far in advance should we book?</h3>
                      <p className="text-gray-300">
                        We recommend booking at least 2 weeks in advance for birthday parties, especially for weekend
                        slots which tend to fill up quickly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">What is the deposit policy?</h3>
                      <p className="text-gray-300">
                        We require a $90 refundable deposit to secure your booking. The remaining balance is due on the
                        day of the party.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">Can we bring food and drinks?</h3>
                      <p className="text-gray-300">
                        Food and drinks are not allowed in the escape rooms themselves, but we can recommend nearby
                        cafes and restaurants for before or after your escape room experience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold text-white mb-2">Do you offer gift vouchers?</h3>
                      <p className="text-gray-300">
                        Yes, we offer gift vouchers that make perfect birthday presents. These can be purchased online
                        or at our location and are valid for 12 months.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block mb-6">
                <PartyPopper className="w-16 h-16 text-pink-400 mx-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
                Ready for an Unforgettable Birthday?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Send us a message to check availability and book your teenage birthday party. Special rates starting at just $25 per person!
              </p>
            </div>

            <div className="bg-[#111] rounded-xl border border-[#222] p-6 md:p-8">
              <h3 className="text-xl font-bold mb-2 text-white">Contact us</h3>
              <p className="text-gray-400 text-sm mb-6">We&apos;ll get back to you about availability and party options.</p>

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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tbp-name" className="text-gray-300 text-sm font-medium">Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        id="tbp-name"
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
                    <Label htmlFor="tbp-phone" className="text-gray-300 text-sm font-medium">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        id="tbp-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tbp-email" className="text-gray-300 text-sm font-medium">Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="tbp-email"
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
                <div className="space-y-2">
                  <Label htmlFor="tbp-subject" className="text-gray-300 text-sm font-medium">Teenage Birthday Party Enquiry</Label>
                  <Input
                    id="tbp-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                    placeholder={SUBJECT_LABEL}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tbp-message" className="text-gray-300 text-sm font-medium">Message *</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <Textarea
                      id="tbp-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                      placeholder="Preferred date, group size, and any questions..."
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
          </div>
        </div>
      </section>
    </div>
  )
}
