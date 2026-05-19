"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap, Mail, Phone, MapPin, MessageCircle, Send,
  CheckCircle, User, Building2, ChevronDown, Sparkles,
  Clock, HeadphonesIcon, AlertCircle,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────── */
type FormState = "idle" | "loading" | "success" | "error";

const businessTypes = [
  "Restaurant / Dhaba", "Gym / Fitness Center", "Medical Store / Clinic",
  "Dairy Farm", "Salon / Spa", "Coaching Center", "Retail Shop",
  "Hotel / Lodge", "Automobile Service", "Other",
];

const queryTypes = [
  "General Enquiry", "Pricing & Plans", "Technical Support",
  "Partnership / Reseller", "Feature Request", "Billing Issue", "Other",
];

/* ─── Input component ────────────────────────────────────────────────────── */
function Field({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        {label} {required && <span className="text-purple-400">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all";

/* ─── Contact Form ───────────────────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "contact" }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Failed to send."); setState("error"); return; }
      setState("success");
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-white/50 mb-2">Thank you for reaching out.</p>
        <p className="text-white/30 text-sm mb-8">We&apos;ll get back to you within 24 hours on <span className="text-purple-300">{form.email}</span></p>
        <button
          onClick={() => { setState("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
          className="btn-glow px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input required value={form.name} onChange={(e) => set("name", e.target.value)}
              placeholder="Rajesh Sharma" className={`${inputCls} pl-10`} />
          </div>
        </Field>
        <Field label="Email Address" required>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)}
              placeholder="you@business.com" className={`${inputCls} pl-10`} />
          </div>
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Mobile Number" required>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)}
              placeholder="+91 98765 43210" className={`${inputCls} pl-10`} />
          </div>
        </Field>
        <Field label="Subject">
          <input value={form.subject} onChange={(e) => set("subject", e.target.value)}
            placeholder="How can we help?" className={inputCls} />
        </Field>
      </div>

      <Field label="Message" required>
        <textarea required rows={5} value={form.message} onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your business and how we can help..."
          className={`${inputCls} resize-none`} />
      </Field>

      {error && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" /> {error}
        </div>
      )}

      <button type="submit" disabled={state === "loading"}
        className="btn-glow w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60">
        {state === "loading"
          ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
          : <><Send className="w-4 h-4" /> Send Message</>}
      </button>
    </form>
  );
}

/* ─── Enquiry / Query Form ───────────────────────────────────────────────── */
function EnquiryForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", businessName: "",
    businessType: "", city: "", queryType: "", message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "enquiry", subject: form.queryType }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Failed to submit."); setState("error"); return; }
      setState("success");
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mx-auto mb-5">
          <Sparkles className="w-10 h-10 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted!</h3>
        <p className="text-white/50 mb-2">Our team will contact you shortly.</p>
        <p className="text-white/30 text-sm mb-8">Expected response: <span className="text-purple-300">within 4 hours</span></p>
        <button
          onClick={() => {
            setState("idle");
            setForm({ name: "", email: "", phone: "", businessName: "", businessType: "", city: "", queryType: "", message: "" });
          }}
          className="btn-glow px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 — Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input required value={form.name} onChange={(e) => set("name", e.target.value)}
              placeholder="Rajesh Sharma" className={`${inputCls} pl-10`} />
          </div>
        </Field>
        <Field label="Mobile Number" required>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)}
              placeholder="+91 98765 43210" className={`${inputCls} pl-10`} />
          </div>
        </Field>
      </div>

      {/* Row 2 — Email + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email Address" required>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)}
              placeholder="you@business.com" className={`${inputCls} pl-10`} />
          </div>
        </Field>
        <Field label="City">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input value={form.city} onChange={(e) => set("city", e.target.value)}
              placeholder="Delhi, Mumbai, Bangalore..." className={`${inputCls} pl-10`} />
          </div>
        </Field>
      </div>

      {/* Row 3 — Business Name + Business Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Business Name">
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input value={form.businessName} onChange={(e) => set("businessName", e.target.value)}
              placeholder="Sharma Restaurant" className={`${inputCls} pl-10`} />
          </div>
        </Field>
        <Field label="Business Type">
          <div className="relative">
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
            <select value={form.businessType} onChange={(e) => set("businessType", e.target.value)}
              className={`${inputCls} appearance-none pr-10`}>
              <option value="" className="bg-[#080812]">Select type...</option>
              {businessTypes.map((t) => <option key={t} value={t} className="bg-[#080812]">{t}</option>)}
            </select>
          </div>
        </Field>
      </div>

      {/* Query Type */}
      <Field label="Query Type" required>
        <div className="relative">
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
          <select required value={form.queryType} onChange={(e) => set("queryType", e.target.value)}
            className={`${inputCls} appearance-none pr-10`}>
            <option value="" className="bg-[#080812]">Select query type...</option>
            {queryTypes.map((t) => <option key={t} value={t} className="bg-[#080812]">{t}</option>)}
          </select>
        </div>
      </Field>

      {/* Message */}
      <Field label="Your Message / Query" required>
        <textarea required rows={4} value={form.message} onChange={(e) => set("message", e.target.value)}
          placeholder="Describe your query or requirement in detail..."
          className={`${inputCls} resize-none`} />
      </Field>

      {error && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" /> {error}
        </div>
      )}

      <button type="submit" disabled={state === "loading"}
        className="btn-glow w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60">
        {state === "loading"
          ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
          : <><Sparkles className="w-4 h-4" /> Submit Enquiry</>}
      </button>

      <p className="text-center text-xs text-white/25">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</Link>
      </p>
    </form>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"contact" | "enquiry">("contact");

  return (
    <div className="min-h-screen bg-[#080812] relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="border-b border-white/5 bg-[#080812]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base">
              <span className="gradient-text">RankVillage</span>
              <span className="text-white/40 text-sm font-normal ml-1">AI</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">

        {/* ── Hero ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            <MessageCircle className="w-3.5 h-3.5" /> We&apos;re here to help
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Get in Touch with
            <br />
            <span className="gradient-text">RankVillage AI</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a question, need a demo, or want to grow your local business?
            Fill out the form and our team will reach out within 24 hours.
          </p>
        </div>

        {/* ── Contact Info Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Mail,            title: "Email Us",    value: "support@rankvillage.ai", sub: "Reply in 24 hrs",       color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
            { icon: Phone,           title: "Call Us",     value: "+91 88000 00000",         sub: "Mon–Sat 9AM–7PM IST",   color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
            { icon: MapPin,          title: "Visit Us",    value: "Bangalore, India",        sub: "Karnataka - 560001",    color: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20" },
            { icon: Clock,           title: "Response",    value: "Within 4 Hours",          sub: "For priority queries",  color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20" },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className={`glass-card rounded-2xl p-5 border ${c.border} flex flex-col items-center text-center gap-3`}>
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{c.title}</div>
                  <div className="text-xs text-white/60 mt-0.5 break-all">{c.value}</div>
                  <div className="text-xs text-white/30 mt-0.5">{c.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Form Tabs + Forms ── */}
        <div className="max-w-4xl mx-auto">

          {/* Tab switcher */}
          <div className="flex gap-2 mb-8 glass rounded-2xl p-1.5 border border-white/5 w-fit mx-auto">
            <button
              onClick={() => setActiveForm("contact")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeForm === "contact"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </button>
            <button
              onClick={() => setActiveForm("enquiry")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeForm === "enquiry"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Business Enquiry
            </button>
          </div>

          {/* Form card */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-px bg-linear-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-lg" />

            <div className="relative glass rounded-3xl border border-white/10 p-8 sm:p-10">
              {/* Form header */}
              <div className="mb-8">
                {activeForm === "contact" ? (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">Send us a Message</h2>
                        <p className="text-white/40 text-sm">We&apos;ll reply within 24 hours</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">Business Enquiry Form</h2>
                        <p className="text-white/40 text-sm">Tell us about your business — we&apos;ll get back within 4 hours</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Render active form */}
              {activeForm === "contact" ? <ContactForm /> : <EnquiryForm />}
            </div>
          </div>
        </div>

        {/* ── Bottom trust strip ── */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 glass rounded-2xl px-8 py-4 border border-white/5">
            {[
              { icon: HeadphonesIcon, text: "24/7 Support Available",   color: "text-purple-400" },
              { icon: CheckCircle,    text: "10,000+ Businesses Served", color: "text-green-400" },
              { icon: Clock,          text: "4-Hour Response Time",      color: "text-blue-400" },
              { icon: MapPin,         text: "Pan India Coverage",        color: "text-cyan-400" },
            ].map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-white/50">
                <Icon className={`w-4 h-4 ${color}`} />
                {text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
