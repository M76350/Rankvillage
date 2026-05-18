"use client";

import { Star, TrendingUp, Users, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, Sharma Family Restaurant",
    location: "Dwarka, Delhi",
    avatar: "RS",
    avatarColor: "from-orange-500 to-red-500",
    rating: 5,
    review:
      "RankVillage AI ne meri restaurant ko Google Maps pe #1 rank dilaya sirf 45 din mein. Pehle 200 views the, ab 4,800+ monthly views hain. Customers khud aa rahe hain!",
    stats: [
      { label: "Google Views", value: "+2,300%", icon: TrendingUp },
      { label: "New Customers", value: "+180/mo", icon: Users },
    ],
    tag: "Restaurant Owner",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    name: "Priya Fitness",
    role: "Owner, PowerFit Gym",
    location: "Koramangala, Bangalore",
    avatar: "PF",
    avatarColor: "from-purple-500 to-pink-500",
    rating: 5,
    review:
      "The AI review reply feature is amazing! It replies to all my gym reviews automatically in perfect Hindi and English. My rating went from 3.8 to 4.9 stars in 2 months.",
    stats: [
      { label: "Star Rating", value: "3.8 → 4.9", icon: Star },
      { label: "New Members", value: "+65/mo", icon: Users },
    ],
    tag: "Gym Owner",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    name: "Suresh Dairy",
    role: "Owner, Suresh Fresh Dairy",
    location: "Andheri, Mumbai",
    avatar: "SD",
    avatarColor: "from-blue-500 to-cyan-500",
    rating: 5,
    review:
      "Mujhe SEO ke baare mein kuch nahi pata tha. RankVillage AI ne sab kuch automatically kar diya. Ab meri dairy 'fresh milk near me' search mein top 3 mein aati hai!",
    stats: [
      { label: "Local Ranking", value: "Top 3", icon: MapPin },
      { label: "Daily Orders", value: "+45/day", icon: TrendingUp },
    ],
    tag: "Dairy Farm Owner",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "Meena Electronics",
    role: "Owner, Meena Mobile Shop",
    location: "Lajpat Nagar, Delhi",
    avatar: "ME",
    avatarColor: "from-green-500 to-teal-500",
    rating: 5,
    review:
      "Competitor analysis feature ne mujhe bataya ki mere competitors kya kar rahe hain. Maine unse better strategy banai aur ab mera shop unse upar rank karta hai. Best investment!",
    stats: [
      { label: "Ranking vs Competitors", value: "#1 Local", icon: TrendingUp },
      { label: "Monthly Revenue", value: "+₹80K", icon: Users },
    ],
    tag: "Shop Owner",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/15 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-500/20 text-sm text-yellow-300 mb-6">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            4.9/5 from 2,000+ businesses
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Real Businesses,
            <br />
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            See how Indian local businesses are growing with RankVillage AI.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-white/30" />
                      <span className="text-white/30 text-xs">{t.location}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${t.tagColor}`}>
                  {t.tag}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-white/60 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {t.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/40">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 glass rounded-2xl px-8 py-4 border border-white/5">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">4.9★</div>
              <div className="text-xs text-white/40">Average Rating</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2,000+</div>
              <div className="text-xs text-white/40">Happy Businesses</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">30 Days</div>
              <div className="text-xs text-white/40">Avg. to See Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
