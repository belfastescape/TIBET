"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { RefreshCw, Mail, AlertCircle, Clock, ChevronRight, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RefundReturnsPage() {
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
                <RefreshCw className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Refund & Returns Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Digital Gift Vouchers
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
                  This policy outlines how refunds and changes apply to digital gift vouchers purchased from Escape
                  Rooms Tibet.
                </p>
              </div>
            </motion.div>

            {/* Section 1 - Digital Gift Voucher Refunds */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Gift className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">1.</span>
                  Digital Gift Voucher Refunds
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Because our vouchers are delivered instantly via email, they are{" "}
                    <strong className="text-white">non-refundable</strong>, except where required by the Consumer
                    Guarantees Act (NZ).
                  </p>
                  <div className="bg-[#0a0a0a] border border-[#222] rounded-lg p-4 mt-4">
                    <p className="mb-3 text-white font-semibold">Refunds may be considered only if:</p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>The customer made a duplicate purchase, or</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>There is a genuine technical error on our part</span>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    Requests must be submitted to{" "}
                    <Link
                      href="mailto:info@escaperoomstibet.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      info@escaperoomstibet.com
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2 - Voucher Expiry */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Clock className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">2.</span>
                  Voucher Expiry
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Gift vouchers are valid for 12 months from the date of purchase unless otherwise stated.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Expired vouchers cannot be extended or refunded.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 3 - Incorrect Email or Delivery Issues */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Mail className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">3.</span>
                  Incorrect Email or Delivery Issues
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p>
                    If the voucher was sent to an incorrect email address entered by the customer, we can resend it to
                    the correct address — but we cannot refund the purchase.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 4 - Change of Mind */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertCircle className="w-7 h-7 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 mr-3">4.</span>
                  Change of Mind
                </h2>
                <div className="text-gray-300 leading-relaxed">
                  <p>We do not offer refunds for change-of-mind purchases.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 5 - Booking Refunds */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">5.</span>
                  Booking Refunds
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>Bookings made using vouchers follow our standard cancellation policy:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cancellations can be made 48+ hours before your booking</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No-shows or late cancellations are non-refundable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 6 - Contact Us */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-xl border border-cyan-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">6.</span>
                  Contact Us
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p className="mb-4">For refund or voucher support, contact:</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <Link
                        href="mailto:info@escaperoomstibet.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        info@escaperoomstibet.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Important Notice */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-400 mb-2">Important Notice</h3>
                    <p className="text-gray-300 leading-relaxed">
                      All digital gift vouchers are delivered instantly and are therefore considered final sale unless
                      exceptional circumstances apply. Please double-check all details before completing your purchase.
                    </p>
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
                Have Questions About Refunds?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                If you have any questions about our refund and returns policy, or need assistance with a voucher,
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/gift-vouchers">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Purchase Gift Vouchers
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

