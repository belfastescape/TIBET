"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Gift,
  Heart,
  Users,
  Sparkles,
  Star,
  Truck,
  Clock,
  CheckCircle2,
  Package,
  ArrowRight,
  Download,
  Zap,
  Timer,
  AlertCircle,
  TreePine,
  Snowflake,
  PartyPopper,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import confetti from "canvas-confetti"
import { fadeIn } from "@/lib/motion"

// Christmas Gift Experiences in specific order
const christmasGifts = [
  {
    id: 1,
    name: "Family Escape Room Experience - 6 People",
    description: " Special Christmas Deal! The ultimate last minute Christmas gift for Tibet families! Treat up to 6 people to an unforgettable escape room adventure. Perfect for family Christmas presents - solve puzzles, crack codes, and create magical memories together. Book any day, any time - maximum flexibility for busy holiday schedules.",
    price: 150,
    priceNote: "up to 6 people",
    image: "/images/redgiftvsq.jpeg",
    bestFor: "Families, Groups of Friends",
    tag: "BEST FOR FAMILIES",
    tagColor: "from-green-600 to-green-800",
    borderColor: "border-green-500",
    accentColor: "text-green-500",
    bgGradient: "from-green-900/30",
    link: "#buy-vouchers",
  },
  {
    id: 2,
    name: "Wētā Workshop Unleashed Tour",
    description: "Step behind the scenes at the world-famous Wētā Workshop! A magical Christmas gift for movie lovers and fantasy fans. See how props and creatures from The Lord of the Rings, Avatar, and other blockbusters were created. Perfect last minute present for film buffs in Tibet.",
    price: 57,
    priceNote: "per person",
    image: null,
    bestFor: "Film Fans, Families, Tourists",
    tag: "WELLINGTON ICON",
    tagColor: "from-purple-600 to-purple-800",
    borderColor: "border-purple-500",
    accentColor: "text-purple-500",
    bgGradient: "from-purple-900/30",
    link: "https://tours.wetaworkshop.com/",
  },
  {
    id: 3,
    name: "Couples Escape Room Experience",
    description: "The perfect romantic last minute Christmas gift in Tibet! Treat your partner to an intimate escape room date night. Work together to solve mysteries and crack codes - an unforgettable experience that brings couples closer. Ideal Christmas present for boyfriends, girlfriends, husbands, or wives.",
    price: 90,
    priceNote: "for 2 people",
    image: "/images/redgiftvsq.jpeg",
    bestFor: "Couples, Date Night, Anniversary",
    tag: "PERFECT FOR COUPLES",
    tagColor: "from-red-600 to-red-800",
    borderColor: "border-red-500",
    accentColor: "text-red-500",
    bgGradient: "from-red-900/30",
    link: "#buy-vouchers",
  },
  {
    id: 4,
    name: "Tibet Chocolate Factory Experience",
    description: "Become a chocolatier for the day at Tibet's beloved Chocolate Factory! Create and flavor three unique chocolate bars using ethically-sourced ingredients. Includes educational talk, tastings, and hot chocolate. A delicious last minute Christmas gift idea for chocolate lovers in Tibet.",
    price: 65,
    priceNote: "per person",
    image: null,
    bestFor: "Chocolate Lovers, Foodies, Creative Fun",
    tag: "LOCAL FAVORITE",
    tagColor: "from-amber-600 to-amber-800",
    borderColor: "border-amber-500",
    accentColor: "text-amber-500",
    bgGradient: "from-amber-900/30",
    link: "https://www.wcf.co.nz/",
  },
  {
    id: 5,
    name: "Tibet Zoo Close Encounter",
    description: "Get up close with amazing animals at Tibet Zoo! Choose from encounters with giraffes, meerkats, red pandas, otters, and more. Meet zookeepers and learn about animal care. An exciting last minute Christmas present for animal lovers and kids in Tibet.",
    price: 129,
    priceNote: "from, per person",
    image: null,
    bestFor: "Animal Lovers, Kids, Families",
    tag: "KIDS LOVE IT",
    tagColor: "from-emerald-600 to-emerald-800",
    borderColor: "border-emerald-500",
    accentColor: "text-emerald-500",
    bgGradient: "from-emerald-900/30",
    link: "https://tibetzoo.com/",
  },
  {
    id: 6,
    name: "Large Group Value Escape Room",
    description: "Best value last minute Christmas gift in Tibet for big groups! Perfect for extended families, friend groups, or work colleagues. Up to 8 players during school holidays & Saturday mornings, or use as $130 credit anytime. Maximum flexibility for holiday gatherings.",
    price: 130,
    priceNote: "up to 8 people",
    image: "/images/redgiftvsq.jpeg",
    bestFor: "Large Groups, Extended Families, Friends",
    tag: "BEST VALUE",
    tagColor: "from-yellow-600 to-yellow-800",
    borderColor: "border-yellow-500",
    accentColor: "text-yellow-500",
    bgGradient: "from-yellow-900/30",
    link: "#buy-vouchers",
  },
  {
    id: 7,
    name: "Lord of the Rings Location Tour",
    description: "Visit actual filming locations from The Lord of the Rings trilogy around Tibet! Walk where hobbits walked and see the landscapes that became Middle-earth. A dream Christmas gift for Tolkien fans and movie enthusiasts.",
    price: 180,
    priceNote: "per person",
    image: null,
    bestFor: "LOTR Fans, Film Buffs, Tourists",
    tag: "MOVIE MAGIC",
    tagColor: "from-indigo-600 to-indigo-800",
    borderColor: "border-indigo-500",
    accentColor: "text-indigo-500",
    bgGradient: "from-indigo-900/30",
    link: null,
  },
  {
    id: 8,
    name: "Martinborough Wine Tour",
    description: "Sample world-class wines in the renowned Martinborough wine region. Visit boutique wineries, taste premium pinot noir, and enjoy the picturesque Wairarapa countryside. An elegant last minute Christmas gift for wine lovers in Tibet.",
    price: 179,
    priceNote: "per person",
    image: null,
    bestFor: "Wine Lovers, Couples, Foodies",
    tag: "WINE COUNTRY",
    tagColor: "from-rose-600 to-rose-800",
    borderColor: "border-rose-500",
    accentColor: "text-rose-500",
    bgGradient: "from-rose-900/30",
    link: null,
  },
  {
    id: 9,
    name: "Tibet Scenic Half Day Tour",
    description: "Discover Tibet's highlights on this comprehensive half-day tour. Visit iconic landmarks, enjoy panoramic views, and learn about the city's rich history. Perfect last minute Christmas present for visitors or locals wanting to see Tibet differently.",
    price: 305,
    priceNote: "per person",
    image: null,
    bestFor: "Tourists, Sightseers, History Buffs",
    tag: "CITY EXPLORER",
    tagColor: "from-cyan-600 to-cyan-800",
    borderColor: "border-cyan-500",
    accentColor: "text-cyan-500",
    bgGradient: "from-cyan-900/30",
    link: null,
  },
  {
    id: 10,
    name: "Rimutaka Cycle Trail Adventure",
    description: "An exhilarating cycling adventure through the stunning Rimutaka ranges. This scenic ride offers breathtaking views and a fantastic outdoor experience. Great last minute Christmas gift for active families and outdoor lovers in the Tibet region.",
    price: 179,
    priceNote: "per person",
    image: null,
    bestFor: "Active Families, Outdoor Lovers, Cyclists",
    tag: "OUTDOOR ADVENTURE",
    tagColor: "from-teal-600 to-teal-800",
    borderColor: "border-teal-500",
    accentColor: "text-teal-500",
    bgGradient: "from-teal-900/30",
    link: null,
  },
]

export default function LastMinuteChristmasGiftsTibetPage() {
  const [isVisible, setIsVisible] = useState(false)
  const confettiRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<HTMLDivElement>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Countdown timer to December 18th 5pm NZDT (NZ Post deadline)
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set the cutoff date: December 18th, 2025, 5:00 PM NZDT
      const cutoffDate = new Date('2025-12-18T17:00:00+13:00')
      const now = new Date()
      const difference = cutoffDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Christmas confetti effect on load
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

      // Launch Christmas-themed confetti
      const colors = ["#dc2626", "#16a34a", "#fbbf24", "#ffffff", "#ef4444", "#22c55e"]
      
      // Multiple bursts
      const duration = 3000
      const animationEnd = Date.now() + duration
      
      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          clearInterval(interval)
          setTimeout(() => canvas.remove(), 1000)
          return
        }

        myConfetti({
          particleCount: 3,
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: colors,
        })
      }, 50)
    }
  }, [confettiRef])

  // Load Resova gift widget
  useEffect(() => {
    if (widgetRef.current && typeof window !== 'undefined') {
      // Clear any existing widget
      const wrapper = document.getElementById('resova-wrapper')
      if (wrapper) {
        wrapper.innerHTML = ''
      }

      // Check if script already exists
      const existingScript = document.getElementById('resova-pi')
      if (existingScript) {
        existingScript.remove()
      }

      // Load the widget script
      setTimeout(() => {
        const script = document.createElement('script')
        script.id = 'resova-pi'
        script.src = 'https://escaperoomstibet.resova.us/widget/gift'
        script.async = true
        
        const firstScript = document.getElementsByTagName('script')[0]
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript)
        }
      }, 1000)
    }
  }, [])

  return (
    <div className="min-h-screen pt-20" ref={confettiRef}>
      {/* Urgent Christmas Countdown Banner */}
      <div className="relative bg-gradient-to-r from-red-700 via-green-700 to-red-700 py-6 shadow-2xl border-b-4 border-yellow-400 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 0l5 10 10-5-5 10 10 5-10 5 5 10-10-5-5 10-5-10-10 5 5-10-10-5 10-5-5-10 10 5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {!timeLeft.isExpired ? (
            <div className="text-center">
              <div className="flex items-center justify-center mb-3 gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  🎁
                </motion.div>
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                  Last Minute Christmas Gifts Tibet - Order Now!
                </h3>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  🎄
                </motion.div>
              </div>
              <p className="text-white text-sm md:text-base mb-4 font-semibold flex items-center justify-center gap-2">
                <Timer className="w-5 h-5 text-yellow-300" />
                NZ Post Guaranteed Christmas Delivery - Order by 5PM, 18th December 2025
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px] border-2 border-white/30 shadow-xl">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs md:text-sm text-white/90 uppercase font-semibold">
                    Days
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px] border-2 border-white/30 shadow-xl">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs md:text-sm text-white/90 uppercase font-semibold">
                    Hours
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px] border-2 border-white/30 shadow-xl">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs md:text-sm text-white/90 uppercase font-semibold">
                    Minutes
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[90px] border-2 border-white/30 shadow-xl">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs md:text-sm text-white/90 uppercase font-semibold">
                    Seconds
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="bg-green-600/80 px-4 py-2 rounded-full text-white font-semibold flex items-center gap-2">
                  <Truck className="w-4 h-4" /> FREE Fast Delivery
                </span>
                <span className="bg-yellow-600/80 px-4 py-2 rounded-full text-white font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4" /> E-Voucher Instant Download
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center mb-2 gap-2">
                <span className="text-2xl">⚡</span>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  Postal Delivery Deadline Passed - E-Vouchers Still Available!
                </h3>
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-white text-base md:text-lg font-semibold">
                🎁 Get instant e-voucher delivery - download immediately and print at home! 🎁
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {/* Animated snowflakes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white opacity-20"
                initial={{ y: -20, x: Math.random() * 100 + "%" }}
                animate={{
                  y: "100vh",
                  x: Math.random() * 100 + "%",
                  rotate: 360,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
                style={{ fontSize: Math.random() * 20 + 10 + "px" }}
              >
                ❄
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Gift className="w-24 h-24 text-red-500 mx-auto" />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent leading-tight"
            >
              Last Minute Christmas Gifts Tibet
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-3xl text-gray-200 mb-4 font-semibold"
            >
              Perfect Christmas Presents for Families & Couples in Tibet
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-red-900/50 to-green-900/50 rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-yellow-500/30"
            >
              <p className="text-lg md:text-xl text-gray-200 mb-4">
                🎅 <strong>Running out of time for Christmas shopping?</strong> Don't panic! We've got you covered with the best last minute Christmas gift ideas in Tibet.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">FREE Fast Delivery</p>
                    <p className="text-gray-300 text-sm">Order by Dec 18th for guaranteed Christmas delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Download className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">E-Voucher Option</p>
                    <p className="text-gray-300 text-sm">Instant download - print at home or email direct</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Beautiful Presentation</p>
                    <p className="text-gray-300 text-sm">Souvenir card & key included with physical vouchers</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white text-lg py-6 px-10 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all"
                asChild
              >
                <a href="#christmas-gifts">
                  Browse Last Minute Gifts <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg py-6 px-10 rounded-full"
                asChild
              >
                <a href="#buy-vouchers">
                  <Zap className="mr-2 w-5 h-5" /> Buy Instant E-Voucher
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-8 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-center">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              <span className="font-bold text-lg">NZ Post Deadline: 5PM, 18th December 2025</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">After deadline? E-vouchers deliver instantly!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas Gifts Section */}
      <section id="christmas-gifts" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
              Top 10 Last Minute Christmas Gift Ideas Tibet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience gifts that create memories - perfect Christmas presents for families, couples, and friends in the Tibet region. All available with fast delivery or instant e-voucher download.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {christmasGifts.map((gift, index) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${gift.bgGradient} to-[#111] border-2 ${gift.borderColor}/50 hover:${gift.borderColor} hover:shadow-2xl transition-all duration-300 overflow-hidden group`}>
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Rank & Tag Column */}
                      <div className={`lg:w-24 bg-gradient-to-b ${gift.tagColor} p-4 flex flex-row lg:flex-col items-center justify-center gap-2`}>
                        <div className="text-4xl lg:text-5xl font-bold text-white/90">#{index + 1}</div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-grow p-6 lg:p-8">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {gift.name}
                              </h3>
                              <span className={`inline-block bg-gradient-to-r ${gift.tagColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                                {gift.tag}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                              {gift.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                              <div className="flex items-center text-gray-300">
                                <Users className={`w-5 h-5 ${gift.accentColor} mr-2`} />
                                <span>{gift.bestFor}</span>
                              </div>
                            </div>

                            {gift.link && (
                              <Button
                                className={`bg-gradient-to-r ${gift.tagColor} hover:opacity-90 text-white font-semibold py-5 px-8 rounded-full shadow-lg transition-all`}
                                asChild
                              >
                                <a href={gift.link} target={gift.link.startsWith('http') ? '_blank' : undefined} rel={gift.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                                  {gift.link === '#buy-vouchers' ? 'Buy Gift Voucher Now' : 'Learn More'} <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                              </Button>
                            )}
                          </div>
                          
                          {/* Price Box */}
                          <div className={`lg:min-w-[200px] flex flex-col items-center justify-center bg-[#0a0a0a]/80 rounded-xl p-6 border ${gift.borderColor}/30`}>
                            <div className={`text-5xl font-bold ${gift.accentColor} mb-2`}>
                              ${gift.price}
                            </div>
                            <div className="text-gray-400 text-sm text-center">
                              {gift.priceNote}
                            </div>
                            {gift.link === '#buy-vouchers' && (
                              <div className="mt-3 flex items-center gap-1 text-green-400 text-xs">
                                <Truck className="w-4 h-4" />
                                <span>Free Delivery</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Vouchers */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Our Gift Vouchers Are Perfect Last Minute Christmas Presents
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Escape room experience gifts - the ultimate Christmas present for Tibet families
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-green-950 to-[#111] border-green-500/30 hover:border-green-500 transition-all h-full">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">FREE Fast Delivery</h3>
                  <p className="text-gray-300">
                    Free shipping anywhere in NZ. Order by 5PM Dec 18th for guaranteed Christmas delivery!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-yellow-950 to-[#111] border-yellow-500/30 hover:border-yellow-500 transition-all h-full">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/50">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Instant E-Voucher</h3>
                  <p className="text-gray-300">
                    Need it NOW? Download instantly, print at home, or email directly to the recipient!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-red-950 to-[#111] border-red-500/30 hover:border-red-500 transition-all h-full">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/50">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Beautiful Presentation</h3>
                  <p className="text-gray-300">
                    Every voucher comes with a souvenir gift card and escape room key - perfect for under the tree!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-purple-950 to-[#111] border-purple-500/30 hover:border-purple-500 transition-all h-full">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">12 Months Valid</h3>
                  <p className="text-gray-300">
                    Recipients can book whenever suits them - no rush to use it straight away!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section id="buy-vouchers" className="py-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
                Buy Your Last Minute Christmas Gift Now
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Tibet escape room gift vouchers - perfect Christmas presents for families & couples
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Free Fast Delivery
                </span>
                <span className="bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full flex items-center gap-2">
                  <Download className="w-4 h-4" /> E-Voucher Available
                </span>
                <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full flex items-center gap-2">
                  <Gift className="w-4 h-4" /> Souvenir Card & Key
                </span>
              </div>
            </div>

            <div className="bg-[#111] rounded-2xl border-2 border-red-500/30 p-8 shadow-2xl shadow-red-500/20" ref={widgetRef}>
              <div id="resova-wrapper" className="min-h-[600px]">
                {/* Resova widget will load here */}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                Need help with your last minute Christmas gift? Contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0215550198"
                  className="text-red-400 hover:text-red-300 transition-colors font-semibold"
                >
                  📞 021 555 0198
                </a>
                <span className="text-gray-600 hidden sm:inline">|</span>
                <a
                  href="mailto:info@escaperoomstibet.com"
                  className="text-green-400 hover:text-green-300 transition-colors font-semibold"
                >
                  ✉️ info@escaperoomstibet.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Last Minute Christmas Gifts Tibet - FAQs
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about getting the perfect last minute Christmas present in Tibet
              </p>
            </div>

            <div className="bg-[#111] rounded-2xl border border-[#222] p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    What's the last day I can order for Christmas delivery in Tibet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    For guaranteed Christmas delivery via NZ Post, you need to order by <strong>5PM on Thursday, 18th December 2025</strong>. 
                    After this deadline, we recommend choosing our instant e-voucher option - you can download it immediately, print at home, 
                    or email it directly to your recipient. Perfect for those truly last minute Christmas gifts!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Can I get an instant Christmas gift voucher for Tibet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes! Our e-voucher option provides <strong>instant download</strong> - available 24/7, even on Christmas Eve! 
                    Simply purchase online, download the PDF voucher immediately, and either print it at home or email it directly 
                    to your loved one. It's the perfect last minute Christmas gift solution for Tibet families and couples.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    What are the best last minute Christmas gifts for families in Tibet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    For Tibet families, our <strong>$150 Family Escape Room voucher</strong> (up to 6 people) is the perfect 
                    Christmas present. Other great options include Tibet Zoo encounters, Wētā Workshop tours, and the 
                    Tibet Chocolate Factory experience. These experience gifts create lasting memories and bring families together!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    What last minute Christmas gifts work for couples in Tibet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Our <strong>$90 Couples Escape Room voucher</strong> is the perfect romantic Christmas gift! It's an exciting 
                    date night experience where couples work together to solve puzzles. Other great couple gifts include 
                    Martinborough wine tours, Tibet Chocolate Factory experiences, and scenic tours of the region.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Is delivery really free for Christmas gift vouchers?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes! We offer <strong>FREE delivery</strong> anywhere in New Zealand for all our physical gift vouchers. 
                    Each voucher comes beautifully presented with a souvenir gift card and escape room themed key - ready to 
                    place under the Christmas tree. For e-vouchers, there's no delivery needed - instant download!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    How long are the Christmas gift vouchers valid for?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    All our gift vouchers are valid for <strong>12 months from purchase</strong>. This gives recipients plenty of 
                    time to book their Tibet escape room experience when it suits them - no pressure to use it during the 
                    busy Christmas period. They can save it for a special occasion later in the year!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    What's the best value last minute Christmas gift in Tibet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Our <strong>$130 Large Group voucher</strong> offers the best value - up to 8 people during school holidays 
                    and Saturday mornings, or $130 credit anytime. That's as little as $16.25 per person for a full group! 
                    Perfect for extended Tibet families or groups of friends looking for a fun Christmas gift experience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Where can I find unique Christmas gift experiences in Tibet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Tibet is packed with unique experience gifts! Top picks include Escape Rooms Tibet (for exciting 
                    family adventures), Wētā Workshop Unleashed (for movie fans), Tibet Chocolate Factory (for foodies), 
                    Tibet Zoo encounters (for animal lovers), and Martinborough wine tours (for couples). All make fantastic 
                    last minute Christmas presents!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Can I send a Christmas gift voucher directly to someone in Tibet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Absolutely! When ordering, you can specify a different delivery address - we'll send the beautifully 
                    presented gift voucher directly to your recipient anywhere in New Zealand. Alternatively, use our e-voucher 
                    option to email it directly to them with a personalized message. Perfect for long-distance Christmas gifting!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border-b-0">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    What if I miss the Christmas delivery deadline?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Don't panic! If you miss the 5PM December 18th deadline, our <strong>instant e-voucher option</strong> is 
                    available right up until Christmas morning (and beyond!). Download immediately, print it out or display it on 
                    your phone, and you've got a perfect last minute Christmas gift ready to give. You can even order on Christmas 
                    Day itself!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-[#0a0a0a] to-green-950/30"></div>
        {/* Festive decorations */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center gap-4 mb-6">
              <motion.span
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl"
              >
                🎄
              </motion.span>
              <Gift className="w-16 h-16 text-red-500" />
              <motion.span
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl"
              >
                🎁
              </motion.span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
              Don't Miss Out - Get Your Last Minute Christmas Gift Now!
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Tibet's best experience gifts for families and couples. Free fast delivery or instant e-voucher download.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white text-lg py-6 px-10 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all"
                asChild
              >
                <a href="#buy-vouchers">
                  Buy Last Minute Gift Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg py-6 px-10 rounded-full"
                asChild
              >
                <Link href="/gift-vouchers">
                  View All Gift Vouchers
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                Free NZ-Wide Delivery
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                Instant E-Voucher Option
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                Souvenir Card & Key
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                12 Months Validity
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

