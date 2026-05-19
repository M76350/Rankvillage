import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import IndustryCard from "@/components/IndustryCard";
import { INDUSTRIES } from "@/data/industries";
import { Building2, ArrowRight, Target, TrendingUp, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | RankVillage AI",
  description:
    "RankVillage AI serves 10+ Indian industries — restaurants, gyms, dairy farms, medical stores, salons, coaching centres, and more with specialised local SEO strategies.",
};

const benefits = [
  { icon: Target,    title: "Industry-Specific Keywords",  desc: "We research the exact search terms your customers use — not generic keywords that don't convert." },
  { icon: TrendingUp, title: "Proven Industry Strategies", desc: "We've helped 10,000+ businesses across 10+ industries. We know what works for your sector." },
  { icon: MapPin,    title: "Local Market Understanding",  desc: "We understand how Indian customers search in your city and neighbourhood — and how to reach them." },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        <PageHero
          badge="Industries We Serve"
          badgeIcon={Building2}
          title={<>Specialised Strategies for<br /><span className="gradient-text">Every Indian Business</span></>}
          subtitle="Generic SEO doesn't work. We build industry-specific strategies that understand your customers, your competition, and your local market."
        />

        {/* Industries Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INDUSTRIES.map((industry) => (
                <IndustryCard key={industry.slug} industry={industry} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Industry-Specific */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Industry-Specific <span className="gradient-text">SEO Matters</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                A restaurant and a gym need completely different SEO strategies. We build custom plans for your industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="glass-card rounded-2xl p-7 border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{b.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Find Your <span className="gradient-text">Industry Solution</span>
            </h2>
            <p className="text-white/50 mb-8">
              Get a free audit tailored specifically to your industry and local market.
            </p>
            <Link href="/free-audit" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white">
              Get Industry-Specific Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
