import Navbar from "@/components/Navbar";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Dashboard | RankVillage AI",
  description:
    "See RankVillage AI's full dashboard in action — keywords, reviews, GBP optimizer, competitor analysis, content generator, and reports.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <DashboardPreview />
        <Features />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
