"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Bus, Car, ArrowRight } from "lucide-react"

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
          <div className="w-full h-[320px] md:h-[400px] relative flex items-center justify-center bg-[#111]">
            {/* Replace this placeholder with your Google Maps embed URL */}
            <div className="text-center text-gray-400 px-8">
              <p className="text-lg font-semibold mb-2 text-white">Map Placeholder</p>
              <p className="text-sm">Add your Google Maps embed URL here</p>
              <p className="text-xs mt-2 text-gray-500">42 Barkhor Street, Lhasa, Tibet</p>
            </div>
          </div>
          <div className="p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Our Location
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              42 Barkhor Street, Tibet, New Zealand
            </p>
            <p className="text-gray-400 mb-8">Find us in the heart of Tibet CBD, just a short walk from Courtenay Place.</p>
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
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-gray-300">021 555 0198</p>
              </div>
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
                <p className="text-gray-300">42 Barkhor Street, Lhasa, Tibet</p>
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
                  Paid street parking available on Tory Street. Wilson and Tournament parking buildings nearby on Tory Street.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Bus className="w-5 h-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Public Transport</h3>
                </div>
                <p className="text-gray-300 ml-8">
                  Multiple bus stops within walking distance. 5-minute walk from Courtenay Place bus stops.
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