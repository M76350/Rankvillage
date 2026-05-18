"use client";

import { Users, TrendingUp, Star, Zap, ArrowUp, ArrowDown } from "lucide-react";

const competitors = [
  { name: "Biryani Blues Dwarka",  rank: 1, rating: 4.6, reviews: 1240, score: 91, keywords: 28, isYou: false, trend: "up" },
  { name: "Sharma Restaurant",     rank: 2, rating: 4.8, reviews: 890,  score: 87, keywords: 22, isYou: true,  trend: "up" },
  { name: "Punjab Grill Dwarka",   rank: 3, rating: 4.4, reviews: 760,  score: 79, keywords: 18, isYou: false, trend: "down" },
  { name: "Moti Mahal Delux",      rank: 4, rating: 4.2, reviews: 540,  score: 71, keywords: 14, isYou: false, trend: "stable" },
  { name: "Zaika Restaurant",      rank: 5, rating: 4.0, reviews: 320,  score: 62, keywords: 10, isYou: false, trend: "down" },
];

const gapAnalysis = [
  { metric: "Reviews",       you: 890,  leader: 1240, gap: 350,  action: "Get 10 reviews/week to close gap in 35 weeks" },
  { metric: "Photos",        you: 14,   leader: 48,   gap: 34,   action: "Upload 5 photos/week to match leader in 7 weeks" },
  { metric: "Keywords",      you: 22,   leader: 28,   gap: 6,    action: "Add 6 more keywords to match top competitor" },
  { metric: "GBP Score",     you: 87,   leader: 91,   gap: 4,    action: "Fix 2 remaining GBP issues to close the gap" },
];

export default function CompetitorsPage() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h2 className="text-xl font-bold text-white">Competitor Analysis</h2>
        <p className="text-white/40 text-sm mt-0.5">Track and outrank your local competitors</p>
      </div>

      {/* Local pack */}
      <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Local Pack Rankings — Dwarka, Delhi</h3>
          <span className="text-xs text-white/30">Updated today</span>
        </div>
        <div className="divide-y divide-white/5">
          {competitors.map((c) => (
            <div key={c.name} className={`flex items-center gap-4 px-5 py-4 transition-colors ${c.isYou ? "bg-purple-500/5" : "hover:bg-white/2"}`}>
              {/* Rank */}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${c.rank === 1 ? "bg-yellow-500/20 text-yellow-400" : c.isYou ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-white/40"}`}>
                #{c.rank}
              </div>

              {/* Name */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${c.isYou ? "text-purple-300" : "text-white/80"}`}>{c.name}</span>
                  {c.isYou && <span className="text-xs bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full border border-purple-500/30">You</span>}
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-white/30">{c.reviews} reviews</span>
                  <span className="text-xs text-white/20">·</span>
                  <span className="text-xs text-white/30">{c.keywords} keywords</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 shrink-0">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-white">{c.rating}</span>
              </div>

              {/* Score */}
              <div className="w-20 shrink-0">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/30">Score</span>
                  <span className={`font-bold ${c.score >= 85 ? "text-green-400" : c.score >= 75 ? "text-yellow-400" : "text-red-400"}`}>{c.score}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5">
                  <div className={`h-1.5 rounded-full ${c.score >= 85 ? "bg-green-500" : c.score >= 75 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${c.score}%` }} />
                </div>
              </div>

              {/* Trend */}
              <div className="shrink-0">
                {c.trend === "up" ? <ArrowUp className="w-4 h-4 text-green-400" /> : c.trend === "down" ? <ArrowDown className="w-4 h-4 text-red-400" /> : <span className="text-white/20 text-sm">—</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gap analysis */}
      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          <h3 className="text-sm font-semibold text-white">Gap Analysis vs #1 Competitor</h3>
        </div>
        <div className="space-y-4">
          {gapAnalysis.map((g) => (
            <div key={g.metric}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-white/70">{g.metric}</span>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-purple-300">You: {g.you}</span>
                  <span className="text-white/30">Leader: {g.leader}</span>
                  <span className="text-red-400">Gap: {g.gap}</span>
                </div>
              </div>
              <div className="relative w-full bg-white/5 rounded-full h-2">
                <div className="absolute h-2 rounded-full bg-white/10" style={{ width: `${(g.leader / g.leader) * 100}%` }} />
                <div className="absolute h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${(g.you / g.leader) * 100}%` }} />
              </div>
              <p className="text-xs text-white/30 mt-1">{g.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI insight */}
      <div className="glass-card rounded-2xl p-5 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-purple-300">AI Competitive Strategy</h3>
        </div>
        <div className="space-y-2">
          {[
            "You have the highest rating (4.8★) among all competitors — leverage this in your GBP description.",
            "Biryani Blues ranks #1 mainly due to 350 more reviews. Focus on review generation campaigns.",
            "Your keyword coverage (22) is close to the leader (28). Adding 6 more keywords can push you to #1.",
            "Your GBP score (87) is only 4 points behind the leader. Fix the 2 remaining issues to close the gap.",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/3 border border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
              <p className="text-sm text-white/60">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
