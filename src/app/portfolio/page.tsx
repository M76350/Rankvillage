import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { PORTFOLIO } from "@/data/portfolio";
import { Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | RankVillage AI",
  description: "Browse RankVillage AI's portfolio of websites, SEO campaigns, and digital projects for Indian local businesses.",
};

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB",
  "Razorpay", "Vercel", "Google Analytics", "Figma", "Shiprocket",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        <PageHero
          badge="Our Work"
          badgeIcon={Briefcase}
          title={<>Projects That <span className="gradient-text">Deliver Results</span></>}
          subtitle="Real websites, real SEO campaigns, and real results for Indian local businesses across restaurants, gyms, medical stores, and more."
        />

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioGrid projects={PORTFOLIO} />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl border border-white/5 p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white mb-2">Technologies We Use</h2>
                <p className="text-white/40 text-sm">Modern, battle-tested tools for fast, secure, and scalable solutions.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 glass rounded-xl border border-white/10 text-white/60 text-sm hover:border-purple-500/30 hover:text-white transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start <span className="gradient-text">Your Project?</span>
            </h2>
            <p className="text-white/50 mb-8">
              Tell us about your business and we&apos;ll build something that drives real results.
            </p>
            <Link href="/free-audit" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
