"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Ghost, Clock, DollarSign, Users, PartyPopper, Lightbulb, AlertCircle, HelpCircle } from "lucide-react"

export default function TenYearOldBirthdayEscapeRoomsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Card className="bg-[#111] border-[#222] mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                    Are escape rooms a good idea for<br/> 10 year old birthday parties?
                  </h1>
                </div>
                <p className="text-xl text-gray-300">
                  That's a great question — and one that's worth thinking through carefully. While our escape rooms at Escape Rooms Tibet, can sound exciting for 10-year-olds, there are several reasons they often aren't the best choice for a large group of 10 year olds. Here's a breakdown of the main issues:
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-[#111] border-[#222]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Difficulty and Frustration</h2>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Most escape rooms are designed for adults or teens — with puzzles based on logic, math, language, or abstract reasoning that can go over a 10-year-old's head.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Kids may quickly get frustrated or lose interest if they can't contribute meaningfully.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Instead of feeling smart and excited, they can end up feeling left out.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#111] border-[#222]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Ghost className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Fear Factor</h2>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Even "family-friendly" rooms can have dim lighting, eerie sound effects, or time pressure that some children find scary.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Themes like kidnappings, haunted houses, or apocalyptic scenarios are common in escape rooms — not ideal for sensitive kids or a fun birthday vibe.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#111] border-[#222]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Attention Span and Energy</h2>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Our escape rooms last 60 minutes, requiring sustained focus and teamwork.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Ten-year-olds often have shorter attention spans and prefer more physical or fast-paced activities.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Once the novelty wears off, some may start goofing around — which can disrupt the experience for everyone.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#111] border-[#222]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Cost vs. Engagement</h2>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>It's expensive for a group of kids who may not fully engage or even complete the room without adult help.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#111] border-[#222]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Supervision Requirements</h2>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>You probably need one adult per 2/3 kids aged under 12 to try and keep the kids engaged in the game all the way to the end..</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>That means you need extra adults — which changes the "kids' party" dynamic.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#111] border-[#222]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PartyPopper className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Limited Freedom and Interaction</h2>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Kids like to move, talk, run, and play — escape rooms are structured, time-pressured, and confined.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>There's less opportunity for spontaneous fun, snacks, or birthday-style celebration during the session.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[#111] border-[#222] mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Sometimes it's better to say no
                  </h2>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Remember young kids always want to do what the older kids are getting to do. Sometimes it is better to say no.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Suggest bringing the kids who really want to do this on an escape room with the rest of the family, rather than with their 10 year old friends. Then they can get to participate in an escape room adventure without them having to solve all of the puzzles.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border-cyan-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Alternatives That Work Better</h2>
                </div>
                <p className="text-gray-300 mb-4">If you like the idea of a puzzle or adventure theme, you could try:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>DIY escape-style games at home — shorter, easier, and custom-made for kids.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Treasure hunts or clue trails around a park or house.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Puzzle-themed party with stations for riddles, locks, and crafts.</span>
                  </li>
                  
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


