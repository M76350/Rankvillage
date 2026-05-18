"use client";

import { useState } from "react";
import { Search, ArrowUp, ArrowDown, Zap, TrendingUp, Plus } from "lucide-react";

const allKeywords = [
  { term: "best restaurant near me",    pos: 1,  prev: 4,  vol: "2.4K", diff: "Low",    trend: [60,70,75,80,90,95,100] },
  { term: "biryani delivery Delhi",     pos: 2,  prev: 3,  vol: "1.8K", diff: "Medium", trend: [50,55,60,70,75,80,90] },
  { term: "north indian food Dwarka",   pos: 3,  prev: 2,  vol: "890",  diff: "Low",    trend: [80,75,70,72,75,78,80] },
  { term: "family restaurant Dwarka",   pos: 4,  prev: 9,  vol: "650",  diff: "Low",    trend: [30,40,50,55,60,65,70] },
  { term: "dinner place near metro",    pos: 7,  prev: 9,  vol: "420",  diff: "Medium", trend: [20,25,30,35,40,45,50] },
  { term: "restaurant open now Dwarka", pos: 11, prev: 15, vol: "310",  diff: "High",   trend: [10,12,15,18,20,22,25] },
  { term: "halal restaurant Delhi",     pos: 14, prev: 20, vol: "280",  diff: "High",   trend: [5,8,10,12,14,16,18] },
];

const suggestions = [
  { term: "best biryani near me",       vol: "3.2K", diff: "Medium", opp: "High" },
  { term: "mutton biryani Dwarka",      vol: "890",  diff: "Low",    opp: "High" },
  { term: "restaurant for birthday party", vol: "540", diff: "Low",  opp: "Medium" },
];

export default function KeywordsPage() {
  const [search, setSearch] = useState("");
  const filtered = allKeywords.filter((k) => k.term.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Keyword Rankings</h2>
          <p className="text-white/40 text-sm mt-0.5">Track your local search positions daily</p>
        </div>
        <button className="btn-glow flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white">
          <Plus className="w-4 h-4" /> Add Keyword
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Tracked",    value: "7",    color: "text-white" },
          { label: "Top 3",      value: "3",    color: "text-green-400" },
          { label: "Improved",   value: "5",    color: "text-blue-400" },
          { label: "Avg Position", value: "6.0", color: "text-purple-400" },
        ].map((s) => (
          <div key={s.label} className="glass-card rounded-2xl p-4 border border-white/5 text-center">
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-white/40 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search keywords..."
          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
      </div>

      {/* Table */}
      <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-5 py-3 border-b border-white/5 text-xs text-white/30 font-medium">
          <div className="col-span-5">Keyword</div>
          <div className="col-span-2 text-center">Position</div>
          <div className="col-span-2 text-center">Change</div>
          <div className="col-span-1 text-center">Vol</div>
          <div className="col-span-2 text-center">Difficulty</div>
        </div>
        {filtered.map((kw, i) => {
          const change = kw.prev - kw.pos;
          return (
            <div key={kw.term} className={`grid grid-cols-12 gap-2 px-5 py-4 items-center border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors ${i % 2 === 0 ? "" : "bg-white/1"}`}>
              <div className="col-span-5">
                <div className="text-sm text-white/80">{kw.term}</div>
                {/* Mini sparkline */}
                <div className="flex items-end gap-0.5 h-4 mt-1">
                  {kw.trend.map((v, j) => (
                    <div key={j} className="flex-1 rounded-sm bg-purple-500/40" style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
              <div className="col-span-2 flex justify-center">
                <span className={`text-sm font-bold px-2 py-0.5 rounded-lg ${kw.pos <= 3 ? "bg-green-500/20 text-green-400" : kw.pos <= 10 ? "bg-yellow-500/20 text-yellow-400" : "bg-white/5 text-white/50"}`}>
                  #{kw.pos}
                </span>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-1">
                {change > 0 ? <ArrowUp className="w-3.5 h-3.5 text-green-400" /> : change < 0 ? <ArrowDown className="w-3.5 h-3.5 text-red-400" /> : <span className="w-3.5 h-3.5 text-white/30">—</span>}
                <span className={`text-sm font-medium ${change > 0 ? "text-green-400" : change < 0 ? "text-red-400" : "text-white/30"}`}>
                  {change !== 0 ? Math.abs(change) : "—"}
                </span>
              </div>
              <div className="col-span-1 text-center text-sm text-white/40">{kw.vol}</div>
              <div className="col-span-2 flex justify-center">
                <span className={`text-xs px-2 py-0.5 rounded-full ${kw.diff === "Low" ? "bg-green-500/10 text-green-400" : kw.diff === "Medium" ? "bg-yellow-500/10 text-yellow-400" : "bg-red-500/10 text-red-400"}`}>
                  {kw.diff}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Suggestions */}
      <div className="glass-card rounded-2xl p-5 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-purple-300">AI Keyword Opportunities</h3>
          <TrendingUp className="w-3.5 h-3.5 text-green-400 ml-auto" />
          <span className="text-xs text-green-400">High potential</span>
        </div>
        <div className="space-y-3">
          {suggestions.map((s) => (
            <div key={s.term} className="flex items-center gap-4 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/20 transition-all">
              <div className="flex-1">
                <div className="text-sm text-white/80">{s.term}</div>
                <div className="text-xs text-white/30 mt-0.5">Vol: {s.vol} · Difficulty: {s.diff}</div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${s.opp === "High" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                {s.opp} Opp
              </span>
              <button className="text-xs text-purple-400 hover:text-purple-300 border border-purple-500/20 px-2 py-1 rounded-lg hover:bg-purple-500/10 transition-all">
                + Track
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
