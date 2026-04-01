"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Clock, CheckCircle2, ArrowRight, Building2, Brain, Puzzle, Send, MapPin, Mail, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ImageWithFilter from "@/components/image-with-filter"
import { HeroSection } from "@/components/hero-section"
import GoogleIcon from '@/components/GoogleIcon'
import { JsonLd } from '@/components/JsonLd'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  // ... rest of the component code ...
} 