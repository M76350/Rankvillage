"use client";

import { useState } from "react";
import type { PortfolioProject } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";
import { cn } from "@/lib/utils";

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

type Category = "all" | "web" | "ecommerce" | "seo" | "local-seo" | "ui-ux";

const filters: { value: Category; label: string }[] = [
  { value: "all",       label: "All" },
  { value: "web",       label: "Web Dev" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "seo",       label: "SEO" },
  { value: "local-seo", label: "Local SEO" },
  { value: "ui-ux",     label: "UI/UX" },
];

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all",
              active === f.value
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                : "glass border border-white/10 text-white/50 hover:text-white hover:border-white/20"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-white/30">
          <p className="text-lg">No projects in this category yet.</p>
          <p className="text-sm mt-2">Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
