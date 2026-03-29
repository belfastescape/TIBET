"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Mail, MapPin, ChevronRight, Gift, Calendar, DollarSign, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Gift Vouchers + Website Use
            </p>
            <p className="text-gray-400">Last updated: 28/11/12</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Introduction */}
            <motion.div variants={fadeIn} className="mb-12">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Escape Rooms Tibet. By using our website or purchasing gift vouchers, you agree to
                  the following Terms & Conditions.
                </p>
              </div>
            </motion.div>

            {/* Section 1 - Gift Voucher Terms */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Gift className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">1.</span>
                  Gift Voucher Terms
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Gift vouchers are valid for 12 months from the date of purchase unless stated otherwise.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vouchers are non-refundable, except where required by New Zealand law.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vouchers can be redeemed for any standard Escape Rooms Tibet experience.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vouchers cannot be exchanged for cash.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>If the selected experience exceeds the voucher value, the difference must be paid at checkout.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lost or stolen vouchers will not be replaced.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Voucher codes must be entered at checkout to redeem.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 2 - Digital Delivery */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Mail className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">2.</span>
                  Digital Delivery
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All vouchers are delivered electronically via email immediately after purchase.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>It is the customer's responsibility to ensure their email address is entered correctly.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 3 - Booking Policy */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">3.</span>
                  Booking Policy
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All bookings must be made online via our website.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Bookings are subject to availability.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Late arrivals may result in shortened game time.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 4 - Cancellation Policy */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">4.</span>
                  Cancellation Policy
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cancellations or rescheduling must be made at least 48 hours before the booking.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No-shows are non-refundable.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 5 - Website Use */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">5.</span>
                  Website Use
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>You agree not to:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Copy or reproduce any part of the website</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use the site for unlawful purposes</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Attempt to bypass website security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 6 - Pricing */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <DollarSign className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">6.</span>
                  Pricing
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All prices are in NZD and include GST unless stated otherwise.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prices may change without notice.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 7 - Liability */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">7.</span>
                  Liability
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>Escape Rooms Tibet is not liable for:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personal belongings lost or damaged during visits</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Injuries resulting from misuse of equipment or failure to follow staff instructions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 8 - Contact Information */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-xl border border-cyan-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">8.</span>
                  Contact Information
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p className="mb-4">For questions regarding these terms:</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-bold text-white">Escape Rooms Tibet</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <Link
                        href="mailto:info@escaperoomstibet.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        info@escaperoomstibet.com
                      </Link>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Mt Everest, Khumbu, Solukhumbu, Nepal</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Ready to Book Your Adventure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Now that you've read our terms and conditions, you're ready to purchase gift vouchers or book your
                escape room experience!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/gift-vouchers">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                    Purchase Gift Vouchers
                  </Button>
                </Link>
                <Link href="/book-now">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

