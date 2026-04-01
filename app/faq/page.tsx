"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, X, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([])

  // All FAQs data
  const faqs: FAQ[] = [
    // General Information
    {
      id: "what-is-escape-room",
      question: "What is an escape room?",
      answer:
        "An escape room is a physical adventure game where players are placed in a themed room and have to solve a series of puzzles, find clues, and complete objectives within a set time limit (usually 60 minutes) to 'escape' or accomplish the mission. Our rooms are designed to challenge your mind, test your teamwork, and provide an unforgettable experience for friends, families, and colleagues.",
      category: "general",
      tags: ["basics", "new players"],
    },
    {
      id: "first-time-tips",
      question: "I've never done an escape room before. Any tips?",
      answer:
        "For first-timers, we recommend: 1) Communicate with your team and share what you find, 2) Search thoroughly but respectfully - nothing needs to be forced or broken, 3) Organize your clues so you can keep track of what you've found, 4) Don't be afraid to ask for hints if you're stuck, and 5) Most importantly, have fun! Our Quest for the Ancient Tomb room is an excellent choice for beginners.",
      category: "general",
      tags: ["basics", "new players", "tips"],
    },
    {
      id: "what-to-bring",
      question: "What should I bring to an escape room?",
      answer:
        "You don't need to bring anything special to enjoy our escape rooms. Just bring your enthusiasm, problem-solving skills, and team spirit! We provide everything needed to solve the puzzles. We do recommend wearing comfortable clothing and arriving 15 minutes before your scheduled time. Please note that food and drinks are not allowed in the escape rooms, and we have secure lockers for your personal belongings.",
      category: "general",
      tags: ["preparation", "new players"],
    },
    {
      id: "how-many-people",
      question: "How many people can play in an escape room?",
      answer:
        "Each of our rooms has a minimum and maximum capacity: Operation Pitt accommodates 2-8 players, The Billion Dollar Heist works best with 2-7 players, and Quest for the Ancient Tomb is suitable for 2-6 players. For the best experience, we recommend 3-5 players for Operation Pitt and Quest for the Ancient Tomb, and 4-6 players for The Billion Dollar Heist due to its complexity and multi-room layout.",
      category: "general",
      tags: ["group size", "booking"],
    },
    {
      id: "age-requirements",
      question: "Is there a minimum age requirement?",
      answer:
        "We recommend players be at least 10 years old to fully enjoy and participate in the puzzles. If you are looking at a group of kids playing together with an adult, then 12 years old is the minimum age. Players under 16 must be accompanied by an adult. Our Quest for the Ancient Tomb room is the most family-friendly option. The Billion Dollar Heist and Operation Pitt contain more complex puzzles that may be challenging for younger players. There's no maximum age limit - escape rooms are fun for everyone!",
      category: "general",
      tags: ["age", "children", "family"],
    },

    // Booking & Pricing
    {
      id: "book-a-room",
      question: "How do I book a room?",
      answer:
        "Booking is easy! You can book directly through our website by selecting your preferred room, date, and time. Payment is required at the time of booking to secure your reservation. You can also reach us via our contact page or email if you need help. We recommend booking in advance, especially for weekends and holidays, as our rooms often fill up quickly.",
      category: "booking",
      tags: ["reservation", "payment"],
    },
    
    {
      id: "cancellation-policy",
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy is as follows: With 48+ hours notice, you can receive a full refund or reschedule for free. With 24-48 hours notice, no refund is available, but you can reschedule at no additional cost. With less than 24 hours notice, no refund or rescheduling is available. For group bookings of 10+ people, cancellations require 7 days notice for a refund. Rescheduling is always subject to availability.",
      category: "booking",
      tags: ["cancellation", "refund", "reschedule"],
    },
    {
      id: "gift-vouchers",
      question: "Do you offer gift vouchers?",
      answer:
        "Yes! Escape room experiences make great gifts. You can purchase gift vouchers for specific rooms or for any value. Vouchers are valid for 12 months from the date of purchase and can be emailed directly to the recipient or to you to give in person. You can purchase gift vouchers through our website or contact us by email if you need assistance.",
      category: "booking",
      tags: ["gifts", "vouchers"],
    },
    {
      id: "discounts-available",
      question: "What discounts do you offer?",
      answer:
        "We offer several discounts: Saturday morning special discount. All games before noon, $130 maximum charge for up to 8 players, weekday bookings (Monday-Friday, team deal.. $33 pp if you have a minimum of 7ppl. Contact us to ask for group discounts. Teenage birthday deal $25 pp, $28pp on saturday afternoons.",
      category: "booking",
      tags: ["discounts", "savings", "special offers"],
    },

    // Game Experience
    {
      id: "locked-in",
      question: "Do we really get locked in?",
      answer:
        "No, you are never actually locked in the room. For safety reasons, you can exit the room at any time if needed. The goal is to solve the puzzles to 'escape' within the time limit, but the door is never physically locked. Our game masters monitor your progress throughout the experience to ensure your safety and enjoyment.",
      category: "experience",
      tags: ["safety", "gameplay"],
    },
    
    
    {
      id: "scary",
      question: "Are the rooms scary?",
      answer:
        "No, our rooms are not designed to be scary. They are puzzle-based adventures that focus on problem-solving rather than fear factors. There are no jump scares, horror elements, or actors that will frighten you. All our rooms are suitable for players who don't enjoy horror elements. The rooms are challenging mentally, but not frightening.",
      category: "experience",
      tags: ["horror", "fear", "atmosphere"],
    },
    {
      id: "photos",
      question: "Can we take photos inside the rooms?",
      answer:
        "To preserve the mystery for future players and protect our room designs, we don't allow photos inside the rooms during gameplay. However, we're happy to take a group photo of your team before or after your experience that you can share on social media! We encourage you to tag us in your posts - we love seeing our players' excitement.",
      category: "experience",
      tags: ["photography", "social media"],
    },

    // Group Bookings & Events
    {
      id: "team-building",
      question: "Do you offer team building events?",
      answer:
        "Yes, we specialize in corporate team building events! Our escape rooms are perfect for improving communication, problem-solving, and teamwork. We offer several packages: Team Building Basic (up to 20 people, 2 hours) for $600, Team Building Premium (up to 30 people, half day) for $1,200, and Custom Corporate Events with flexible pricing. Visit our Team Building page for more details or contact us to discuss your specific needs.",
      category: "groups",
      tags: ["corporate", "team building", "work events"],
    },
    {
      id: "private-bookings",
      question: "Do you offer private bookings?",
      answer:
        "Yes, when you book an entire room, it's automatically private - we never combine different groups in the same room. For exclusive use of our entire facility, please contact us about our corporate packages or custom events. This is perfect for larger celebrations, team building events, or any occasion where you want a more personalized experience.",
      category: "groups",
      tags: ["private", "exclusive", "group booking"],
    },
    
    
    

    
  ]

  useEffect(() => {
    setIsVisible(true)
    filterFaqs()
  }, [searchQuery, activeCategory])

  const filterFaqs = () => {
    let filtered = [...faqs]

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    setFilteredFaqs(filtered)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?key=faq-hero"
            alt="Escape Rooms Tibet FAQs"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our escape rooms, booking process, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-12 pr-12 py-6 bg-[#111] border-[#333] focus:border-cyan-500 text-white text-lg rounded-full"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories and Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <div className="mb-8 overflow-x-auto">
                <TabsList className="bg-[#111] border border-[#222] p-1 inline-flex min-w-full md:min-w-0">
                  <TabsTrigger value="all">All Questions</TabsTrigger>
                  <TabsTrigger value="general">General Info</TabsTrigger>
                  <TabsTrigger value="booking">Booking & Pricing</TabsTrigger>
                  <TabsTrigger value="experience">Game Experience</TabsTrigger>
                  <TabsTrigger value="groups">Group Bookings</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
              </div>

              {/* Results Count */}
              <div className="mb-6 flex justify-between items-center">
                <div className="text-gray-400">
                  {searchQuery ? (
                    <span>
                      Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""} for "
                      <span className="text-cyan-400">{searchQuery}</span>"
                    </span>
                  ) : (
                    <span>
                      Showing {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>

              {/* FAQ Accordion */}
              <motion.div variants={staggerContainer} className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq: FAQ) => (
                      <motion.div key={faq.id} variants={fadeIn}>
                        <AccordionItem
                          value={faq.id}
                          className="bg-[#111] rounded-lg border border-[#222] overflow-hidden mb-4"
                        >
                          <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 text-gray-300">
                            <div className="prose prose-invert max-w-none">
                              <p>{faq.answer}</p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.tags.map((tag: string) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="bg-[#0a0a0a] text-gray-400 border-[#333] hover:border-cyan-500 cursor-pointer"
                                  onClick={() => handleTagClick(tag)}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                ) : (
                  <div className="bg-[#111] rounded-lg border border-[#222] p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                    <p className="text-gray-400 mb-4">
                      We couldn't find any FAQs matching your search. Try different keywords or browse by category.
                    </p>
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                      onClick={clearSearch}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </motion.div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-left">
                    Still Have Questions?
                  </h2>
                  <p className="text-gray-300 mb-6 text-center md:text-left">
                    Can't find the answer you're looking for? Please feel free to contact us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Questions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Popular Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What is the best room for beginners?",
                  answer: "Operation Pitt is our recommended starting point.",
                  link: "#first-time-tips",
                },
                {
                  question: "Do you offer team building events?",
                  answer: "Yes, we specialize in corporate team building events!",
                  link: "#team-building",
                },
                {
                  question: "How much does it cost?",
                  answer: "Adultprices range from $35-$45 per person, and under 16's $25-$28 ,with group discounts available.",
                  link: "/pricing",
                },
                {
                  question: "What is your cancellation policy?",
                  answer: "24+ hours notice: Full refund or free rescheduling. If you can't make it, just tell us asap. We will be as reasonable as possible",
                  link: "#cancellation-policy",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="bg-[#111] rounded-xl border border-[#222] p-6 hover:border-cyan-500/30 transition-all group"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 mb-2">{item.answer}</p>
                  <div className="flex items-center text-cyan-400 text-sm">
                    <span>Read more</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Ready to Book Your Adventure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Now that you have all the information you need, it's time to put your problem-solving skills to the
                test. The clock is ticking!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                  Book Now
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
