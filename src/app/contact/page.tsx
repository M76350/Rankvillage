"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#080812]">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <nav className="border-b border-white/5 bg-[#080812]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base"><span className="gradient-text">RankVillage</span><span className="text-white/40 text-sm font-normal ml-1">AI</span></span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">← Back to Home</Link>
        </div>
      </nav>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            <MessageCircle className="w-3.5 h-3.5" /> Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            We&apos;d love to <span className="gradient-text">hear from you</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Have a question about our platform? Need help getting started? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              { icon: Mail,    title: "Email Us",    value: "support@rankvillage.ai", sub: "We reply within 24 hours", color: "text-purple-400", bg: "bg-purple-500/10" },
              { icon: Phone,   title: "Call Us",     value: "+91 88000 00000",         sub: "Mon–Sat, 9 AM – 7 PM IST", color: "text-blue-400",   bg: "bg-blue-500/10" },
              { icon: MapPin,  title: "Visit Us",    value: "Bangalore, Karnataka",    sub: "India - 560001",           color: "text-cyan-400",   bg: "bg-cyan-500/10" },
              { icon: MessageCircle, title: "Live Chat", value: "Chat with us",        sub: "Available on dashboard",   color: "text-green-400",  bg: "bg-green-500/10" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="glass-card rounded-2xl p-5 border border-white/5 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{c.title}</div>
                    <div className="text-sm text-white/60 mt-0.5">{c.value}</div>
                    <div className="text-xs text-white/30 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50 mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }} className="btn-glow px-6 py-2.5 rounded-xl text-sm font-semibold text-white">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Rajesh Sharma"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@business.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                    <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your business and how we can help..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="btn-glow w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60">
                    {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="w-4 h-4" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
