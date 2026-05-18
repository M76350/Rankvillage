"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

export default function CTA() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        position: absolute;
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: ${Math.random() > 0.5 ? "rgba(139,92,246,0.8)" : "rgba(59,130,246,0.8)"};
        border-radius: 50%;
        animation: particleFloat ${Math.random() * 6 + 6}s ease-in-out infinite;
        animation-delay: ${Math.random() * 4}s;
        filter: blur(0.5px);
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#080812] to-blue-900/20" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Glowing border frame */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl" />

          {/* Card */}
          <div className="relative glass rounded-3xl border border-white/10 p-10 sm:p-16 text-center overflow-hidden">
            {/* Inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm text-purple-300 mb-8">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                Start Growing Today — Free for 14 Days
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Start Growing Your
                <br />
                <span className="gradient-text">Business Today</span>
              </h2>

              <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Join 10,000+ Indian businesses already using RankVillage AI to rank higher on Google,
                get more customers, and grow faster — without any technical expertise.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/auth/signup"
                  className="btn-glow flex items-center gap-2 px-10 py-4 text-base font-bold text-white rounded-xl group animate-pulse-glow"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/#features"
                  className="flex items-center gap-2 px-8 py-4 text-base font-medium text-white/60 hover:text-white glass rounded-xl border border-white/10 hover:border-white/20 transition-all"
                >
                  See All Features
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Setup in 5 minutes
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  Results in 30 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
