"use client";

import { useState } from "react";
import {
  TrendingUp, MapPin, Star, Zap, BarChart3, ArrowUp, ArrowDown,
  Search, FileText, Users, Building2, ChartBar, LayoutDashboard
} from "lucide-react";

// ─── Static data per tab ────────────────────────────────────────────────────

const keywords = [
  { term: "best restaurant near me", pos: 1, change: 3, vol: "2.4K" },
  { term: "biryani delivery Delhi", pos: 2, change: 1, vol: "1.8K" },
  { term: "north indian food Dwarka", pos: 3, change: -1, vol: "890" },
  { term: "family restaurant Dwarka", pos: 4, change: 5, vol: "650" },
  { term: "dinner place near metro", pos: 7, change: 2, vol: "420" },
];

const reviews = [
  { name: "Amit K.", rating: 5, text: "Best biryani in Dwarka! Must visit.", date: "2 days ago", replied: true },
  { name: "Priya S.", rating: 4, text: "Great food, service could be faster.", date: "5 days ago", replied: false },
  { name: "Rahul M.", rating: 5, text: "Family dinner was amazing. Will come again!", date: "1 week ago", replied: true },
  { name: "Sunita R.", rating: 3, text: "Average experience. Food was okay.", date: "2 weeks ago", replied: false },
];

const gbpData = {
  score: 78,
  issues: [
    { label: "Add business hours for holidays", priority: "High" },
    { label: "Upload 8 more interior photos", priority: "High" },
    { label: "Add menu link to profile", priority: "Medium" },
    { label: "Enable messaging feature", priority: "Low" },
  ],
  attributes: ["Dine-in", "Takeaway", "Delivery", "Outdoor seating"],
};

const contentItems = [
  { title: "Weekend Special Biryani Offer", type: "Google Post", status: "Published", date: "Today" },
  { title: "Best Family Restaurant in Dwarka", type: "Blog Post", status: "Draft", date: "Yesterday" },
  { title: "Eid Special Menu 2025", type: "Google Post", status: "Scheduled", date: "In 3 days" },
  { title: "5 Reasons to Visit Sharma Restaurant", type: "Blog Post", status: "Published", date: "Last week" },
];

const competitors = [
  { name: "Biryani Blues Dwarka", rank: 1, rating: 4.6, reviews: 1240, score: 91 },
  { name: "Sharma Restaurant", rank: 2, rating: 4.8, reviews: 890, score: 87, isYou: true },
  { name: "Punjab Grill Dwarka", rank: 3, rating: 4.4, reviews: 760, score: 79 },
  { name: "Moti Mahal Delux", rank: 4, rating: 4.2, reviews: 540, score: 71 },
];

const aiSuggestions = [
  { text: "Add 'best biryani near me' to your GBP description", impact: "High", color: "text-green-400" },
  { text: "Upload 5 more food photos to increase CTR by 23%", impact: "High", color: "text-green-400" },
  { text: "Reply to 3 unanswered reviews to boost trust score", impact: "Medium", color: "text-yellow-400" },
  { text: "Create a Google Post about weekend special offer", impact: "Medium", color: "text-yellow-400" },
];

// ─── Tab content components ──────────────────────────────────────────────────

function OverviewContent() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "SEO Score", value: "87/100", change: "+12", icon: BarChart3, color: "text-green-400" },
          { label: "Local Rank", value: "#1", change: "↑5 spots", icon: MapPin, color: "text-blue-400" },
          { label: "Avg Rating", value: "4.8 ★", change: "+0.3", icon: Star, color: "text-yellow-400" },
          { label: "Monthly Views", value: "12.4K", change: "+340%", icon: TrendingUp, color: "text-purple-400" },
        ].map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="glass rounded-xl p-3 border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-white/40">{kpi.label}</span>
                <Icon className={`w-3.5 h-3.5 ${kpi.color}`} />
              </div>
              <div className="text-lg font-bold text-white">{kpi.value}</div>
              <div className={`text-xs font-medium mt-0.5 ${kpi.color}`}>{kpi.change} this month</div>
            </div>
          );
        })}
      </div>
      <div className="glass rounded-xl p-4 border border-white/5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-white/60">Google Traffic — Last 30 days</span>
          <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">+340%</span>
        </div>
        <div className="flex items-end gap-0.5 h-16">
          {[30,45,35,60,50,75,65,85,78,92,88,100,95,98,90,96,100,94,98,100,96,99,100,97,100,98,100,99,100,100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(139,92,246,${0.4 + i * 0.015}), rgba(59,130,246,0.5))` }} />
          ))}
        </div>
      </div>
      <div className="glass rounded-xl p-3 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-medium text-purple-300">AI Recommendations</span>
          <span className="ml-auto text-xs text-white/30">4 pending</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {aiSuggestions.map((s, i) => (
            <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/3 border border-white/5">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${s.color.replace("text-", "bg-")}`} />
              <p className="text-xs text-white/60 flex-1">{s.text}</p>
              <span className={`text-xs font-medium shrink-0 ${s.color}`}>{s.impact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KeywordsContent() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/60">Tracked Keywords</span>
        <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">5 keywords</span>
      </div>
      <div className="glass rounded-xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-white/5 text-xs text-white/30">
          <div className="col-span-1">#</div>
          <div className="col-span-6">Keyword</div>
          <div className="col-span-2 text-center">Pos</div>
          <div className="col-span-2 text-center">Change</div>
          <div className="col-span-1 text-right">Vol</div>
        </div>
        {keywords.map((kw, i) => (
          <div key={kw.term} className={`grid grid-cols-12 gap-2 px-3 py-2.5 items-center border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/1" : ""}`}>
            <div className="col-span-1 text-xs text-white/30">{i + 1}</div>
            <div className="col-span-6 text-xs text-white/70 truncate">{kw.term}</div>
            <div className="col-span-2 flex justify-center">
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${kw.pos <= 3 ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white/50"}`}>#{kw.pos}</span>
            </div>
            <div className="col-span-2 flex items-center justify-center gap-1">
              {kw.change > 0 ? <ArrowUp className="w-3 h-3 text-green-400" /> : <ArrowDown className="w-3 h-3 text-red-400" />}
              <span className={`text-xs ${kw.change > 0 ? "text-green-400" : "text-red-400"}`}>{Math.abs(kw.change)}</span>
            </div>
            <div className="col-span-1 text-xs text-white/30 text-right">{kw.vol}</div>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-3 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs text-purple-300 font-medium">AI Keyword Suggestion</span>
        </div>
        <p className="text-xs text-white/50">Add <span className="text-purple-300">"best biryani near me"</span> — 340 monthly searches in your area. High opportunity, low competition.</p>
      </div>
    </div>
  );
}

function ReviewsContent() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Avg Rating", value: "4.8★", color: "text-yellow-400" },
          { label: "Total Reviews", value: "890", color: "text-white" },
          { label: "Unanswered", value: "2", color: "text-red-400" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-3 border border-white/5 text-center">
            <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {reviews.map((r, i) => (
          <div key={i} className="glass rounded-xl p-3 border border-white/5">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-xs font-medium text-white">{r.name}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-white/30">{r.date}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${r.replied ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                  {r.replied ? "Replied" : "Pending"}
                </span>
              </div>
            </div>
            <p className="text-xs text-white/50 italic">"{r.text}"</p>
            {!r.replied && (
              <button className="mt-2 text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                <Zap className="w-3 h-3" /> Generate AI Reply
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GBPContent() {
  return (
    <div className="space-y-3">
      <div className="glass rounded-xl p-4 border border-white/5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-white/60">GBP Optimization Score</span>
          <span className="text-xs text-yellow-400 font-bold">{gbpData.score}/100</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-2 mb-1">
          <div className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-green-500" style={{ width: `${gbpData.score}%` }} />
        </div>
        <p className="text-xs text-white/30 mt-1">Fix 4 issues to reach 95+ score</p>
      </div>
      <div className="glass rounded-xl border border-white/5 overflow-hidden">
        <div className="px-3 py-2 border-b border-white/5 text-xs text-white/40 font-medium">Action Items</div>
        {gbpData.issues.map((issue, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2.5 border-b border-white/5 last:border-0">
            <span className="text-xs text-white/60">{issue.label}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              issue.priority === "High" ? "bg-red-500/10 text-red-400" :
              issue.priority === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
              "bg-blue-500/10 text-blue-400"
            }`}>{issue.priority}</span>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-3 border border-white/5">
        <div className="text-xs text-white/40 mb-2 font-medium">Active Attributes</div>
        <div className="flex flex-wrap gap-1.5">
          {gbpData.attributes.map((a) => (
            <span key={a} className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentTabContent() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/60">Content Library</span>
        <button className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-lg border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
          + Generate New
        </button>
      </div>
      <div className="space-y-2">
        {contentItems.map((item, i) => (
          <div key={i} className="glass rounded-xl p-3 border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white truncate">{item.title}</div>
              <div className="text-xs text-white/30">{item.type} · {item.date}</div>
            </div>
            <span className={`text-xs px-1.5 py-0.5 rounded-full shrink-0 ${
              item.status === "Published" ? "bg-green-500/10 text-green-400" :
              item.status === "Draft" ? "bg-white/5 text-white/40" :
              "bg-blue-500/10 text-blue-400"
            }`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompetitorsContent() {
  return (
    <div className="space-y-3">
      <div className="text-xs text-white/40 font-medium">Local Pack Rankings — Dwarka, Delhi</div>
      <div className="glass rounded-xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-white/5 text-xs text-white/30">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Business</div>
          <div className="col-span-2 text-center">Rating</div>
          <div className="col-span-2 text-center">Reviews</div>
          <div className="col-span-2 text-center">Score</div>
        </div>
        {competitors.map((c) => (
          <div key={c.name} className={`grid grid-cols-12 gap-2 px-3 py-2.5 items-center border-b border-white/5 last:border-0 ${c.isYou ? "bg-purple-500/5 border-l-2 border-l-purple-500" : ""}`}>
            <div className="col-span-1 text-xs font-bold text-white/50">#{c.rank}</div>
            <div className="col-span-5">
              <div className="text-xs text-white/70 truncate">{c.name}</div>
              {c.isYou && <div className="text-xs text-purple-400">← You</div>}
            </div>
            <div className="col-span-2 text-center text-xs text-yellow-400">{c.rating}★</div>
            <div className="col-span-2 text-center text-xs text-white/40">{c.reviews}</div>
            <div className="col-span-2 text-center">
              <span className={`text-xs font-bold ${c.score >= 85 ? "text-green-400" : c.score >= 75 ? "text-yellow-400" : "text-red-400"}`}>{c.score}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-3 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-1.5">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs text-purple-300 font-medium">Gap Analysis</span>
        </div>
        <p className="text-xs text-white/50">Biryani Blues has 350 more reviews. Getting 10 reviews/week will close the gap in 35 weeks.</p>
      </div>
    </div>
  );
}

function ReportsContent() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "This Month", value: "+340%", sub: "Traffic growth", color: "text-green-400" },
          { label: "Leads Generated", value: "124", sub: "From Google", color: "text-blue-400" },
          { label: "Review Score", value: "4.8★", sub: "+0.3 vs last month", color: "text-yellow-400" },
          { label: "Ranking Avg", value: "#2.4", sub: "Across keywords", color: "text-purple-400" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-3 border border-white/5">
            <div className="text-xs text-white/40 mb-1">{s.label}</div>
            <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-white/30 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-3 border border-white/5">
        <div className="text-xs font-medium text-white/60 mb-3">Monthly Performance</div>
        <div className="space-y-2">
          {[
            { label: "SEO Score", val: 87, max: 100, color: "from-purple-500 to-blue-500" },
            { label: "GBP Score", val: 78, max: 100, color: "from-blue-500 to-cyan-500" },
            { label: "Review Score", val: 96, max: 100, color: "from-yellow-500 to-orange-500" },
            { label: "Visibility", val: 72, max: 100, color: "from-green-500 to-teal-500" },
          ].map((m) => (
            <div key={m.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/50">{m.label}</span>
                <span className="text-white/70 font-medium">{m.val}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full bg-gradient-to-r ${m.color}`} style={{ width: `${m.val}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Tab config ──────────────────────────────────────────────────────────────

const tabs = [
  { id: "overview",     label: "Overview",     icon: LayoutDashboard, content: OverviewContent },
  { id: "keywords",     label: "Keywords",     icon: Search,          content: KeywordsContent },
  { id: "reviews",      label: "Reviews",      icon: Star,            content: ReviewsContent },
  { id: "gbp",          label: "GBP",          icon: Building2,       content: GBPContent },
  { id: "content",      label: "Content",      icon: FileText,        content: ContentTabContent },
  { id: "competitors",  label: "Competitors",  icon: Users,           content: CompetitorsContent },
  { id: "reports",      label: "Reports",      icon: ChartBar,        content: ReportsContent },
];

// ─── Main component ──────────────────────────────────────────────────────────

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview");
  const ActiveContent = tabs.find((t) => t.id === activeTab)?.content ?? OverviewContent;

  return (
    <section id="dashboard" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm text-blue-300 mb-6">
            <BarChart3 className="w-3.5 h-3.5" />
            Live Dashboard Preview
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Your Business Growth
            <br />
            <span className="gradient-text">At a Glance</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Click any tab to explore the full dashboard — SEO, reviews, keywords, and more.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-blue-600/5 to-transparent rounded-3xl blur-xl" />
          <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.1)]">

            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-white/2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-6 py-1.5 rounded-lg bg-white/5 text-xs text-white/30 border border-white/5">
                  app.rankvillage.ai — Sharma Restaurant, Dwarka
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">Live</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row min-h-[420px]">
              {/* Sidebar */}
              <div className="lg:w-44 border-b lg:border-b-0 lg:border-r border-white/5 p-3 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal w-full text-left ${
                        isActive
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-purple-400" : "text-white/30"}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 overflow-auto">
                <ActiveContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
