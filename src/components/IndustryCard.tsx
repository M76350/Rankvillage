import type { Industry } from "@/data/industries";
import {
  UtensilsCrossed, Milk, Building2, GraduationCap, ShoppingBag,
  Stethoscope, Dumbbell, Hotel, Car, Scissors,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  industry: Industry;
}

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed, Milk, Building2, GraduationCap, ShoppingBag,
  Stethoscope, Dumbbell, Hotel, Car, Scissors,
};

const colorMap: Record<string, { icon: string; bg: string; border: string }> = {
  orange: { icon: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  blue:   { icon: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
  purple: { icon: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  cyan:   { icon: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20" },
  green:  { icon: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20" },
  pink:   { icon: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-500/20" },
};

export default function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = iconMap[industry.icon] ?? Building2;
  const c = colorMap[industry.color] ?? colorMap.purple;

  return (
    <div className={cn("glass-card rounded-2xl p-6 border flex flex-col gap-4", c.border)}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", c.bg)}>
          <Icon className={cn("w-6 h-6", c.icon)} />
        </div>
        <h3 className="text-white font-semibold text-lg">{industry.name}</h3>
      </div>

      <p className="text-white/55 text-sm leading-relaxed">{industry.description}</p>

      {/* Use cases */}
      <div>
        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Use Cases</div>
        <ul className="space-y-1.5">
          {industry.useCases.slice(0, 3).map((uc) => (
            <li key={uc} className="flex items-start gap-2 text-sm text-white/60">
              <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", c.icon.replace("text-", "bg-"))} />
              {uc}
            </li>
          ))}
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
        {industry.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className={cn("font-bold text-sm", c.icon)}>{s.value}</div>
            <div className="text-white/30 text-xs mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
