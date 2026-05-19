"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQ_CATEGORIES, FAQ_PAGE_ITEMS, type FAQCategory } from "@/data/faq-page";
import { cn } from "@/lib/utils";

export default function FAQPageContent() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("seo");

  const filtered = FAQ_PAGE_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                  activeCategory === cat.id
                    ? "bg-purple-500/20 border-purple-500/40 text-white"
                    : "glass border-white/10 text-white/50 hover:text-white hover:border-white/20"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <FAQAccordion items={filtered} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl border border-white/10 p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Our team is happy to help. Reach out by email or WhatsApp and we will respond within 4 hours on business days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:support@rankvillage.ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white/80 hover:text-white hover:border-purple-500/30 transition-all text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                support@rankvillage.ai
              </Link>
              <a
                href="https://wa.me/918800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
