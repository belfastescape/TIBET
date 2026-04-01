"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface NavItem {
  label: string[]
  image: string
  href: string
}

const navItems: NavItem[] = [
  { label: ["OUR", "ROOMS"],   image: "/images/escape-rooms-tibet-hero.webp",                href: "#escape-rooms" },
  { label: ["RESERVE"],    image: "/images/billion-dollar-heist/laser-team-4.webp",        href: "/booking" },
  { label: ["GROUPS"],         image: "/images/operation-pitt-team.webp",            href: "/team-building-tibet" },
  { label: ["RATES"],         image: "/images/ancient-tomb/examining-book.webp",         href: "/pricing" },
]

const secondaryLinks = [
  { label: "Gift Vouchers", href: "/gift-vouchers" },
  { label: "Contact", href: "/contact" },
]

const dropdowns = [
  {
    label: "Our rooms",
    links: [
      { label: "Operation Pitt", href: "/escape-rooms/operation-pitt" },
      { label: "The Billion Dollar Heist", href: "/escape-rooms/billion-dollar-heist" },
      { label: "Quest for the Ancient Tomb", href: "/escape-rooms/ancient-tomb" },
    ],
  },
  {
    label: "Groups & events",
    links: [{ label: "Team Building", href: "/team-building-tibet" }],
  },
]

export default function ParallaxNav() {
  const [activeIndex, setActiveIndex]     = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchDevice) return
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top)  / rect.height,
      })
    },
    [isTouchDevice],
  )

  useEffect(() => {
    const check = () =>
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    check()
    window.addEventListener("touchstart", () => setIsTouchDevice(true), { once: true })
  }, [])

  // Preload all nav images
  useEffect(() => {
    navItems.forEach((item) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = item.image
    })
  }, [])

  const parallaxOffset = isTouchDevice ? 0 : (mousePosition.x - 0.5) * -300

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-[500px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setActiveIndex(null)
        setMousePosition({ x: 0.5, y: 0.5 })
      }}
    >
      {/* Background images — default hero is index 0; hover shows other images */}
      {navItems.map((item, index) => {
        const isVisible = activeIndex === index || (activeIndex === null && index === 0)
        return (
          <div
            key={item.label.join(" ")}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              zIndex: isVisible ? 1 : 0,
            }}
          >
            <div
              className="absolute inset-[-40px] transition-transform duration-[800ms] ease-out"
              style={{
                transform:
                  isVisible && !isTouchDevice
                    ? `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px) scale(1.05)`
                    : "translate(0,0) scale(1.05)",
              }}
            >
              <Image
                src={item.image}
                alt={item.label.join(" ")}
                fill
                className={index === 0 ? "object-cover object-left md:object-center" : "object-cover"}
                sizes="100vw"
                quality={75}
                priority={index === 0}
              />
            </div>
          </div>
        )
      })}

      {/* Content layer */}
      <div className="relative z-[3] flex flex-col h-full">

        {/* Top bar */}
        <header className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 md:px-12 lg:px-16">
          <Link
            href="/"
            className="text-white font-bold text-lg sm:text-xl tracking-tight uppercase"
          >
            Escape Rooms Tibet
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Dropdowns */}
            {dropdowns.map((dropdown) => (
              <div key={dropdown.label} className="relative group">
                <button className="flex items-center gap-1 text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-300">
                  {dropdown.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:rotate-180">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-[#0a0a0a] border border-[#222] overflow-hidden shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50">
                  {dropdown.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Plain links */}
            {secondaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Reserve CTA */}
            <Link
              href="/booking"
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              Reserve
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </header>

        {/* Mobile full-screen menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute inset-0 z-[10] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 overflow-y-auto py-16">
            {/* Main nav items */}
            {navItems.map((item) => (
              <Link
                key={item.label.join(" ")}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-bold text-2xl sm:text-3xl tracking-tight hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label.join(" ")}
              </Link>
            ))}

            <div className="w-24 h-px bg-white/20 my-2" />

            {/* Dropdown links (flat on mobile) */}
            {dropdowns.flatMap((d) => d.links).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            <div className="w-24 h-px bg-white/20 my-2" />

            {/* Secondary links */}
            {secondaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-medium text-lg px-10 py-4 rounded-md"
            >
              Reserve
            </Link>
          </div>
        )}

        {/* Main nav items — on mobile: top of screen, large type, bar look; on desktop: bottom, parallax */}
        <div className="flex-1 flex flex-col items-center justify-start lg:justify-end overflow-hidden px-4 sm:px-0 pt-6 lg:pt-0 pb-3">
          <nav
            className="flex flex-row flex-wrap items-center justify-center gap-3 lg:gap-6 transition-transform duration-700 ease-out will-change-transform w-full max-w-[70vw] lg:flex-nowrap lg:flex-row rounded-2xl lg:rounded-none bg-black/30 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-4 lg:py-0 px-4 lg:px-0 border border-white/10 lg:border-0"
            style={{ transform: `translateX(${parallaxOffset}px)` }}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.label.join(" ")}
                href={item.href}
                className="group relative px-2 py-1 lg:px-3 lg:py-2"
                onMouseEnter={() => !isTouchDevice && setActiveIndex(index)}
                onTouchStart={() => setActiveIndex((prev) => (prev === index ? null : index))}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
              >
                <span
                  className="relative flex flex-col items-center leading-[0.9] font-bold tracking-tight transition-all duration-500 ease-out text-4xl lg:text-4xl xl:text-5xl whitespace-nowrap select-none"
                  style={{
                    color:
                      activeIndex === null
                        ? "white"
                        : activeIndex === index
                        ? "white"
                        : "rgba(255,255,255,0.2)",
                    transform: activeIndex === index ? "translateY(-4px)" : "translateY(0)",
                    textShadow:
                      activeIndex === index ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
                  }}
                >
                  {item.label.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </span>
                {/* Underline accent */}
                <span
                  className="absolute bottom-0 sm:bottom-1 left-1/2 h-[2px] bg-cyan-400 transition-all duration-500 ease-out"
                  style={{
                    width: activeIndex === index ? "60%" : "0%",
                    transform: "translateX(-50%)",
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                />
              </Link>
            ))}
          </nav>

        </div>

        {/* Bottom bar */}
        <footer className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 md:px-12 lg:px-16">
          <p className="text-white/40 text-[10px] sm:text-xs tracking-wide hidden sm:block">
            Scroll for more
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5 mx-auto sm:mx-0">
            {navItems.map((_, index) => (
              <span
                key={index}
                className="block rounded-full transition-all duration-500"
                style={{
                  width:           activeIndex === index ? "20px" : "5px",
                  height:          "5px",
                  backgroundColor: activeIndex === index ? "#22d3ee" : "rgba(255,255,255,0.4)",
                  opacity:         activeIndex === index ? 1 : 0.4,
                }}
              />
            ))}
          </div>
          <p className="text-white/40 text-[10px] sm:text-xs tracking-wide hidden sm:block">
            Tibet, NZ
          </p>
        </footer>

      </div>
    </div>
  )
}
