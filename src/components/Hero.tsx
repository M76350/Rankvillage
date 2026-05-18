"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, TrendingUp, Star, MapPin, BarChart3, Zap } from "lucide-react";

function FloatingCard({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute glass rounded-xl p-3 shadow-card border border-white/10 animate-float ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    // Create floating particles
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className = "particle absolute rounded-full";
      const size = Math.random() * 4 + 2;
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: ${Math.random() > 0.5 ? "rgba(139,92,246,0.6)" : "rgba(59,130,246,0.6)"};
        --duration: ${Math.random() * 6 + 6}s;
        --delay: ${Math.random() * 4}s;
        filter: blur(1px);
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080812]" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-sm text-purple-300 mb-8 animate-fade-in">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>AI-Powered Local SEO for India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-white">Grow Your Local</span>
            <br />
            <span className="gradient-text">Business with AI SEO</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            AI-powered SEO tools designed for Indian businesses to rank higher on Google,
            generate leads, and grow faster — without any technical expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#pricing"
              className="btn-glow flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl group"
            >
              Start Free — No Credit Card
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="flex items-center gap-3 px-8 py-4 text-base font-medium text-white/70 hover:text-white glass rounded-xl border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <Play className="w-3 h-3 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {["10,000+ Businesses", "4.9★ Rating", "Made for India", "Free to Start"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-purple-400" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mt-20 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {/* Glow behind dashboard */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-blue-600/10 to-transparent rounded-2xl blur-xl" />

          {/* Main dashboard card */}
          <div className="relative glass rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.15)]">
            {/* Dashboard header */}
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
            </div>

            {/* Dashboard content */}
            <div className="p-6 bg-gradient-to-br from-[#0d0d1f] to-[#080812]">
              <div className="grid grid-cols-12 gap-4">
                {/* Left sidebar */}
                <div className="col-span-3 space-y-2">
                  {["Dashboard", "SEO Analyzer", "Keywords", "Reviews", "Schema", "Reports"].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-xs flex items-center gap-2 cursor-pointer transition-all ${
                        i === 0
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "text-white/40 hover:text-white/60 hover:bg-white/5"
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-purple-400" : "bg-white/20"}`} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-9 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "SEO Score", value: "87/100", change: "+12", color: "text-green-400" },
                      { label: "Keywords", value: "142", change: "+28", color: "text-blue-400" },
                      { label: "Reviews", value: "4.8★", change: "+0.3", color: "text-yellow-400" },
                      { label: "Ranking", value: "#3", change: "↑5", color: "text-purple-400" },
                    ].map((stat) => (
                      <div key={stat.label} className="glass rounded-lg p-3 border border-white/5">
                        <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className={`text-xs font-medium ${stat.color}`}>{stat.change} this month</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="glass rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-white/60">Keyword Rankings Over Time</span>
                      <span className="text-xs text-purple-400">Last 30 days</span>
                    </div>
                    {/* Fake chart bars */}
                    <div className="flex items-end gap-1 h-16">
                      {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100, 92, 98].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: `linear-gradient(to top, rgba(139,92,246,${0.3 + i * 0.05}), rgba(59,130,246,0.4))`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* AI suggestions */}
                  <div className="glass rounded-lg p-3 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-xs font-medium text-purple-300">AI Suggestion</span>
                    </div>
                    <p className="text-xs text-white/50">
                      Add "best biryani near me" to your Google Business description to capture 340 monthly searches in your area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
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
