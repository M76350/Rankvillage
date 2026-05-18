"use client";

import { Flag, Brain, MapPin, Zap, IndianRupee, Rocket } from "lucide-react";

const advantages = [
  {
    icon: Flag,
    title: "Built for India",
    description: "Designed specifically for Indian local businesses. Supports Hindi, regional languages, and understands the Indian market dynamics.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced AI models trained on millions of local SEO data points to give you the most accurate recommendations.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: MapPin,
    title: "Local SEO Focused",
    description: "100% focused on local search. We don't do generic SEO — every feature is built to help you rank in your city and neighborhood.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Zap,
    title: "Full Automation",
    description: "Set it and forget it. Automated review replies, scheduled posts, and continuous monitoring — all running 24/7 for you.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Starting at just ₹999/month. No expensive agency fees. Get enterprise-level SEO tools at a price every Indian business can afford.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Rocket,
    title: "Fast Results",
    description: "See improvements in your Google rankings within 30 days. Our AI works fast so you don't have to wait months to see results.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

const comparison = [
  { feature: "Local SEO Tools", us: true, agency: true, generic: false },
  { feature: "AI-Powered", us: true, agency: false, generic: false },
  { feature: "Built for India", us: true, agency: false, generic: false },
  { feature: "Hindi Support", us: true, agency: false, generic: false },
  { feature: "Affordable (₹999/mo)", us: true, agency: false, generic: true },
  { feature: "24/7 Automation", us: true, agency: false, generic: false },
  { feature: "Real-time Tracking", us: true, agency: true, generic: false },
  { feature: "No Contract", us: true, agency: false, generic: true },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 text-sm text-green-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Why RankVillage AI
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            The Smarter Way to
            <br />
            <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Stop wasting money on expensive agencies. Get better results with AI.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div key={adv.title} className={`glass-card rounded-2xl p-6 border ${adv.border} group`}>
                <div className={`w-12 h-12 rounded-xl ${adv.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${adv.color}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{adv.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            How We Compare
          </h3>
          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-4 gap-0 border-b border-white/5">
              <div className="p-4 text-sm font-medium text-white/40">Feature</div>
              <div className="p-4 text-center">
                <div className="text-sm font-bold gradient-text">RankVillage AI</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm font-medium text-white/40">SEO Agency</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm font-medium text-white/40">Generic Tools</div>
              </div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-4 gap-0 border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/1" : ""}`}>
                <div className="p-4 text-sm text-white/60">{row.feature}</div>
                <div className="p-4 flex justify-center items-center">
                  {row.us ? (
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4 flex justify-center items-center">
                  {row.agency ? (
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4 flex justify-center items-center">
                  {row.generic ? (
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
