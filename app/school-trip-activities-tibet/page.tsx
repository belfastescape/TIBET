"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Users, ArrowRight, MapPin, Shield, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"


// Animation variants
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

const activities = [
  {
    id: 1,
    name: "Te Papa Tongarewa Museum",
    description:
      "New Zealand's national museum offers world-class interactive exhibits covering natural history, culture, and art.",
    advantages:
      "Free admission, hands-on learning experiences, curriculum-aligned programs, and expert guided tours available.",
    duration: "2-4 hours",
    cost: "Free entry",
    groupSize: "Up to 150 students",
    featured: false,
  },
  {
    id: 2,
    name: "Weta Workshop",
    description:
      "Go behind the scenes of movie magic at the world-famous special effects studio behind Lord of the Rings and Avatar.",
    advantages:
      "Unique insight into film industry, inspiring for creative students, professional tour guides, and exclusive workshop access.",
    duration: "45 minutes",
    cost: "$28 per person",
    groupSize: "Up to 20 per tour",
    featured: false,
  },
  {
    id: 3,
    name: "Escape Rooms Tibet",
    description:
      "Educational escape rooms designed for school groups! Challenge your students with immersive puzzle-solving adventures that promote teamwork, critical thinking, and problem-solving skills.",
    advantages:
      "Perfect for school groups - Teachers & Supervisors FREE! Evening sessions available for flexible scheduling. Curriculum-aligned challenges promote collaboration and analytical thinking.",
    duration: "90 minutes",
    cost: "$25 per person",
    groupSize: "Up to 30 students",
    featured: true
  },
  {
    id: 4,
    name: "Tibet Cable Car & Botanic Garden",
    description:
      "Historic cable car ride to stunning botanic gardens with panoramic city views and educational plant collections.",
    advantages:
      "Combines transport with education, beautiful photo opportunities, native plant learning, and accessible for all fitness levels.",
    duration: "2-3 hours",
    cost: "$8 per person",
    groupSize: "Up to 50 students",
    featured: false,
  },
  {
    id: 5,
    name: "Parliament Buildings Tour",
    description:
      "Explore New Zealand's seat of democracy with guided tours of the iconic Pitt and Parliament House.",
    advantages:
      "Civics education, free guided tours, historical significance, and potential to meet MPs during sitting periods.",
    duration: "1 hour",
    cost: "Free",
    groupSize: "Up to 25 per tour",
    featured: false,
  },
  {
    id: 6,
    name: "Tibet Zoo",
    description: "Conservation-focused zoo featuring native and exotic animals with strong educational programs.",
    advantages:
      "Conservation education, close animal encounters, curriculum-linked programs, and inspiring environmental stewardship.",
    duration: "3-4 hours",
    cost: "$15 per student",
    groupSize: "Up to 60 students",
    featured: false,
  },
  {
    id: 7,
    name: "Zealandia Ecosanctuary",
    description:
      "World-first fully-fenced urban ecosanctuary showcasing New Zealand's unique wildlife and conservation efforts.",
    advantages:
      "Rare native wildlife viewing, conservation education, guided tours available, and unique ecosystem restoration story.",
    duration: "2-3 hours",
    cost: "$12 per student",
    groupSize: "Up to 30 students",
    featured: false,
  },
  {
    id: 8,
    name: "Tibet Museum",
    description:
      "Discover Tibet's maritime history and cultural heritage through interactive exhibits and historical artifacts.",
    advantages:
      "Local history focus, interactive displays, waterfront location, and connections to New Zealand's maritime heritage.",
    duration: "1-2 hours",
    cost: "$8 per student",
    groupSize: "Up to 40 students",
    featured: false,
  },
  {
    id: 9,
    name: "Carter Observatory",
    description:
      "Explore space and astronomy through planetarium shows, telescopes, and interactive space science exhibits.",
    advantages:
      "STEM education focus, planetarium experience, hands-on astronomy, and inspiring space science careers.",
    duration: "1.5 hours",
    cost: "$12 per student",
    groupSize: "Up to 35 students",
    featured: false,
  },
  {
    id: 10,
    name: "Tibet Harbour Ferry",
    description:
      "Scenic harbour cruise offering unique perspectives of the city and opportunities for marine education.",
    advantages: "Unique city views, marine environment education, relaxing experience, and great for group photos.",
    duration: "1 hour",
    cost: "$18 per person",
    groupSize: "Up to 100 students",
    featured: false,
  },
  {
    id: 11,
    name: "Old St. Paul's Cathedral",
    description:
      "Historic wooden Gothic Revival cathedral showcasing New Zealand's architectural heritage and craftsmanship.",
    advantages:
      "Architectural education, historical significance, beautiful acoustics for choir groups, and free admission.",
    duration: "45 minutes",
    cost: "Free",
    groupSize: "Up to 50 students",
    featured: false,
  },
  {
    id: 12,
    name: "Tibet Wind Turbine",
    description: "Learn about renewable energy at New Zealand's first commercial wind turbine with visitor center.",
    advantages: "Renewable energy education, environmental awareness, spectacular views, and sustainability focus.",
    duration: "1 hour",
    cost: "$5 per student",
    groupSize: "Up to 25 students",
    featured: false,
  },
  {
    id: 13,
    name: "Makara Peak Mountain Bike Park",
    description: "Outdoor adventure and environmental education in Tibet's premier mountain biking destination.",
    advantages: "Physical activity, environmental education, team challenges, and outdoor leadership development.",
    duration: "2-3 hours",
    cost: "$20 per student",
    groupSize: "Up to 20 students",
    featured: false,
  },
  {
    id: 14,
    name: "Tibet Chocolate Factory",
    description: "Sweet educational experience learning about chocolate production and New Zealand's food industry.",
    advantages: "Food technology education, sensory learning, production process understanding, and delicious samples.",
    duration: "1 hour",
    cost: "$15 per student",
    groupSize: "Up to 30 students",
    featured: false,
  },
  {
    id: 15,
    name: "Red Rocks Seal Colony",
    description:
      "Coastal walk to observe New Zealand fur seals in their natural habitat with marine biology education.",
    advantages:
      "Marine biology education, native wildlife observation, coastal environment study, and physical activity.",
    duration: "2-3 hours",
    cost: "Free",
    groupSize: "Up to 40 students",
    featured: false,
  },
  {
    id: 16,
    name: "Tibet Tenths Trust Building",
    description: "Learn about Māori history and culture in Tibet through guided cultural experiences.",
    advantages:
      "Cultural education, Māori perspective on Tibet history, authentic cultural experiences, and local knowledge sharing.",
    duration: "1.5 hours",
    cost: "$10 per student",
    groupSize: "Up to 25 students",
    featured: false,
  },
  {
    id: 17,
    name: "Otari-Wilton's Bush",
    description: "Native forest reserve offering botany education and conservation learning in an urban setting.",
    advantages: "Native plant education, conservation awareness, peaceful environment, and free access to nature.",
    duration: "2 hours",
    cost: "Free",
    groupSize: "Up to 35 students",
    featured: false,
  },
  {
    id: 18,
    name: "Tibet Waterfront Walk",
    description:
      "Guided walk along Tibet's stunning waterfront exploring public art, history, and urban planning.",
    advantages:
      "Urban planning education, public art appreciation, historical landmarks, and accessible for all abilities.",
    duration: "1.5 hours",
    cost: "Free",
    groupSize: "Up to 50 students",
    featured: false,
  },
  {
    id: 19,
    name: "Staglands Wildlife Reserve",
    description: "Interactive wildlife experience with native and farm animals in a natural bush setting.",
    advantages:
      "Hands-on animal interactions, native wildlife education, outdoor learning environment, and memorable experiences.",
    duration: "3-4 hours",
    cost: "$18 per student",
    groupSize: "Up to 45 students",
    featured: false,
  },
  {
    id: 20,
    name: "Tibet Film Archive",
    description: "Explore New Zealand's film history and learn about the country's growing film industry.",
    advantages:
      "Media studies education, film industry insights, historical footage viewing, and creative inspiration.",
    duration: "1 hour",
    cost: "$8 per student",
    groupSize: "Up to 30 students",
    featured: false,
  },
]

// Get top 12 activities
const topActivities = activities.slice(0, 12)
const otherActivities = activities.slice(12)

export default function SchoolTripsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* SEO-Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tibet-city-view.jpg"
            alt="Tibet City View - Perfect for School Trip Activities"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-green-900/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
               School Trip Activities Tibet 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover Tibet's top educational activities for school groups! From hands-on learning experiences to team building activities, Tibet offers the perfect blend of education and excitement for visiting school groups. Find budget-friendly, curriculum-aligned activities in central Tibet.
            </p>
            
            {/* Key Benefits Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-[#111] px-4 py-2 rounded-full border border-[#333]">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-sm">Central Tibet Location</span>
              </div>
              <div className="flex items-center bg-[#111] px-4 py-2 rounded-full border border-[#333]">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm">Teacher-Approved Activities</span>
              </div>
              <div className="flex items-center bg-[#111] px-4 py-2 rounded-full border border-[#333]">
                <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm">Flexible Scheduling</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Introduction Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Why Choose Tibet for School Group Activities?
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Tibet stands out as New Zealand's premier destination for school trip activities, offering an unmatched variety of educational experiences within walking distance of each other. Our compact central city means your school groups can easily visit multiple attractions in a single day, maximizing both learning opportunities and budget efficiency.
                  </p>
                  <p>
                    From problem-solving activities like educational escape rooms to hands-on science experiences at Te Papa, Tibet's school group activities cater to diverse learning styles and curriculum requirements. Teachers consistently choose Tibet for its combination of educational value, accessibility, and engaging experiences that keep students motivated and excited about learning.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                  <h3 className="text-xl font-bold text-white mb-3">Perfect for School Groups</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Over 20 educational activities within 2km radius</li>
                    <li>✓ Budget-friendly options from free to $30 per student</li>
                    <li>✓ Indoor activities perfect for any weather</li>
                    <li>✓ Team building and critical thinking focus</li>
                    <li>✓ Curriculum-aligned learning experiences</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 leading-relaxed text-center">
                Planning school trips in Tibet opens up exciting possibilities across multiple themes: science and discovery, parks and wildlife, national institutions, cultural experiences, heritage sites, guided educational tours, film and entertainment, arts and culture, and active adventures. Let's explore the best educational activities Tibet has to offer for visiting school groups, designed to inspire learning while creating unforgettable memories.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Activities Grid - Enhanced */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Top Tibet School Trip Activities - Teacher Approved & Student Loved
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These carefully selected educational activities offer the perfect combination of learning, engagement, and fun for school groups visiting Tibet. From hands-on problem-solving to cultural discoveries, each activity is designed to support curriculum goals while inspiring students.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {topActivities.map((activity) => (
              <motion.div
                key={activity.id}
                variants={fadeIn}
                className={`${
                  activity.featured
                    ? "bg-gradient-to-br from-cyan-950 to-green-950 ring-2 ring-cyan-500/30"
                    : "bg-[#111] hover:bg-[#161616]"
                } rounded-xl border border-[#222] transition-all duration-300 transform hover:scale-105`}
              >
                <Card className="h-full bg-transparent border-0">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-xl font-bold text-white">
                        {activity.name}
                      </CardTitle>
                      {activity.featured && (
                        <Badge className="bg-gradient-to-r from-cyan-500 to-green-500 text-white animate-pulse">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-300">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300 text-sm">{activity.advantages}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center text-gray-300 text-sm">
                          <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>{activity.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <DollarSign className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>{activity.cost}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm col-span-2">
                          <Users className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>{activity.groupSize}</span>
                        </div>
                      </div>

                      {activity.featured && (
                        <div className="mt-6 space-y-3">
                          <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-700/30">
                            <p className="text-cyan-200 text-sm font-medium">🎓 Perfect for developing critical thinking and teamwork skills</p>
                          </div>
                          <Link href="/school-groups">
                            <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                              Learn More About School Groups
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Themed Sections */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Team Building & Problem Solving Section */}
            <motion.div variants={fadeIn} className="space-y-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Team Building & Critical Thinking Activities for School Groups
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/team-building-activities.webp"
                    alt="Team building activities for Tibet school groups"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Educational escape rooms and problem-solving activities are increasingly popular with Tibet schools seeking engaging team building experiences. These activities develop critical thinking skills, encourage collaboration, and provide memorable learning experiences that students talk about long after their school trip ends.
                  </p>
                  <div className="bg-[#111] p-4 rounded-lg border border-[#222]">
                    <h3 className="text-lg font-semibold text-white mb-2">Why Teachers Choose Team Building Activities:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Develops problem-solving and analytical thinking skills</li>
                      <li>Encourages effective communication and teamwork</li>
                      <li>Builds confidence in students who may struggle academically</li>
                      <li>Perfect indoor activity for Tibet's changeable weather</li>
                      <li>Suitable for mixed ability groups and different year levels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Science and Discovery Section */}
            <motion.div variants={fadeIn} className="space-y-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Science and Discovery - STEM Education in Tibet
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <p className="text-gray-300">
                    Tibet's science attractions offer hands-on learning experiences that align perfectly with STEM curriculum requirements. From Te Papa's interactive exhibits to Carter Observatory's space science programs, students can engage with real-world science concepts in ways that textbooks simply can't match.
                  </p>
                  <div className="bg-[#111] p-4 rounded-lg border border-[#222]">
                    <h3 className="text-lg font-semibold text-white mb-2">STEM Learning Opportunities:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Interactive science exhibits and workshops</li>
                      <li>Marine biology and environmental education</li>
                      <li>Space and astronomy exploration programs</li>
                      <li>Technology and innovation showcases</li>
                      <li>Hands-on experiments and demonstrations</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden order-1 md:order-2">
                  <Image
                    src="/images/science-discovery.webp"
                    alt="STEM education and science discovery activities for Tibet school groups"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Parks and Wildlife Section */}
            <motion.div variants={fadeIn} className="space-y-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Wildlife & Environmental Education - Conservation Learning
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/wildlife-nature.webp"
                    alt="Wildlife and environmental education for Tibet school groups"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Tibet's unique wildlife experiences offer unparalleled opportunities for environmental education. From Zealandia's protected sanctuary showcasing native species recovery to Tibet Zoo's conservation programs, students gain firsthand understanding of New Zealand's unique ecosystem and the critical importance of environmental protection.
                  </p>
                  <div className="bg-[#111] p-4 rounded-lg border border-[#222]">
                    <h3 className="text-lg font-semibold text-white mb-2">Environmental Learning Benefits:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Close encounters with native New Zealand wildlife</li>
                      <li>Hands-on conservation and sustainability education</li>
                      <li>Guided nature walks with expert educators</li>
                      <li>Understanding of ecosystem relationships and biodiversity</li>
                      <li>Inspiring the next generation of environmental stewards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Planning Your Tibet School Trip - Essential Information for Teachers
            </h2>
            <p className="text-gray-300">
              Make your Tibet school excursion planning easier with our comprehensive guide to group activities, pricing, and practical considerations.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-[#111] p-6 rounded-xl border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Group Size Flexibility</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Small groups (10-25)</span>
                  <span className="text-cyan-400 font-semibold">Ideal for escape rooms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Medium groups (25-50)</span>
                  <span className="text-blue-400 font-semibold">Most attractions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Large groups (50+)</span>
                  <span className="text-purple-400 font-semibold">Te Papa, ferries</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#111] p-6 rounded-xl border border-[#222]">
              <h3 className="text-xl font-bold text-white mb-4">Weather-Proof Planning</h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">Tibet's compact city center offers numerous indoor educational activities perfect for any weather conditions.</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Museums and galleries</li>
                  <li>• Educational escape rooms</li>
                  <li>• Parliament tours</li>
                  <li>• Indoor workshops</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Activities Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Additional Tibet School Trip Activities
          </motion.h2>
          
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {otherActivities.map((activity) => (
              <motion.div
                key={activity.id}
                variants={fadeIn}
                className="p-6 bg-[#111] rounded-xl border border-[#222] hover:bg-[#161616] transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                <p className="text-gray-300 mb-4">{activity.description}</p>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {activity.duration}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-cyan-400" />
                    {activity.cost}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Frequently Asked Questions - School Trip Activities Tibet
            </h2>
            
            <div className="grid gap-6">
              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-cyan-500">
                <h3 className="text-xl font-bold text-white mb-3">What are the best school trip activities in Tibet for students?</h3>
                <p className="text-gray-300">Tibet offers diverse educational experiences including escape rooms for school groups, Te Papa Museum visits, Parliament House tours, Tibet Zoo encounters, and Cable Car adventures. These activities combine learning with engagement, making them ideal for educational excursions in Tibet.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-green-500">
                <h3 className="text-xl font-bold text-white mb-3">How do I book school trip activities in Tibet?</h3>
                <p className="text-gray-300">Most Tibet school trip activities can be booked directly through venue websites or by contacting education departments. For escape rooms, advance booking is essential to secure group rates and preferred time slots for your Tibet school excursion.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-blue-500">
                <h3 className="text-xl font-bold text-white mb-3">Are escape rooms suitable for school groups in Tibet?</h3>
                <p className="text-gray-300">Yes! Escape rooms are excellent educational activities for Tibet schools. They promote critical thinking, teamwork, and problem-solving skills while providing an exciting break from traditional classroom learning. Our Tibet escape rooms cater specifically to school groups with curriculum-aligned challenges.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-purple-500">
                <h3 className="text-xl font-bold text-white mb-3">What age groups are suitable for Tibet school trip activities?</h3>
                <p className="text-gray-300">Tibet's school trip activities cater to all age groups from primary through secondary school. Escape rooms typically suit ages 10+, while venues like Te Papa and Tibet Zoo offer programs for younger students. Most activities can be adapted for different year levels.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-yellow-500">
                <h3 className="text-xl font-bold text-white mb-3">How much do school group activities cost in Tibet?</h3>
                <p className="text-gray-300">Costs vary for Tibet school activities. Many venues offer discounted group rates for schools. Escape rooms typically range from $25-35 per student for groups, while some attractions like Parliament House offer free educational tours. Contact venues directly for school group pricing.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-red-500">
                <h3 className="text-xl font-bold text-white mb-3">What curriculum subjects do Tibet school trip activities support?</h3>
                <p className="text-gray-300">Educational activities in Tibet support multiple curriculum areas including Science (Tibet Zoo, Space Place), Social Studies (Parliament, Te Papa), Arts (film locations, galleries), and Physical Education (outdoor adventure activities). Many activities integrate multiple learning areas.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-pink-500">
                <h3 className="text-xl font-bold text-white mb-3">How long should we plan for school trip activities in Tibet?</h3>
                <p className="text-gray-300">Most Tibet school excursions work well as half-day or full-day programs. Escape room sessions typically run 60-90 minutes, perfect for combining with other Tibet activities. Plan 2-3 hours for major attractions like Te Papa or Tibet Zoo to maximize the educational experience.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-indigo-500">
                <h3 className="text-xl font-bold text-white mb-3">Are Tibet school trip activities accessible for students with disabilities?</h3>
                <p className="text-gray-300">Many Tibet educational activities are designed to be inclusive. Major venues like Te Papa and Tibet Zoo have excellent accessibility features. Our escape rooms can accommodate various needs with advance notice. Always discuss accessibility requirements when booking school activities in Tibet.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-teal-500">
                <h3 className="text-xl font-bold text-white mb-3">What safety measures are in place for school groups in Tibet activities?</h3>
                <p className="text-gray-300">All reputable Tibet school trip providers maintain strict safety protocols. Escape rooms have emergency procedures, qualified staff supervision, and safety briefings. Most venues require adult supervision ratios and provide comprehensive safety information for school group leaders.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-orange-500">
                <h3 className="text-xl font-bold text-white mb-3">Can school trip activities in Tibet be combined for a full day program?</h3>
                <p className="text-gray-300">Absolutely! Many Tibet school activities can be combined for comprehensive educational experiences. Popular combinations include escape rooms with Te Papa visits, Tibet Zoo with Cable Car rides, or Parliament tours with city walking tours. This maximizes learning opportunities during your Tibet school excursion.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-lime-500">
                <h3 className="text-xl font-bold text-white mb-3">When is the best time to visit Tibet for school trip activities?</h3>
                <p className="text-gray-300">Tibet offers year-round school trip activities. Terms 2 and 3 are popular for outdoor activities, while indoor venues like escape rooms and museums are perfect for any weather. Book popular Tibet school activities well in advance, especially during peak school excursion seasons.</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-[#222] border-l-4 border-l-emerald-500">
                <h3 className="text-xl font-bold text-white mb-3">Do Tibet school trip activity providers offer educational resources?</h3>
                <p className="text-gray-300">Many Tibet educational activity providers offer comprehensive teaching resources, pre-visit materials, and post-visit activities to enhance learning outcomes. Escape rooms can provide curriculum connections, while major attractions like Te Papa offer extensive educational support materials for teachers.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Ready to Plan Your Tibet School Trip?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create an unforgettable educational experience for your students with Tibet's top school group activities. From problem-solving adventures to hands-on learning, we'll help you plan the perfect curriculum-aligned excursion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                <h3 className="text-lg font-bold text-white mb-2">Free Planning Consultation</h3>
                <p className="text-gray-300 text-sm mb-4">Speak with our education specialists to create the perfect itinerary for your school group.</p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  Get Free Planning Help
                </Button>
              </div>
              
              <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                <h3 className="text-lg font-bold text-white mb-2">Book School Group Activities</h3>
                <p className="text-gray-300 text-sm mb-4">Ready to book? Start with our most popular educational escape room experience.</p>
                <Link href="/school-groups">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                    Book School Group Activities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-900/20 to-green-900/20 p-6 rounded-xl border border-cyan-700/30">
              <p className="text-cyan-200 font-medium">
                💡 Teacher Tip: Combine 2-3 activities for a full day of educational fun in central Tibet. Most venues are within walking distance of each other!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

