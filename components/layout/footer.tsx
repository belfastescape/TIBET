import Link from "next/link"
import Image from "next/image"
import { Facebook, MapPin, Mail, Clock } from "lucide-react"

/** WCAG-friendly body text on footer bg `#080808` */
const footerMuted = "text-gray-300"
/** Links: sufficient contrast + underline so purpose is not conveyed by color alone */
const footerLink =
  "text-gray-200 underline underline-offset-2 decoration-white/35 hover:text-cyan-300 hover:decoration-cyan-300/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] transition-colors"

export function Footer() {
  return (
    <>
      <section className="py-12 bg-[#0c0c0c] border-t border-[#222]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">About Escape Rooms Tibet</h2>
            <p className="text-gray-400 leading-relaxed">
              Escape Rooms Tibet was established in 2021 with a vision to provide exhilarating escape room
              adventures in the heart of Tibet City Centre. Our mission is to create unforgettable experiences that
              challenge the mind and foster teamwork. We pride ourselves on our core values: Customer Satisfaction,
              Teamwork, and Innovation. These principles guide us in delivering exceptional entertainment for friends,
              families, and corporate groups alike. Join us for an adventure that promises excitement and collaboration,
              making every visit a memorable one.
            </p>
          </div>
        </div>
      </section>
      <footer className="py-12 bg-[#080808] border-t border-[#222]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              {/* Fixed dimensions to prevent CLS - h-10 = 40px, aspect ratio 2.5:1 = 100px width */}
              <Image
                src="/images/erw-logo.webp"
                alt="Escape Rooms Tibet"
                width={100}
                height={40}
                className="h-10 w-[100px] mb-4"
                style={{ width: '100px', height: '40px' }}
              />
              <p className={`${footerMuted} mb-4 max-w-md`}>
                Tibet's premier escape room experience, offering immersive adventures for friends, families, and
                corporate teams. One of the best fun indoor activities in Tibet.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex rounded-sm ${footerLink}`}
                  aria-label="Escape Rooms Tibet on Facebook (opens in a new tab)"
                >
                  <Facebook className="w-6 h-6" aria-hidden />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className={footerLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/escape-rooms" className={footerLink}>
                    Our Escape Rooms
                  </Link>
                </li>
                
                <li>
                  <Link href="/team-building" className={footerLink}>
                    Team Building
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={footerLink}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={footerLink}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Our Rooms</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/escape-rooms/operation-pitt" className={footerLink}>
                    Operation Pitt
                  </Link>
                </li>
                <li>
                  <Link href="/escape-rooms/billion-dollar-heist" className={footerLink}>
                    The Billion Dollar Heist
                  </Link>
                </li>
                <li>
                  <Link href="/escape-rooms/ancient-tomb" className={footerLink}>
                    Quest for the Ancient Tomb
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Group Events</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/team-building" className={footerLink}>
                    Team Building
                  </Link>
                </li>
                <li>
                  <Link href="/group-bookings" className={footerLink}>
                    Group Bookings
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className={footerLink}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/gift-vouchers" className={footerLink}>
                    Gift Vouchers
                  </Link>
                </li>
                <li>
                  <Link href="/gift-ideas-tibet" className={footerLink}>
                    Gift Ideas Tibet
                  </Link>
                </li>
                <li>
                  <Link href="/location" className={footerLink}>
                    Location & Directions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={footerLink}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <span className={footerMuted}>Mt Everest, Khumbu, Solukhumbu, Nepal</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                  <Link
                    href="mailto:info@escaperoomstibet.com"
                    className={footerLink}
                  >
                    info@escaperoomstibet.com
                  </Link>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <div className={footerMuted}>
                    <p>Mon-Fri: 10am - 8:30pm</p>
                    <p>Sat-Sun: 9am - 8:30pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`mt-12 pt-8 border-t border-[#222] text-center text-sm ${footerMuted}`}>
            <p>© {new Date().getFullYear()} Escape Rooms Tibet. All rights reserved.</p>
            <div className="mt-2 flex justify-center flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy-policy" className={footerLink}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={footerLink}>
                Terms of Service
              </Link>
              <Link href="/refund-returns" className={footerLink}>
                Refund & Returns
              </Link>
            </div>
            <p className="mt-3">
              Website Design by{" "}
              <Link
                href="https://captainhacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                Captain Hacks Digital
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
