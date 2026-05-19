import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AuditForm from "@/components/AuditForm";
import { Search, Zap, Users, Phone, CheckCircle, Clock, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free SEO Audit | RankVillage AI",
  description:
    "Get a free SEO audit for your Indian local business. We'll analyse your website, Google rankings, and competitors — then give you an actionable growth plan.",
};

const whatYouGet = [
  { icon: Search,  title: "SEO Audit",            desc: "Complete analysis of your website's SEO health, keyword rankings, and on-page issues.", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Zap,     title: "Speed Audit",           desc: "Core Web Vitals check — LCP, FID, CLS scores and exact fixes to improve your Lighthouse score.", color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
  { icon: Users,   title: "Competitor Analysis",   desc: "See what your top 3 local competitors are doing and where you can outrank them.", color: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20" },
  { icon: Phone,   title: "Strategy Call",         desc: "30-minute call with our SEO expert to walk you through the findings and recommend next steps.", color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20" },
];

const nextSteps = [
  { step: 1, title: "We Audit Your Website",  desc: "Our team analyses your website, Google Business Profile, and local search rankings within 4 hours." },
  { step: 2, title: "You Receive the Report", desc: "A detailed PDF report lands in your inbox with specific, actionable recommendations." },
  { step: 3, title: "We Build Your Plan",     desc: "On a 30-minute call, we walk you through the findings and create a custom growth roadmap." },
];

export default function FreeAuditPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">

        <PageHero
          badge="Limited Slots — Book Today"
          badgeIcon={Zap}
          title={<>Get Your <span className="gradient-text">Free SEO Audit</span></>}
          subtitle="Find out exactly why your business isn't ranking on Google — and get a step-by-step plan to fix it. 100% free, no strings attached."
        />

        {/* What You Get */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">What&apos;s Included in Your Free Audit</h2>
              <p className="text-white/50 text-sm">Worth ₹5,000 — completely free for a limited time.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatYouGet.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`glass-card rounded-2xl p-6 border ${item.border} text-center`}>
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + Trust */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Trust signals sidebar */}
              <div className="space-y-5">
                <div className="glass-card rounded-2xl p-6 border border-white/5">
                  <h3 className="text-white font-semibold mb-4">Why Trust Us?</h3>
                  <div className="space-y-3">
                    {[
                      { icon: CheckCircle, text: "10,000+ businesses audited" },
                      { icon: Clock,       text: "Response within 4 hours" },
                      { icon: Shield,      text: "100% confidential" },
                      { icon: CheckCircle, text: "No spam, ever" },
                      { icon: CheckCircle, text: "No credit card required" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 text-sm text-white/60">
                        <Icon className="w-4 h-4 text-green-400 shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-purple-500/20">
                  <div className="text-4xl font-bold gradient-text mb-1">4.9★</div>
                  <div className="text-white/50 text-sm">Average rating from 500+ clients</div>
                  <div className="mt-3 text-white/60 text-sm italic">
                    &ldquo;The free audit showed us exactly what was wrong. We fixed it and ranked #1 in 45 days.&rdquo;
                  </div>
                  <div className="text-white/30 text-xs mt-2">— Rajesh Sharma, Delhi</div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-px bg-linear-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-lg" />
                  <div className="relative glass rounded-3xl border border-white/10 p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
                        <Search className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">Request Your Free Audit</h2>
                        <p className="text-white/40 text-sm">Takes 2 minutes — results in 4 hours</p>
                      </div>
                    </div>
                    <AuditForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">What Happens Next?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step) => (
                <div key={step.step} className="glass-card rounded-2xl p-6 border border-white/5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 text-purple-400 font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
