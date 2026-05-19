"use client";

import { TrendingUp, MapPin, Star, BarChart3, Zap, ArrowUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

const kpis = [
  { label: "SEO Score",     value: "87/100", change: "+12", up: true, icon: BarChart3,  color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20" },
  { label: "Local Rank",    value: "#1",      change: "↑5",  up: true, icon: MapPin,    color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
  { label: "Avg Rating",    value: "4.8★",    change: "+0.3",up: true, icon: Star,      color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { label: "Monthly Views", value: "12.4K",   change: "+340%",up:true, icon: TrendingUp,color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
];

const recentActivity = [
  { text: "AI replied to a new review", time: "2 min ago", type: "review" },
  { text: "Keyword 'near me' moved to #2", time: "1 hr ago", type: "keyword" },
  { text: "GBP score improved from 72 to 78", time: "3 hrs ago", type: "gbp" },
  { text: "New competitor detected in your area", time: "Yesterday", type: "competitor" },
  { text: "Weekly SEO report generated", time: "2 days ago", type: "report" },
];

const quickActions = [
  { label: "Generate Review Reply", href: "/dashboard/reviews", color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/20", icon: Star },
  { label: "Analyze Keywords", href: "/dashboard/keywords", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/20", icon: BarChart3 },
  { label: "Optimize GBP", href: "/dashboard/gbp", color: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/20", icon: MapPin },
  { label: "Create Content", href: "/dashboard/content", color: "from-green-500/20 to-teal-500/20", border: "border-green-500/20", icon: Zap },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] ?? "there";

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{getGreeting()}, {firstName} 👋</h2>
          <p className="text-white/40 text-sm mt-0.5">
            Here&apos;s what&apos;s happening with <span className="text-white/60">{user?.businessName}</span> today.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 glass rounded-xl border border-purple-500/20">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-white/60">All systems live</span>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className={`glass-card rounded-2xl p-5 border ${k.border}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/40">{k.label}</span>
                <div className={`w-8 h-8 rounded-lg ${k.bg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${k.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{k.value}</div>
              <div className={`flex items-center gap-1 text-xs font-medium ${k.color}`}>
                <ArrowUp className="w-3 h-3" />
                {k.change} this month
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Traffic chart */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-5 border border-white/5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-semibold text-white">Google Traffic</h3>
              <p className="text-xs text-white/40">Last 30 days</p>
            </div>
            <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">+340%</span>
          </div>
          <div className="flex items-end gap-1 h-32">
            {[30,45,35,60,50,75,65,85,78,92,88,100,95,98,90,96,100,94,98,100,96,99,100,97,100,98,100,99,100,100].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm transition-all hover:opacity-80" style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(139,92,246,${0.4 + i * 0.015}), rgba(59,130,246,0.5))` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/20">
            <span>May 1</span><span>May 15</span><span>May 30</span>
          </div>
        </div>

        {/* Activity feed */}
        <div className="glass-card rounded-2xl p-5 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/60 leading-relaxed">{a.text}</p>
                  <p className="text-xs text-white/25 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((a) => {
            const Icon = a.icon;
            return (
              <Link key={a.label} href={a.href} className={`group glass-card rounded-2xl p-5 border ${a.border} bg-gradient-to-br ${a.color} hover:scale-105 transition-all duration-200`}>
                <Icon className="w-6 h-6 text-white/60 mb-3 group-hover:text-white transition-colors" />
                <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{a.label}</div>
                <ArrowRight className="w-4 h-4 text-white/30 mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* AI suggestions */}
      <div className="glass-card rounded-2xl p-5 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-purple-300">AI Recommendations</h3>
          <span className="ml-auto text-xs text-white/30">4 actions pending</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { text: "Add 'best biryani near me' to your GBP description", impact: "High", color: "text-green-400", bg: "bg-green-500/10" },
            { text: "Upload 5 more food photos to increase CTR by 23%", impact: "High", color: "text-green-400", bg: "bg-green-500/10" },
            { text: "Reply to 3 unanswered reviews to boost trust score", impact: "Medium", color: "text-yellow-400", bg: "bg-yellow-500/10" },
            { text: "Create a Google Post about weekend special offer", impact: "Medium", color: "text-yellow-400", bg: "bg-yellow-500/10" },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/20 transition-all cursor-pointer group">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${s.color.replace("text-", "bg-")}`} />
              <p className="text-sm text-white/60 flex-1 group-hover:text-white/80 transition-colors">{s.text}</p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${s.bg} ${s.color}`}>{s.impact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
