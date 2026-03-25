"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface DifficultyBadgeProps {
  level: number
  showLabel?: boolean
  className?: string
}

export function DifficultyBadge({ level, showLabel = true, className }: DifficultyBadgeProps) {
  const { ref, isInView } = useScrollAnimation()

  const getDifficultyColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-green-500"
      case 2:
        return "bg-green-400"
      case 3:
        return "bg-yellow-500"
      case 4:
        return "bg-orange-500"
      case 5:
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getDifficultyLabel = (level: number) => {
    switch (level) {
      case 1:
        return "Easy"
      case 2:
        return "Beginner"
      case 3:
        return "Exciting"
      case 4:
        return "Magical"
      case 5:
        return "Exhilirating"
      default:
        return "Unknown"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full",
                i < level ? getDifficultyColor(level) : "bg-gray-700"
              )}
            />
          ))}
        </div>
        {showLabel && (
          <span className="text-sm font-medium text-gray-300">
            {getDifficultyLabel(level)}
          </span>
        )}
      </div>
    </div>
  )
}
