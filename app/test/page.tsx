"use client"

import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export default function TestPage() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [waveComplete, setWaveComplete] = useState(false)
  const waveControls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"],
  })

  // Transform scrollYProgress to control the "TIBET" scroll-in opacity
  const tibetOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0.5, 1])

  useEffect(() => {
    // Reset animation states when component mounts
    setAnimationComplete(false)
    setWaveComplete(false)

    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (animationComplete) {
      // Start wave animation after words come together
      const startWaveAnimation = async () => {
        // Wait a moment before starting wave
        await new Promise((resolve) => setTimeout(resolve, 200))

        // Animate wave 3 times
        for (let i = 0; i < 3; i++) {
          // Forward wave
          await waveControls.start({
            backgroundPosition: ["0% 50%", "100% 50%"],
            transition: { duration: 0.8, ease: "easeInOut" },
          })

          // Backward wave
          await waveControls.start({
            backgroundPosition: ["100% 50%", "0% 50%"],
            transition: { duration: 0.8, ease: "easeInOut" },
          })
        }

        // Mark wave animation as complete
        setWaveComplete(true)
      }

      startWaveAnimation()
    }
  }, [animationComplete, waveControls])

  const resetAnimation = () => {
    setAnimationComplete(false)
    setWaveComplete(false)
  }

  return (
    <main className="min-h-[200vh] bg-black text-white" ref={containerRef}>
      {/* Hero section with TEAMWORK animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-green-900/20 z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-center overflow-visible h-40 sm:h-48 md:h-56">
            {/* Combined TEAMWORK with wave effect */}
            <div className="relative">
              {/* TEAM animation */}
              <motion.div
                className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-extrabold inline-block"
                initial={{ x: -300, opacity: 0 }}
                animate={{
                  x: animationComplete ? 0 : -300,
                  opacity: animationComplete ? 1 : 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                  delay: 0.25,
                }}
              >
                <motion.span
                  className="bg-clip-text text-transparent"
                  animate={waveControls}
                  style={{
                    backgroundImage: animationComplete
                      ? "linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,1), rgba(255,255,255,0.3))"
                      : "linear-gradient(90deg, #06b6d4, #0e7490)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "0% 50%",
                  }}
                >
                  TEAM
                </motion.span>
              </motion.div>

              {/* WORK animation */}
              <motion.div
                className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-extrabold inline-block"
                initial={{ x: 300, opacity: 0 }}
                animate={{
                  x: animationComplete ? 0 : 300,
                  opacity: animationComplete ? 1 : 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                  delay: 0.25,
                }}
              >
                <motion.span
                  className="bg-clip-text text-transparent"
                  animate={waveControls}
                  style={{
                    backgroundImage: animationComplete
                      ? "linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,1), rgba(255,255,255,0.3))"
                      : "linear-gradient(90deg, #10b981, #059669)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "0% 50%",
                  }}
                >
                  BUILDING
                </motion.span>
              </motion.div>
            </div>
          </div>

          {/* Region name scroll animation — underneath TEAM BUILDING */}
          <motion.div
            className="text-[3.35rem] sm:text-[5.35rem] md:text-[6.7rem] font-extrabold text-white mt-1"
            style={{
              opacity: tibetOpacity,
            }}
          >
            TIBET
          </motion.div>
        </div>

        {/* Replay button */}
        <motion.button
          onClick={resetAnimation}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: waveComplete ? 1 : 0,
            y: waveComplete ? 0 : 20,
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Replay Animation
        </motion.button>

        {/* Back to home link */}
        <Link href="/" className="absolute top-8 left-8 text-white/70 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </section>

      {/* Scroll animation section with multiple lines */}
      <section className="flex flex-col items-center justify-center">
        {/* "Get your team" - scrolls in from right */}
        <div className="h-[25vh] flex items-center justify-center w-full">
          <motion.div
            className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-extrabold text-white"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Get your team
          </motion.div>
        </div>

        {/* "working together at" - scrolls in from left */}
        <div className="h-[25vh] flex items-center justify-center w-full">
          <motion.div
            className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-extrabold text-white"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
          >
            working together at
          </motion.div>
        </div>

        {/* "Escape Rooms Tibet" - scrolls in from right with gradient */}
        <div className="h-[25vh] flex items-center justify-center w-full px-4">
          <motion.div
            className="text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] font-extrabold whitespace-nowrap overflow-hidden"
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1], // Custom ease curve for smoother animation
              delay: 0.1,
            }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400">
              Escape Rooms Tibet.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Extra space for scrolling */}
      <div className="h-screen"></div>
    </main>
  )
}
