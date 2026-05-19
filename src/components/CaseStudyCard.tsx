import type { CaseStudy } from "@/data/case-studies";
import { TrendingUp, MapPin, Zap } from "lucide-react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold text-base">{caseStudy.clientName}</h3>
          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mt-1">
            <MapPin className="w-3 h-3" />
            {caseStudy.industry}
          </span>
        </div>
        <span className="text-xs text-white/30 shrink-0">{caseStudy.metrics.timeframe}</span>
      </div>

      {/* Challenge */}
      <div>
        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Challenge</div>
        <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{caseStudy.challenge}</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2">
        <div className="glass rounded-xl p-3 text-center border border-green-500/15">
          <div className="text-green-400 font-bold text-sm">{caseStudy.metrics.trafficGrowth}</div>
          <div className="text-white/40 text-xs mt-0.5">Traffic</div>
        </div>
        <div className="glass rounded-xl p-3 text-center border border-purple-500/15">
          <div className="text-purple-400 font-bold text-sm leading-tight">{caseStudy.metrics.rankingImprovement}</div>
          <div className="text-white/40 text-xs mt-0.5">Ranking</div>
        </div>
        <div className="glass rounded-xl p-3 text-center border border-cyan-500/15">
          <div className="text-cyan-400 font-bold text-sm">{caseStudy.metrics.lighthouseScore}</div>
          <div className="text-white/40 text-xs mt-0.5">Lighthouse</div>
        </div>
      </div>

      {/* Revenue impact */}
      {caseStudy.metrics.revenueImpact && (
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="w-4 h-4 text-green-400 shrink-0" />
          <span className="text-green-400 font-semibold">{caseStudy.metrics.revenueImpact}</span>
          <span className="text-white/40">revenue impact</span>
        </div>
      )}

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <div className="border-t border-white/5 pt-4">
          <p className="text-white/50 text-xs italic leading-relaxed line-clamp-2">
            &ldquo;{caseStudy.testimonial.quote}&rdquo;
          </p>
          <div className="text-white/30 text-xs mt-1">— {caseStudy.testimonial.author}</div>
        </div>
      )}
    </div>
  );
}
