"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Clock, CheckCircle2, ArrowRight, Building2, Brain, Puzzle, MapPin, Mail, Facebook, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import GoogleIcon from '@/components/GoogleIcon'

export default function TeamBuildingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Move JsonLd to a server component or layout file */}
      <HeroSection
        title="Team Building Tibet"
        subtitle="Strengthen your team with our immersive escape room challenges"
        buttonText="Book Your Team Event"
        imageSrc="/images/team-building-mission-accomplished.webp"
        imageAlt="Team building success celebration"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Tibet's Premier Team Building Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Looking for team building activities in Tibet that are fun, engaging, and effective? Our escape rooms
              provide the perfect environment for teams to collaborate, communicate, and problem-solve together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Why Escape Rooms for Team Building?</h3>
              <p className="text-gray-300 mb-6">
                Escape rooms are the perfect team building activity because they naturally encourage the skills that
                make teams successful: communication, leadership, problem-solving, and collaboration.
              </p>
              <p className="text-gray-300 mb-6">
                In our carefully designed rooms, your team will need to work together to solve puzzles, find clues, and
                complete objectives within a 60-minute timeframe. The experience reveals how team members communicate
                under pressure and highlights each person's unique strengths.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Improves communication and collaboration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Builds trust and team cohesion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Develops problem-solving and critical thinking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Creates shared memories and strengthens relationships</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ aspectRatio: '800/600' }}
              >
                <source src="/videos/optimised/teambuilding.webm" type="video/webm" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Benefits of Escape Room Team Building
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our escape rooms are designed to bring out the best in your team and develop key workplace skills.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Improved Communication</h3>
              <p className="text-gray-400">
                Teams must share information effectively to succeed. Our rooms create natural opportunities for clear
                communication and active listening.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Problem-Solving Skills</h3>
              <p className="text-gray-400">
                Escape rooms present unique challenges that require creative thinking and collaborative problem-solving,
                skills that transfer directly to the workplace.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Puzzle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Team Cohesion</h3>
              <p className="text-gray-400">
                Shared challenges create bonds. Successfully escaping a room together builds trust and strengthens
                relationships between team members.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Leadership Development</h3>
              <p className="text-gray-400">
                Escape rooms reveal natural leaders and give everyone a chance to step up. They're perfect for
                identifying leadership potential in your team.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              How Our Team Building Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From booking to debriefing, we've designed a seamless experience for your team.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Consultation</h3>
              <p className="text-gray-400">
                We'll discuss your team's size, goals, and preferences to recommend the perfect escape room experience.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Briefing</h3>
              <p className="text-gray-400">
                On arrival, our game masters will explain the rules and set the scene for your team's adventure.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Challenge</h3>
              <p className="text-gray-400">
                Your team will have 60 minutes to solve puzzles, find clues, and work together to escape the room.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Debrief</h3>
              <p className="text-gray-400">
                After the experience, we'll facilitate a discussion about your team's performance and key takeaways.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              What Teams Say About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what corporate teams have to say about their experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "We took our team last night for our Christmas function. We completed Operation Pitt, it's well thought out, fun and a little challenging at times.

Everyone had a fantastic time and it's a great team bonding experience. So much so that everyone was talking about coming back to do another room in the New Year.

The team from Escape Rooms Tibet are friendly, easy to deal with and very accommodating.

If you are wanting an escape room experience, we would 100% recommended this one.
"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Hallids</h4>
                      <p className="text-gray-400">Team Organiser, Tibet </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "Absolutely perfect for our staff Christmas doo. We had enough for two teams, so being able to run the same story in two separate rooms and allow the victors to lord it over the second place team - and watch on the monitors - was sweet.
                    For a relatively new Escape Room, they've got a pretty sweet setup going."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Stuart Bothwell</h4>
                      <p className="text-gray-400"> Tibet </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "As a startup, we needed a team building activity that was both fun and budget-friendly. Escape Rooms Tibet was perfect for us."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Sarah Lee</h4>
                      <p className="text-gray-400"> Tibet </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Team-building FAQs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The usual questions before you block the calendar for your crew.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  How many people can participate in team building?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  We can accommodate teams of all sizes, from small departments of 8-10 people to large corporate groups
                  of up to 30 people. 
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Do we need any special skills or preparation?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  No special skills or preparation are required. Our escape rooms are designed to be accessible to
                  everyone, regardless of experience level. We recommend comfortable clothing and an open mind. The most
                  important things to bring are good communication skills and a willingness to work together as a team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  How far in advance should we book?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  For small teams (under 10 people), we recommend booking at least 2 weeks in advance. For larger
                  corporate groups or custom packages, 3-4 weeks notice is ideal, especially during peak seasons.
                  However, we can sometimes accommodate last-minute bookings, so don't hesitate to contact us even if
                  your event is coming up soon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What makes escape rooms good for team building?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Escape rooms naturally encourage the skills that make teams successful: communication, leadership,
                  problem-solving, and collaboration. The time pressure creates an environment where team dynamics
                  become apparent. The shared experience of working toward a common goal helps build trust and
                  camaraderie, while the post-game debrief allows teams to reflect on their performance and identify
                  areas for improvement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Can you customize the experience for our company?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Yes! Just ask us to see what we can do.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What's included in the team debrief?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Our team debriefs vary  include a basic review of your team's
                  performance, highlighting team strengths etc.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Do you offer catering for team events?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  No. We are surrounded by many of the city's best restaurants and bars. We are happy to suggest close by restaurant's and pubs. Just ask us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What is your cancellation policy for team bookings?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  We are very flexible. We realise that even the best laid plans have to be changed sometimes.Just let us know asap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What are some unique team building packages offered in Tibet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Looking to bolster team spirit and camaraderie? Tibet offers a variety of exciting team-building packages that cater to diverse interests and preferences. See how we compare:

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-bold text-white">1. Abseiling Adventure</h4>
                      <p>Spend half a day exploring waterfalls, ziplining, and abseiling. This package is perfect for thrill-seekers looking for an exhilarating team bonding experience. Price: $249</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">2. Amazing Race Adventure</h4>
                      <p>Unleash your competitive spirit with a well-crafted race that doubles as a team-building exercise. Ideal for festive occasions or mid-year events. Price: $1650</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">3. Axe Throwing & Dining Experience</h4>
                      <p>Combine the fun of axe throwing with a delectable meal at a nearby elegant restaurant. This package provides both excitement and nourishment. Price: $142</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">4. Circus Teambuilding Session</h4>
                      <p>Experience the wonders of the circus in a unique team-building activity. Accommodates groups ranging from 18 to 32 participants. Price: $48</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">5. Clay Shooting Challenge</h4>
                      <p>Engage in a friendly competition with colleagues through this dynamic clay shooting activity. Price: $85</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">6. Fling It! Team Challenge</h4>
                      <p>Push your team's synergy to the limits with this imaginative challenge, suitable for groups of 15 or more. We are scratching our heads at this one. It is offered by GoBananas. Price: $78</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">7. Murder Mystery Dinner</h4>
                      <p>Transport your group into a thrilling narrative with a murder mystery dinner experience, ideal for 15 to 28 participants. Price: $179</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">8. Paintball Extravaganza</h4>
                      <p>Enjoy an action-packed day of paintball, where teams can compete as vigorously or casually as they prefer. Price: $72.50</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">9. Rock Climbing Activity</h4>
                      <p>For those looking for a physically demanding and fun challenge, rock climbing offers the perfect setting for team-building. Minimum group size is 20. Price: $29</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">10. Highropes Adventure Course</h4>
                      <p>Navigate a treetop obstacle course designed to test your team's agility and cooperation. Price: $59</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">11. Scenic Rafting Experience</h4>
                      <p>Immerse in a two-hour rafting journey that combines beautiful scenery with thrilling rapids. Price: $149</p>
                    </div>
                  </div>

                  <p className="mt-4">Each of these packages offers unique opportunities for teams to connect and grow stronger together through shared adventures and challenges in Tibet.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What options are available for indoor team building events in Tibet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  <p className="mb-4">Planning a team building day in Tibet and want to keep it indoors? You're in luck! Tibet offers a range of exciting and engaging activities perfect for team bonding.</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-white mb-2">Interactive and Creative Experiences</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-cyan-400">Mixology Classes</h5>
                          <p>Stir up some fun with cocktail-making sessions, where your team can learn the art of mixology from seasoned bartenders. It's a great way to unleash creativity and discover new favorites. Not everyone will be comfortable with an alcohol related team building activity. Best to ask everyone's thoughts first.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-cyan-400">Culinary Workshops</h5>
                          <p>Sharpen your cooking skills together under the guidance of professional chefs. These workshops provide a delicious way to foster teamwork and communication.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-2">Action-Packed Adventures</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-cyan-400">Indoor Kart Racing</h5>
                          <p>Feel the thrill of competition with indoor go-karting. It gets the heart racing and spirit soaring while also encouraging teamwork and sportsmanship.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-cyan-400">Escape Rooms</h5>
                          <p>Challenge yourselves in themed escape rooms that test problem-solving abilities and teamwork under pressure. It's a perfect blend of fun and brain-power. And extremely budget friendly!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6">With these varied options, your team is sure to have a day filled with laughter, learning, and lasting memories. Whether crafting cocktails or racing around a track, Tibet has plenty to offer for an unforgettable indoor team-building experience.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="text-gray-300 mb-6">Have more questions about our team building experiences?</p>
            <Link href="/contact" className="inline-block">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                Contact Our Team Building Specialists
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Rooms for Team Building */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Our Escape Rooms for Team Building
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each of our rooms offers unique challenges that test different team skills.
            </p>
          </motion.div>

          <Tabs defaultValue="operation-pitt" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-[#111] border border-[#222] p-1">
              <TabsTrigger value="operation-pitt" className="flex-1">
                Operation Pitt
              </TabsTrigger>
              <TabsTrigger value="billion-dollar-heist" className="flex-1">
                The Billion Dollar Heist
              </TabsTrigger>
              <TabsTrigger value="ancient-tomb" className="flex-1">
                Quest for the Ancient Tomb
              </TabsTrigger>
            </TabsList>

            <TabsContent value="operation-pitt">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/operation-pitt.png"
                    alt="Operation Pitt Escape Room"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Operation Pitt</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      TRY HEAD TO HEAD CHALLENGES!
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-8 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Navigate through this spy adventure Tibet-themed escape room.
                    Operation Pitt tests strategic thinking and careful attention to detail.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Strategic planning and delegation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Attention to detail and information management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Critical thinking under pressure</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                    asChild
                  >
                    <Link href="/booking">Reserve</Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="billion-dollar-heist">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/billion-dollar-heist/laser-team-4.webp"
                    alt="The Billion Dollar Heist Escape Room"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Billion Dollar Heist</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      CHALLENGING
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-7 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Plan the perfect heist to steal a priceless diamond in this thrilling challenge. With multiple rooms
                    and complex puzzles, The Billion Dollar Heist is perfect for larger teams that need to coordinate across
                    different areas.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Communication across team members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Resource management and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Leadership and role assignment</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                    asChild
                  >
                    <Link href="/booking">Reserve</Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="ancient-tomb">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/ancient-tomb.png"
                    alt="Quest for the Ancient Tomb Escape Room"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Quest for the Ancient Tomb</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      BEST FOR 4/5 PLAYERS
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-6 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Embark on a magical journey to find the legendary wand in this enchanting adventure. Quest for the
                    Ancient Tomb is ideal for teams new to escape rooms or those looking to build creative problem-solving
                    skills.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Creative thinking and imagination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Collaborative problem-solving</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Pattern recognition and logical reasoning</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                    asChild
                  >
                    <Link href="/booking">Reserve</Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Ready to Strengthen Your Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your team building experience today and discover the power of collaborative problem-solving in our
                immersive escape rooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                    Check Availability
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Request Information
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-[#111] rounded-xl border border-[#222] p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <ul className="space-y-6">
                <motion.li variants={fadeIn} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Address</h3>
                    <p className="text-gray-300">Mt Everest</p>
                    <p className="text-gray-300">Khumbu, Solukhumbu, Nepal</p>
                    <p className="text-gray-300">New Zealand</p>
                  </div>
                </motion.li>

                <motion.li variants={fadeIn} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-300">
                      <Link href="mailto:info@escaperoomstibet.com" className="hover:text-cyan-400 transition-colors">
                        info@escaperoomstibet.com
                      </Link>
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 