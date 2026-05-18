"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Zap, Eye, EyeOff, ArrowRight, Mail, Lock, User, Building2, MapPin, ChevronDown } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

const businessTypes = [
  "Restaurant / Dhaba", "Gym / Fitness Center", "Medical Store / Clinic",
  "Dairy Farm", "Salon / Spa", "Coaching Center", "Retail Shop",
  "Hotel / Lodge", "Automobile Service", "Other",
];

const steps = ["Account", "Business", "Plan"];

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();

  const [step, setStep]       = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [showPass, setShowPass] = useState(false);

  const [form, setForm] = useState({
    name: "", email: "", password: "", confirmPassword: "",
    businessName: "", location: "", businessType: "",
    plan: "starter",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (step === 0) {
      if (form.password !== form.confirmPassword) { setError("Passwords do not match."); return; }
      if (form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
    }
    if (step < 2) { setStep(step + 1); return; }
    handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await signup({
      name: form.name, email: form.email, password: form.password,
      businessName: form.businessName, location: form.location, businessType: form.businessType,
    });
    setLoading(false);
    if (res.ok) router.push("/dashboard");
    else setError(res.error ?? "Signup failed.");
  };

  const planOptions = [
    { id: "starter", name: "Starter", price: "₹999/mo", desc: "1 location, basic tools", color: "border-white/20" },
    { id: "pro",     name: "Pro",     price: "₹2,499/mo", desc: "3 locations, all tools", color: "border-purple-500/50", badge: "Popular" },
    { id: "business",name: "Business",price: "₹5,999/mo", desc: "10 locations + API", color: "border-white/20" },
  ];

  return (
    <div className="min-h-screen bg-[#080812] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-glow-purple">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              <span className="gradient-text">RankVillage</span>
              <span className="text-white/50 text-sm font-normal ml-1">AI</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Start growing for free</h1>
          <p className="text-white/50 text-sm">14-day free trial · No credit card required</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < step ? "bg-green-500 text-white" : i === step ? "bg-purple-500 text-white" : "bg-white/10 text-white/30"
              }`}>
                {i < step ? "✓" : i + 1}
              </div>
              <span className={`text-xs ${i === step ? "text-white" : "text-white/30"}`}>{s}</span>
              {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-green-500/50" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl border border-white/10 p-8 shadow-[0_0_60px_rgba(139,92,246,0.1)]">
          <form onSubmit={nextStep} className="space-y-5">

            {/* Step 0: Account */}
            {step === 0 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input required value={form.name} onChange={(e) => set("name", e.target.value)}
                      placeholder="Rajesh Sharma" className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)}
                      placeholder="you@business.com" className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input type={showPass ? "text" : "password"} required value={form.password} onChange={(e) => set("password", e.target.value)}
                      placeholder="Min. 6 characters" className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input type="password" required value={form.confirmPassword} onChange={(e) => set("confirmPassword", e.target.value)}
                      placeholder="Repeat password" className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                  </div>
                </div>
              </>
            )}

            {/* Step 1: Business */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Business Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input required value={form.businessName} onChange={(e) => set("businessName", e.target.value)}
                      placeholder="Sharma Restaurant" className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">City / Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input required value={form.location} onChange={(e) => set("location", e.target.value)}
                      placeholder="Dwarka, Delhi" className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Business Type</label>
                  <div className="relative">
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                    <select required value={form.businessType} onChange={(e) => set("businessType", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all appearance-none">
                      <option value="" className="bg-[#080812]">Select type...</option>
                      {businessTypes.map((t) => <option key={t} value={t} className="bg-[#080812]">{t}</option>)}
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Step 2: Plan */}
            {step === 2 && (
              <div className="space-y-3">
                <p className="text-sm text-white/50 mb-4">Choose your plan — all include a 14-day free trial.</p>
                {planOptions.map((p) => (
                  <label key={p.id} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    form.plan === p.id ? "border-purple-500/50 bg-purple-500/10" : "border-white/10 hover:border-white/20"
                  }`}>
                    <input type="radio" name="plan" value={p.id} checked={form.plan === p.id} onChange={(e) => set("plan", e.target.value)} className="sr-only" />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${form.plan === p.id ? "border-purple-500" : "border-white/20"}`}>
                      {form.plan === p.id && <div className="w-2 h-2 rounded-full bg-purple-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{p.name}</span>
                        {p.badge && <span className="text-xs bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full border border-purple-500/30">{p.badge}</span>}
                      </div>
                      <div className="text-xs text-white/40">{p.desc}</div>
                    </div>
                    <span className="text-sm font-bold text-white shrink-0">{p.price}</span>
                  </label>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">{error}</div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} className="flex-1 py-3 rounded-xl border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all">
                  Back
                </button>
              )}
              <button type="submit" disabled={loading} className="btn-glow flex-1 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60">
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : step < 2 ? (
                  <>Continue <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>Start Free Trial <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-sm text-white/40 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
