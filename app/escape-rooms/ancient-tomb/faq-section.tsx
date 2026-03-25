import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-20 bg-[#1a0a2e] border-t border-purple-800/40">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-mono text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
          Everything you need to know about your ancient tomb adventure.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              Is this room suitable for children?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Yes! This room is designed to be family-friendly and is suitable for children
              playing alongside their family. The puzzles are tricky, but the games master will
              guide you along with the adventure, and the archaeological exploration theme is perfect
              for young imaginations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              What is the special challenge for experienced players?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              For experienced players we&apos;ve included a sidequest challenge that adds an extra
              layer of difficulty. You&apos;ll only discover it if you steamroller the first set of
              puzzles at a really fast pace. It doesn&apos;t affect the main story or your ability to
              escape the room.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              How many people can play at once?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              The room is designed for 2–6 players. This is our smallest room, so we recommend
              a maximum of 5 adults or 6 teenagers for the best experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              Do we need any special skills or knowledge?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              No special skills or knowledge required. The room is accessible to everyone
              regardless of experience level. All you need is a sense of adventure and a
              willingness to work together.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              What happens if we get stuck?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Our games masters are always watching and ready to provide hints. We want you to
              have a fun and successful experience, so we&apos;ll give you a clue when it looks like
              you&apos;ve been stuck for too long.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
