import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features: string[];
  color: "purple" | "blue" | "cyan" | "pink" | "green" | "orange";
}

const colorMap = {
  purple: { icon: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", check: "text-purple-400" },
  blue:   { icon: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   check: "text-blue-400" },
  cyan:   { icon: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   check: "text-cyan-400" },
  pink:   { icon: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-500/20",   check: "text-pink-400" },
  green:  { icon: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20",  check: "text-green-400" },
  orange: { icon: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", check: "text-orange-400" },
};

export default function ServiceCard({ icon: Icon, title, description, href, features, color }: ServiceCardProps) {
  const c = colorMap[color];
  return (
    <div className={cn("glass-card rounded-2xl p-6 border flex flex-col", c.border)}>
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0", c.bg)}>
        <Icon className={cn("w-6 h-6", c.icon)} />
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">{description}</p>

      <ul className="space-y-2 mb-6 flex-1">
        {features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/60">
            <Check className={cn("w-4 h-4 mt-0.5 shrink-0", c.check)} />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-medium transition-colors group",
          c.icon,
          "hover:opacity-80"
        )}
      >
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
