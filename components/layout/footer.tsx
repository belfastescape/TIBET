import Link from "next/link"
import Image from "next/image"
import { Facebook, MapPin, Phone, Mail, Clock } from "lucide-react"

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
              <p className="text-gray-400 mb-4 max-w-md">
                Tibet's premier escape room experience, offering immersive adventures for friends, families, and
                corporate teams. One of the best fun indoor activities in Tibet.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/YOUR_FACEBOOK_PAGE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/escape-rooms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Our Escape Rooms
                  </Link>
                </li>
                
                <li>
                  <Link href="/team-building" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Team Building
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Our Rooms</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/escape-rooms/operation-pitt" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Operation Pitt
                  </Link>
                </li>
                <li>
                  <Link href="/escape-rooms/billion-dollar-heist" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    The Billion Dollar Heist
                  </Link>
                </li>
                <li>
                  <Link href="/escape-rooms/ancient-tomb" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Quest for the Ancient Tomb
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Group Events</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/team-building" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Team Building
                  </Link>
                </li>
                <li>
                  <Link href="/group-bookings" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Group Bookings
                  </Link>
                </li>
                <li>
                  <Link href="/hen-parties" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Hen Parties
                  </Link>
                </li>
                <li>
                  <Link href="/teenage-birthday-parties" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Teenage Birthday Parties
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Special Deals
                  </Link>
                </li>
                <li>
                  <Link href="/gift-vouchers" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Gift Vouchers
                  </Link>
                </li>
                <li>
                  <Link href="/last-minute-christmas-gifts-tibet" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Last Minute Christmas Gifts
                  </Link>
                </li>
                <li>
                  <Link href="/gift-ideas-tibet" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Gift Ideas Tibet
                  </Link>
                </li>
                <li>
                  <Link href="/gift-ideas-couples-tibet" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Gift Ideas for Couples
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Location & Directions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
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
                  <span className="text-gray-400">42 Barkhor Street, Lhasa, Tibet 6011</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                  <Link href="tel:+0215550198" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    021 555 0198
                  </Link>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                  <Link
                    href="mailto:info@escaperoomstibet.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    info@escaperoomstibet.com
                  </Link>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <div className="text-gray-400">
                    <p>Mon-Fri: 10am - 8:30pm</p>
                    <p>Sat-Sun: 9am - 8:30pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#222] text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Escape Rooms Tibet. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-returns" className="hover:text-cyan-400 transition-colors">
                Refund & Returns
              </Link>
            </div>
            <p className="mt-3">
              Website Design by{" "}
              <Link 
                href="https://captainhacks.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
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
