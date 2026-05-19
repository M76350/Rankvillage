import type { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
          {getInitials(testimonial.name)}
        </div>
        <div className="min-w-0">
          <div className="text-white font-semibold text-sm truncate">{testimonial.name}</div>
          <div className="text-white/40 text-xs truncate">
            {testimonial.role}, {testimonial.business}
          </div>
          <div className="text-white/30 text-xs">{testimonial.city}</div>
        </div>
        <div className="ml-auto shrink-0">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
            {testimonial.service}
          </span>
        </div>
      </div>
    </div>
  );
}
