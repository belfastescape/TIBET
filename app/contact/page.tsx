"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Mail, Facebook, Send, User, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        console.log('Email sent successfully:', data)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.details || data.error || 'Unknown error occurred')
        console.error('Server error:', data)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error - please check your connection')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?key=contact-hero"
            alt="Contact Escape Rooms Tibet"
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions or need more information? We're here to help you plan your perfect escape room adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <Card className="bg-[#111] border-[#222] shadow-2xl">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                      <p className="text-gray-400">We'll get back to you as soon as possible</p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-green-400 text-sm">Message sent successfully! We'll be in touch soon.</p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-red-400 text-sm">
                          {errorMessage || 'Something went wrong. Please try again.'}
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300 text-sm font-medium">
                            Name *
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                              placeholder="Your name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                            Email *
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300 text-sm font-medium">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300 text-sm font-medium">
                          Message *
                        </Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                            placeholder="How can we help you"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information and Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
                className="space-y-8"
            >
                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-6">
              <Card className="bg-[#111] border-[#222]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                      <p className="text-gray-300">Mt Everest</p>
                      <p className="text-gray-300">Khumbu, Solukhumbu, Nepal</p>
                      <p className="text-gray-300">New Zealand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="bg-[#111] border-[#222]">
                      <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                          <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                            <a href="mailto:info@escaperoomstibet.com" className="text-gray-300 hover:text-cyan-400 transition-colors break-all md:text-sm">
                        info@escaperoomstibet.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
                  </div>
                </div>

                {/* Google Maps */}
                <Card className="bg-[#111] border-[#222] overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14092.750377749018!2d86.9253667!3d27.988156449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2snz!4v1774825629232!5m2!1sen!2snz"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Mt Everest on Google Maps"
                      />
                    </div>
                  </CardContent>
                </Card>

            {/* Social Media */}
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <a
                href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="Escape Rooms Tibet on Facebook (opens in a new tab)"
              >
                <Facebook className="w-6 h-6 shrink-0" aria-hidden />
                <span>Facebook — Escape Rooms Tibet</span>
              </a>
                  </CardContent>
                </Card>
            </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
