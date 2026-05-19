"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/60 transition-all";

function parsePositive(value: string): number | null {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

export default function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState("500000");
  const [currentLeads, setCurrentLeads] = useState("40");
  const [leadIncrease, setLeadIncrease] = useState("30");
  const [avgDealValue, setAvgDealValue] = useState("2500");

  const result = useMemo(() => {
    const revenue = parsePositive(monthlyRevenue);
    const leads = parsePositive(currentLeads);
    const increase = parsePositive(leadIncrease);
    const deal = parsePositive(avgDealValue);

    if (revenue === null || leads === null || increase === null || deal === null) {
      return { valid: false as const };
    }

    const additionalRevenue = leads * (increase / 100) * deal;
    const roiPercent = revenue > 0 ? (additionalRevenue / revenue) * 100 : 0;

    return {
      valid: true as const,
      additionalRevenue: Math.max(0, Math.round(additionalRevenue)),
      roiPercent: Math.max(0, Math.round(roiPercent * 10) / 10),
    };
  }, [monthlyRevenue, currentLeads, leadIncrease, avgDealValue]);

  return (
    <div className="glass-card rounded-2xl border border-purple-500/20 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">ROI Calculator</h3>
          <p className="text-white/40 text-xs">Estimate projected revenue from improved local SEO leads</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="text-sm text-white/60 mb-2 block">Monthly revenue (₹)</span>
          <input
            type="number"
            min="1"
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(e.target.value)}
            className={inputCls}
            placeholder="500000"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/60 mb-2 block">Current monthly leads</span>
          <input
            type="number"
            min="1"
            value={currentLeads}
            onChange={(e) => setCurrentLeads(e.target.value)}
            className={inputCls}
            placeholder="40"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/60 mb-2 block">Expected lead increase (%)</span>
          <input
            type="number"
            min="1"
            value={leadIncrease}
            onChange={(e) => setLeadIncrease(e.target.value)}
            className={inputCls}
            placeholder="30"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/60 mb-2 block">Average deal value (₹)</span>
          <input
            type="number"
            min="1"
            value={avgDealValue}
            onChange={(e) => setAvgDealValue(e.target.value)}
            className={inputCls}
            placeholder="2500"
          />
        </label>
      </div>

      <div
        className={cn(
          "rounded-2xl border p-6 text-center transition-all",
          result.valid
            ? "border-purple-500/30 bg-purple-500/5"
            : "border-white/10 bg-white/2"
        )}
      >
        {result.valid ? (
          <>
            <p className="text-sm text-white/50 mb-2">Projected additional monthly revenue</p>
            <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
              ₹{result.additionalRevenue.toLocaleString("en-IN")}
            </p>
            <p className="text-white/40 text-sm">
              Estimated ROI vs current revenue:{" "}
              <span className="text-purple-300 font-medium">{result.roiPercent}%</span>
            </p>
          </>
        ) : (
          <p className="text-white/50 text-sm">Enter valid positive numbers in all fields</p>
        )}
      </div>
    </div>
  );
}
