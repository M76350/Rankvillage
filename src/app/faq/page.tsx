import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQPageContent from "@/components/FAQPage";
import CTA from "@/components/CTA";
import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | RankVillage AI",
  description:
    "Frequently asked questions about RankVillage AI — pricing, SEO, web development, support, and refunds for Indian local businesses.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <PageHero
          badge="Help Center"
          badgeIcon={HelpCircle}
          title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
          subtitle="Find answers about our SEO tools, web services, pricing, support, and refund policy."
        />
        <FAQPageContent />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
