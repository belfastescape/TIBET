"use client"

import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AnimatedFeatures() {
  return (
    <motion.section 
      className="py-20 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Ready for Your Adventure?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Book your escape room experience today and discover why we're Tibet's premier escape room destination.
        </p>
      </div>
    </motion.section>
  )
} 