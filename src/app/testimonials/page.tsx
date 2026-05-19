import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, Play, ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials | RankVillage AI",
  description: "Read what 10,000+ Indian local business owners say about RankVillage AI. Real reviews from restaurants, gyms, medical stores, and more.",
};

const logos = [
  "Sharma Restaurant", "PowerFit Gym", "Suresh Dairy", "Meena Medical",
  "Ananya Sarees", "Royal Salon", "Hotel Raj Palace", "Kapoor Electronics",
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        <PageHero
          badge="Client Reviews"
          badgeIcon={Star}
          title={<>What Our Clients <span className="gradient-text">Say About Us</span></>}
          subtitle="Over 10,000 Indian local businesses trust RankVillage AI to grow their online presence. Here's what they have to say."
        />

        {/* Aggregate Rating */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl border border-yellow-500/20 p-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-5xl font-bold text-white mb-2">4.9 / 5</div>
              <div className="text-white/50">Based on 500+ verified reviews from Indian business owners</div>
            </div>
          </div>
        </section>

        {/* Featured Video Review Placeholder */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Video Review</h2>
            <div className="glass-card rounded-2xl border border-purple-500/20 overflow-hidden">
              <div className="h-64 bg-linear-to-br from-purple-600/20 to-blue-600/20 flex flex-col items-center justify-center gap-4 relative">
                <div className="absolute inset-0 grid-bg opacity-10" />
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold">Rajesh Sharma — Sharma Family Restaurant, Delhi</div>
                  <div className="text-white/50 text-sm mt-1">&ldquo;RankVillage AI ne meri restaurant ko #1 rank dilaya sirf 45 din mein&rdquo;</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid with Filter */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">All Reviews</h2>
            <TestimonialsGrid testimonials={TESTIMONIALS} />
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-white/40 text-sm uppercase tracking-widest">Trusted by businesses across India</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {logos.map((name) => (
                <div key={name} className="glass rounded-xl border border-white/5 p-3 text-center">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-2 text-xs font-bold text-purple-300">
                    {name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="text-white/40 text-xs leading-tight">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
              <Users className="w-3.5 h-3.5" />
              Join 10,000+ businesses
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Be Our Next <span className="gradient-text">Success Story</span>
            </h2>
            <p className="text-white/50 mb-8">Start your free trial today — no credit card required.</p>
            <Link href="/auth/signup" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white">
              Join 10,000+ Businesses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
