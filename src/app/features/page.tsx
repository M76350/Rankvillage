import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SEO Features | RankVillage AI",
  description:
    "Explore 9 powerful AI-powered SEO tools built for Indian local businesses — review replies, GBP optimizer, keyword tracker, schema generator, and more.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Features />
        <WhyChooseUs />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
