"use client";

import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { cn } from "@/lib/utils";

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const [active, setActive] = useState("All");

  const services = ["All", ...Array.from(new Set(testimonials.map((t) => t.service)))];
  const filtered = active === "All" ? testimonials : testimonials.filter((t) => t.service === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {services.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all",
              active === s
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                : "glass border border-white/10 text-white/50 hover:text-white hover:border-white/20"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-white/30">
          <p>No testimonials for this service yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      )}
    </div>
  );
}
