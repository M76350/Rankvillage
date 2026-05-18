"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Local SEO and why does my business need it?",
    a: "Local SEO (Search Engine Optimization) helps your business appear in Google search results when people nearby search for your products or services. For example, when someone searches 'best restaurant near me' or 'gym in Koramangala', local SEO determines which businesses show up first. 97% of people search online for local businesses — if you're not ranking, you're losing customers to competitors.",
  },
  {
    q: "How does RankVillage AI work?",
    a: "RankVillage AI uses advanced artificial intelligence to analyze your Google Business Profile, website, and local search rankings. It then automatically generates optimized content, replies to reviews, creates schema markup, tracks keyword rankings, and provides step-by-step recommendations — all tailored specifically for your business and location in India.",
  },
  {
    q: "How quickly will I see results on Google?",
    a: "Most businesses see measurable improvements within 30-45 days. Google Business Profile optimizations typically show results in 2-4 weeks. Keyword ranking improvements usually take 4-8 weeks. Review management improvements (higher ratings) can happen within days. We provide weekly progress reports so you can track every improvement.",
  },
  {
    q: "Do I need any technical knowledge to use RankVillage AI?",
    a: "Absolutely not! RankVillage AI is designed for business owners, not tech experts. Everything is automated — just connect your Google Business Profile, and our AI handles the rest. The dashboard is simple, intuitive, and available in Hindi and English. If you can use WhatsApp, you can use RankVillage AI.",
  },
  {
    q: "What is the pricing and are there any hidden charges?",
    a: "Our plans start at ₹999/month for the Starter plan. There are NO hidden charges, NO setup fees, and NO contracts. You can cancel anytime. We also offer a 14-day free trial on all plans — no credit card required. Yearly plans save you 20% compared to monthly billing.",
  },
  {
    q: "Can I use RankVillage AI for multiple business locations?",
    a: "Yes! The Pro plan supports up to 3 locations and the Business plan supports up to 10 locations. Each location gets its own dashboard, keyword tracking, review management, and AI recommendations. Perfect for restaurant chains, gym franchises, or businesses with multiple branches.",
  },
  {
    q: "Does RankVillage AI support Hindi and regional languages?",
    a: "Yes! Our AI Review Reply Generator creates responses in Hindi, English, and Hinglish (mix of both). We understand that Indian customers often write reviews in Hindi or regional languages, and our AI responds naturally in the same language. This significantly improves customer trust and engagement.",
  },
  {
    q: "How is RankVillage AI different from hiring an SEO agency?",
    a: "SEO agencies typically charge ₹15,000-₹50,000/month, take weeks to show results, and don't specialize in local SEO for Indian businesses. RankVillage AI starts at ₹999/month, shows results in 30 days, is available 24/7, and is specifically built for Indian local businesses. You get better results at 1/10th the cost.",
  },
  {
    q: "Is my business data safe and secure?",
    a: "Absolutely. We use bank-level 256-bit SSL encryption for all data. We never sell your data to third parties. Your Google Business Profile credentials are stored securely using OAuth 2.0 — we never see your passwords. We are fully compliant with Indian data protection laws and GDPR.",
  },
  {
    q: "What kind of support do you provide?",
    a: "Starter plan includes email support with 24-hour response time. Pro plan includes priority email and chat support with 4-hour response time. Business plan includes 24/7 phone support and a dedicated account manager. All plans have access to our comprehensive help center, video tutorials, and weekly webinars.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-sm text-cyan-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Got Questions?
            <br />
            <span className="gradient-text">We Have Answers</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Everything you need to know about RankVillage AI and local SEO for Indian businesses.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? "border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]" : "border-white/5 hover:border-white/10"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-medium text-sm sm:text-base pr-4 transition-colors ${open === i ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                  open === i ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-white/40"
                }`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <div className="px-5 pb-5">
                  <div className="w-full h-px bg-white/5 mb-4" />
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center glass rounded-2xl p-8 border border-white/5">
          <p className="text-white/60 mb-4">Still have questions? We&apos;re here to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="btn-glow px-6 py-2.5 rounded-xl text-sm font-semibold text-white">
              Chat with Us
            </a>
            <a href="mailto:support@rankvillage.ai" className="px-6 py-2.5 rounded-xl text-sm font-medium text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-all">
              support@rankvillage.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
