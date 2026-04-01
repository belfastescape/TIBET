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
  Key,
  CreditCard,
  CheckCircle2,
  Package,
  Clock,
  ArrowRight,
  Download,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import confetti from "canvas-confetti"
import { fadeIn } from "@/lib/motion"

export default function GiftVouchersPage() {
  const [isVisible, setIsVisible] = useState(false)
  const confettiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
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

  return (
    <div className="min-h-screen pt-20" ref={confettiRef}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-[#0a0a0a] to-green-950 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fillRule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ef4444%27%20fillOpacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
          {/* Animated snowflakes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white opacity-30"
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
              <Gift className="w-20 h-20 text-red-500 mx-auto" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent"
            >
              Christmas Gift Vouchers Tibet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-3xl text-gray-200 mb-4 font-semibold"
            >
              Gift Cards Tibet - The Perfect Experience for Families & Couples
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Give the gift of adventure this Christmas! Our escape room gift cards and vouchers make unforgettable gift ideas in
              Tibet - perfect for those looking for unique experience gift cards.
            </motion.p>
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
                <a href="#buy-vouchers">
                  Buy Gift Vouchers <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Every Gift Card & Voucher Includes
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Tibet gift cards come with premium presentation and free delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-red-950 to-[#111] border-red-500/30 hover:border-red-500 transition-all h-full">
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/50">
                    <Package className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Souvenir Gift Card</h3>
                  <p className="text-gray-300 text-lg">
                    Beautiful physical souvenir gift card and key that makes the perfect present to unwrap on Christmas morning
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
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/50">
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Free Shipping</h3>
                  <p className="text-gray-300 text-lg">
                    Complimentary delivery anywhere in New Zealand - we'll send it straight to your door
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
              <Card className="bg-gradient-to-br from-green-950 to-[#111] border-green-500/30 hover:border-green-500 transition-all h-full">
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/50">
                    <Download className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">E-Voucher Option</h3>
                  <p className="text-gray-300 text-lg">
                    Need it now? Choose instant PDF download - immediately available for last-minute gifts
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voucher Types Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
              Choose Your Perfect Gift Card
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer two flexible gift card and voucher options for Tibet's best escape room experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 2 Player Voucher */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-red-900/30 to-[#111] border-2 border-red-500/50 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 h-full group">
                <CardContent className="pt-8 pb-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">Couples Voucher</h3>
                    <div className="text-5xl font-bold text-red-500 mb-2">$90</div>
                    <p className="text-gray-400">Perfect for Couples</p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Intimate escape room experience</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Date night adventure</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Valid for any room</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Romantic gift idea</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <span className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular for Couples
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Value Vouchers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/30 to-[#111] border-2 border-cyan-500/50 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 h-full group">
                <CardContent className="pt-8 pb-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <CreditCard className="w-16 h-16 text-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">Value Vouchers</h3>
                    <div className="text-3xl font-bold text-cyan-500 mb-2">$50 • $100</div>
                    <div className="text-3xl font-bold text-cyan-500 mb-2">$150 • $200</div>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Choose these  dollar amounts</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use towards any booking</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Combine multiple vouchers</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Perfect for any budget</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                      Ultimate Flexibility
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video & Image Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              See What Makes Our Gift Vouchers Special
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every voucher comes beautifully presented and ready to gift
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20 border-2 border-red-500/30"
            >
              <video
                className="w-full h-auto aspect-square object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/videos/optimised/GIFT-VOUCHER-ANIMATED.webm" type="video/webm" />
                <source src="/videos/GIFT-VOUCHER-ANIMATED.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Gift Voucher & Key Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20 border-2 border-green-500/30"
            >
              <Image
                src="/images/redgiftvsq.jpeg"
                alt="Gift Voucher and Souvenir Key"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purchase Process Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How to Purchase Your Gift Card
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, secure, and ready to delight - three easy steps to the perfect gift card
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <Card className="bg-[#111] border-red-500/30 hover:border-red-500 transition-all h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                </div>
                <CardContent className="pt-12 text-center">
                  <CreditCard className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Purchase Online</h3>
                  <p className="text-gray-300">
                    Select your voucher type and complete your purchase through our secure booking widget below
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <Card className="bg-[#111] border-green-500/30 hover:border-green-500 transition-all h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                </div>
                <CardContent className="pt-12 text-center">
                  <Truck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">We Contact You</h3>
                  <p className="text-gray-300">
                    After your purchase, we'll reach out to confirm your delivery address for the souvenir voucher
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <Card className="bg-[#111] border-yellow-500/30 hover:border-yellow-500 transition-all h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                </div>
                <CardContent className="pt-12 text-center">
                  <Package className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Receive Your Gift</h3>
                  <p className="text-gray-300">
                    We'll send your beautiful souvenir voucher and key with free shipping anywhere in New Zealand
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
                Purchase Your Gift Card
              </h2>
              <p className="text-xl text-gray-300">
                Select your gift card type and complete your purchase below
              </p>
            </div>

            <div className="bg-[#111] rounded-2xl border-2 border-red-500/30 p-8 shadow-2xl shadow-red-500/20">
              <div className="flex flex-col items-center justify-center text-center min-h-[600px]">
                <p className="text-2xl font-bold text-white mb-3">Gift Voucher Booking System Placeholder</p>
                <p className="text-gray-400 text-lg mb-2">Replace this section with your gift voucher / booking system.</p>
                <p className="text-gray-500 text-sm">e.g. <code className="text-cyan-400">YOUR_BOOKING_SYSTEM_URL</code></p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                Need assistance? Contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Why Choose Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Tibet Locals Choose Our Gift Cards & Vouchers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our gift cards Tibet - the perfect experience gift idea for anyone on your Christmas list
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-[#111] border-[#222] hover:border-red-500/50 transition-all">
              <CardContent className="pt-6">
                <Heart className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Perfect for Couples</h3>
                <p className="text-gray-300">
                  Our escape rooms make an exciting date night or anniversary gift - a unique Tibet experience for two
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-green-500/50 transition-all">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Great for Families</h3>
                <p className="text-gray-300">
                  Bring the whole family together for an unforgettable adventure - gift experiences that create lasting memories
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-yellow-500/50 transition-all">
              <CardContent className="pt-6">
                <Sparkles className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Unique Gift Card Idea</h3>
                <p className="text-gray-300">
                  Tired of giving boring gifts? Our experience gift cards are one of Tibet's top activity gift ideas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-cyan-500/50 transition-all">
              <CardContent className="pt-6">
                <Clock className="w-10 h-10 text-cyan-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Flexible Gift Cards</h3>
                <p className="text-gray-300">
                  Recipients can book at their convenience - gift cards valid for 12 months with easy online booking
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-purple-500/50 transition-all">
              <CardContent className="pt-6">
                <Star className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">5-Star Rated</h3>
                <p className="text-gray-300">
                  Tibet's top-rated escape rooms - hundreds of happy customers and glowing reviews
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-pink-500/50 transition-all">
              <CardContent className="pt-6">
                <Gift className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Beautiful Presentation</h3>
                <p className="text-gray-300">
                  Premium gift card and souvenir key make this a present they'll be excited to open
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
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
                Gift Card & Voucher FAQs
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our Tibet gift cards and vouchers
              </p>
            </div>

            <div className="bg-[#111] rounded-2xl border border-[#222] p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    How long are the gift vouchers valid for?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    All gift vouchers are valid for 12 months from the date of purchase. This gives recipients plenty of
                    time to choose their preferred date and book their escape room adventure in Tibet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    How quickly will the voucher be delivered?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    After purchase, we'll contact you to arrange delivery. Typically, vouchers are dispatched within 1-2
                    business days and arrive within 3-5 business days for Tibet addresses. For urgent Christmas gifts,
                    please contact us directly and we can arrange faster delivery options.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Can vouchers be used for any escape room?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes! All our gift vouchers can be used for any of our three exciting escape rooms: Operation Pitt,
                    The Billion Dollar Heist, or Quest for the Ancient Tomb. The recipient can choose which Tibet escape room
                    experience suits them best.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Can I combine multiple value vouchers?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Absolutely! Multiple value vouchers ($50, $100, $150, or $200) can be combined towards a single booking.
                    This makes them perfect if you're unsure of exactly how many people will be playing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Is shipping really free?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes! We offer complimentary shipping anywhere in New Zealand. Every gift voucher comes with a beautiful
                    souvenir gift card and escape room themed key, delivered to your door at no extra cost.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Are these suitable as Christmas gifts?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Perfect for Christmas! Our gift vouchers are one of Tibet's most popular gift experience ideas for
                    the holiday season. They're great for couples, families, friends, and anyone who loves adventure and
                    problem-solving. The physical voucher and key make it a tangible present to open on Christmas morning.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7b" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    Are gift cards and gift vouchers the same thing?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes! Our gift cards Tibet are the same as our gift vouchers. Whether you call them gift cards or vouchers, 
                    they work exactly the same way. Each gift card comes as both a physical souvenir card with a key that's perfect 
                    for gifting, plus the booking details. Our Tibet gift cards make ideal experience gifts for any occasion!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-b-0">
                  <AccordionTrigger className="text-white hover:text-red-400 text-left">
                    How do recipients book their experience?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    It's easy! Recipients can book online through our website or contact us by email. They simply provide their
                    voucher code during booking. We'll guide them through choosing their escape room, date, and time. Our
                    Tibet escape rooms are conveniently located in the city centre.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-[#0a0a0a] to-green-950/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <Gift className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Give the Gift of Adventure This Christmas
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Tibet's best gift cards and experience gift ideas start here. Perfect for families, couples, and anyone who loves
              unique adventures.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white text-lg py-6 px-10 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all"
                asChild
              >
                <a href="#buy-vouchers">
                  Buy Gift Vouchers Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 text-lg py-6 px-10 rounded-full"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                Free Shipping NZ-Wide
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

