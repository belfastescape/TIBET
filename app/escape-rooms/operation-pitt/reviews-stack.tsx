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

  // TOP-SECRET card folds away first (0–25%)
  const card1RotateX = useTransform(scrollYProgress, [0, 0.25], [0, -90])
  // Jessica folds next (25–50%)
  const card2RotateX = useTransform(scrollYProgress, [0.25, 0.5], [0, -90])
  // Tom folds next (50–75%)
  const card3RotateX = useTransform(scrollYProgress, [0.5, 0.75], [0, -90])
  // Howard folds last (75–100%) — Rebecca stays at bottom
  const card4RotateX = useTransform(scrollYProgress, [0.75, 1], [0, -90])

  return (
    <section ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

        {/* Card 5 — Rebecca (bottom / back) */}
        <div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ transformOrigin: "center top", zIndex: 10 }}
        >
          {/* Mobile: 9:16 */}
          <Image
            src="/images/rebecca-operation-pitt916.webp"
            alt="Rebecca's review of Operation Pitt"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
          />
          {/* Desktop: 16:9 */}
          <Image
            src="/images/rebecca-operation-pitt.webp"
            alt="Rebecca's review of Operation Pitt"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
          />
        </div>

        {/* Card 4 — Howard */}
        <motion.div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ rotateX: card4RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 20 }}
        >
          {/* Mobile: 9:16 */}
          <Image
            src="/images/howard-operation-pitt916.webp"
            alt="Howard's review of Operation Pitt"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
          />
          {/* Desktop: 16:9 */}
          <Image
            src="/images/howard-operation-pitt.webp"
            alt="Howard's review of Operation Pitt"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
          />
        </motion.div>

        {/* Card 3 — Tom */}
        <motion.div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ rotateX: card3RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 30 }}
        >
          {/* Mobile: 9:16 */}
          <Image
            src="/images/tom-operation-pitt916.webp"
            alt="Tom's review of Operation Pitt"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
          />
          {/* Desktop: 16:9 */}
          <Image
            src="/images/tom-operation-pitt.webp"
            alt="Tom's review of Operation Pitt"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
          />
        </motion.div>

        {/* Card 2 — Jessica */}
        <motion.div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ rotateX: card2RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 40 }}
        >
          {/* Mobile: 9:16 */}
          <Image
            src="/images/jessica-operation-pitt916.webp"
            alt="Jessica's review of Operation Pitt"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
          />
          {/* Desktop: 16:9 */}
          <Image
            src="/images/jessica-operation-pitt.webp"
            alt="Jessica's review of Operation Pitt"
            fill
            className="object-cover hidden sm:block"
            sizes="90vw"
          />
        </motion.div>

        {/* Card 1 — TOP-SECRET (frontmost, seen first) */}
        <motion.div
          className="absolute w-[90%] h-[160.7vw] sm:h-[50.6vw] rounded-3xl overflow-hidden border border-white/20 bg-black"
          style={{ rotateX: card1RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 50 }}
        >
          {/* Mobile: 9:16 */}
          <Image
            src="/images/mission-reports-916.webp"
            alt="Top Secret — Agent Reports"
            fill
            className="object-cover sm:hidden"
            sizes="90vw"
            priority
          />
          {/* Desktop: 16:9 */}
          <Image
            src="/images/TOP-SECRET.webp"
            alt="Top Secret — Agent Reports"
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
