"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export default function FAQAccordion({ items, allowMultiple = false }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-btn-${index}`;
        return (
          <div
            key={index}
            className={cn(
              "glass-card rounded-xl border transition-all",
              isOpen ? "border-purple-500/30" : "border-white/8"
            )}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-white font-medium text-sm sm:text-base leading-snug">
                {item.question}
              </span>
              <span className="shrink-0 w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                {isOpen
                  ? <Minus className="w-3.5 h-3.5 text-purple-400" />
                  : <Plus className="w-3.5 h-3.5 text-purple-400" />
                }
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5"
              >
                <p className="text-white/55 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
