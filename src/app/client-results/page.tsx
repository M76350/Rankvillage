import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ROICalculator from "@/components/ROICalculator";
import { BarChart3, TrendingUp, Users, Zap, ArrowRight, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Results | RankVillage AI",
  description:
    "See aggregated performance results from RankVillage AI clients — traffic growth, ranking improvements, Lighthouse scores, and ROI projections.",
};

const aggregateMetrics = [
  { value: "+340%", label: "Avg Traffic Growth", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { value: "#2.4", label: "Avg Ranking Position", icon: BarChart3, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { value: "500+", label: "Clients Served", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { value: "30", label: "Days to First Results", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
];

const trafficMonths = [
  { month: "Jan", pct: 35 },
  { month: "Feb", pct: 42 },
  { month: "Mar", pct: 48 },
  { month: "Apr", pct: 58 },
  { month: "May", pct: 72 },
  { month: "Jun", pct: 100 },
];

const lighthouseScores = [
  { label: "Performance", before: 42, after: 94 },
  { label: "SEO", before: 68, after: 98 },
  { label: "Accessibility", before: 71, after: 92 },
];

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 90 ? "text-green-400 border-green-500/30 bg-green-500/10"
    : score >= 50 ? "text-yellow-400 border-yellow-500/30 bg-yellow-500/10"
    : "text-red-400 border-red-500/30 bg-red-500/10";

  return (
    <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold text-lg ${color}`}>
      {score}
    </div>
  );
}

export default function ClientResultsPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <PageHero
          badge="Proven Results"
          badgeIcon={Gauge}
          title={<>Real <span className="gradient-text">Client Outcomes</span></>}
          subtitle="Aggregated performance data from Indian local businesses we've helped rank higher, load faster, and convert more customers."
        />

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {aggregateMetrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className={`glass-card rounded-2xl p-6 border ${m.border} text-center`}>
                    <div className={`w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`w-5 h-5 ${m.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${m.color} mb-1`}>{m.value}</div>
                    <p className="text-white/50 text-xs">{m.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              6-Month <span className="gradient-text">Traffic Growth</span>
            </h2>
            <div className="glass-card rounded-2xl border border-white/5 p-6 sm:p-8">
              <div className="flex items-end justify-between gap-2 sm:gap-4 h-48">
                {trafficMonths.map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg bg-linear-to-t from-purple-600 to-blue-500 min-h-[4px] transition-all"
                      style={{ height: `${bar.pct}%` }}
                    />
                    <span className="text-xs text-white/40">{bar.month}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-white/30 text-xs mt-4">Average organic traffic index across client portfolio</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Lighthouse <span className="gradient-text">Before & After</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lighthouseScores.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-6 border border-white/5">
                  <h3 className="text-white font-semibold text-center mb-6">{s.label}</h3>
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <ScoreBadge score={s.before} />
                      <p className="text-white/30 text-xs mt-2">Before</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-400 shrink-0" />
                    <div className="text-center">
                      <ScoreBadge score={s.after} />
                      <p className="text-white/30 text-xs mt-2">After</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator />
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get <span className="gradient-text">These Results</span>
            </h2>
            <p className="text-white/50 mb-8">
              Start with a free SEO audit and see exactly how we can grow your business.
            </p>
            <Link href="/free-audit" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white">
              Get These Results <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
