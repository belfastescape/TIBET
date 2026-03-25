"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// ... other imports

export function AnimatedSections() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Move all your animated sections here
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-[#0c0c0c]">
        {/* ... animated content */}
      </section>
      
      {/* Other animated sections */}
    </>
  )
} 