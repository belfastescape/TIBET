"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const dropdowns = [
  {
    label: "Our Games",
    links: [
      { label: "Operation Pitt",        href: "/escape-rooms/operation-pitt" },
      { label: "The Billion Dollar Heist",         href: "/escape-rooms/billion-dollar-heist" },
      { label: "Quest for the Ancient Tomb",  href: "/escape-rooms/ancient-tomb" },
    ],
  },
  {
    label: "Group Bookings",
    links: [{ label: "Team Building", href: "/team-building-tibet" }],
  },
]

const plainLinks = [
  { label: "Gift Vouchers", href: "/gift-vouchers" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen]     = useState(false)
  const [mobileExpanded, setMobileExpanded]     = useState<string | null>(null)
  const [scrolled, setScrolled]                 = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-[#222] py-3"
            : "bg-[#0a0a0a]/80 backdrop-blur-sm border-[#222]/50 py-5",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Brand */}
          <Link
            href="/"
            className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-tight uppercase hover:text-cyan-400 transition-colors"
          >
            Escape Rooms Tibet
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Dropdown items */}
            {dropdowns.map((dropdown) => (
              <div key={dropdown.label} className="relative group">
                <button className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors text-base">
                  {dropdown.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                {/* Dropdown panel */}
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-[#0a0a0a] border border-[#222] overflow-hidden shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50">
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
            {plainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}

            {/* Book Now button */}
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto flex flex-col items-center justify-center py-16 gap-2">
          <button
            className="absolute top-5 right-5 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-bold text-xl tracking-tight uppercase mb-6"
          >
            Escape Rooms Tibet
          </Link>

          {/* Dropdowns on mobile — expandable */}
          {dropdowns.map((dropdown) => (
            <div key={dropdown.label} className="w-64 text-center">
              <button
                className="w-full text-white text-2xl font-bold hover:text-cyan-400 transition-colors tracking-tight flex items-center justify-center gap-2 py-2"
                onClick={() => setMobileExpanded(mobileExpanded === dropdown.label ? null : dropdown.label)}
              >
                {dropdown.label}
                <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", mobileExpanded === dropdown.label && "rotate-180")} />
              </button>
              {mobileExpanded === dropdown.label && (
                <div className="mt-2 mb-3 flex flex-col gap-3">
                  {dropdown.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-300 text-lg hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Plain links */}
          {plainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl font-bold hover:text-cyan-400 transition-colors tracking-tight py-2"
            >
              {link.label}
            </Link>
          ))}

          <Link href="/booking" onClick={() => setMobileMenuOpen(false)} className="mt-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg px-10 py-4">
              Book Now
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}
