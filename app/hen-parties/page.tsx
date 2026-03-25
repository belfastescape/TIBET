"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageWithFilter from "@/components/image-with-filter"
import { WineIcon as GlassOfWine, PartyPopper, Clock, Users, Calendar as CalendarIcon, Gift, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ArrowRight, Building2, Brain, Puzzle, Send, MapPin, Phone, Mail, Facebook, User, MessageSquare } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { HeroSection } from "@/components/hero-section"
import GoogleIcon from '@/components/GoogleIcon'
import { JsonLd } from '@/components/JsonLd'

export default function HenPartiesPage() {
  const { ref: imageRef, isInView: imageIsInView } = useScrollAnimation()
  const { ref: cardRef, isInView: cardIsInView } = useScrollAnimation()
  const { ref: stepsRef, isInView: stepsIsInView } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Hen Party Enquiry",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "Hen Party Enquiry", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.details || data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Network error — please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const confettiColors = ["#FF5F9E", "#00FFCC", "#FFD700", "#FF69B4", "#00CED1"]
  const [confettiPieces, setConfettiPieces] = useState<Array<{
    id: number
    color: string
    x: number
    y: number
    size: number
    delay: number
    rotateDir: number
    duration: number
    repeatDelay: number
    borderRadius: string
  }>>([])

  useEffect(() => {
    setConfettiPieces(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1 + 0.5,
        delay: Math.random() * 5,
        rotateDir: Math.random() > 0.5 ? 1 : -1,
        duration: 5 + Math.random() * 5,
        repeatDelay: Math.random() * 5,
        borderRadius: Math.random() > 0.5 ? "50%" : "0%",
      }))
    )
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20 z-0"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <motion.div
              initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4"
            >
              <GlassOfWine className="h-16 w-16 text-pink-400" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
            >
               Best Hen Party Activities in Tibet
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl"
            >
              The perfect pre-wedding celebration for the bride-to-be and her squad! Solve puzzles, crack codes, and
              create unforgettable memories.
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full">
                Book Your Hen Party
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111] p-6 rounded-xl border border-pink-500/20 shadow-lg hover:shadow-pink-500/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Perfect for Groups</h3>
              </div>
              <p className="text-gray-300">
                Ideal for groups of 4-28 people. Multiple rooms available for larger parties.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#111] p-6 rounded-xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">80 Minute Experience</h3>
              </div>
              <p className="text-gray-300">
                An exciting 80-minute adventure that's the perfect addition to your hen party itinerary.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#111] p-6 rounded-xl border border-pink-500/20 shadow-lg hover:shadow-pink-500/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                  <CalendarIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Special Pricing</h3>
              </div>
              <p className="text-gray-300">$33pp for hen parties with a minimum of 7 people.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confetti Section */}
      <div
        className="relative overflow-hidden py-16"
        style={{
          backgroundImage: "url('/images/hen-party-fun.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 pointer-events-none">
          {confettiPieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{ y: -20, x: piece.x + "vw", opacity: 0 }}
              animate={{
                y: ["-10vh", "110vh"],
                opacity: [0, 1, 0],
                rotate: [0, 360 * piece.rotateDir],
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: piece.repeatDelay,
              }}
              className="absolute"
              style={{
                width: piece.size + "rem",
                height: piece.size + "rem",
                backgroundColor: piece.color,
                borderRadius: piece.borderRadius,
              }}
            />
          ))}
        </div>

        {/* Video Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                ref={imageRef}
                animate={imageIsInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-rose-500/20">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '600/400' }}
                  >
                    <source src="/videos/optimised/HENPARTYSPLIT.webm" type="video/webm" />
                  </video>
                </div>
              </motion.div>

              <motion.div
                ref={cardRef}
                animate={cardIsInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className="bg-gradient-to-br from-[#111] to-[#222] p-8 rounded-xl border border-rose-500/20 shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                    Why Choose Us for Your Hen Party?
                  </h2>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Sparkles className="h-5 w-5 text-rose-400" />
                      </div>
                      <p className="text-gray-300">
                        Exciting and immersive escape room experiences perfect for creating memorable hen party moments
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Sparkles className="h-5 w-5 text-pink-400" />
                      </div>
                      <p className="text-gray-300">Customizable packages to suit your group size and preferences</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Sparkles className="h-5 w-5 text-pink-400" />
                      </div>
                      <p className="text-gray-300">
                        Central Tibet location, perfect for continuing your celebration afterward
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Sparkles className="h-5 w-5 text-pink-400" />
                      </div>
                      <p className="text-gray-300">Special touches to make the bride-to-be feel extra special</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* How to Book Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              How to Book Your Hen Party
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <Card className="bg-[#111] border-pink-500/20 shadow-lg h-full hover:shadow-pink-500/10 transition-shadow">
                <CardContent className="p-8 pt-12">
                  <h3 className="text-xl font-bold mb-4 text-white">Choose Your Date</h3>
                  <p className="text-gray-300">
                    Select your preferred date and time for the birthday party. We recommend booking at least 2 weeks in advance to secure your spot.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <Card className="bg-[#111] border-purple-500/20 shadow-lg h-full">
                <CardContent className="p-8 pt-12">
                  <h3 className="text-xl font-bold mb-4 text-white">Pay Deposit</h3>
                  <p className="text-gray-300">
                    We ask for a $90 refundable deposit to be paid at least 7 days in advance. The remaining balance is due on the day of the party.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <Card className="bg-[#111] border-pink-500/20 shadow-lg h-full">
                <CardContent className="p-8 pt-12">
                  <h3 className="text-xl font-bold mb-4 text-white">Enjoy Your Party!</h3>
                  <p className="text-gray-300">
                    Arrive 10 minutes before your scheduled time. Our game masters will brief your group and guide you through an unforgettable birthday experience.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="py-8 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20">
                <ImageWithFilter
                  src="/images/hen-party-celebration.png"
                  alt="Hen party celebrating in an escape room"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Fun & Laughter Guaranteed</h3>
                  <p className="text-gray-200">The perfect activity for your hen party</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="bg-gradient-to-br from-[#111] to-[#222] p-8 rounded-xl border border-cyan-500/20 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  What Our Hen Parties Say
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-cyan-500/10">
                    <p className="text-gray-300 italic mb-4">
                      "We had the BEST time at our hen party escape room! The staff made my bestie feel so special on
                      her big day. Highly recommend for any bride tribe!"
                    </p>
                    <p className="text-cyan-400 font-medium">— Sarah T., Maid of Honor</p>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-pink-500/10">
                    <p className="text-gray-300 italic mb-4">
                      "Such a fun alternative to the typical hen party. We were all buzzing with adrenaline after
                      escaping with just 2 minutes to spare!"
                    </p>
                    <p className="text-pink-400 font-medium">— Emma L., Bride-to-Be</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-16 bg-[#0a0a0a]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Everything you need to know about hen party activities in Tibet
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="booking" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger
            value="booking"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-pink-400"
          >
            Booking
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-green-500/20 data-[state=active]:text-cyan-400"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="activities"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:text-purple-400"
          >
            Activities
          </TabsTrigger>
          <TabsTrigger
            value="preparation"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500/20 data-[state=active]:to-orange-500/20 data-[state=active]:text-rose-400"
          >
            Preparation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="booking" className="space-y-4">
          <div className="bg-[#111] p-4 rounded-lg border border-pink-500/20">
            <h3 className="text-lg font-medium text-white mb-2">How far in advance should we book our hen party?</h3>
            <p className="text-gray-300">
              We recommend booking at least 2-3 weeks in advance for hen parties, especially for weekend slots
              which tend to fill up quickly. Tibet hen party activities are popular year-round.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-pink-500/20">
            <h3 className="text-lg font-medium text-white mb-2">What is the minimum/maximum group size for hen parties?</h3>
            <p className="text-gray-300">
              Our escape rooms accommodate 4-8 players each. For larger hen parties, we can run multiple rooms simultaneously
              and organize a friendly competition between groups.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-pink-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Do you require a deposit for hen party bookings?</h3>
            <p className="text-gray-300">
              We require a $90 refundable deposit per room to be paid at least 7 days in advance. The balance is due
              on the day of your hen party event.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-pink-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Can we combine escape rooms with other Tibet hen party activities?</h3>
            <p className="text-gray-300">
              Absolutely! Our central Tibet location makes it easy to combine our escape room experience with other
              hen party activities like wine bars, restaurants, or spa treatments all within walking distance.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="experience" className="space-y-4">
          <div className="bg-[#111] p-4 rounded-lg border border-cyan-500/20">
            <h3 className="text-lg font-medium text-white mb-2">How long does the hen party escape room experience last?</h3>
            <p className="text-gray-300">
              The escape room itself is 60 minutes. We recommend allowing 80 minutes total for briefing, gameplay,
              and celebration photos afterward - perfect timing for your Tibet hen party itinerary.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-cyan-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Can we take photos during our hen party?</h3>
            <p className="text-gray-300">
              We encourage photos with the props after your escape for those perfect hen party memories. 
              Our rooms provide great backdrops for your celebration photos.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-cyan-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Are alcoholic beverages allowed during hen parties?</h3>
            <p className="text-gray-300">
              We don't allow alcohol in the escape rooms for safety reasons, but we're located in Tibet's city centre
              surrounded by the best bars and restaurants - perfect for continuing your hen party celebration afterward.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-cyan-500/20">
            <h3 className="text-lg font-medium text-white mb-2">What makes escape rooms great hen party activities?</h3>
            <p className="text-gray-300">
              Escape rooms are perfect hen party activities because they encourage teamwork, create shared memories,
              and provide plenty of laughs. They're also weather-independent, making them reliable Tibet activities.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="bg-[#111] p-4 rounded-lg border border-purple-500/20">
            <h3 className="text-lg font-medium text-white mb-2">What are the best hen party activities in Tibet city centre?</h3>
            <p className="text-gray-300 mb-3">
              Tibet CBD offers many fantastic hen party activities that can be done in before or after one of our escape room experiencies all within walking distance / or short uber  of each other. Here are the top 10 popular options:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• <strong>Wine Tasting Tours</strong> - Explore Tibet's renowned wine bars like Noble Rot , hanging Ditch or Puffin</li>
              <li>• <strong>Cocktail Making Classes</strong> - Learn mixology at venues like Danger Danger or Library Bar</li>
              <li>• <strong>Spa Treatments</strong> - Pamper sessions at East Day Spa or Blys mobile spa services</li>
              <li>• <strong>High Tea Experiences</strong> - Elegant afternoon tea at hotels like QT Tibet or Te Papa Cafe</li>
              <li>• <strong>Dance Classes</strong> - Fun group lessons in salsa, burlesque, or contemporary dance</li>
              <li>• <strong>Food Tours</strong> - Guided culinary adventures through Tibet's famous food scene</li>
              <li>• <strong>Karaoke Sessions</strong> - Private rooms at venues like San Fran Bath House or Good Luck</li>
              <li>• <strong>Harbour Cruise</strong> - Scenic boat trips around Tibet Harbour with BYO options</li>
              <li>• <strong>Art Classes</strong> - Creative workshops like pottery painting or jewellery making</li>
              <li>• <strong>Rooftop Bar Hopping</strong> - Visit Tibet's best rooftop venues like Hot Sauce or Havana Bar</li>
            </ul>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-purple-500/20">
            <h3 className="text-lg font-medium text-white mb-2">How do escape rooms compare to other Tibet hen party activities?</h3>
            <p className="text-gray-300">
              Escape rooms offer unique advantages over traditional hen party activities: they're weather-proof, 
              encourage teamwork, create lasting memories, and are suitable for all fitness levels. Plus, our central 
              location makes it easy to combine with other Tibet hen party activities.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-purple-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Can you recommend a full day of hen party activities in Tibet?</h3>
            <p className="text-gray-300">
              A perfect Tibet hen party day might include: morning spa treatments, lunch at a rooftop restaurant, 
              our escape room experience in the afternoon, followed by cocktails and dinner in the city centre. 
              Everything is walkable in Tibet's compact CBD.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-purple-500/20">
            <h3 className="text-lg font-medium text-white mb-2">What hen party activities work best in Tibet's weather?</h3>
            <p className="text-gray-300">
              Tibet's changeable weather makes indoor activities like escape rooms, wine tastings, spa treatments, 
              and cocktail experiences particularly popular for hen parties. These activities ensure your celebration 
              continues regardless of the weather conditions.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="preparation" className="space-y-4">
          <div className="bg-[#111] p-4 rounded-lg border border-rose-500/20">
            <h3 className="text-lg font-medium text-white mb-2">What should we wear for hen party activities in Tibet?</h3>
            <p className="text-gray-300">
              For escape rooms, wear comfortable clothing and flat shoes. If you're planning multiple Tibet hen party 
              activities, consider layers due to the city's variable weather and comfortable walking shoes for moving between venues.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-rose-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Should we arrive early for our hen party?</h3>
            <p className="text-gray-300">
              Yes, please arrive 10 minutes before your scheduled time for check-in and briefing. This ensures your 
              hen party starts on time and you can stick to your schedule for other Tibet activities.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-rose-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Can you accommodate special requests for hen parties?</h3>
            <p className="text-gray-300">
              We love making hen parties special! Let us know your ideas when booking, and we'll do our best to
              accommodate them. We can also recommend other Tibet hen party activities to complement your escape room experience.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-lg border border-rose-500/20">
            <h3 className="text-lg font-medium text-white mb-2">How do we plan transport between hen party activities in Tibet?</h3>
            <p className="text-gray-300">
              Tibet city centre is very walkable, and most hen party activities are within a few blocks of each other. 
              For longer distances, consider booking taxis or ride-shares in advance, especially on weekend evenings when demand is high.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</section>

      {/* CTA Section with Contact Form */}
      <section className="py-16 bg-gradient-to-r from-rose-500/10 to-pink-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
                Ready to Plan an Unforgettable Hen Party?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Contact us today to check availability and customize your perfect hen party experience
              </p>
              <Link href="/booking">
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-400 hover:bg-pink-500/10 text-lg py-6 px-8"
                >
                  Book Now
                </Button>
              </Link>
            </div>

            <div className="bg-[#111] rounded-xl border border-pink-500/20 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-2 text-white">Send us a message</h3>
              <p className="text-gray-400 text-sm mb-6">We&apos;ll get back to you about availability and hen party options.</p>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm">Message sent successfully! We&apos;ll be in touch soon.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hp-name" className="text-gray-300 text-sm font-medium">Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        id="hp-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500/20"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hp-phone" className="text-gray-300 text-sm font-medium">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        id="hp-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500/20"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hp-email" className="text-gray-300 text-sm font-medium">Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      id="hp-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hp-subject" className="text-gray-300 text-sm font-medium">Subject *</Label>
                  <Input
                    id="hp-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500/20"
                    placeholder="Hen Party Enquiry"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hp-message" className="text-gray-300 text-sm font-medium">Message *</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <Textarea
                      id="hp-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500/20 resize-none"
                      placeholder="Preferred date, group size, and any questions..."
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
