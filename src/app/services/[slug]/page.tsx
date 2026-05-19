import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, getServiceBySlug } from "@/data/services";
import type { LucideIcon } from "lucide-react";
import {
  Code2, TrendingUp, MapPin, Settings, Target, Megaphone,
  Palette, ShoppingCart, Wrench, ArrowRight, CheckCircle, Zap,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2, TrendingUp, MapPin, Settings, Target, Megaphone, Palette, ShoppingCart, Wrench,
};

const colorBg: Record<string, string> = {
  purple: "bg-purple-500/10", blue: "bg-blue-500/10", cyan: "bg-cyan-500/10",
  pink: "bg-pink-500/10", green: "bg-green-500/10", orange: "bg-orange-500/10",
};
const colorText: Record<string, string> = {
  purple: "text-purple-400", blue: "text-blue-400", cyan: "text-cyan-400",
  pink: "text-pink-400", green: "text-green-400", orange: "text-orange-400",
};
const colorBorder: Record<string, string> = {
  purple: "border-purple-500/20", blue: "border-blue-500/20", cyan: "border-cyan-500/20",
  pink: "border-pink-500/20", green: "border-green-500/20", orange: "border-orange-500/20",
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | RankVillage AI`,
    description: service.description,
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Code2;
  const bg = colorBg[service.color] ?? colorBg.purple;
  const text = colorText[service.color] ?? colorText.purple;
  const border = colorBorder[service.color] ?? colorBorder.purple;

  const relatedServices = service.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as typeof SERVICES;

  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none ${bg} opacity-30`} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border ${border} text-sm ${text} mb-6`}>
                <Icon className="w-3.5 h-3.5" />
                {service.title}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {service.tagline}
              </h1>
              <p className="text-white/55 text-lg leading-relaxed mb-8">{service.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {service.heroStats.map((s) => (
                  <div key={s.label} className={`glass rounded-xl px-5 py-3 border ${border}`}>
                    <div className={`text-2xl font-bold ${text}`}>{s.value}</div>
                    <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/free-audit" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white/60 glass border border-white/10 hover:border-white/20 hover:text-white transition-all">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Our <span className="gradient-text">{service.title}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.benefits.map((b) => (
                <div key={b.title} className={`glass-card rounded-2xl p-6 border ${border}`}>
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                    <CheckCircle className={`w-5 h-5 ${text}`} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{b.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">A proven step-by-step approach that delivers consistent results.</p>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-5 glass-card rounded-2xl p-5 border border-white/5">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0 font-bold ${text}`}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Real <span className="gradient-text">Results</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.results.map((r) => (
                <div key={r.metric} className={`glass-card rounded-2xl p-7 border ${border} text-center`}>
                  <div className={`text-4xl font-bold ${text} mb-2`}>{r.value}</div>
                  <div className="text-white font-semibold mb-1">{r.metric}</div>
                  <div className="text-white/40 text-sm">{r.client}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
            <FAQAccordion items={service.faqs} />
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Related Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((s) => {
                  const RelIcon = iconMap[s.icon] ?? Code2;
                  return (
                    <ServiceCard
                      key={s.slug}
                      icon={RelIcon}
                      title={s.title}
                      description={s.description}
                      href={`/services/${s.slug}`}
                      features={s.benefits.slice(0, 3).map((b) => b.title)}
                      color={s.color}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border ${border} text-sm ${text} mb-6`}>
              <Zap className="w-3.5 h-3.5" />
              Ready to get started?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start with <span className="gradient-text">{service.title}</span> Today
            </h2>
            <p className="text-white/50 mb-8">Get a free audit and see exactly how we can improve your {service.title.toLowerCase()} results.</p>
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
