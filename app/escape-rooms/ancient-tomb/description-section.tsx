import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function DescriptionSection() {
  return (
    <section className="py-[10px] bg-[#1a0a2e]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First column: heading + card */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight pl-[52px]">
              The Mission Brief
            </h2>
            <Card className="border-[6px] border-white bg-[#111] flex-1">
              <CardContent className="py-[80px] px-[52px] flex flex-col justify-center h-full">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  Deep beneath the city, explorers have uncovered a legendary ancient tomb — but
                  its treasures are protected by fiendish traps and cryptic puzzles left behind
                  by a long-lost civilisation.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
                  Your team of intrepid archaeologists must decipher ancient inscriptions, navigate
                  hidden chambers, and claim the relic before the tomb seals forever. A fantastic
                  adventure for families and groups of all experience levels — with 60 minutes on
                  the clock and history at stake.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Image Card */}
          <Card className="border-[6px] border-white bg-[#111] overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/ancient-tomb/examining-book.webp"
                alt="Inside the Quest for the Ancient Tomb escape room"
                fill
                className="object-contain lg:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
