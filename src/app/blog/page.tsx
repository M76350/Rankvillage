import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogGrid from "@/components/BlogGrid";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/data/blog";
import { BookOpen, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | RankVillage AI",
  description:
    "SEO tips, web development guides, and digital marketing strategies for Indian local businesses. Learn how to grow your business online.",
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.id !== featured?.id);

  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        <PageHero
          badge="RankVillage Blog"
          badgeIcon={BookOpen}
          title={<>Grow Your Business with<br /><span className="gradient-text">Expert Insights</span></>}
          subtitle="SEO tips, web development guides, and digital marketing strategies written specifically for Indian local business owners."
        />

        {/* Featured Post */}
        {featured && (
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Featured Article</div>
              <div className="glass-card rounded-2xl border border-purple-500/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-48 lg:h-auto bg-linear-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <BookOpen className="w-16 h-16 text-purple-400/50" />
                  </div>
                  <div className="p-8">
                    <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-4">
                      SEO Tips
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-3 leading-snug">{featured.title}</h2>
                    <p className="text-white/55 leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-white/30 mb-5">
                      <span>{featured.readTime} min read</span>
                      <span>·</span>
                      <span>{new Date(featured.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    </div>
                    <a href={`/blog/${featured.slug}`} className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white">
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Posts with Filter */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
            <BlogGrid posts={rest} />
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="glass-card rounded-2xl border border-purple-500/20 p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Get SEO Tips in Your Inbox</h2>
              <p className="text-white/50 mb-6 text-sm">
                Weekly actionable tips for Indian local businesses. No spam, unsubscribe anytime.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                />
                <button className="btn-glow px-5 py-3 rounded-xl text-sm font-semibold text-white whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-white/25 text-xs mt-3">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
