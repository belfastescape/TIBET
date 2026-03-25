"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Mail, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your privacy is important to us
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
                  Escape Rooms Tibet ("we", "our", "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, store and protect your personal information when you visit our
                  website or purchase our products.
                </p>
              </div>
            </motion.div>

            {/* Section 1 */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">1.</span>
                  Information We Collect
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>We may collect:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Contact information:</strong> name, email address, phone number</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Billing information:</strong> payment details processed securely via our payment provider</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Order information:</strong> vouchers purchased, booking details</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Website usage data:</strong> IP address, browser type, pages visited (via analytics tools such as Google Analytics)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">2.</span>
                  How We Use Your Information
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>We use your information to:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Process and deliver gift voucher purchases</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Send order confirmations and receipts</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Respond to customer enquiries</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Improve our website and services</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prevent fraud or misuse</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comply with NZ legal requirements</span>
                    </li>
                  </ul>
                  <p className="mt-4 pt-4 border-t border-[#222]">
                    <strong>We do not sell or rent personal information to third parties.</strong>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">3.</span>
                  Payment Security
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  All payments are processed by secure, PCI-compliant third-party payment gateways. We do not store
                  full credit card details on our servers.
                </p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">4.</span>
                  Cookies
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>Our site uses cookies to:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Improve website functionality</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Remember preferences</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Analyse website traffic</span>
                    </li>
                  </ul>
                  <p className="mt-4">You may disable cookies in your browser settings.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">5.</span>
                  Sharing Your Information
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>We may share information with:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Payment processors (to complete your order)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Service providers such as email delivery services</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Legal authorities if required by law</span>
                    </li>
                  </ul>
                  <p className="mt-4 pt-4 border-t border-[#222]">
                    <strong>We do not share information for marketing by third parties.</strong>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">6.</span>
                  Data Storage & Retention
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>We retain order and contact information for as long as needed for:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Legal obligations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tax/accounting requirements</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">7.</span>
                  Your Rights
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>You may request:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to your personal information</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Corrections to inaccurate data</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Deletion, where legally permitted</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Contact us at{" "}
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

            {/* Section 8 - Contact */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-xl border border-cyan-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">8.</span>
                  Contact Us
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p className="mb-4">For questions about this policy, contact:</p>
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
                      <span>118 tory street, Tibet 6011</span>
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
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                If you have any questions or concerns about how we handle your data, please don't hesitate to contact
                us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Back to Home
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

