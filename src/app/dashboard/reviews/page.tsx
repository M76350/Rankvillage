"use client";

import { useState } from "react";
import { Star, Zap, Filter, Search, CheckCircle, Clock } from "lucide-react";

const reviews = [
  { id: 1, name: "Amit Kumar",   avatar: "AK", rating: 5, text: "Best biryani in Dwarka! The mutton biryani was absolutely delicious. Will definitely come back!", date: "2 days ago",  replied: true,  reply: "Thank you so much, Amit ji! We're thrilled you loved our mutton biryani. Your kind words motivate our entire team. See you again soon! 🙏" },
  { id: 2, name: "Priya Sharma", avatar: "PS", rating: 4, text: "Great food, service could be a bit faster during peak hours. Overall a good experience.", date: "5 days ago",  replied: false, reply: "" },
  { id: 3, name: "Rahul Mehta",  avatar: "RM", rating: 5, text: "Took my family for dinner and everyone loved it. The ambiance is great and food is authentic.", date: "1 week ago", replied: true,  reply: "Dear Rahul ji, thank you for bringing your family to Sharma Restaurant! We're so happy everyone enjoyed the food and ambiance. Looking forward to serving you again! 😊" },
  { id: 4, name: "Sunita Rao",   avatar: "SR", rating: 3, text: "Average experience. Food was okay but nothing special. Expected better for the price.", date: "2 weeks ago", replied: false, reply: "" },
  { id: 5, name: "Vikram Singh", avatar: "VS", rating: 5, text: "Excellent dal makhani and naan! The staff is very friendly and attentive. Highly recommended.", date: "3 weeks ago", replied: true,  reply: "Thank you Vikram ji! Our dal makhani is indeed our specialty. We're glad our team made your experience memorable. Do visit us again! 🙏" },
];

const aiReplies: Record<number, string> = {
  2: "Dear Priya ji, thank you for your honest feedback! We're glad you enjoyed the food. We completely understand your concern about service speed during peak hours — we're actively working on improving our staffing during busy times. We hope to give you a faster, even better experience on your next visit! 🙏",
  4: "Dear Sunita ji, thank you for taking the time to share your feedback. We're sorry the experience didn't fully meet your expectations. We'd love to make it up to you — please visit us again and ask for our manager. We'll ensure you have an exceptional experience that reflects our true quality. 🙏",
};

export default function ReviewsPage() {
  const [filter, setFilter]       = useState<"all" | "pending" | "replied">("all");
  const [search, setSearch]       = useState("");
  const [generating, setGenerating] = useState<number | null>(null);
  const [generatedReplies, setGeneratedReplies] = useState<Record<number, string>>({});
  const [publishedIds, setPublishedIds] = useState<number[]>([]);

  const filtered = reviews.filter((r) => {
    const matchFilter = filter === "all" || (filter === "pending" && !r.replied && !publishedIds.includes(r.id)) || (filter === "replied" && (r.replied || publishedIds.includes(r.id)));
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.text.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const generateReply = async (id: number) => {
    setGenerating(id);
    await new Promise((r) => setTimeout(r, 1500));
    setGeneratedReplies((prev) => ({ ...prev, [id]: aiReplies[id] ?? "Thank you for your feedback! We appreciate you taking the time to share your experience with us. We look forward to serving you again soon! 🙏" }));
    setGenerating(null);
  };

  const publishReply = (id: number) => {
    setPublishedIds((prev) => [...prev, id]);
    setGeneratedReplies((prev) => { const n = { ...prev }; delete n[id]; return n; });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Review Management</h2>
          <p className="text-white/40 text-sm mt-0.5">AI-powered replies for all your Google reviews</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Reviews", value: "890",  color: "text-white" },
          { label: "Avg Rating",    value: "4.8★", color: "text-yellow-400" },
          { label: "Replied",       value: "887",  color: "text-green-400" },
          { label: "Pending",       value: "2",    color: "text-red-400" },
        ].map((s) => (
          <div key={s.label} className="glass-card rounded-2xl p-4 border border-white/5 text-center">
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-white/40 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search reviews..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-white/30" />
          {(["all", "pending", "replied"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-2 rounded-xl text-xs font-medium capitalize transition-all ${filter === f ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "text-white/40 hover:text-white/60 border border-white/10"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {filtered.map((r) => {
          const isReplied = r.replied || publishedIds.includes(r.id);
          const hasGenerated = !!generatedReplies[r.id];
          return (
            <div key={r.id} className="glass-card rounded-2xl p-5 border border-white/5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < r.rating ? "fill-yellow-400 text-yellow-400" : "text-white/10"}`} />
                        ))}
                      </div>
                      <span className="text-xs text-white/30">{r.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full shrink-0 ${isReplied ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                  {isReplied ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                  {isReplied ? "Replied" : "Pending"}
                </span>
              </div>

              {/* Review text */}
              <p className="text-sm text-white/60 italic mb-3">"{r.text}"</p>

              {/* Existing reply */}
              {isReplied && r.reply && (
                <div className="p-3 rounded-xl bg-green-500/5 border border-green-500/15">
                  <div className="text-xs text-green-400 font-medium mb-1">Your Reply:</div>
                  <p className="text-xs text-white/50">{r.reply}</p>
                </div>
              )}

              {/* Generated reply */}
              {hasGenerated && (
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-xs text-purple-300 font-medium">AI Generated Reply:</span>
                  </div>
                  <p className="text-xs text-white/60 mb-3">{generatedReplies[r.id]}</p>
                  <div className="flex gap-2">
                    <button onClick={() => publishReply(r.id)} className="btn-glow flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white">
                      <CheckCircle className="w-3.5 h-3.5" /> Publish Reply
                    </button>
                    <button onClick={() => generateReply(r.id)} className="px-3 py-1.5 rounded-lg text-xs text-white/50 border border-white/10 hover:border-white/20 hover:text-white transition-all">
                      Regenerate
                    </button>
                  </div>
                </div>
              )}

              {/* Actions */}
              {!isReplied && !hasGenerated && (
                <button onClick={() => generateReply(r.id)} disabled={generating === r.id} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-purple-400 border border-purple-500/20 hover:bg-purple-500/10 transition-all disabled:opacity-60">
                  {generating === r.id ? (
                    <><div className="w-3.5 h-3.5 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" /> Generating...</>
                  ) : (
                    <><Zap className="w-3.5 h-3.5" /> Generate AI Reply</>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
