"use client";

import { useState } from "react";
import { User, Bell, Shield, CreditCard, Building2, MapPin, Save } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function SettingsPage() {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    weeklyReport: true, reviewAlert: true, rankingChange: true, aiSuggestions: false,
  });

  const handleSave = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = ["Profile", "Notifications", "Billing", "Security"];
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-xl font-bold text-white">Settings</h2>
        <p className="text-white/40 text-sm mt-0.5">Manage your account and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 glass rounded-xl p-1 border border-white/5 w-fit">
        {tabs.map((t) => (
          <button key={t} onClick={() => setActiveTab(t)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === t ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "text-white/40 hover:text-white/60"}`}>
            {t}
          </button>
        ))}
      </div>

      {activeTab === "Profile" && (
        <div className="space-y-5">
          <div className="glass-card rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2"><User className="w-4 h-4 text-purple-400" /> Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Full Name", value: user?.name ?? "", placeholder: "Your name" },
                { label: "Email", value: user?.email ?? "", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-xs text-white/50 mb-2">{f.label}</label>
                  <input defaultValue={f.value} placeholder={f.placeholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2"><Building2 className="w-4 h-4 text-blue-400" /> Business Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Business Name", value: user?.businessName ?? "", icon: Building2 },
                { label: "Location", value: user?.location ?? "", icon: MapPin },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label}>
                    <label className="block text-xs text-white/50 mb-2">{f.label}</label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input defaultValue={f.value}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button onClick={handleSave} className={`btn-glow flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all ${saved ? "bg-green-500" : ""}`}>
            <Save className="w-4 h-4" /> {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>
      )}

      {activeTab === "Notifications" && (
        <div className="glass-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2"><Bell className="w-4 h-4 text-yellow-400" /> Notification Preferences</h3>
          <div className="space-y-4">
            {[
              { key: "weeklyReport",   label: "Weekly SEO Report",       desc: "Get a summary every Monday morning" },
              { key: "reviewAlert",    label: "New Review Alert",         desc: "Instant notification for new reviews" },
              { key: "rankingChange",  label: "Ranking Changes",          desc: "Alert when keywords move significantly" },
              { key: "aiSuggestions", label: "AI Suggestions",           desc: "Daily AI-powered improvement tips" },
            ].map((n) => (
              <div key={n.key} className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/5">
                <div>
                  <div className="text-sm font-medium text-white">{n.label}</div>
                  <div className="text-xs text-white/40 mt-0.5">{n.desc}</div>
                </div>
                <button
                  onClick={() => setNotifications((prev) => ({ ...prev, [n.key]: !prev[n.key as keyof typeof prev] }))}
                  className={`w-11 h-6 rounded-full transition-all relative ${notifications[n.key as keyof typeof notifications] ? "bg-purple-500" : "bg-white/10"}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${notifications[n.key as keyof typeof notifications] ? "left-6" : "left-1"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Billing" && (
        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2"><CreditCard className="w-4 h-4 text-purple-400" /> Current Plan</h3>
            <div className="flex items-center justify-between p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <div>
                <div className="text-lg font-bold text-white capitalize">{user?.plan} Plan</div>
                <div className="text-sm text-white/40">Renews on July 1, 2025</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">₹2,499</div>
                <div className="text-xs text-white/40">/month</div>
              </div>
            </div>
            <button className="mt-4 btn-glow px-5 py-2.5 rounded-xl text-sm font-semibold text-white">Upgrade Plan</button>
          </div>
          <div className="glass-card rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-semibold text-white mb-4">Payment Method</h3>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
              <div className="w-10 h-7 rounded bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-xs font-bold text-white">VISA</div>
              <div>
                <div className="text-sm text-white">•••• •••• •••• 4242</div>
                <div className="text-xs text-white/40">Expires 12/27</div>
              </div>
              <button className="ml-auto text-xs text-purple-400 hover:text-purple-300 transition-colors">Change</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Security" && (
        <div className="glass-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2"><Shield className="w-4 h-4 text-green-400" /> Security Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-white/50 mb-2">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-2">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-2">Confirm New Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all" />
            </div>
            <button className="btn-glow flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white">
              <Shield className="w-4 h-4" /> Update Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
