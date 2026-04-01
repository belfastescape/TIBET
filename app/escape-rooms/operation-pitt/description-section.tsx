import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function DescriptionSection() {
  return (
    <section className="py-[10px] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First column: heading + card */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight pl-[58px]">
              The Mission Brief
            </h2>
            <Card className="border-[6px] border-white bg-[#111] flex-1">
            <CardContent className="py-[80px] px-[52px] flex flex-col justify-center h-full">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                The Tibetan Secret Service is hearing a lot of internet intelligence about something called Operation
                Pitt.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
                Your team must go into the spy&apos;s hideout to see if you can steal the secret plan, before it is too
                late.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
                We have 2 identical versions of this game, so it can be played in a head-to-head team challenge.
              </p>
            </CardContent>
          </Card>
          </div>

          {/* Image Card */}
          <Card className="border-[6px] border-white bg-[#111] overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/operation-pitt-team-challenge.webp"
                alt="Inside the Operation Pitt escape room - cold war spy den"
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
