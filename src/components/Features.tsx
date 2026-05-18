"use client";

import { Star, MapPin, BarChart3, Code2, FileText, TrendingUp, PenTool, Search, Building2 } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "AI Review Reply Generator",
    description: "Automatically generate professional, personalized replies to Google reviews in Hindi and English. Improve your reputation effortlessly.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "hover:border-yellow-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
  },
  {
    icon: MapPin,
    title: "Google Business Optimizer",
    description: "Optimize your Google Business Profile with AI-powered suggestions for categories, attributes, photos, and posts to rank higher locally.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: BarChart3,
    title: "Local SEO Analyzer",
    description: "Get a complete audit of your local SEO health. Identify gaps, fix issues, and get a step-by-step action plan to rank #1 in your area.",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "hover:border-purple-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: Code2,
    title: "Schema Generator",
    description: "Generate structured data markup (JSON-LD) for your business automatically. Help Google understand your business better and show rich results.",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "hover:border-green-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
  },
  {
    icon: FileText,
    title: "AI Business Description",
    description: "Create compelling, keyword-rich business descriptions that attract customers and rank higher on Google Maps and local search results.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "hover:border-cyan-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: TrendingUp,
    title: "Keyword Ranking Tracker",
    description: "Track your local keyword rankings daily. See exactly where you rank for 'near me' searches and monitor your progress over time.",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "hover:border-pink-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: PenTool,
    title: "AI Content Generator",
    description: "Generate SEO-optimized blog posts, social media content, and Google Posts tailored for your local business and target audience.",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "hover:border-violet-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: Search,
    title: "Competitor Analysis",
    description: "Spy on your local competitors. See their keywords, reviews, rankings, and strategies. Find gaps and outrank them with AI insights.",
    gradient: "from-orange-500/20 to-red-500/20",
    border: "hover:border-orange-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: Building2,
    title: "Business Listing Management",
    description: "Manage and sync your business information across 50+ directories including JustDial, Sulekha, and Google. One dashboard, everywhere.",
    gradient: "from-teal-500/20 to-cyan-500/20",
    border: "hover:border-teal-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            9 Powerful AI Tools
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Everything You Need to
            <br />
            <span className="gradient-text">Dominate Local Search</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A complete AI-powered toolkit built specifically for Indian local businesses to grow on Google.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative glass-card rounded-2xl p-6 border border-white/5 ${feature.border} ${feature.glow} transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                {/* Content */}
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <div className={`w-6 h-6 rounded-full ${feature.iconBg} flex items-center justify-center`}>
                    <svg className={`w-3 h-3 ${feature.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
