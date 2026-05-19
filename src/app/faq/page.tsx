import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | RankVillage AI",
  description:
    "Frequently asked questions about RankVillage AI — pricing, features, local SEO, Hindi support, and more.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
