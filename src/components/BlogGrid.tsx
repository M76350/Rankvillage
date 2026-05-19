"use client";

import { useState } from "react";
import type { BlogPost } from "@/data/blog";
import BlogCard from "./BlogCard";
import { cn } from "@/lib/utils";

interface BlogGridProps {
  posts: BlogPost[];
}

type Category = "all" | "seo-tips" | "web-dev" | "ai-tools" | "local-business" | "speed";

const filters: { value: Category; label: string }[] = [
  { value: "all",            label: "All" },
  { value: "seo-tips",       label: "SEO Tips" },
  { value: "web-dev",        label: "Web Dev" },
  { value: "ai-tools",       label: "AI Tools" },
  { value: "local-business", label: "Local Business" },
  { value: "speed",          label: "Speed" },
];

export default function BlogGrid({ posts }: BlogGridProps) {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all",
              active === f.value
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                : "glass border border-white/10 text-white/50 hover:text-white hover:border-white/20"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-white/30">
          <p>No posts in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
