import type { Metadata } from "next"
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: "Escape room help & answers | Escape Rooms Tibet",
  description: "Practical answers about booking, group sizes, age limits, pricing, and what to expect in our Tibet escape rooms—before you play.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "Escape room help & answers | Escape Rooms Tibet",
    description: "Practical answers about booking, group sizes, age limits, pricing, and what to expect in our Tibet escape rooms—before you play.",
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
      "name": "How would you describe an escape room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Think of it as a live, themed puzzle experience: your group enters a story-driven space and works through riddles, hidden clues, and tasks before the clock runs out—typically one hour—to finish the mission or “break out.” Our games are built to stretch your thinking, strengthen collaboration, and give mates, whānau, and workmates a shared experience worth talking about."
      }
    },
    {
      "@type": "Question",
      "name": "It’s my first escape room—what should I know?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A few habits help: keep talking and call out anything odd you find; look everywhere without forcing props or breaking anything; keep clues in one place so nothing gets lost; ask for a nudge from the host if you’re going in circles; and treat it as play, not a test. Newcomers often enjoy Quest for the Ancient Tomb as a gentle introduction."
      }
    },
    {
      "@type": "Question",
      "name": "What group sizes do your rooms support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capacities differ by game: Operation Pitt fits 2–8, The Billion Dollar Heist 2–7, and Quest for the Ancient Tomb 2–6. For pacing and space, we suggest 3–5 in Operation Pitt and Quest for the Ancient Tomb, and 4–6 in The Billion Dollar Heist because of its layout and difficulty."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a minimum age?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We suggest age 10+ so everyone can engage with the puzzles. For a kids-only group with an adult supervising, the floor is 12. Anyone under 16 needs an adult present. Quest for the Ancient Tomb skews most family-friendly; Billion Dollar Heist and Operation Pitt lean harder on logic and may be tough for very young players. There’s no upper age—everyone’s welcome."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make a reservation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pick a room, date, and slot on our site and pay when you confirm to lock it in. Need a hand? Use the contact page or email us. Peak nights and holidays get busy, so reserving early is smart."
      }
    },
    {
      "@type": "Question",
      "name": "Can I buy gift vouchers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely—an hour in a room is a memorable present. Choose a room or a dollar amount; vouchers last twelve months from purchase and can go straight to the recipient’s inbox or to you to wrap. Buy online or email us if you need help choosing."
      }
    },
    {
      "@type": "Question",
      "name": "Are we actually locked inside?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No—you’re never trapped. You can step out if you need to; the door isn’t physically barred from the inside. The “escape” is a story beat, not a safety risk. Staff keep an eye on your session so you stay safe and enjoy the run."
      }
    },
    {
      "@type": "Question",
      "name": "Will I find the rooms frightening?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They’re not horror experiences. Expect brain teasers and atmosphere, not jump scares or gore, and no actors designed to scare you. If you dislike spooky stuff, you’re still in good hands—the challenge is mental, not about fear."
      }
    },
    {
      "@type": "Question",
      "name": "Do you host corporate or team events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—corporate groups are a big part of what we do. The games sharpen communication, collaboration, and problem-solving under time pressure. Packages include Team Building Basic (up to 20 people, ~2 hours, $600), Team Building Premium (up to 30, half day, $1,200), and bespoke corporate options. See the Team Building page or reach out to tailor something."
      }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "48+ hours before: full refund or reschedule at no charge. 24–48 hours before: no refund, but you may move the booking once without a fee. Under 24 hours: no refund and no reschedule. For 10+ guests, we need a week’s notice for cancellations that qualify for a refund. Moves depend on open slots."
      }
    },
    {
      "@type": "Question",
      "name": "What discounts do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Saturday mornings: before noon, capped at $130 for up to eight players. Weekdays (Mon–Fri): team rate of $33 per person with seven or more. Ask us about larger group pricing. Teen birthday pricing: $25 per person, or $28 on Saturday afternoons."
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
