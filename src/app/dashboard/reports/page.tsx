"use client";

import { BarChart3, TrendingUp, Download, Calendar, Star, MapPin } from "lucide-react";

const monthlyData = [
  { month: "Jan", traffic: 3200, leads: 45, rank: 4.2 },
  { month: "Feb", traffic: 3800, leads: 52, rank: 3.8 },
  { month: "Mar", traffic: 4200, leads: 61, rank: 3.5 },
  { month: "Apr", traffic: 5100, leads: 74, rank: 3.1 },
  { month: "May", traffic: 7400, leads: 98, rank: 2.4 },
  { month: "Jun", traffic: 12400, leads: 124, rank: 1.8 },
];

const metrics = [
  { label: "SEO Score",       value: "87/100", change: "+12",  color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20",  icon: BarChart3 },
  { label: "Avg Rank",        value: "#1.8",   change: "↑2.4", color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   icon: MapPin },
  { label: "Monthly Traffic", value: "12.4K",  change: "+340%",color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", icon: TrendingUp },
  { label: "Leads Generated", value: "124",    change: "+38%", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", icon: Star },
];

const maxTraffic = Math.max(...monthlyData.map((d) => d.traffic));

export default function ReportsPage() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Reports & Analytics</h2>
          <p className="text-white/40 text-sm mt-0.5">Track your business growth over time</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all">
          <Download className="w-4 h-4" /> Export PDF
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className={`glass-card rounded-2xl p-5 border ${m.border}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/40">{m.label}</span>
                <div className={`w-8 h-8 rounded-lg ${m.bg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${m.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-white">{m.value}</div>
              <div className={`text-xs font-medium mt-1 ${m.color}`}>{m.change} this month</div>
            </div>
          );
        })}
      </div>

      {/* Traffic chart */}
      <div className="glass-card rounded-2xl p-6 border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-semibold text-white">Monthly Traffic Growth</h3>
            <p className="text-xs text-white/30 mt-0.5">Google organic visits</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <Calendar className="w-3.5 h-3.5" /> Jan – Jun 2025
          </div>
        </div>
        <div className="flex items-end gap-3 h-40">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs text-white/40 font-medium">{(d.traffic / 1000).toFixed(1)}K</div>
              <div className="w-full rounded-t-lg transition-all hover:opacity-80" style={{
                height: `${(d.traffic / maxTraffic) * 100}%`,
                background: "linear-gradient(to top, rgba(139,92,246,0.6), rgba(59,130,246,0.4))",
                minHeight: "8px",
              }} />
              <div className="text-xs text-white/30">{d.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Score breakdown */}
        <div className="glass-card rounded-2xl p-5 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-4">Performance Breakdown</h3>
          <div className="space-y-4">
            {[
              { label: "SEO Score",       val: 87, color: "from-purple-500 to-blue-500" },
              { label: "GBP Score",       val: 78, color: "from-blue-500 to-cyan-500" },
              { label: "Review Score",    val: 96, color: "from-yellow-500 to-orange-500" },
              { label: "Content Score",   val: 65, color: "from-green-500 to-teal-500" },
              { label: "Visibility Score",val: 72, color: "from-pink-500 to-purple-500" },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white/60">{m.label}</span>
                  <span className="text-white font-semibold">{m.val}/100</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${m.color} transition-all`} style={{ width: `${m.val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly leads */}
        <div className="glass-card rounded-2xl p-5 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-4">Leads Generated</h3>
          <div className="space-y-3">
            {monthlyData.map((d) => (
              <div key={d.month} className="flex items-center gap-3">
                <span className="text-xs text-white/40 w-8 shrink-0">{d.month}</span>
                <div className="flex-1 bg-white/5 rounded-full h-2">
                  <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${(d.leads / 124) * 100}%` }} />
                </div>
                <span className="text-xs font-medium text-white/70 w-8 text-right shrink-0">{d.leads}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-white/40">Total leads (6 months)</span>
            <span className="text-sm font-bold text-white">454</span>
          </div>
        </div>
      </div>
    </div>
  );
}
