"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function ReviewsStack() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Ledger cover folds away first (0–25%)
  const card1RotateX = useTransform(scrollYProgress, [0, 0.25], [0, -90])
  // Nash folds next (25–50%)
  const card2RotateX = useTransform(scrollYProgress, [0.25, 0.5], [0, -90])
  // Zach folds next (50–75%)
  const card3RotateX = useTransform(scrollYProgress, [0.5, 0.75], [0, -90])
  // Swail stays at the bottom (static)

  return (
    <section ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#1a0a2e]">

        {/* Card 4 — Swail (bottom / back, static) */}
        <div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ transformOrigin: "center top", zIndex: 10 }}
        >
          <Image
            src="/images/ancient-tomb-swail916.webp"
            alt="Swail's review of Quest for the Ancient Tomb"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
          />
          <Image
            src="/images/ancient-tomb-swail.webp"
            alt="Swail's review of Quest for the Ancient Tomb"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
          />
        </div>

        {/* Card 3 — Zach */}
        <motion.div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ rotateX: card3RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 20 }}
        >
          <Image
            src="/images/ancient-tomb-zach916.webp"
            alt="Zach's review of Quest for the Ancient Tomb"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
          />
          <Image
            src="/images/ancient-tomb-zach.webp"
            alt="Zach's review of Quest for the Ancient Tomb"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
          />
        </motion.div>

        {/* Card 2 — Nash */}
        <motion.div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ rotateX: card2RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 30 }}
        >
          <Image
            src="/images/ancient-tomb-nash916.webp"
            alt="Nash's review of Quest for the Ancient Tomb"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
          />
          <Image
            src="/images/ancient-tomb-nash (1).webp"
            alt="Nash's review of Quest for the Ancient Tomb"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
          />
        </motion.div>

        {/* Card 1 — Ledger cover (frontmost, seen first) */}
        <motion.div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ rotateX: card1RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 40 }}
        >
          <Image
            src="/images/ancient-tomb-ledger916.webp"
            alt="Quest for the Ancient Tomb — Guest Reviews"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
            priority
          />
          <Image
            src="/images/ancient-tomb-ledger.webp"
            alt="Quest for the Ancient Tomb — Guest Reviews"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
            priority
          />
        </motion.div>

      </div>
    </section>
  )
}
