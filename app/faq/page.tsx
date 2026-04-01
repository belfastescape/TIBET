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
      question: "How would you describe an escape room?",
      answer:
        "Think of it as a live, themed puzzle experience: your group enters a story-driven space and works through riddles, hidden clues, and tasks before the clock runs out—typically one hour—to finish the mission or “break out.” Our games are built to stretch your thinking, strengthen collaboration, and give mates, whānau, and workmates a shared experience worth talking about.",
      category: "general",
      tags: ["basics", "new players"],
    },
    {
      id: "first-time-tips",
      question: "It’s my first escape room—what should I know?",
      answer:
        "A few habits help: keep talking and call out anything odd you find; look everywhere without forcing props or breaking anything; keep clues in one place so nothing gets lost; ask for a nudge from the host if you’re going in circles; and treat it as play, not a test. Newcomers often enjoy Quest for the Ancient Tomb as a gentle introduction.",
      category: "general",
      tags: ["basics", "new players", "tips"],
    },
    {
      id: "what-to-bring",
      question: "Should I pack anything for my visit?",
      answer:
        "No kit list—just bring curiosity and a cooperative mindset. We supply what you need for the puzzles. Wear something you can move in easily and aim to arrive about fifteen minutes early. Eating and drinking inside the game spaces isn’t permitted; lockers are available for bags and valuables.",
      category: "general",
      tags: ["preparation", "new players"],
    },
    {
      id: "how-many-people",
      question: "What group sizes do your rooms support?",
      answer:
        "Capacities differ by game: Operation Pitt fits 2–8, The Billion Dollar Heist 2–7, and Quest for the Ancient Tomb 2–6. For pacing and space, we suggest 3–5 in Operation Pitt and Quest for the Ancient Tomb, and 4–6 in The Billion Dollar Heist because of its layout and difficulty.",
      category: "general",
      tags: ["group size", "booking"],
    },
    {
      id: "age-requirements",
      question: "Is there a minimum age?",
      answer:
        "We suggest age 10+ so everyone can engage with the puzzles. For a kids-only group with an adult supervising, the floor is 12. Anyone under 16 needs an adult present. Quest for the Ancient Tomb skews most family-friendly; Billion Dollar Heist and Operation Pitt lean harder on logic and may be tough for very young players. There’s no upper age—everyone’s welcome.",
      category: "general",
      tags: ["age", "children", "family"],
    },

    // Booking & Pricing
    {
      id: "book-a-room",
      question: "How do I make a reservation?",
      answer:
        "Pick a room, date, and slot on our site and pay when you confirm to lock it in. Need a hand? Use the contact page or email us. Peak nights and holidays get busy, so reserving early is smart.",
      category: "booking",
      tags: ["reservation", "payment"],
    },

    {
      id: "cancellation-policy",
      question: "What is your cancellation policy?",
      answer:
        "48+ hours before: full refund or reschedule at no charge. 24–48 hours before: no refund, but you may move the booking once without a fee. Under 24 hours: no refund and no reschedule. For 10+ guests, we need a week’s notice for cancellations that qualify for a refund. Moves depend on open slots.",
      category: "booking",
      tags: ["cancellation", "refund", "reschedule"],
    },
    {
      id: "gift-vouchers",
      question: "Can I buy gift vouchers?",
      answer:
        "Absolutely—an hour in a room is a memorable present. Choose a room or a dollar amount; vouchers last twelve months from purchase and can go straight to the recipient’s inbox or to you to wrap. Buy online or email us if you need help choosing.",
      category: "booking",
      tags: ["gifts", "vouchers"],
    },
    {
      id: "discounts-available",
      question: "What discounts do you offer?",
      answer:
        "Saturday mornings: before noon, capped at $130 for up to eight players. Weekdays (Mon–Fri): team rate of $33 per person with seven or more. Ask us about larger group pricing. Teen birthday pricing: $25 per person, or $28 on Saturday afternoons.",
      category: "booking",
      tags: ["discounts", "savings", "special offers"],
    },

    // Game Experience
    {
      id: "locked-in",
      question: "Are we actually locked inside?",
      answer:
        "No—you’re never trapped. You can step out if you need to; the door isn’t physically barred from the inside. The “escape” is a story beat, not a safety risk. Staff keep an eye on your session so you stay safe and enjoy the run.",
      category: "experience",
      tags: ["safety", "gameplay"],
    },

    {
      id: "scary",
      question: "Will I find the rooms frightening?",
      answer:
        "They’re not horror experiences. Expect brain teasers and atmosphere, not jump scares or gore, and no actors designed to scare you. If you dislike spooky stuff, you’re still in good hands—the challenge is mental, not about fear.",
      category: "experience",
      tags: ["horror", "fear", "atmosphere"],
    },
    {
      id: "photos",
      question: "Can we take pictures during the game?",
      answer:
        "We ask you not to photograph inside the set so spoilers stay fresh for the next teams. We’re glad to snap a group shot before or after you play—feel free to post and tag us; we enjoy seeing the smiles.",
      category: "experience",
      tags: ["photography", "social media"],
    },

    // Group Bookings & Events
    {
      id: "team-building",
      question: "Do you host corporate or team events?",
      answer:
        "Yes—corporate groups are a big part of what we do. The games sharpen communication, collaboration, and problem-solving under time pressure. Packages include Team Building Basic (up to 20 people, ~2 hours, $600), Team Building Premium (up to 30, half day, $1,200), and bespoke corporate options. See the Team Building page or reach out to tailor something.",
      category: "groups",
      tags: ["corporate", "team building", "work events"],
    },
    {
      id: "private-bookings",
      question: "Will our group have the room to ourselves?",
      answer:
        "A full-room booking is always just your group—we don’t mix strangers. Want the whole venue? Talk to us about corporate or private-hire packages. That works well for big celebrations, offsites, or anything where you want the run of the place.",
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
            alt="Escape Rooms Tibet help and answers"
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
                placeholder="Type a topic or keyword…"
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
                      Showing {filteredFaqs.length} item{filteredFaqs.length !== 1 ? "s" : ""}
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
                    <h3 className="text-xl font-bold text-white mb-2">Nothing matched</h3>
                    <p className="text-gray-400 mb-4">
                      Try another word or switch tabs—your answer might be under a different topic.
                    </p>
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                      onClick={clearSearch}
                    >
                      Reset search
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
                    Need something else?
                  </h2>
                  <p className="text-gray-300 mb-6 text-center md:text-left">
                    If it’s not listed here, drop us a line—we’re happy to help with specifics.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                        Get in touch
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
              Shortcuts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Which room suits first-timers?",
                  answer: "Quest for the Ancient Tomb is our usual recommendation for a softer first run.",
                  link: "#first-time-tips",
                },
                {
                  question: "Do you run corporate events?",
                  answer: "Yes, we host team-building and workplace groups regularly.",
                  link: "#team-building",
                },
                {
                  question: "What does pricing look like?",
                  answer: "Adults roughly $35–$45 each; under 16s about $25–$28, with group deals on offer.",
                  link: "/pricing",
                },
                {
                  question: "How do cancellations work?",
                  answer: "48+ hours out: refund or free move. Closer in, rules tighten—see the full policy for detail.",
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
                    <span>See details</span>
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
                Now that you have all the information you need, it&apos;s time to put your problem-solving skills to the
                test. The clock is ticking!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8" asChild>
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Get in touch
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
