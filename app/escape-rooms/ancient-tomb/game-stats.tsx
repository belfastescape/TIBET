import { Users, Gauge, Clock, PartyPopper, Ghost, DollarSign } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  subLabels?: string[]
}

function StatCard({ icon, label, value, subLabels }: StatCardProps) {
  return (
    <div className="group flex flex-col items-center gap-4 py-8 px-6 text-center transition-all duration-300 ease-out hover:-translate-y-1">
      <div className="relative w-[175px] h-[175px] transition-transform duration-300 ease-out group-hover:scale-110">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112px] h-[112px] rounded-full bg-amber-400/70 opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-xl z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rotate-45 border border-amber-400 bg-black z-10" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-amber-400">
          {icon}
        </span>
      </div>
      <div>
        {value && <p className="text-4xl font-bold text-white font-mono">{value}</p>}
        {label && <p className="text-base text-white mt-1">{label}</p>}
        {subLabels && subLabels.map((line, i) => (
          <p key={i} className={`text-sm mt-1 text-white ${i === 0 ? "font-bold" : ""}`}>{line}</p>
        ))}
      </div>
    </div>
  )
}

function DifficultyDots({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-4 w-4 rounded-full transition-colors duration-300 ${
            i < filled ? "bg-amber-400" : "bg-amber-400/20"
          }`}
        />
      ))}
    </div>
  )
}

interface DifficultyStatCardProps {
  icon: React.ReactNode
  label: string
  filled: number
  total: number
}

function DifficultyStatCard({ icon, label, filled, total }: DifficultyStatCardProps) {
  return (
    <div className="group flex flex-col items-center gap-4 py-8 px-6 text-center transition-all duration-300 ease-out hover:-translate-y-1">
      <div className="relative w-[175px] h-[175px] transition-transform duration-300 ease-out group-hover:scale-110">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112px] h-[112px] rounded-full bg-amber-400/70 opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-xl z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rotate-45 border border-amber-400 bg-black z-10" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-amber-400">
          {icon}
        </span>
      </div>
      <div>
        <p className="text-4xl font-bold text-white font-mono">
          {filled}/{total}
        </p>
        <DifficultyDots filled={filled} total={total} />
        <p className="text-base text-white mt-2">{label}</p>
      </div>
    </div>
  )
}

export function GameStats() {
  return (
    <section className="py-16 bg-[#1a0a2e]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard
            icon={<Users className="h-20 w-20" />}
            label="Players"
            value="2-6"
          />
          <DifficultyStatCard
            icon={<Gauge className="h-20 w-20" />}
            label="Difficulty"
            filled={4}
            total={5}
          />
          <StatCard
            icon={<Clock className="h-20 w-20" />}
            label="Duration"
            value="60 min"
          />
          <DifficultyStatCard
            icon={<PartyPopper className="h-20 w-20" />}
            label="Fun Factor"
            filled={5}
            total={5}
          />
          <DifficultyStatCard
            icon={<Ghost className="h-20 w-20" />}
            label="Fear Factor"
            filled={1}
            total={5}
          />
          <StatCard
            icon={<DollarSign className="h-20 w-20" />}
            label=""
            value=""
            subLabels={["Adults from $35", "Children from $25", "Group rates available"]}
          />
        </div>
      </div>
    </section>
  )
}
