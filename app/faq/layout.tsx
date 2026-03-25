import type { Metadata } from "next"
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: "Escape Room FAQ Tibet | Common Questions Answered",
  description: "Find answers to frequently asked questions about our escape rooms in Tibet. Learn about booking, group sizes, difficulty levels, and what to expect during your adventure.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "Escape Room FAQ Tibet | Common Questions Answered",
    description: "Find answers to frequently asked questions about our escape rooms in Tibet. Learn about booking, group sizes, difficulty levels, and what to expect during your adventure.",
    type: "website",
    url: "https://www.escaperoomstibet.com/faq",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an escape room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An escape room is a physical adventure game where players are placed in a themed room and have to solve a series of puzzles, find clues, and complete objectives within a set time limit (usually 60 minutes) to 'escape' or accomplish the mission. Our rooms are designed to challenge your mind, test your teamwork, and provide an unforgettable experience for friends, families, and colleagues."
      }
    },
    {
      "@type": "Question",
      "name": "I've never done an escape room before. Any tips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For first-timers, we recommend: 1) Communicate with your team and share what you find, 2) Search thoroughly but respectfully - nothing needs to be forced or broken, 3) Organize your clues so you can keep track of what you've found, 4) Don't be afraid to ask for hints if you're stuck, and 5) Most importantly, have fun! Our Quest for the Ancient Tomb room is an excellent choice for beginners."
      }
    },
    {
      "@type": "Question",
      "name": "How many people can play in an escape room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each of our rooms has a minimum and maximum capacity: Operation Pitt accommodates 2-8 players, The Billion Dollar Heist works best with 2-7 players, and Quest for the Ancient Tomb is suitable for 2-6 players. For the best experience, we recommend 3-5 players for Operation Pitt and Quest for the Ancient Tomb, and 4-6 players for The Billion Dollar Heist."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a minimum age requirement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend players be at least 10 years old to fully enjoy and participate in the puzzles. If you are looking at a group of kids playing together with an adult, then 12 years old is the minimum age. Players under 16 must be accompanied by an adult. Our Quest for the Ancient Tomb room is the most family-friendly option."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking is easy! You can book directly through our website by selecting your preferred room, date, and time. Payment is required at the time of booking to secure your reservation. Alternatively, you can call us at 021 555 0198 during business hours to book over the phone. We recommend booking in advance, especially for weekends and holidays, as our rooms often fill up quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer gift vouchers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Escape room experiences make great gifts. You can purchase gift vouchers for specific rooms or for any value. Vouchers are valid for 12 months from the date of purchase and can be emailed directly to the recipient or to you to give in person. You can purchase gift vouchers through our website or by calling us at 021 555 0198."
      }
    },
    {
      "@type": "Question",
      "name": "Do we really get locked in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you are never actually locked in the room. For safety reasons, you can exit the room at any time if needed. The goal is to solve the puzzles to 'escape' within the time limit, but the door is never physically locked. Our game masters monitor your progress throughout the experience to ensure your safety and enjoyment."
      }
    },
    {
      "@type": "Question",
      "name": "Are the rooms scary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, our rooms are not designed to be scary. They are puzzle-based adventures that focus on problem-solving rather than fear factors. There are no jump scares, horror elements, or actors that will frighten you. All our rooms are suitable for players who don't enjoy horror elements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer team building events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in corporate team building events! Our escape rooms are perfect for improving communication, problem-solving, and teamwork. We offer several packages including Team Building Basic (up to 20 people) and Team Building Premium (up to 30 people). Visit our Team Building page for more details or contact us to discuss your specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With 48+ hours notice, you can receive a full refund or reschedule for free. With 24-48 hours notice, no refund is available, but you can reschedule at no additional cost. With less than 24 hours notice, no refund or rescheduling is available. For group bookings of 10+ people, cancellations require 7 days notice for a refund."
      }
    },
    {
      "@type": "Question",
      "name": "What discounts do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer several discounts: Saturday morning special - all games before noon, $130 maximum charge for up to 8 players. Weekday team deal - $33 per person with a minimum of 7 people. Contact us for group discounts. Teenage birthday deal from $25 per person, $28 per person on Saturday afternoons."
      }
    }
  ]
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}

