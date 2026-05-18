"use client";

import { useState } from "react";
import { Building2, CheckCircle, AlertCircle, Zap, Camera, Clock, MapPin, Phone, Globe } from "lucide-react";

const issues = [
  { label: "Add business hours for public holidays", priority: "High",   done: false },
  { label: "Upload 8 more interior/food photos",     priority: "High",   done: false },
  { label: "Add menu link to your profile",          priority: "Medium", done: false },
  { label: "Enable messaging feature",               priority: "Low",    done: false },
  { label: "Add business description (Hindi)",       priority: "Medium", done: true  },
  { label: "Verify business address",                priority: "High",   done: true  },
  { label: "Add primary category: Restaurant",       priority: "High",   done: true  },
];

const profileData = {
  name: "Sharma Restaurant",
  category: "North Indian Restaurant",
  address: "Plot 12, Sector 7, Dwarka, New Delhi - 110075",
  phone: "+91 98765 43210",
  website: "www.sharmarestaurant.in",
  hours: "Mon–Sun: 11:00 AM – 11:00 PM",
  photos: 14,
  posts: 3,
};

export default function GBPPage() {
  const [checkedItems, setCheckedItems] = useState<number[]>([4, 5, 6]);
  const score = Math.round((checkedItems.length / issues.length) * 100);

  const toggle = (i: number) => {
    setCheckedItems((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-white">Google Business Profile</h2>
        <p className="text-white/40 text-sm mt-0.5">Optimize your GBP to rank higher in local search</p>
      </div>

      {/* Score + Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Score */}
        <div className="glass-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-4">Optimization Score</h3>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 shrink-0">
              <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="url(#scoreGrad)" strokeWidth="3"
                  strokeDasharray={`${score} ${100 - score}`} strokeLinecap="round" />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-white">{score}</span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">{score}/100</div>
              <div className="text-sm text-white/40 mb-3">
                {score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Work"}
              </div>
              <div className="text-xs text-white/30">
                {issues.filter((_, i) => !checkedItems.includes(i)).length} issues remaining
              </div>
            </div>
          </div>
        </div>

        {/* Profile info */}
        <div className="glass-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-4">Profile Overview</h3>
          <div className="space-y-2.5">
            {[
              { icon: Building2, label: profileData.name,     sub: profileData.category },
              { icon: MapPin,    label: profileData.address,  sub: "Verified" },
              { icon: Phone,     label: profileData.phone,    sub: "Primary" },
              { icon: Globe,     label: profileData.website,  sub: "Active" },
              { icon: Clock,     label: profileData.hours,    sub: "Open now" },
              { icon: Camera,    label: `${profileData.photos} photos`, sub: "Need 8 more" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-white/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/70 truncate">{item.label}</div>
                    <div className="text-xs text-white/30">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action items */}
      <div className="glass-card rounded-2xl p-5 border border-white/5">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-white">Action Items</h3>
          <span className="ml-auto text-xs text-white/30">{checkedItems.length}/{issues.length} completed</span>
        </div>
        <div className="space-y-2">
          {issues.map((issue, i) => {
            const done = checkedItems.includes(i);
            return (
              <div key={i} onClick={() => toggle(i)} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${done ? "bg-green-500/5 border-green-500/15 opacity-60" : "border-white/5 hover:border-white/10 hover:bg-white/2"}`}>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${done ? "border-green-500 bg-green-500" : "border-white/20"}`}>
                  {done && <CheckCircle className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm flex-1 ${done ? "line-through text-white/30" : "text-white/70"}`}>{issue.label}</span>
                {!done && (
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                    issue.priority === "High" ? "bg-red-500/10 text-red-400" :
                    issue.priority === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-blue-500/10 text-blue-400"
                  }`}>{issue.priority}</span>
                )}
                {done && <AlertCircle className="w-4 h-4 text-green-400 shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Description Generator */}
      <div className="glass-card rounded-2xl p-5 border border-purple-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-purple-300">AI Business Description</h3>
        </div>
        <div className="p-4 rounded-xl bg-white/3 border border-white/5 mb-3">
          <p className="text-sm text-white/60 leading-relaxed">
            Sharma Restaurant is Dwarka&apos;s premier destination for authentic North Indian cuisine. Established in 2010, we serve the finest biryani, dal makhani, and tandoori dishes made from traditional recipes. Located in Sector 7, Dwarka, we offer dine-in, takeaway, and home delivery. Open daily 11 AM – 11 PM. Visit us for an unforgettable culinary experience!
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn-glow flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white">
            <Zap className="w-3.5 h-3.5" /> Regenerate
          </button>
          <button className="px-4 py-2 rounded-xl text-sm text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-all">
            Copy to GBP
          </button>
        </div>
      </div>
    </div>
  );
}
