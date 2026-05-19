"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Play, TrendingUp, Star, MapPin, BarChart3, Zap,
  LayoutDashboard, Search, FileText, Code2, ClipboardList,
} from "lucide-react";

/* ─── Floating card ─────────────────────────────────────────────────────── */
function FloatingCard({
  className, style, children,
}: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div className={`absolute glass rounded-xl p-3 shadow-card border border-white/10 animate-float ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ─── Tab content panels ─────────────────────────────────────────────────── */
function DashboardPanel() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "SEO Score",  value: "87/100", change: "+12",  color: "text-green-400" },
          { label: "Keywords",   value: "142",    change: "+28",  color: "text-blue-400" },
          { label: "Reviews",    value: "4.8★",   change: "+0.3", color: "text-yellow-400" },
          { label: "Ranking",    value: "#3",     change: "↑5",   color: "text-purple-400" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-lg p-2.5 border border-white/5">
            <div className="text-xs text-white/40 mb-1">{s.label}</div>
            <div className="text-base font-bold text-white">{s.value}</div>
            <div className={`text-xs font-medium ${s.color}`}>{s.change} this month</div>
          </div>
        ))}
      </div>
      <div className="glass rounded-lg p-3 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-white/60">Keyword Rankings Over Time</span>
          <span className="text-xs text-purple-400">Last 30 days</span>
        </div>
        <div className="flex items-end gap-0.5 h-14">
          {[40,55,45,70,60,80,75,90,85,95,88,100,92,98].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(139,92,246,${0.3 + i * 0.05}), rgba(59,130,246,0.4))` }} />
          ))}
        </div>
      </div>
      <div className="glass rounded-lg p-2.5 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-3 h-3 text-purple-400" />
          <span className="text-xs font-medium text-purple-300">AI Suggestion</span>
        </div>
        <p className="text-xs text-white/50">Add "best biryani near me" to your GBP description to capture 340 monthly searches.</p>
      </div>
    </div>
  );
}

function SEOPanel() {
  return (
    <div className="space-y-3">
      <div className="glass rounded-lg p-3 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-white/60">Overall SEO Health</span>
          <span className="text-xs font-bold text-green-400">87/100</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-2 mb-3">
          <div className="h-2 rounded-full bg-linear-to-r from-purple-500 to-green-500" style={{ width: "87%" }} />
        </div>
        <div className="space-y-2">
          {[
            { label: "On-Page SEO",       score: 92, color: "from-green-500 to-teal-500" },
            { label: "Local Citations",   score: 78, color: "from-blue-500 to-cyan-500" },
            { label: "Google Business",   score: 85, color: "from-purple-500 to-blue-500" },
            { label: "Review Signals",    score: 96, color: "from-yellow-500 to-orange-500" },
          ].map((m) => (
            <div key={m.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/50">{m.label}</span>
                <span className="text-white/70 font-medium">{m.score}</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full bg-linear-to-r ${m.color}`} style={{ width: `${m.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glass rounded-lg p-2.5 border border-red-500/20">
        <div className="text-xs font-medium text-red-400 mb-1.5">⚠ Issues Found</div>
        {["Missing meta description on 3 pages", "No schema markup detected", "GBP photos below minimum"].map((issue) => (
          <div key={issue} className="flex items-center gap-2 py-1">
            <div className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
            <span className="text-xs text-white/50">{issue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KeywordsPanel() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Tracked",  value: "142", color: "text-white" },
          { label: "Top 3",    value: "38",  color: "text-green-400" },
          { label: "Improved", value: "91",  color: "text-blue-400" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-lg p-2.5 border border-white/5 text-center">
            <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="glass rounded-lg border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 px-3 py-1.5 border-b border-white/5 text-xs text-white/30">
          <div className="col-span-6">Keyword</div>
          <div className="col-span-3 text-center">Pos</div>
          <div className="col-span-3 text-center">Vol</div>
        </div>
        {[
          { term: "best restaurant near me", pos: 1,  vol: "2.4K", up: true },
          { term: "biryani delivery Delhi",  pos: 2,  vol: "1.8K", up: true },
          { term: "north indian Dwarka",     pos: 3,  vol: "890",  up: false },
          { term: "family restaurant",       pos: 4,  vol: "650",  up: true },
          { term: "dinner near metro",       pos: 7,  vol: "420",  up: true },
        ].map((kw) => (
          <div key={kw.term} className="grid grid-cols-12 px-3 py-2 border-b border-white/5 last:border-0 items-center">
            <div className="col-span-6 text-xs text-white/60 truncate">{kw.term}</div>
            <div className="col-span-3 flex justify-center">
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${kw.pos <= 3 ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white/50"}`}>#{kw.pos}</span>
            </div>
            <div className="col-span-3 text-center text-xs text-white/30">{kw.vol}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsPanel() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Avg Rating",  value: "4.8★", color: "text-yellow-400" },
          { label: "Total",       value: "890",  color: "text-white" },
          { label: "Pending",     value: "2",    color: "text-red-400" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-lg p-2.5 border border-white/5 text-center">
            <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { name: "Amit K.",  rating: 5, text: "Best biryani in Dwarka! Must visit.", replied: true },
          { name: "Priya S.", rating: 4, text: "Great food, service could be faster.", replied: false },
          { name: "Rahul M.", rating: 5, text: "Family dinner was amazing!", replied: true },
        ].map((r) => (
          <div key={r.name} className="glass rounded-lg p-2.5 border border-white/5">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">{r.name[0]}</div>
                <span className="text-xs font-medium text-white">{r.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${r.replied ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                {r.replied ? "Replied" : "Pending"}
              </span>
            </div>
            <p className="text-xs text-white/40 italic">"{r.text}"</p>
            {!r.replied && (
              <div className="flex items-center gap-1 mt-1.5">
                <Zap className="w-3 h-3 text-purple-400" />
                <span className="text-xs text-purple-400">Generate AI Reply</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SchemaPanel() {
  return (
    <div className="space-y-3">
      <div className="glass rounded-lg p-3 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-white/60">Schema Markup Status</span>
          <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Active</span>
        </div>
        <div className="space-y-2">
          {[
            { type: "LocalBusiness",  status: true },
            { type: "Restaurant",     status: true },
            { type: "FAQPage",        status: false },
            { type: "BreadcrumbList", status: false },
          ].map((s) => (
            <div key={s.type} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
              <span className="text-xs text-white/60 font-mono">{s.type}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${s.status ? "bg-green-500/10 text-green-400" : "bg-white/5 text-white/30"}`}>
                {s.status ? "✓ Added" : "Missing"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="glass rounded-lg p-2.5 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-3 h-3 text-purple-400" />
          <span className="text-xs font-medium text-purple-300">AI Generated Schema</span>
        </div>
        <pre className="text-xs text-white/40 font-mono leading-relaxed overflow-hidden">{`{
  "@type": "Restaurant",
  "name": "Sharma Restaurant",
  "servesCuisine": "Indian",
  "priceRange": "₹₹"
}`}</pre>
        <button className="mt-2 text-xs text-purple-400 border border-purple-500/20 px-2 py-1 rounded-lg">Copy JSON-LD</button>
      </div>
    </div>
  );
}

function ReportsPanel() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Traffic Growth", value: "+340%", color: "text-green-400" },
          { label: "Leads / Month",  value: "124",   color: "text-blue-400" },
          { label: "Avg Position",   value: "#2.4",  color: "text-purple-400" },
          { label: "Review Score",   value: "4.8★",  color: "text-yellow-400" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-lg p-2.5 border border-white/5">
            <div className="text-xs text-white/40 mb-1">{s.label}</div>
            <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className="glass rounded-lg p-3 border border-white/5">
        <div className="text-xs font-medium text-white/60 mb-2">Monthly Traffic</div>
        <div className="flex items-end gap-1.5 h-14">
          {[
            { m: "Jan", v: 26 }, { m: "Feb", v: 31 }, { m: "Mar", v: 34 },
            { m: "Apr", v: 41 }, { m: "May", v: 60 }, { m: "Jun", v: 100 },
          ].map((d) => (
            <div key={d.m} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-sm" style={{ height: `${d.v}%`, background: "linear-gradient(to top, rgba(139,92,246,0.6), rgba(59,130,246,0.4))", minHeight: 4 }} />
              <span className="text-xs text-white/25">{d.m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Sidebar tab config ─────────────────────────────────────────────────── */
const tabs = [
  { id: "dashboard", label: "Dashboard",    icon: LayoutDashboard, panel: DashboardPanel },
  { id: "seo",       label: "SEO Analyzer", icon: Search,          panel: SEOPanel },
  { id: "keywords",  label: "Keywords",     icon: BarChart3,       panel: KeywordsPanel },
  { id: "reviews",   label: "Reviews",      icon: Star,            panel: ReviewsPanel },
  { id: "schema",    label: "Schema",       icon: Code2,           panel: SchemaPanel },
  { id: "reports",   label: "Reports",      icon: ClipboardList,   panel: ReportsPanel },
];

/* ─── Hero ───────────────────────────────────────────────────────────────── */
export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className = "particle absolute rounded-full";
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        background:${Math.random() > 0.5 ? "rgba(139,92,246,0.6)" : "rgba(59,130,246,0.6)"};
        --duration:${Math.random() * 6 + 6}s;--delay:${Math.random() * 4}s;
        filter:blur(1px);
      `;
      container.appendChild(p);
    }
  }, []);

  const ActivePanel = tabs.find((t) => t.id === activeTab)?.panel ?? DashboardPanel;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080812]" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-900/10 rounded-full blur-[150px]" />
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* ── Text content ── */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-sm text-purple-300 mb-8 animate-fade-in">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>AI-Powered Local SEO for India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-white">Grow Your Local</span>
            <br />
            <span className="gradient-text">Business with AI SEO</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            AI-powered SEO tools designed for Indian businesses to rank higher on Google,
            generate leads, and grow faster — without any technical expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/pricing" className="btn-glow flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl group">
              Start Free — No Credit Card
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-3 px-8 py-4 text-base font-medium text-white/70 hover:text-white glass rounded-xl border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <Play className="w-3 h-3 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {["10,000+ Businesses", "4.9★ Rating", "Made for India", "Free to Start"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-purple-400" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Interactive Dashboard Preview ── */}
        <div className="relative mt-20 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {/* Glow */}
          <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 via-blue-600/10 to-transparent rounded-2xl blur-xl" />

          {/* Main card */}
          <div className="relative glass rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.15)]">

            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-white/40 border border-white/5">
                  app.rankvillage.ai/dashboard
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">Live</span>
              </div>
            </div>

            {/* Body: sidebar + content */}
            <div className="flex bg-linear-to-br from-[#0d0d1f] to-[#080812]">

              {/* Sidebar */}
              <div className="w-36 shrink-0 border-r border-white/5 p-2 space-y-0.5">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left ${
                        isActive
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-purple-400" : "text-white/25"}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Content panel */}
              <div className="flex-1 p-4 min-h-72 overflow-auto">
                <ActivePanel />
              </div>
            </div>
          </div>

          {/* Floating cards — same as before */}
          <FloatingCard className="-top-6 -left-8 hidden lg:block" style={{ animationDelay: "0s" } as React.CSSProperties}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Ranking #1</div>
                <div className="text-xs text-white/40">Google Maps</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-top-4 -right-6 hidden lg:block" style={{ animationDelay: "1s" } as React.CSSProperties}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">4.9 ★ Rating</div>
                <div className="text-xs text-white/40">+23 reviews</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-bottom-4 -left-6 hidden lg:block" style={{ animationDelay: "2s" } as React.CSSProperties}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Local Pack</div>
                <div className="text-xs text-white/40">Top 3 position</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-bottom-6 -right-4 hidden lg:block" style={{ animationDelay: "3s" } as React.CSSProperties}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">+340% Traffic</div>
                <div className="text-xs text-white/40">This month</div>
              </div>
            </div>
          </FloatingCard>
        </div>

      </div>
    </section>
  );
}
