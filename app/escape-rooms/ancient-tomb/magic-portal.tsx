"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MagicPortalProps {
  isOpen: boolean
  onComplete?: () => void
  originX?: number
  originY?: number
}

interface Particle {
  id: number
  x: number
  y: number
  angle: number
  speed: number
  size: number
  opacity: number
  color: string
}

export function MagicPortal({ isOpen, onComplete, originX = 50, originY = 50 }: MagicPortalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<"idle" | "opening" | "expanded" | "closing">("idle")
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const portalRadius = useRef(0)
  const targetRadius = useRef(0)

  useEffect(() => {
    if (isOpen && phase === "idle") {
      setPhase("opening")
      targetRadius.current = Math.max(window.innerWidth, window.innerHeight) * 1.5
    }
  }, [isOpen, phase])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || phase === "idle") return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const centerX = (originX / 100) * canvas.width
    const centerY = (originY / 100) * canvas.height

    const colors = ["#c084fc", "#a855f7", "#7c3aed", "#6366f1", "#fbbf24", "#f59e0b"]

    // Initialize particles
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 150; i++) {
        particlesRef.current.push({
          id: i,
          x: centerX,
          y: centerY,
          angle: Math.random() * Math.PI * 2,
          speed: 2 + Math.random() * 4,
          size: 2 + Math.random() * 4,
          opacity: 0.5 + Math.random() * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    let startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Expand portal
      if (phase === "opening") {
        portalRadius.current += (targetRadius.current - portalRadius.current) * 0.04
        if (portalRadius.current > targetRadius.current * 0.95) {
          setPhase("expanded")
          setTimeout(() => {
            onComplete?.()
          }, 300)
        }
      }

      // Draw portal background with swirl effect
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        portalRadius.current
      )
      gradient.addColorStop(0, "rgba(17, 24, 39, 0.98)")
      gradient.addColorStop(0.3, "rgba(88, 28, 135, 0.95)")
      gradient.addColorStop(0.6, "rgba(124, 58, 237, 0.9)")
      gradient.addColorStop(0.8, "rgba(167, 139, 250, 0.7)")
      gradient.addColorStop(1, "rgba(167, 139, 250, 0)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, portalRadius.current, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw swirl lines
      const swirlCount = 8
      for (let i = 0; i < swirlCount; i++) {
        const baseAngle = (i / swirlCount) * Math.PI * 2 + elapsed * 0.002
        ctx.beginPath()
        ctx.strokeStyle = `rgba(196, 132, 252, ${0.3 + Math.sin(elapsed * 0.005 + i) * 0.2})`
        ctx.lineWidth = 2

        for (let r = 0; r < portalRadius.current; r += 5) {
          const spiralAngle = baseAngle + (r / portalRadius.current) * Math.PI * 3
          const x = centerX + Math.cos(spiralAngle) * r
          const y = centerY + Math.sin(spiralAngle) * r
          if (r === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Draw magical runes/circles
      const runeRadius = Math.min(portalRadius.current * 0.4, 150)
      if (runeRadius > 20) {
        ctx.strokeStyle = `rgba(251, 191, 36, ${0.5 + Math.sin(elapsed * 0.003) * 0.3})`
        ctx.lineWidth = 2

        // Outer circle
        ctx.beginPath()
        ctx.arc(centerX, centerY, runeRadius, 0, Math.PI * 2)
        ctx.stroke()

        // Inner circle
        ctx.beginPath()
        ctx.arc(centerX, centerY, runeRadius * 0.7, 0, Math.PI * 2)
        ctx.stroke()

        // Rotating symbols
        for (let i = 0; i < 6; i++) {
          const symbolAngle = (i / 6) * Math.PI * 2 + elapsed * 0.001
          const symbolX = centerX + Math.cos(symbolAngle) * runeRadius * 0.85
          const symbolY = centerY + Math.sin(symbolAngle) * runeRadius * 0.85

          ctx.save()
          ctx.translate(symbolX, symbolY)
          ctx.rotate(symbolAngle + Math.PI / 2)
          ctx.fillStyle = `rgba(251, 191, 36, ${0.7 + Math.sin(elapsed * 0.004 + i) * 0.3})`
          ctx.font = `${12 + runeRadius * 0.08}px serif`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          const symbols = ["✧", "⚝", "✦", "☆", "⋆", "★"]
          ctx.fillText(symbols[i], 0, 0)
          ctx.restore()
        }
      }

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Spiral outward
        particle.angle += 0.05 + (particle.speed * 0.01)
        const distanceFromCenter = Math.sqrt(
          Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2)
        )

        if (distanceFromCenter < portalRadius.current * 0.8) {
          particle.x += Math.cos(particle.angle) * particle.speed
          particle.y += Math.sin(particle.angle) * particle.speed
        } else {
          // Reset particle to center
          particle.x = centerX + (Math.random() - 0.5) * 20
          particle.y = centerY + (Math.random() - 0.5) * 20
          particle.angle = Math.random() * Math.PI * 2
        }

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity * (1 - distanceFromCenter / portalRadius.current)
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity * 0.3 * (1 - distanceFromCenter / portalRadius.current)
        ctx.fill()

        ctx.globalAlpha = 1
      })

      // Draw center glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 50)
      centerGlow.addColorStop(0, "rgba(255, 255, 255, 0.8)")
      centerGlow.addColorStop(0.5, "rgba(196, 132, 252, 0.5)")
      centerGlow.addColorStop(1, "rgba(196, 132, 252, 0)")
      ctx.beginPath()
      ctx.arc(centerX, centerY, 50, 0, Math.PI * 2)
      ctx.fillStyle = centerGlow
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [phase, originX, originY, onComplete])

  if (phase === "idle") return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto">
      <canvas
        ref={canvasRef}
        className={cn(
          "w-full h-full block",
          phase === "expanded" && "transition-opacity duration-500"
        )}
      />
    </div>
  )
}
