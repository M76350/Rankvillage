"use client";

import { useState } from "react";
import { FileText, Zap, Plus, Eye, Edit, Trash2, Calendar } from "lucide-react";

const contentItems = [
  { id: 1, title: "Weekend Special Biryani Offer",          type: "Google Post", status: "Published", date: "Today",      words: 120, views: 340 },
  { id: 2, title: "Best Family Restaurant in Dwarka",       type: "Blog Post",   status: "Draft",     date: "Yesterday",  words: 850, views: 0 },
  { id: 3, title: "Eid Special Menu 2025",                  type: "Google Post", status: "Scheduled", date: "In 3 days",  words: 95,  views: 0 },
  { id: 4, title: "5 Reasons to Visit Sharma Restaurant",   type: "Blog Post",   status: "Published", date: "Last week",  words: 1200, views: 890 },
  { id: 5, title: "New Menu Launch — Summer 2025",          type: "Google Post", status: "Published", date: "2 weeks ago",words: 110, views: 560 },
];

const contentTypes = ["Google Post", "Blog Post", "Social Media", "Business Description", "FAQ Answer"];

export default function ContentPage() {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated]   = useState("");
  const [selectedType, setSelectedType] = useState("Google Post");
  const [topic, setTopic]           = useState("");

  const generate = async () => {
    if (!topic) return;
    setGenerating(true);
    await new Promise((r) => setTimeout(r, 2000));
    setGenerated(`🍽️ **${topic}**\n\nExperience the authentic flavors of North India at Sharma Restaurant, Dwarka's most loved dining destination! This weekend, we're offering our signature Mutton Biryani at a special price — made with aged basmati rice, tender mutton, and our secret blend of spices.\n\n📍 Sector 7, Dwarka, New Delhi\n⏰ Open daily: 11 AM – 11 PM\n📞 Call to reserve: +91 98765 43210\n\n#SharmaRestaurant #Dwarka #Biryani #NorthIndianFood #DelhiFood`);
    setGenerating(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">AI Content Generator</h2>
          <p className="text-white/40 text-sm mt-0.5">Create SEO-optimized content for your business</p>
        </div>
      </div>

      {/* Generator */}
      <div className="glass-card rounded-2xl p-6 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-5">
          <Zap className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-purple-300">Generate New Content</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs text-white/50 mb-2">Content Type</label>
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((t) => (
                <button key={t} onClick={() => setSelectedType(t)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedType === t ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "text-white/40 border border-white/10 hover:border-white/20"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-2">Topic / Keyword</label>
            <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Weekend biryani offer..."
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
          </div>
        </div>

        <button onClick={generate} disabled={generating || !topic} className="btn-glow flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-50">
          {generating ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Generating...</> : <><Zap className="w-4 h-4" /> Generate Content</>}
        </button>

        {generated && (
          <div className="mt-4 p-4 rounded-xl bg-white/3 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-purple-300 font-medium">Generated Content</span>
              <div className="flex gap-2">
                <button className="text-xs text-white/40 hover:text-white px-2 py-1 rounded-lg border border-white/10 hover:border-white/20 transition-all">Copy</button>
                <button className="btn-glow text-xs px-3 py-1 rounded-lg text-white font-medium">Publish</button>
              </div>
            </div>
            <pre className="text-sm text-white/60 whitespace-pre-wrap font-sans leading-relaxed">{generated}</pre>
          </div>
        )}
      </div>

      {/* Content library */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white">Content Library</h3>
          <button className="flex items-center gap-1.5 text-xs text-purple-400 border border-purple-500/20 px-3 py-1.5 rounded-lg hover:bg-purple-500/10 transition-all">
            <Plus className="w-3.5 h-3.5" /> New
          </button>
        </div>
        <div className="space-y-3">
          {contentItems.map((item) => (
            <div key={item.id} className="glass-card rounded-2xl p-4 border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">{item.title}</div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-white/30">{item.type}</span>
                  <span className="text-xs text-white/20">·</span>
                  <span className="text-xs text-white/30">{item.words} words</span>
                  {item.views > 0 && <><span className="text-xs text-white/20">·</span><span className="text-xs text-white/30">{item.views} views</span></>}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1 text-xs text-white/30">
                  <Calendar className="w-3 h-3" /> {item.date}
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  item.status === "Published" ? "bg-green-500/10 text-green-400" :
                  item.status === "Draft" ? "bg-white/5 text-white/40" :
                  "bg-blue-500/10 text-blue-400"
                }`}>{item.status}</span>
                <div className="flex gap-1">
                  <button className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all"><Eye className="w-3.5 h-3.5" /></button>
                  <button className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all"><Edit className="w-3.5 h-3.5" /></button>
                  <button className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
