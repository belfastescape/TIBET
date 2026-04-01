import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-20 bg-[#1a0a2e] border-t border-purple-800/40">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-mono text-center">
          Tomb quest: questions
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
          The essentials before you enter the dig.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              Will younger players enjoy this room?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Yes—it’s written with families in mind when kids play with adults. Puzzles have bite, but your host can
              steer the pace, and the archaeology-meets-magic vibe lands well for curious young players.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              Is there an extra challenge for veterans?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Seasoned teams can unlock an optional side path if they burn through the opening puzzles quickly. It’s
              tougher but optional—it doesn’t block the main ending or a successful exit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              How many players fit comfortably?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Built for 2–6. It’s our coziest footprint, so for comfort we suggest up to five adults or six teens.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              Do we need outside knowledge?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Nothing beyond everyday curiosity. No quiz-show trivia required—just teamwork and a willingness to poke at
              the unknown.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              What if we hit a wall?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              We’re watching the feed and will offer hints so frustration doesn’t win. The goal is a satisfying finish,
              not a dead end.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
