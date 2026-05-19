import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  };
}

export default function PageHero({ badge, badgeIcon: BadgeIcon, title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
            {badge}
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
          {title}
        </h1>

        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
          {subtitle}
        </p>

        {cta && (
          <Link
            href={cta.href}
            className={
              cta.variant === "primary"
                ? "btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
                : "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white/70 glass border border-white/10 hover:border-white/20 hover:text-white transition-all"
            }
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
