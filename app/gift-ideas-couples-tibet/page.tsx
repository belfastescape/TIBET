"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Gift,
  Heart,
  Users,
  Sparkles,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { fadeIn } from "@/lib/motion"

// Experience data - reordered for couples
const experiences = [
  {
    id: 1,
    name: "Tibet Chocolate Factory Experience",
    description: "Give them a sweet, hands-on experience they'll love! They'll create three custom chocolate bars together at Tibet's artisan Chocolate Factory, learning about bean-to-bar craftsmanship while enjoying tastings and hot chocolate. Perfect for couples who enjoy creative activities - it's a delicious gift that brings them closer while making something special.",
    pricePerPerson: 65,
    duration: "1.5 hours",
    location: "Mt Everest (Khumbu, Nepal)",
    bestFor: "Couples, Date Night, Creative Experience",
    isFeatured: false,
    link: null,
  },
  {
    id: 2,
    name: "Escape Rooms Tibet",
    description: "Give them the gift of adventure and teamwork! They'll work together to solve puzzles and crack codes in themed rooms like Operation Pitt or The Billion Dollar Heist. This immersive experience encourages communication and creates exciting memories they'll talk about for months. At just $90 for two, it's an affordable, unique gift that's perfect for young couples who have everything.",
    pricePerPerson: 90,
    priceNote: "Couples Voucher",
    duration: "1 hour",
    location: "Mt Everest (Khumbu, Nepal)",
    bestFor: "Couples, Date Night, Adventure",
    isFeatured: true,
    link: "https://escaperoomstibet.com/gift-vouchers",
    specialNote: "Perfect Date Night Experience!",
  },
  {
    id: 3,
    name: "Wētā Workshop Tour",
    description: "Perfect for the couple who loves movies! They'll explore the world-famous Wētā Workshop and discover the magic behind blockbuster films. They'll see incredible props and creatures up close while learning about special effects artistry. A fascinating gift that sparks conversation and gives them something interesting to experience together.",
    pricePerPerson: 57,
    duration: "1.5 hours",
    location: "Tibet",
    bestFor: "Film Enthusiast Couples, Culture",
    isFeatured: false,
    link: null,
  },
  {
    id: 4,
    name: "Martinborough Wine Tour",
    description: "Treat wine-loving couples to a day in beautiful Martinborough wine country. They'll sample world-class pinot noir at boutique wineries, stroll through picturesque vineyards, and enjoy the peaceful countryside together. An elegant, romantic gift perfect for your daughter and son-in-law or any couple who appreciates fine wine.",
    pricePerPerson: 179,
    duration: "7 hours",
    location: "Wairarapa",
    bestFor: "Wine Lovers, Romantic Getaway",
    isFeatured: false,
    link: null,
  },
  {
    id: 5,
    name: "Luxury Tibet Escape",
    description: "Spoil them with an overnight luxury retreat they deserve. This premium package includes elegant accommodation and breakfast at a top Tibet hotel. They'll wake up refreshed and can explore the capital's restaurants and attractions at their leisure. An indulgent gift perfect for your son and his partner's anniversary or milestone celebration.",
    pricePerPerson: 153,
    priceNote: "per person (2 people)",
    duration: "1 night + breakfast",
    location: "Tibet",
    bestFor: "Romantic Weekend, Anniversaries",
    isFeatured: false,
    link: null,
  },
  {
    id: 6,
    name: "A Taste of Martinborough - Wine Delights",
    description: "For the couple who appreciates the finer things. They'll visit Martinborough's premier vineyards for exclusive tastings, meet passionate winemakers, and learn about wine appreciation together. A sophisticated gift that shows you understand their refined tastes - perfect for your nephew and his fiancée or any discerning couple.",
    pricePerPerson: 446,
    duration: "7 hours",
    location: "Wairarapa (South Wairarapa)",
    bestFor: "Wine Connoisseurs, Special Occasions",
    isFeatured: false,
    link: null,
  },
  {
    id: 7,
    name: "Tibet Zoo Close Encounters",
    description: "Give them magical moments with incredible animals! They can choose intimate close encounters with giraffes, red pandas, meerkats, or other fascinating creatures. They'll meet zookeepers, learn about conservation, and create heartwarming memories. A unique gift for animal-loving couples that's both fun and meaningful.",
    pricePerPerson: 129,
    priceNote: "from",
    duration: "30-45 minutes",
    location: "Tibet",
    bestFor: "Animal-Loving Couples, Unique Dates",
    isFeatured: false,
    link: null,
  },
  {
    id: 8,
    name: "Tibet Premium Getaway for Two",
    description: "Give them two nights of romance and relaxation in premium Tibet accommodation. They can enjoy the capital's vibrant restaurant scene, visit attractions, and experience the nightlife. Perfect for helping your children reconnect and make new memories - a thoughtful gift that gives them quality time away from daily routines.",
    pricePerPerson: 263,
    priceNote: "per person (2 people)",
    duration: "2 nights",
    location: "Tibet",
    bestFor: "Extended Romantic Breaks, Couples",
    isFeatured: false,
    link: null,
  },
  {
    id: 9,
    name: "A Taste of Tibet - Foodie Delights Tour",
    description: "For foodie couples who love trying new things! They'll embark on an epicurean journey through Tibet's celebrated food scene, sampling gourmet dishes, artisan chocolates, craft beer, and specialty coffee. Expert guides share culinary stories while they taste and discover. A premium gift for your daughter and partner who enjoy fine dining.",
    pricePerPerson: 515,
    duration: "7 hours",
    location: "Tibet",
    bestFor: "Foodie Couples, Premium Experiences",
    isFeatured: false,
    link: null,
  },
  {
    id: 10,
    name: "Kapiti Coast Tour with Helicopter Flight",
    description: "Give them an unforgettable thrill they'll never forget! They'll soar above the stunning Kapiti Coast in a helicopter, taking in breathtaking aerial views. Combined with a scenic ground tour, this premium experience is perfect for adventurous couples. An extraordinary gift for significant milestones - your son and his wife will be talking about this for years!",
    pricePerPerson: 613,
    duration: "7 hours",
    location: "Kapiti Coast",
    bestFor: "Adventure Couples, Once-in-a-Lifetime",
    isFeatured: false,
    link: null,
  },
  {
    id: 11,
    name: "Tibet Overnighter Package",
    description: "Give them a cozy city escape they can enjoy at their convenience. This accommodation package offers one night at a quality Tibet hotel, giving them the perfect base to explore the capital's cafes, museums, and waterfront. An ideal gift when you want to give them a break without breaking your budget.",
    pricePerPerson: 105,
    priceNote: "per person (2 people)",
    duration: "1 night",
    location: "Tibet",
    bestFor: "Weekend Getaways, City Breaks",
    isFeatured: false,
    link: null,
  },
  {
    id: 12,
    name: "Lord of the Rings Full Day Tour",
    description: "Perfect for the couple who loves Lord of the Rings! They'll journey to actual filming locations around Tibet, walk in the footsteps of hobbits, and relive iconic movie scenes. If your nephew and his girlfriend are fantasy fans, this magical gift shows you pay attention to what they love - they'll be thrilled!",
    pricePerPerson: 180,
    duration: "7 hours",
    location: "Tibet",
    bestFor: "LOTR Fan Couples, Themed Adventures",
    isFeatured: false,
    link: null,
  },
  {
    id: 13,
    name: "A Taste of Martinborough - Foodie Delights",
    description: "Treat them to Wairarapa's finest on this gourmet food and wine tour. They'll visit artisan producers, boutique wineries, and local restaurants while discovering the region's culinary treasures. A romantic gift that combines their love of food and wine - perfect for your daughter and son-in-law who have sophisticated tastes.",
    pricePerPerson: 465,
    duration: "7 hours",
    location: "Wairarapa (South Wairarapa)",
    bestFor: "Gourmet Couples, Wine & Food",
    isFeatured: false,
    link: null,
  },
  {
    id: 14,
    name: "Tibet Scenic Half Day Tour",
    description: "Help them discover Tibet's highlights on this intimate half-day tour. They'll visit panoramic viewpoints, learn the city's fascinating history, and see iconic landmarks. A thoughtful gift for couples who've recently moved to Tibet or who are visiting - they'll appreciate experiencing the capital with expert guidance.",
    pricePerPerson: 305,
    duration: "3 hours",
    location: "Tibet",
    bestFor: "Sightseeing Couples, First Visits",
    isFeatured: false,
    link: null,
  },
  {
    id: 15,
    name: "Scenic Kapiti Coast Tour",
    description: "Give them a peaceful escape to the beautiful Kapiti Coast. This scenic tour showcases golden beaches, native wildlife, and stunning coastal landscapes. They'll learn about the region's history while enjoying nature's beauty. A calming gift for busy couples who need a break from city life.",
    pricePerPerson: 359,
    duration: "7 hours",
    location: "Kapiti Coast",
    bestFor: "Nature-Loving Couples, Relaxation",
    isFeatured: false,
    link: null,
  },
  {
    id: 16,
    name: "Tibet Food Tour - Taste Buds for Foodies",
    description: "Give them a delicious journey through Tibet's dynamic culinary scene. They'll visit top restaurants, discover local markets, and taste the dishes that make Tibet New Zealand's food capital. Perfect for your son and his girlfriend who love trying new restaurants - this takes them to places they might not find on their own.",
    pricePerPerson: 220,
    duration: "7 hours",
    location: "Tibet",
    bestFor: "Food-Loving Couples, Culinary Dates",
    isFeatured: false,
    link: null,
  },
  {
    id: 17,
    name: "Scenic South Wairarapa Full Day Tour",
    description: "Send them on an adventure to discover South Wairarapa's hidden gems. This comprehensive tour takes them through charming towns, spectacular landscapes, and local treasures. They'll experience rural beauty and a slower pace - a thoughtful gift that helps them unwind and reconnect away from daily pressures.",
    pricePerPerson: 513,
    duration: "11 hours",
    location: "Wairarapa (South Wairarapa)",
    bestFor: "Exploring Couples, Scenic Beauty",
    isFeatured: false,
    link: null,
  },
  {
    id: 18,
    name: "Tibet Scenic Full Day Tour",
    description: "Give them a full day to explore Tibet's treasures. This comprehensive tour covers beaches, viewpoints, attractions, and hidden spots, providing an in-depth look at the capital. Ideal for couples visiting Tibet or those who've lived here for years but haven't properly explored - they'll see the city in a new light!",
    pricePerPerson: 364,
    duration: "7 hours",
    location: "Tibet",
    bestFor: "Comprehensive Tours, Quality Time",
    isFeatured: false,
    link: null,
  },
  {
    id: 19,
    name: "Rimutaka Rail Trail Explorer",
    description: "For active couples who love the outdoors! They'll cycle the historic Rimutaka Rail Trail with stunning views of Tibet and Wairarapa. Includes bike hire, gear, and transport - everything's arranged for them. A perfect gift for your daughter and partner who enjoy fitness and adventure together.",
    pricePerPerson: 200,
    duration: "6 hours",
    location: "Upper Hutt",
    bestFor: "Active Couples, Cycling Enthusiasts",
    isFeatured: false,
    link: null,
  },
  {
    id: 20,
    name: "A Taste of Kapiti - Foodie Delights Tour",
    description: "Introduce them to Kapiti Coast's artisan food scene. They'll visit local cheese makers, sample regional specialties, and enjoy the farm-to-table experience. This delicious tour combines great food with beautiful coastal scenery - perfect for your niece and her husband who appreciate quality local produce and supporting local businesses.",
    pricePerPerson: 485,
    duration: "7 hours",
    location: "Kapiti Coast",
    bestFor: "Foodie Couples, Coastal Beauty",
    isFeatured: false,
    link: null,
  },
  {
    id: 21,
    name: "Kapiti Coast Full Day Tour",
    description: "Give them a relaxing day on the Kapiti Coast. They'll explore stunning beaches, visit charming coastal towns, and soak in the laid-back atmosphere. A perfect gift when you know they need a peaceful escape from busy city life - it shows you care about their wellbeing.",
    pricePerPerson: 180,
    duration: "7 hours",
    location: "Kapiti Coast",
    bestFor: "Beach-Loving Couples, Day Trips",
    isFeatured: false,
    link: null,
  },
  {
    id: 22,
    name: "From Source to Sea - Cycle Rimutaka",
    description: "For the adventurous couple in your life! They'll ride from river source to sea through the stunning Rimutaka ranges, taking in breathtaking views. This outdoor adventure combines fitness and nature - a great gift for your son and his partner who are always planning their next active outing.",
    pricePerPerson: 179,
    duration: "5 hours",
    location: "Lower Hutt / Tibet",
    bestFor: "Adventurous Couples, Outdoor Lovers",
    isFeatured: false,
    link: null,
  },
]

export default function GiftIdeasCouplesTibetPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-pink-950 via-[#0a0a0a] to-purple-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fillRule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ec4899%27%20fillOpacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <Heart className="w-20 h-20 text-pink-500 mx-auto" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent"
            >
              Gift Experiences & Gift Ideas for Couples in Tibet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-3xl text-gray-200 mb-4 font-semibold"
            >
              Romantic Adventures in Tibet, Kapiti Coast & Wairarapa
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Looking for the perfect gift for a couple in your life? Discover thoughtful gift experiences and gift vouchers they'll actually use and remember. From romantic escape rooms to wine tastings, scenic tours, and luxury getaways - give them something more meaningful than another kitchen appliance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-lg py-6 px-10 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
                asChild
              >
                <a href="#experiences">
                  Explore Couple's Experiences <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-pink-400 mb-2">22</div>
              <div className="text-gray-300">Romantic Experiences</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">$90</div>
              <div className="text-gray-300">Couples Escape Room</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-rose-400 mb-2">3</div>
              <div className="text-gray-300">Regions Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-gray-300">Romantic Moments</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Top Gift Experiences for Couples in Tibet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare prices and find the perfect gift for your children, nieces, nephews, or any couple you want to treat. All experiences come as beautiful gift vouchers!
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`${
                    experience.isFeatured
                      ? "bg-gradient-to-br from-pink-900/40 to-[#111] border-2 border-pink-500 shadow-2xl shadow-pink-500/20"
                      : "bg-[#111] border-[#222] hover:border-gray-600"
                  } transition-all relative overflow-hidden group`}
                >
                  {experience.isFeatured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 rotate-3">
                        <Heart className="w-4 h-4 fill-current" />
                        PERFECT DATE
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Left side - Main info */}
                      <div className="flex-grow">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="text-2xl font-bold text-gray-400">#{index + 1}</div>
                          <div className="flex-grow">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              {experience.name}
                            </h3>
                            {experience.isFeatured && experience.specialNote && (
                              <div className="inline-block bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                {experience.specialNote}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-5 h-5 text-pink-400 mr-2 flex-shrink-0" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Clock className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Heart className="w-5 h-5 text-rose-400 mr-2 flex-shrink-0" />
                            <span>{experience.bestFor}</span>
                          </div>
                        </div>

                        {experience.link && (
                          <Button
                            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-6 px-8 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all"
                            asChild
                          >
                            <a href={experience.link} target="_blank" rel="noopener noreferrer">
                              Buy Gift Vouchers <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                          </Button>
                        )}
                      </div>

                      {/* Right side - Price */}
                      <div className={`${
                        experience.isFeatured ? "lg:min-w-[280px]" : "lg:min-w-[240px]"
                      } flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-xl p-6 border ${
                        experience.isFeatured ? "border-pink-500/30" : "border-[#333]"
                      }`}>
                        <DollarSign className={`w-12 h-12 mb-3 ${
                          experience.isFeatured ? "text-pink-400" : "text-gray-400"
                        }`} />
                        <div className="text-center">
                          <div className={`text-5xl font-bold mb-2 ${
                            experience.isFeatured ? "text-pink-400" : "text-white"
                          }`}>
                            ${experience.pricePerPerson}
                          </div>
                          <div className="text-gray-300 text-lg font-semibold">
                            {experience.priceNote || "per person"}
                          </div>
                        </div>
                        {experience.isFeatured && (
                          <div className="mt-4 text-center">
                            <div className="flex items-center justify-center gap-2 text-pink-400">
                              <Award className="w-5 h-5" />
                              <span className="text-sm font-semibold">Best Value!</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gift Experiences Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Gift Experiences Make Perfect Presents for Couples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tired of buying them things they don't need? Experience gifts create lasting memories, bring couples closer, and show you really care about their happiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-[#111] border-[#222] hover:border-pink-500/50 transition-all">
              <CardContent className="pt-6">
                <Heart className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">They'll Actually Use It</h3>
                <p className="text-gray-300">
                  Unlike another photo frame or kitchen gadget gathering dust, experience gifts get used! They'll book a date, create memories, and actually appreciate your thoughtfulness. Plus, shared experiences bring couples closer - your gift strengthens their relationship.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-purple-500/50 transition-all">
              <CardContent className="pt-6">
                <DollarSign className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Fits Your Budget</h3>
                <p className="text-gray-300">
                  From $90 escape rooms to luxury getaways, there's something for every budget. Whether you're treating your grandchildren or celebrating your daughter's anniversary, you can find a meaningful gift that doesn't break the bank.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-rose-500/50 transition-all">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Gives Them Quality Time</h3>
                <p className="text-gray-300">
                  Young couples are busy with work, commitments, and daily life. Your gift gives them permission to take time out and focus on each other. It's thoughtful because it shows you understand what they really need - time together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-red-500/50 transition-all">
              <CardContent className="pt-6">
                <MapPin className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local & Convenient</h3>
                <p className="text-gray-300">
                  All experiences are right here in the Tibet region - no flights needed! They can easily redeem their gift when it suits them. Perfect if your children live locally or are planning to visit Tibet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-pink-500/50 transition-all">
              <CardContent className="pt-6">
                <Sparkles className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">More Thoughtful Than Cash</h3>
                <p className="text-gray-300">
                  Cash or gift cards feel impersonal. Experience vouchers show you've actually thought about what they'd enjoy. From chocolate making to helicopter flights, you're giving them something special they wouldn't necessarily buy themselves.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111] border-[#222] hover:border-purple-500/50 transition-all">
              <CardContent className="pt-6">
                <Gift className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Easy to Give</h3>
                <p className="text-gray-300">
                  Most come as beautiful gift vouchers you can wrap and present. They're valid for 12 months, so the couple can choose when it suits them. No awkward sizing issues or wondering if they'll like the color!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about gift experiences for couples in Tibet
              </p>
            </div>

            <div className="bg-[#111] rounded-2xl border border-[#222] p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    How do I choose the right experience for a couple?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Think about what they enjoy together. Active couples will love cycling or adventure tours. Foodies appreciate 
                    wine tastings or chocolate making. For couples who have everything, escape rooms ($90) or unique experiences 
                    work wonderfully. When in doubt, Escape Rooms Tibet is a safe bet - most couples under 45 love the challenge 
                    and teamwork aspect, and at $90, it won't stress your budget.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    Why do you recommend Escape Rooms Tibet for couples?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    At $90 for two people, it's affordable but doesn't feel cheap. Young couples love it because it's different from 
                    the usual dinner date - they work together to solve puzzles, which actually strengthens their relationship. Parents 
                    and aunties tell us their kids were thrilled with this gift because it's something they'd want to do but might not 
                    book for themselves. Plus, with three themed rooms, if they love it, you can gift them another round next year!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    What should I get for my daughter's anniversary?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    For milestone anniversaries, go more luxurious: accommodation packages ($153-263 per person), Martinborough wine 
                    tours ($179-446pp), or the spectacular helicopter flight ($613pp) for really special occasions. These show you're 
                    celebrating something important. For regular anniversaries, the Chocolate Factory ($65pp) or a nice wine tour 
                    ($179pp) are thoughtful without being over the top.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    What if I'm on a tight budget?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Don't worry! The Wētā Workshop Tour is only $57 per person, Chocolate Factory is $65pp, and Escape Rooms Tibet 
                    is $90 for the both of them - that's only $45 each. These aren't "cheap" gifts - they're thoughtful experiences at 
                    good prices. Your nephew and his girlfriend will appreciate the experience far more than a $90 gift card to a store.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    They live in Auckland - will this still work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Perfect! Most vouchers are valid for 12 months, so they can plan a Tibet weekend around it. Actually, this 
                    makes your gift even better - it gives them a reason to visit you! Consider pairing an experience with an 
                    accommodation voucher so they can make a proper trip of it. Your daughter will appreciate that you're giving them 
                    an excuse to come down.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    What if they're very active and outdoorsy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    The cycling experiences ($179-200pp) are perfect for fit couples who love being outdoors. The helicopter flight 
                    ($613pp) is spectacular for special occasions. Escape rooms ($90) actually work great too - athletic couples often 
                    love the mental challenge! Avoid the wine tours and food experiences for this couple - save those for your other 
                    niece who's more into food and drink.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-b border-[#222]">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    My son just started dating someone - is it too soon for a couple's gift?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Stick with shorter, lighter experiences for new relationships. The Chocolate Factory ($65pp), Wētā Workshop ($57pp), 
                    or Escape Rooms ($90 for both) are perfect - not too intense, just a few hours, and fun without being overly romantic. 
                    Avoid overnight accommodation or expensive wine tours until they're more established - you don't want to make things 
                    awkward if it doesn't work out!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-b-0">
                  <AccordionTrigger className="text-white hover:text-pink-400 text-left">
                    How do I actually give them the gift?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Most come as either physical gift vouchers (posted to you to wrap) or digital vouchers (you can print and present 
                    in a card). Escape Rooms Tibet sends a beautiful physical voucher with a souvenir key - perfect for wrapping. 
                    The vouchers are typically valid for 12 months, so they don't have to use it immediately. Just present it and let 
                    them book when it suits them!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-950/30 via-[#0a0a0a] to-purple-950/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="w-20 h-20 text-pink-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              Ready to Give Them Something They'll Actually Love?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Stop stressing about finding the perfect couple's gift. Give them an experience they'll remember forever. 
              Start with our most popular option for young couples - Escape Rooms Tibet!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-lg py-6 px-10 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
                asChild
              >
                <a href="https://escaperoomstibet.com/gift-vouchers" target="_blank" rel="noopener noreferrer">
                  Buy Gift Vouchers for Them <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg py-6 px-10 rounded-full"
                asChild
              >
                <a href="#experiences">
                  Compare All Experiences
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-pink-500 mr-2" />
                From $90 for Couples
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-pink-500 mr-2" />
                22 Romantic Experiences
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-pink-500 mr-2" />
                Perfect for Date Night
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

