"use client"

import type React from "react"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      // Restore scrolling when menu is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Handle clicking outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      style={{
        backgroundImage: "url('/images/hero-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div
        className={cn(
          "w-4/5 max-w-sm bg-[#0a0a0a] h-full shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#222]">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close menu"
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-6 px-6">
            <li>
              <Link
                href="#benefits"
                className="text-xl text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                onClick={onClose}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                href="#adventures"
                className="text-xl text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                onClick={onClose}
              >
                Adventures
              </Link>
            </li>
            <li>
              <Link
                href="#packages"
                className="text-xl text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                onClick={onClose}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="text-xl text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                onClick={onClose}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-6 border-t border-[#222] space-y-4">
          <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Book Now
          </Link>

          <div className="pt-4">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Our Adventures</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Book Operation Pitt
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Book Billion Dollar Heist
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Book Ancient Tomb Quest
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
