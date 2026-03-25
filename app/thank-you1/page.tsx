"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ThankYouPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Thanks For Booking With Us!</h1>
          <p className="text-xl text-gray-400 mb-8">
            Thanks for booking with Escape Rooms Tibet. You should receive a booking confirmation email shortly. 
            If you don't receive it within the next 15 minutes, please check your spam folder or contact us directly.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            If you have any questions or need to modify your booking, you can:<br />
            • Email us at info@escaperoomstibet.com<br />
            • Call us at 021 555 0198<br />
            • Visit our contact page
          </p>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-5 h-5 mr-2" /> Return to Homepage
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  )
}







