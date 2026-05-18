"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Businesses Served", color: "from-purple-400 to-purple-600" },
  { value: 500000, suffix: "+", label: "AI Generations", color: "from-blue-400 to-blue-600" },
  { value: 250000, suffix: "+", label: "Reviews Generated", color: "from-cyan-400 to-cyan-600" },
  { value: 98, suffix: "%", label: "Rankings Improved", color: "from-pink-400 to-pink-600" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, color, start }: typeof stats[0] & { start: boolean }) {
  const count = useCountUp(value, 2000, start);
  const display = value >= 1000 ? (count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count.toString()) : count.toString();

  return (
    <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300">
      <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
        {display}{suffix}
      </div>
      <div className="text-white/50 text-sm font-medium">{label}</div>
      <div className={`mt-3 h-0.5 w-12 mx-auto bg-gradient-to-r ${color} rounded-full opacity-60`} />
    </div>
  );
}

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-3">Trusted by Indian Businesses</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Numbers That <span className="gradient-text">Speak for Themselves</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} start={started} />
          ))}
        </div>
        {/* Logos row */}
        <div className="mt-16 text-center">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-6">Trusted by businesses across India</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-30">
            {["Restaurant", "Gym", "Dairy Farm", "Medical Store", "Salon", "Coaching"].map((biz) => (
              <span key={biz} className="text-white/60 text-sm font-medium border border-white/10 px-4 py-1.5 rounded-full">
                {biz}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
