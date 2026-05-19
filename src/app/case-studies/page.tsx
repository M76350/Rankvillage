import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES } from "@/data/case-studies";
import { TrendingUp, ArrowRight, BarChart3, Users, Zap, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | RankVillage AI",
  description: "Real case studies showing how RankVillage AI helped Indian local businesses grow traffic, improve rankings, and increase revenue.",
};

const aggregateStats = [
  { value: "+280%", label: "Avg Traffic Growth",    color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20",  icon: TrendingUp },
  { value: "#2.1",  label: "Avg Ranking Position",  color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   icon: BarChart3 },
  { value: "50+",   label: "Clients Transformed",   color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", icon: Users },
  { value: "30",    label: "Days to First Results",  color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", icon: Zap },
];

export default function CaseStudiesPage() {
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        <PageHero
          badge="Real Results"
          badgeIcon={Star}
          title={<>Proof That Our <span className="gradient-text">Strategies Work</span></>}
          subtitle="Deep-dive case studies showing exactly how we helped Indian local businesses rank higher, get more customers, and grow revenue."
        />

        {/* Aggregate Stats */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {aggregateStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className={`glass-card rounded-2xl p-5 border ${s.border} text-center`}>
                    <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${s.color} mb-1`}>{s.value}</div>
                    <div className="text-white/50 text-xs">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featured && (
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Featured Case Study</div>
              <div className="glass-card rounded-2xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs mb-4">
                      {featured.industry}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{featured.clientName}</h2>
                    <p className="text-white/60 leading-relaxed mb-4">{featured.challenge}</p>
                    <p className="text-white/60 leading-relaxed">{featured.solution}</p>
                    {featured.testimonial && (
                      <div className="mt-5 p-4 glass rounded-xl border border-white/5">
                        <p className="text-white/70 text-sm italic">&ldquo;{featured.testimonial.quote}&rdquo;</p>
                        <div className="text-white/40 text-xs mt-2">— {featured.testimonial.author}, {featured.testimonial.role}</div>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Traffic Growth",    value: featured.metrics.trafficGrowth,      color: "text-green-400",  border: "border-green-500/20" },
                      { label: "Ranking",           value: featured.metrics.rankingImprovement, color: "text-purple-400", border: "border-purple-500/20" },
                      { label: "Lighthouse Score",  value: featured.metrics.lighthouseScore,    color: "text-cyan-400",   border: "border-cyan-500/20" },
                      { label: "Revenue Impact",    value: featured.metrics.revenueImpact ?? "Significant", color: "text-yellow-400", border: "border-yellow-500/20" },
                    ].map((m) => (
                      <div key={m.label} className={`glass rounded-xl p-4 border ${m.border} text-center`}>
                        <div className={`text-2xl font-bold ${m.color} mb-1`}>{m.value}</div>
                        <div className="text-white/40 text-xs">{m.label}</div>
                      </div>
                    ))}
                    <div className="col-span-2 glass rounded-xl p-3 border border-white/5 text-center">
                      <div className="text-white/40 text-xs">Timeframe</div>
                      <div className="text-white font-semibold">{featured.metrics.timeframe}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        {rest.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">More Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((cs) => (
                  <CaseStudyCard key={cs.id} caseStudy={cs} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want <span className="gradient-text">Similar Results?</span>
            </h2>
            <p className="text-white/50 mb-8">
              Get a free audit and see exactly what we can do for your business.
            </p>
            <Link href="/free-audit" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white">
              Get Similar Results <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
