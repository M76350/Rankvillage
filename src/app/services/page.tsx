import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { LucideIcon } from "lucide-react";
import {
  Code2, TrendingUp, MapPin, Settings, Target, Megaphone,
  Palette, ShoppingCart, Wrench, Layers, Search, BarChart3,
  ArrowRight, CheckCircle, Zap,
  UtensilsCrossed, Dumbbell, GraduationCap, Building2, Stethoscope,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | RankVillage AI",
  description:
    "Explore RankVillage AI's full range of digital services — Local SEO, Web Development, Google Ads, Meta Ads, UI/UX Design, E-commerce, and more for Indian businesses.",
};

const iconMap: Record<string, LucideIcon> = {
  Code2, TrendingUp, MapPin, Settings, Target, Megaphone, Palette, ShoppingCart, Wrench,
};

const processSteps = [
  { icon: Search,    title: "Discovery",  desc: "We audit your business, competitors, and digital presence to understand where you stand." },
  { icon: Layers,    title: "Strategy",   desc: "We build a custom growth plan tailored to your industry, city, and business goals." },
  { icon: Zap,       title: "Execute",    desc: "Our team implements the strategy — website, SEO, ads, and content — with precision." },
  { icon: BarChart3, title: "Report",     desc: "Monthly reports show exactly what improved, what we learned, and what comes next." },
];

const industries = [
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: Dumbbell,        label: "Gym" },
  { icon: Stethoscope,     label: "Medical" },
  { icon: GraduationCap,   label: "Coaching" },
  { icon: Building2,       label: "Real Estate" },
  { icon: ShoppingCart,    label: "Retail" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        <PageHero
          badge="Our Services"
          badgeIcon={Layers}
          title={<>Everything Your Business Needs<br /><span className="gradient-text">to Dominate Online</span></>}
          subtitle="From a fast website to #1 Google rankings — we handle every aspect of your digital growth so you can focus on running your business."
          cta={{ label: "Get a Free Audit", href: "/free-audit", variant: "primary" }}
        />

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                9 Services, <span className="gradient-text">One Platform</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                All the digital services your Indian local business needs, managed from a single dashboard.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.icon] ?? Code2;
                return (
                  <ServiceCard
                    key={service.slug}
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    href={`/services/${service.slug}`}
                    features={service.benefits.slice(0, 4).map((b) => b.title)}
                    color={service.color}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                A proven 4-step process that delivers measurable results for every client.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative">
                    <div className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="text-xs font-bold text-purple-400 mb-1">STEP {i + 1}</div>
                      <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                        <ArrowRight className="w-5 h-5 text-white/20" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl border border-white/5 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Industries We Serve</h2>
                <p className="text-white/50 text-sm">Specialised strategies for every type of Indian local business.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {industries.map(({ icon: Icon, label }) => (
                  <Link
                    key={label}
                    href="/industries"
                    className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-white/10 hover:border-purple-500/30 text-white/60 hover:text-white text-sm transition-all"
                  >
                    <Icon className="w-4 h-4 text-purple-400" />
                    {label}
                  </Link>
                ))}
                <Link href="/industries" className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                  View All Industries <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why us strip */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: CheckCircle, title: "No Long Contracts",  desc: "Month-to-month plans. Cancel anytime." },
                { icon: BarChart3,   title: "Transparent Reports", desc: "See exactly what we did and what it achieved." },
                { icon: Zap,         title: "Results in 30 Days", desc: "Most clients see improvements within the first month." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card rounded-2xl p-5 border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{title}</div>
                    <div className="text-white/50 text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Service <span className="gradient-text">You Need?</span>
            </h2>
            <p className="text-white/50 mb-8">
              Get a free audit and our team will recommend the exact services that will have the biggest impact on your business.
            </p>
            <Link href="/free-audit" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white">
              Get Your Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
