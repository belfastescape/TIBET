"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Share2 } from "lucide-react"

const buttonStyles: Record<string, { border: string; glow: string; text: string }> = {
  white:  { border: "border-white",        glow: "bg-white/70",        text: "text-white group-hover:text-white" },
  green:  { border: "border-green-400",    glow: "bg-green-400/70",    text: "text-green-400 group-hover:text-white" },
  blue:   { border: "border-blue-400",     glow: "bg-blue-400/70",     text: "text-blue-400 group-hover:text-white" },
  yellow: { border: "border-yellow-400",   glow: "bg-yellow-400/70",   text: "text-yellow-400 group-hover:text-white" },
}

function SkewButton({
  href,
  label,
  color = "white",
  onClick,
}: {
  href?: string
  label: string
  color?: "white" | "green" | "blue" | "yellow"
  onClick?: () => void
}) {
  const styles = buttonStyles[color]
  const inner = (
    <span className={`relative block -skew-x-6 overflow-hidden border-2 w-48 h-12 ${styles.border}`}>
      <span className={`absolute inset-0 opacity-30 group-hover:opacity-90 transition-opacity duration-300 blur-md ${styles.glow}`} />
      <span className={`absolute leading-none inset-0 flex items-center justify-center skew-x-6 text-sm md:text-[0.9rem] lg:text-lg font-bold tracking-wide transition-colors duration-300 z-10 ${styles.text}`}>
        {label}
      </span>
    </span>
  )
  if (onClick) {
    return (
      <button onClick={onClick} className="group relative mt-2 inline-block cursor-pointer">
        {inner}
      </button>
    )
  }
  return (
    <Link href={href!} className="group relative mt-2 inline-block">
      {inner}
    </Link>
  )
}

function ShareCard({ delay = 0 }: { delay?: number }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (typeof window === "undefined") return
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Quest for the Ancient Tomb – Escape Rooms Tibet",
          text: "Check out Quest for the Ancient Tomb at Escape Rooms Tibet — a magical fantasy adventure for 2–6 players!",
          url: window.location.href,
        })
      } catch {
        // user cancelled — no action needed
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 180, damping: 14, delay }}
      className="h-[460px] flex flex-col items-center gap-4 rounded-xl border border-white bg-[#1a0a2e] hover:bg-[#1f0d35] p-8 text-center transition-all hover:scale-[1.02]"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <Share2 className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-xl md:text-2xl text-amber-400 font-semibold leading-snug">
          Suggest this game to your friends.
        </h3>
      </div>
      <SkewButton
        label={copied ? "Link Copied!" : "Share this game"}
        color="white"
        onClick={handleShare}
      />
    </motion.div>
  )
}

interface CtaCardProps {
  title: string
  subtitle: string
  href: string
  label: string
  variant?: "primary" | "secondary"
  buttonColor?: "white" | "green" | "blue" | "yellow"
  delay?: number
}

function CtaCard({ title, subtitle, href, label, variant = "secondary", buttonColor = "white", delay = 0 }: CtaCardProps) {
  const isPrimary = variant === "primary"

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 180, damping: 14, delay }}
      className={`h-[460px] flex flex-col items-center gap-4 rounded-xl border p-8 text-center transition-all hover:scale-[1.02] ${
        isPrimary
          ? "border-white bg-white/10 hover:bg-white/15"
          : "border-white bg-[#1a0a2e] hover:bg-[#1f0d35]"
      }`}
    >
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl text-amber-400 text-center font-semibold leading-snug mb-3">{title}</h3>
        <p className="text-base text-gray-400">{subtitle}</p>
      </div>
      <SkewButton href={href} label={label} color={buttonColor} />
    </motion.div>
  )
}

export function CtaSection() {
  return (
    <section id="book" className="py-20 bg-[#1a0a2e]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <ShareCard delay={0} />
          <CtaCard
            title="Want to book this game?"
            subtitle="Check out all availability on our booking page."
            href="/booking"
            label="Book Now"
            variant="primary"
            buttonColor="green"
            delay={0.1}
          />
          <CtaCard
            title="Questions about this game?"
            subtitle="Feel free to contact us about Family Visits, Birthday Parties, and more."
            href="/contact"
            label="Contact Us"
            buttonColor="blue"
            delay={0.2}
          />
          <CtaCard
            title="Check out our other games."
            subtitle="Browse our other escape rooms here."
            href="/escape-rooms"
            label="Our Escape Rooms"
            buttonColor="yellow"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}
