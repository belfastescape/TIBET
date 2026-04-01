"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Mail, Clock, Bus, Car, ArrowRight } from "lucide-react"

export default function LocationPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-20 pb-20 bg-[#0c0c0c]">
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="bg-[#111] rounded-2xl overflow-hidden border border-[#222] mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full h-[320px] md:h-[400px] relative overflow-hidden bg-[#111]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14092.750377749018!2d86.9253667!3d27.988156449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2snz!4v1774825629232!5m2!1sen!2snz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Mt Everest on Google Maps"
            />
          </div>
          <div className="p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Our Location
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Mt Everest, Khumbu, Solukhumbu, Nepal
            </p>
            <p className="text-gray-400 mb-8">
              Find us in the heart of the Khumbu region, accessible via flights from Kathmandu to Lukla and trekking routes
              through Namche Bazaar.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-[#111] rounded-xl border border-[#222] p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-gray-300">info@escaperoomstibet.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-gray-300">Open 7 days, 9:30 AM - 9:00 PM</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-gray-300">Mt Everest, Khumbu, Solukhumbu, Nepal</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#111] rounded-xl border border-[#222] p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Getting Here</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <Car className="w-5 h-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Parking</h3>
                </div>
                <p className="text-gray-300 ml-8">
                  Vehicle access is limited in the high Khumbu region. Most visitors arrive via flights to Lukla, followed
                  by trekking along established footpaths between villages.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Bus className="w-5 h-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Public Transport</h3>
                </div>
                <p className="text-gray-300 ml-8">
                  Regional flights connect Kathmandu to Lukla. From there, plan for multi-day trekking through Namche Bazaar
                  to reach our location near Mount Everest.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8"
            asChild
          >
            <Link href="/contact">
              Book Your Escape Room <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
} 