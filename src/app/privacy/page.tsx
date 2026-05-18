import Link from "next/link";
import { Zap, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RankVillage AI",
  description: "Learn how RankVillage AI collects, uses, and protects your personal data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support. This includes:

• Account information: name, email address, password, business name, and location
• Business information: Google Business Profile data, keywords, and SEO metrics
• Payment information: processed securely through Razorpay (we do not store card details)
• Usage data: how you interact with our platform, features used, and session data
• Communications: emails, support tickets, and feedback you send us`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our AI SEO services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments and questions
• Generate AI-powered SEO recommendations for your business
• Monitor and analyze usage patterns to improve our platform
• Detect and prevent fraudulent transactions and abuse`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With service providers who assist in our operations (e.g., cloud hosting, payment processing)
• When required by law or to respond to legal process
• To protect the rights, property, or safety of RankVillage AI, our users, or others
• With your consent or at your direction

We use Google APIs to access your Google Business Profile data. This access is governed by Google's Privacy Policy and Terms of Service.`,
  },
  {
    title: "4. Data Security",
    content: `We implement industry-standard security measures to protect your information:

• 256-bit SSL/TLS encryption for all data in transit
• AES-256 encryption for sensitive data at rest
• OAuth 2.0 for Google account authentication (we never see your Google password)
• Regular security audits and penetration testing
• Access controls limiting employee access to user data
• Automatic session timeouts and two-factor authentication options`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting support@rankvillage.ai.

After account deletion, we may retain anonymized, aggregated data for analytics purposes. Backup copies may persist for up to 90 days before permanent deletion.`,
  },
  {
    title: "6. Your Rights",
    content: `You have the following rights regarding your personal data:

• Access: Request a copy of the personal data we hold about you
• Correction: Request correction of inaccurate or incomplete data
• Deletion: Request deletion of your personal data
• Portability: Request your data in a machine-readable format
• Objection: Object to processing of your data for certain purposes
• Withdrawal: Withdraw consent at any time where processing is based on consent

To exercise these rights, contact us at privacy@rankvillage.ai`,
  },
  {
    title: "7. Cookies",
    content: `We use cookies and similar tracking technologies to:

• Keep you logged in to your account
• Remember your preferences and settings
• Analyze how our service is used
• Provide personalized content and recommendations

You can control cookies through your browser settings. Disabling cookies may affect some features of our service.`,
  },
  {
    title: "8. Children's Privacy",
    content: `RankVillage AI is not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at privacy@rankvillage.ai.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a prominent notice on our platform. Your continued use of our service after changes become effective constitutes acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us:

Email: privacy@rankvillage.ai
Address: RankVillage AI, Bangalore, Karnataka, India - 560001
Phone: +91 88000 00000

We will respond to your inquiry within 5 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080812]">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* Navbar */}
      <nav className="border-b border-white/5 bg-[#080812]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base"><span className="gradient-text">RankVillage</span><span className="text-white/40 text-sm font-normal ml-1">AI</span></span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">← Back to Home</Link>
        </div>
      </nav>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            <Shield className="w-3.5 h-3.5" /> Privacy Policy
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/50">Last updated: June 1, 2025</p>
          <p className="text-white/50 mt-3 leading-relaxed">
            At RankVillage AI, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our AI-powered Local SEO platform.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="glass-card rounded-2xl p-6 border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-4">{section.title}</h2>
              <div className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 py-8 text-center">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} RankVillage AI · <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link> · <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
