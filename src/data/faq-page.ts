export type FAQCategory = "seo" | "web-dev" | "pricing" | "support" | "refund";

export interface FAQPageItem {
  question: string;
  answer: string;
  category: FAQCategory;
}

export const FAQ_CATEGORIES: { id: FAQCategory; label: string }[] = [
  { id: "seo", label: "SEO" },
  { id: "web-dev", label: "Web Dev" },
  { id: "pricing", label: "Pricing" },
  { id: "support", label: "Support" },
  { id: "refund", label: "Refund" },
];

export const FAQ_PAGE_ITEMS: FAQPageItem[] = [
  // SEO (7)
  {
    category: "seo",
    question: "What is Local SEO and why does my business need it?",
    answer:
      "Local SEO helps your business appear in Google when people nearby search for your products or services. 97% of consumers search online for local businesses - if you are not ranking, competitors capture those customers.",
  },
  {
    category: "seo",
    question: "How quickly will I see results on Google?",
    answer:
      "Most clients see measurable improvements within 30-45 days. GBP optimizations often show in 2-4 weeks; keyword rankings typically improve in 4-8 weeks. We provide weekly progress reports.",
  },
  {
    category: "seo",
    question: "How is RankVillage AI different from hiring an SEO agency?",
    answer:
      "Agencies often charge ₹15,000-₹50,000/month with slower turnaround. RankVillage AI starts at ₹999/month, is built for Indian local businesses, and combines AI automation with expert strategy.",
  },
  {
    category: "seo",
    question: "Do you optimize Google Business Profile (GBP)?",
    answer:
      "Yes. We optimize categories, services, photos, posts, Q&A, and review strategy. Our dashboard tracks GBP score and suggests AI-powered improvements.",
  },
  {
    category: "seo",
    question: "Can you help me rank for Hindi and English searches?",
    answer:
      "Absolutely. We target both English and Hindi keywords, plus Hinglish queries common in Indian cities. Content and GBP posts can be bilingual.",
  },
  {
    category: "seo",
    question: "What industries do you specialise in?",
    answer:
      "Restaurants, gyms, medical clinics, salons, coaching centres, retail, hotels, dairy, real estate, and more. See our Industries page for sector-specific strategies.",
  },
  {
    category: "seo",
    question: "Do you build citations and local backlinks?",
    answer:
      "Yes. We submit your business to trusted Indian directories, fix NAP consistency, and earn relevant local links to strengthen your map pack presence.",
  },
  // Web Dev (6)
  {
    category: "web-dev",
    question: "What technology stack do you use for websites?",
    answer:
      "We build with Next.js, React, and TypeScript for speed and SEO. Sites are deployed on Vercel or AWS with CDN, SSL, and mobile-first responsive design.",
  },
  {
    category: "web-dev",
    question: "How long does a typical business website take?",
    answer:
      "A standard local business site takes 7-14 days. E-commerce or multi-location sites may take 3-4 weeks depending on scope.",
  },
  {
    category: "web-dev",
    question: "Will my website be fast on mobile networks?",
    answer:
      "Yes. We target sub-2-second load times and Lighthouse scores of 90+. Pages are optimised for 4G users across India.",
  },
  {
    category: "web-dev",
    question: "Can I update content myself after launch?",
    answer:
      "Yes. We integrate a simple CMS or train you on easy updates for menus, prices, photos, and blog posts - no coding required.",
  },
  {
    category: "web-dev",
    question: "Do you redesign existing websites without losing SEO?",
    answer:
      "Yes. We preserve URLs, redirects, and rankings during migration while improving design, speed, and conversion rate.",
  },
  {
    category: "web-dev",
    question: "Do you integrate payment gateways?",
    answer:
      "Yes. We support Razorpay, PayU, and other Indian payment providers for e-commerce and booking flows.",
  },
  // Pricing (7)
  {
    category: "pricing",
    question: "What is the pricing and are there any hidden charges?",
    answer:
      "Plans start at ₹999/month. No hidden fees, no setup charges, and no long-term contracts. Yearly billing saves 20%. A 14-day free trial is available on all plans.",
  },
  {
    category: "pricing",
    question: "Can I use RankVillage AI for multiple locations?",
    answer:
      "Pro supports up to 3 locations; Business supports up to 10. Each location gets its own dashboard, keywords, and review management.",
  },
  {
    category: "pricing",
    question: "Is there a free plan or trial?",
    answer:
      "Yes. You can start free with core tools. Paid plans include a 14-day trial - no credit card required to begin.",
  },
  {
    category: "pricing",
    question: "What is included in the Starter plan?",
    answer:
      "Starter includes keyword tracking, basic GBP insights, review reply suggestions, and email support - ideal for single-location businesses getting started.",
  },
  {
    category: "pricing",
    question: "Can I switch plans later?",
    answer:
      "Yes. Upgrade or downgrade anytime from your dashboard. Changes apply on your next billing cycle with prorated adjustments where applicable.",
  },
  {
    category: "pricing",
    question: "Do you offer custom agency or enterprise pricing?",
    answer:
      "Yes. For franchises, agencies, or 10+ locations, contact us for a custom quote and dedicated account management.",
  },
  {
    category: "pricing",
    question: "Are website projects quoted separately from SaaS plans?",
    answer:
      "Yes. Web development and ongoing SEO services are scoped per project. SaaS plans cover the AI dashboard and automation tools.",
  },
  // Support (6)
  {
    category: "support",
    question: "What kind of support do you provide?",
    answer:
      "Starter: email support (24h response). Pro: priority chat (4h). Business: phone support and a dedicated account manager. All plans include help docs and video tutorials.",
  },
  {
    category: "support",
    question: "Do I need technical knowledge to use RankVillage AI?",
    answer:
      "No. The dashboard is built for business owners. If you can use WhatsApp, you can use RankVillage AI. Onboarding guides walk you through every step.",
  },
  {
    category: "support",
    question: "Is my business data safe and secure?",
    answer:
      "We use 256-bit SSL encryption, never sell your data, and connect to Google via OAuth 2.0 - we never see your passwords. We follow Indian data protection best practices.",
  },
  {
    category: "support",
    question: "Does RankVillage AI support Hindi and regional languages?",
    answer:
      "Yes. AI review replies support Hindi, English, and Hinglish. The dashboard is available in English with Hindi content generation for GBP and blog posts.",
  },
  {
    category: "support",
    question: "How do I connect my Google Business Profile?",
    answer:
      "From the dashboard, click Connect GBP and sign in with Google. OAuth authorises read/write access securely - setup takes under 2 minutes.",
  },
  {
    category: "support",
    question: "How do I contact support?",
    answer:
      "Email support@rankvillage.ai, use in-app chat on Pro and Business plans, or message us on WhatsApp for quick questions during business hours.",
  },
  // Refund (6)
  {
    category: "refund",
    question: "What is your refund policy?",
    answer:
      "If you are not satisfied within the first 14 days of a paid plan, contact us for a full refund - no questions asked. Refunds are processed within 5-7 business days.",
  },
  {
    category: "refund",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. Cancel from Settings -> Billing. Your plan remains active until the end of the current billing period; no cancellation fees apply.",
  },
  {
    category: "refund",
    question: "Do you refund unused months on annual plans?",
    answer:
      "Annual plans are refundable within the first 14 days. After that, you may cancel renewal but partial refunds for unused months are not offered unless required by law.",
  },
  {
    category: "refund",
    question: "Are web development deposits refundable?",
    answer:
      "Project deposits are refundable before work begins. Once design approval is signed off, deposits apply to the project balance per your service agreement.",
  },
  {
    category: "refund",
    question: "What if RankVillage AI does not deliver promised results?",
    answer:
      "We set realistic timelines in writing. If we fail to deliver agreed deliverables, we will extend service at no cost or offer a prorated credit - contact your account manager.",
  },
  {
    category: "refund",
    question: "How long do refunds take to appear in my account?",
    answer:
      "Refunds are initiated within 2 business days of approval. Depending on your bank or UPI provider, funds typically appear within 5-7 business days.",
  },
];
