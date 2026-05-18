"use client";

import { useState } from "react";
import { Check, Zap, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 999,
    yearlyPrice: 799,
    description: "Perfect for small shops and solo businesses just getting started with local SEO.",
    color: "border-white/10",
    badge: null,
    buttonStyle: "border border-white/20 text-white hover:bg-white/5",
    features: [
      "1 Business Location",
      "AI Review Reply Generator",
      "Basic SEO Analyzer",
      "Google Business Optimizer",
      "5 AI Content Pieces/month",
      "10 Keyword Tracking",
      "Email Support",
    ],
    notIncluded: ["Competitor Analysis", "Schema Generator", "Business Listing Sync"],
  },
  {
    name: "Pro",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    description: "Most popular. Everything you need to dominate local search in your city.",
    color: "border-purple-500/50",
    badge: "Most Popular",
    buttonStyle: "btn-glow text-white",
    features: [
      "3 Business Locations",
      "AI Review Reply Generator",
      "Advanced SEO Analyzer",
      "Google Business Optimizer",
      "Unlimited AI Content",
      "50 Keyword Tracking",
      "Schema Generator",
      "Competitor Analysis (3)",
      "Business Listing Sync (20+)",
      "Priority Support",
      "Weekly Reports",
    ],
    notIncluded: [],
  },
  {
    name: "Business",
    monthlyPrice: 5999,
    yearlyPrice: 4799,
    description: "For agencies and businesses with multiple locations needing full automation.",
    color: "border-white/10",
    badge: null,
    buttonStyle: "border border-white/20 text-white hover:bg-white/5",
    features: [
      "10 Business Locations",
      "Everything in Pro",
      "White-label Reports",
      "API Access",
      "Competitor Analysis (10)",
      "Business Listing Sync (50+)",
      "100 Keyword Tracking",
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Phone Support",
      "Monthly Strategy Call",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            <Zap className="w-3.5 h-3.5" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Start Free, Scale as
            <br />
            <span className="gradient-text">You Grow</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg mb-8">
            No hidden fees. No contracts. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-xl p-1.5 border border-white/10">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${!yearly ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "text-white/40 hover:text-white/60"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${yearly ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "text-white/40 hover:text-white/60"}`}
            >
              Yearly
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isPro = plan.name === "Pro";
            return (
              <div
                key={plan.name}
                className={`relative glass rounded-2xl border ${plan.color} p-7 transition-all duration-300 ${
                  isPro
                    ? "shadow-[0_0_60px_rgba(139,92,246,0.2)] scale-105"
                    : "hover:border-white/20"
                }`}
              >
                {/* Pro glow */}
                {isPro && (
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl pointer-events-none" />
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold shadow-glow-purple">
                      <Star className="w-3 h-3 fill-white" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="relative">
                  {/* Plan name */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-white/40 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-white/40 text-lg">₹</span>
                      <span className="text-5xl font-bold text-white">{price.toLocaleString("en-IN")}</span>
                      <span className="text-white/40 text-sm mb-1">/mo</span>
                    </div>
                    {yearly && (
                      <div className="text-xs text-green-400 mt-1">
                        Save ₹{((plan.monthlyPrice - plan.yearlyPrice) * 12).toLocaleString("en-IN")}/year
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 mb-6 ${plan.buttonStyle}`}>
                    {isPro ? "Start Free Trial" : "Get Started"}
                  </button>

                  {/* Features */}
                  <div className="space-y-2.5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-green-400" />
                        </div>
                        <span className="text-white/70 text-sm">{f}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 opacity-40">
                        <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <svg className="w-2.5 h-2.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-white/40 text-sm line-through">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm">
            All plans include a 14-day free trial. No credit card required.
            <span className="text-purple-400 ml-1">Questions? Chat with us.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
