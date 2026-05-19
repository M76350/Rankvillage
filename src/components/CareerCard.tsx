import type { CareerRole } from "@/data/careers";
import { MapPin, Briefcase, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  role: CareerRole;
}

const typeConfig = {
  remote:   { label: "Remote",   color: "text-green-300",  bg: "bg-green-500/10",  border: "border-green-500/20" },
  hybrid:   { label: "Hybrid",   color: "text-blue-300",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
  "on-site":{ label: "On-site",  color: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/20" },
};

export default function CareerCard({ role }: CareerCardProps) {
  const t = typeConfig[role.type];

  return (
    <div className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{role.title}</h3>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className="text-xs text-white/40 flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              {role.department}
            </span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-white/40 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {role.location}
            </span>
          </div>
        </div>
        <span className={cn("shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium", t.bg, t.border, t.color)}>
          {t.label}
        </span>
      </div>

      <p className="text-white/55 text-sm leading-relaxed line-clamp-3">{role.description}</p>

      {/* Requirements preview */}
      <div>
        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Requirements</div>
        <ul className="space-y-1">
          {role.requirements.slice(0, 3).map((req) => (
            <li key={req} className="flex items-start gap-2 text-xs text-white/50">
              <span className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 shrink-0" />
              {req}
            </li>
          ))}
          {role.requirements.length > 3 && (
            <li className="text-xs text-white/30 pl-3">+{role.requirements.length - 3} more requirements</li>
          )}
        </ul>
      </div>

      {/* CTA */}
      <a
        href="mailto:careers@rankvillage.ai"
        className="btn-glow inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white mt-auto"
      >
        Apply Now
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
