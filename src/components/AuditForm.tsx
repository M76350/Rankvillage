"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Globe, MapPin, ChevronDown } from "lucide-react";

const businessTypes = [
  "Restaurant / Dhaba", "Gym / Fitness Center", "Medical Store / Clinic",
  "Dairy Farm", "Salon / Spa", "Coaching Center", "Retail Shop",
  "Hotel / Lodge", "Automobile Service", "Other",
];

const auditTypes = [
  { value: "seo",           label: "SEO Audit",           desc: "Full website SEO analysis" },
  { value: "speed",         label: "Speed Audit",          desc: "Core Web Vitals & performance" },
  { value: "full",          label: "Full Digital Audit",   desc: "SEO + Speed + Competitor analysis" },
  { value: "strategy-call", label: "Strategy Call",        desc: "30-min consultation with our expert" },
];

const inputCls = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all";

export default function AuditForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", websiteUrl: "",
    businessType: "", city: "", auditType: "full", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => { const n = { ...e }; delete n[k]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())        e.name        = "Name is required";
    if (!form.email.trim())       e.email       = "Email is required";
    if (!form.phone.trim())       e.phone       = "Phone is required";
    if (!form.websiteUrl.trim())  e.websiteUrl  = "Website URL is required";
    if (!form.businessType)       e.businessType = "Please select a business type";
    if (!form.city.trim())        e.city        = "City is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setState("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "audit", subject: form.auditType }),
      });
      const data = await res.json();
      if (!res.ok) { setServerError(data.error ?? "Failed to submit."); setState("error"); return; }
      setState("success");
    } catch {
      setServerError("Network error. Please try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Audit Request Submitted!</h3>
        <p className="text-white/50 mb-2">Our team will review your website and get back to you.</p>
        <p className="text-white/30 text-sm mb-8">Expected response: <span className="text-purple-300">within 4 hours</span></p>
        <button
          onClick={() => { setState("idle"); setForm({ name: "", email: "", phone: "", websiteUrl: "", businessType: "", city: "", auditType: "full", message: "" }); }}
          className="btn-glow px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Full Name <span className="text-purple-400">*</span></label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Rajesh Sharma" className={`${inputCls} pl-10 ${errors.name ? "border-red-500/50" : ""}`} />
          </div>
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Mobile Number <span className="text-purple-400">*</span></label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98765 43210" className={`${inputCls} pl-10 ${errors.phone ? "border-red-500/50" : ""}`} />
          </div>
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Email Address <span className="text-purple-400">*</span></label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@business.com" className={`${inputCls} pl-10 ${errors.email ? "border-red-500/50" : ""}`} />
          </div>
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Website URL <span className="text-purple-400">*</span></label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input value={form.websiteUrl} onChange={(e) => set("websiteUrl", e.target.value)} placeholder="www.yourbusiness.com" className={`${inputCls} pl-10 ${errors.websiteUrl ? "border-red-500/50" : ""}`} />
          </div>
          {errors.websiteUrl && <p className="text-red-400 text-xs mt-1">{errors.websiteUrl}</p>}
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Business Type <span className="text-purple-400">*</span></label>
          <div className="relative">
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
            <select required value={form.businessType} onChange={(e) => set("businessType", e.target.value)} className={`${inputCls} appearance-none pr-10 ${errors.businessType ? "border-red-500/50" : ""}`}>
              <option value="" className="bg-[#080812]">Select type...</option>
              {businessTypes.map((t) => <option key={t} value={t} className="bg-[#080812]">{t}</option>)}
            </select>
          </div>
          {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">City <span className="text-purple-400">*</span></label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input value={form.city} onChange={(e) => set("city", e.target.value)} placeholder="Delhi, Mumbai, Bangalore..." className={`${inputCls} pl-10 ${errors.city ? "border-red-500/50" : ""}`} />
          </div>
          {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
        </div>
      </div>

      {/* Audit Type */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-3">What Would You Like Audited? <span className="text-purple-400">*</span></label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {auditTypes.map((at) => (
            <label key={at.value} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${form.auditType === at.value ? "border-purple-500/50 bg-purple-500/10" : "border-white/10 hover:border-white/20"}`}>
              <input type="radio" name="auditType" value={at.value} checked={form.auditType === at.value} onChange={(e) => set("auditType", e.target.value)} className="sr-only" />
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${form.auditType === at.value ? "border-purple-500" : "border-white/20"}`}>
                {form.auditType === at.value && <div className="w-2 h-2 rounded-full bg-purple-500" />}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{at.label}</div>
                <div className="text-xs text-white/40">{at.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Additional Notes (Optional)</label>
        <textarea rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about your business goals or specific challenges..." className={`${inputCls} resize-none`} />
      </div>

      {serverError && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" /> {serverError}
        </div>
      )}

      <button type="submit" disabled={state === "loading"} className="btn-glow w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60">
        {state === "loading"
          ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
          : <><Send className="w-4 h-4" /> Get My Free Audit</>}
      </button>

      <p className="text-center text-xs text-white/25">
        By submitting, you agree to our Privacy Policy. We never spam.
      </p>
    </form>
  );
}
