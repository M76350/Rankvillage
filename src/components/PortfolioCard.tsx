import type { PortfolioProject } from "@/data/portfolio";
import { Code2, ShoppingCart, Search, MapPin, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: PortfolioProject;
}

const categoryConfig = {
  web:        { label: "Web Dev",    icon: Code2,         color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   gradFrom: "from-blue-600/20",   gradTo: "to-purple-600/20" },
  ecommerce:  { label: "E-commerce", icon: ShoppingCart,  color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20",  gradFrom: "from-green-600/20",  gradTo: "to-cyan-600/20" },
  seo:        { label: "SEO",        icon: Search,        color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", gradFrom: "from-purple-600/20", gradTo: "to-pink-600/20" },
  "local-seo":{ label: "Local SEO",  icon: MapPin,        color: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   gradFrom: "from-cyan-600/20",   gradTo: "to-blue-600/20" },
  "ui-ux":    { label: "UI/UX",      icon: Palette,       color: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-500/20",   gradFrom: "from-pink-600/20",   gradTo: "to-purple-600/20" },
};

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const cfg = categoryConfig[project.category];
  const Icon = cfg.icon;

  return (
    <div className={cn("glass-card rounded-2xl overflow-hidden border flex flex-col", cfg.border)}>
      {/* CSS illustration placeholder */}
      <div className={cn("h-40 bg-linear-to-br flex items-center justify-center relative overflow-hidden", cfg.gradFrom, cfg.gradTo)}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", cfg.bg)}>
          <Icon className={cn("w-8 h-8", cfg.color)} />
        </div>
        <div className="absolute top-3 right-3">
          <span className={cn("text-xs px-2 py-1 rounded-full border font-medium", cfg.bg, cfg.border, cfg.color)}>
            {cfg.label}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-white font-semibold text-base">{project.title}</h3>
          <p className="text-white/40 text-xs mt-0.5">{project.client} · {project.industry}</p>
        </div>

        <p className="text-white/55 text-sm leading-relaxed line-clamp-2 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs px-2 py-0.5 rounded-full glass border border-white/10 text-white/50">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-full glass border border-white/10 text-white/30">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
          {project.results.slice(0, 3).map((r) => (
            <div key={r.metric} className="text-center">
              <div className={cn("font-bold text-sm", cfg.color)}>{r.value}</div>
              <div className="text-white/30 text-xs leading-tight mt-0.5">{r.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
