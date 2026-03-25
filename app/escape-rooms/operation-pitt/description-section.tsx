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
                Notorious criminal mastermind Viktor Pitt has stolen top-secret
                launch codes and vanished into his fortified underground bunker.
                Your team of elite agents has been dispatched to stop him.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
                You have 60 minutes to infiltrate his lair, crack his encryption
                systems, and neutralise the threat before he triggers a city-wide
                catastrophe. The clock is ticking — do you have what it takes?
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
