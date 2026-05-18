"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Mail, ArrowRight, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail]   = useState("");
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-glow-purple">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl"><span className="gradient-text">RankVillage</span><span className="text-white/50 text-sm font-normal ml-1">AI</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Reset your password</h1>
          <p className="text-white/50 text-sm">We&apos;ll send a reset link to your email</p>
        </div>

        <div className="glass rounded-2xl border border-white/10 p-8">
          {sent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Check your inbox</h3>
              <p className="text-white/50 text-sm mb-6">We sent a reset link to <span className="text-purple-300">{email}</span></p>
              <Link href="/auth/login" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white">
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                </div>
              </div>
              <button type="submit" disabled={loading} className="btn-glow w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60">
                {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><ArrowRight className="w-4 h-4" /> Send Reset Link</>}
              </button>
            </form>
          )}
        </div>

        <div className="text-center mt-6">
          <Link href="/auth/login" className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
