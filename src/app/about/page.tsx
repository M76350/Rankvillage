import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import {
  Target, Eye, Zap, MapPin, Code2, Search, Megaphone,
  BarChart3, Brain, Users, TrendingUp, Award, Heart,
  CheckCircle, ArrowRight, Star, Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | RankVillage AI",
  description:
    "Learn about RankVillage AI — India's leading AI-powered local SEO platform. Our mission, story, and the team helping 10,000+ Indian businesses grow on Google.",
};

const stats = [
  { value: "10,000+", label: "Businesses Served", color: "from-purple-400 to-purple-600" },
  { value: "50+",     label: "Cities Covered",    color: "from-blue-400 to-blue-600" },
  { value: "+340%",   label: "Avg Traffic Growth", color: "from-cyan-400 to-cyan-600" },
  { value: "3+",      label: "Years in Operation", color: "from-pink-400 to-pink-600" },
];

const skills = [
  { icon: Search,    label: "Local SEO",       color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Code2,     label: "Web Development", color: "text-blue-400",   bg: "bg-blue-500/10" },
  { icon: MapPin,    label: "Google Business", color: "text-cyan-400",   bg: "bg-cyan-500/10" },
  { icon: Megaphone, label: "Google & Meta Ads",color: "text-pink-400",  bg: "bg-pink-500/10" },
  { icon: BarChart3, label: "Analytics & SEO", color: "text-green-400",  bg: "bg-green-500/10" },
  { icon: Brain,     label: "AI Automation",   color: "text-orange-400", bg: "bg-orange-500/10" },
];

const timeline = [
  { year: "2022", title: "RankVillage AI Founded", desc: "Started with a mission to make professional SEO accessible to every Indian local business." },
  { year: "2023", title: "First 1,000 Clients",    desc: "Reached 1,000 businesses across Delhi, Mumbai, and Bangalore within 12 months." },
  { year: "2024", title: "AI Platform Launch",     desc: "Launched our AI-powered review management and keyword tracking tools." },
  { year: "2025", title: "10,000+ Businesses",     desc: "Now serving 10,000+ businesses across 50+ Indian cities with measurable results." },
];

const values = [
  { icon: Heart,        title: "Built for India",    desc: "Every feature is designed for Indian local businesses — Hindi support, Indian payment gateways, and local market insights." },
  { icon: TrendingUp,   title: "Results First",      desc: "We measure success by your business growth, not vanity metrics. Every strategy is tied to real revenue impact." },
  { icon: CheckCircle,  title: "Transparent Always", desc: "No hidden fees, no long-term contracts, no confusing reports. Just clear results and honest communication." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <PageHero
          badge="About RankVillage AI"
          badgeIcon={Zap}
          title={<>India&apos;s Most Trusted<br /><span className="gradient-text">AI-Powered SEO Platform</span></>}
          subtitle="We help Indian local businesses rank higher on Google, get more customers, and grow faster — without any technical expertise required."
        />

        {/* Mission & Vision */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-8 border border-purple-500/20">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                <p className="text-white/60 leading-relaxed">
                  To democratise digital marketing for Indian local businesses. We believe every restaurant owner, gym operator, and dairy farmer deserves the same powerful SEO tools that large corporations use — at a price they can afford.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-8 border border-blue-500/20">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-white/60 leading-relaxed">
                  A future where every Indian local business is discoverable online. Where a small dhaba in Dwarka ranks alongside big restaurant chains, and a neighbourhood medical store appears before large pharmacy chains in local search results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-6 text-center border border-white/5">
                  <div className={`text-4xl sm:text-5xl font-bold bg-linear-to-r ${s.color} bg-clip-text text-transparent mb-2`}>
                    {s.value}
                  </div>
                  <div className="text-white/50 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Story */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
                  <Star className="w-3.5 h-3.5 text-purple-400" />
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Started with a <span className="gradient-text">Simple Observation</span>
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    In 2022, our founder Manish noticed something troubling: brilliant local businesses across India were losing customers to mediocre competitors simply because they had better Google rankings. A 20-year-old restaurant with incredible food was invisible online, while a newer place with average food ranked #1 on Google Maps.
                  </p>
                  <p>
                    The problem wasn&apos;t the quality of the business — it was the lack of digital visibility. And the existing solutions were either too expensive (SEO agencies charging ₹30,000+/month) or too generic (tools built for Western markets that didn&apos;t understand Indian local search).
                  </p>
                  <p>
                    RankVillage AI was built to solve this. An AI-powered platform specifically designed for Indian local businesses — with Hindi support, Indian payment gateways, and deep understanding of how Indian customers search online.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-purple-300">{item.year}</span>
                      </div>
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-white/5 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                A full-stack digital growth team covering every aspect of your online presence.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="glass-card rounded-2xl p-5 border border-white/5 text-center group">
                    <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${s.color}`} />
                    </div>
                    <div className="text-white/70 text-sm font-medium">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What We <span className="gradient-text">Stand For</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="glass-card rounded-2xl p-7 border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Meet the <span className="gradient-text">Team</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Founder card */}
              <div className="glass-card rounded-2xl p-7 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shrink-0">
                    MK
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Manish Kumar</div>
                    <div className="text-purple-300 text-sm">Founder & CEO</div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-white/30" />
                      <span className="text-white/30 text-xs">Bangalore, India</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Digital marketing veteran with 8+ years of experience helping Indian businesses grow online. Passionate about making enterprise-level SEO accessible to every local business owner.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Local SEO", "Web Dev", "AI/ML", "Growth"].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{tag}</span>
                  ))}
                </div>
              </div>

              {/* We're hiring card */}
              <div className="glass-card rounded-2xl p-7 border border-white/5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white/30" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">We&apos;re Hiring!</h3>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                  Join our growing team and help Indian businesses succeed online. Remote-first, learning-focused, and impact-driven.
                </p>
                <Link href="/careers" className="btn-glow flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white">
                  View Open Positions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Awards / Trust */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl border border-white/5 p-8">
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { icon: Award,       text: "Top SEO Agency India 2024" },
                  { icon: Star,        text: "4.9★ Average Client Rating" },
                  { icon: Building2,   text: "10,000+ Businesses Served" },
                  { icon: CheckCircle, text: "ISO 27001 Data Security" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-white/50 text-sm">
                    <Icon className="w-4 h-4 text-purple-400" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </div>
      <Footer />
    </main>
  );
}
