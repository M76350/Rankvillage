import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | RankVillage AI",
  description:
    "Simple, transparent pricing for Indian local businesses. Start free, no credit card required. Plans from ₹999/month.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Pricing />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
