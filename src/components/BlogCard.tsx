import type { BlogPost } from "@/data/blog";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

const categoryConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  "seo-tips":      { label: "SEO Tips",       color: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  "web-dev":       { label: "Web Dev",         color: "text-blue-300",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
  "ai-tools":      { label: "AI Tools",        color: "text-cyan-300",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20" },
  "local-business":{ label: "Local Business",  color: "text-green-300",  bg: "bg-green-500/10",  border: "border-green-500/20" },
  "speed":         { label: "Speed",           color: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/20" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogCard({ post }: BlogCardProps) {
  const cat = categoryConfig[post.category] ?? categoryConfig["seo-tips"];

  return (
    <div className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-3">
      {/* Category badge */}
      <span className={cn("self-start text-xs px-2.5 py-1 rounded-full border font-medium", cat.bg, cat.border, cat.color)}>
        {cat.label}
      </span>

      <h3 className="text-white font-semibold text-base leading-snug line-clamp-2">
        {post.title}
      </h3>

      <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <div className="flex items-center gap-3 text-xs text-white/30">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime} min read
          </span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors group"
        >
          Read More
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
