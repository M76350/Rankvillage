"use client";

import { useState } from "react";
import { User, Bell, Shield, CreditCard, Building2, MapPin, Save, CheckCircle, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

type SaveState = "idle" | "saving" | "saved" | "error";

export default function SettingsPage() {
  const { user, updateUser } = useAuth();

  // ── Profile form ──────────────────────────────────────────────────────────
  const [profile, setProfile] = useState({
    name:         user?.name         ?? "",
    businessName: user?.businessName ?? "",
    location:     user?.location     ?? "",
  });
  const [profileState, setProfileState] = useState<SaveState>("idle");
  const [profileError, setProfileError] = useState("");

  const handleProfileSave = async () => {
    setProfileState("saving");
    setProfileError("");
    try {
      const res = await fetch("/api/user/profile", {
        method:  "PATCH",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(profile),
      });
      const data = await res.json();
      if (!res.ok) { setProfileError(data.error ?? "Save failed."); setProfileState("error"); return; }
      updateUser(data.user);
      setProfileState("saved");
      setTimeout(() => setProfileState("idle"), 2500);
    } catch {
      setProfileError("Network error. Please try again.");
      setProfileState("error");
    }
  };

  // ── Password form ─────────────────────────────────────────────────────────
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });
  const [passState, setPassState] = useState<SaveState>("idle");
  const [passError, setPassError] = useState("");

  const handlePasswordSave = async () => {
    setPassError("");
    if (passwords.newPass !== passwords.confirm) { setPassError("New passwords do not match."); return; }
    if (passwords.newPass.length < 6) { setPassError("New password must be at least 6 characters."); return; }
    setPassState("saving");
    try {
      const res = await fetch("/api/user/password", {
        method:  "PATCH",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ currentPassword: passwords.current, newPassword: passwords.newPass }),
      });
      const data = await res.json();
      if (!res.ok) { setPassError(data.error ?? "Failed to update password."); setPassState("error"); return; }
      setPasswords({ current: "", newPass: "", confirm: "" });
      setPassState("saved");
      setTimeout(() => setPassState("idle"), 2500);
    } catch {
      setPassError("Network error. Please try again.");
      setPassState("error");
    }
  };

  // ── Notifications ─────────────────────────────────────────────────────────
  const [notifications, setNotifications] = useState({
    weeklyReport: true, reviewAlert: true, rankingChange: true, aiSuggestions: false,
  });

  const tabs = ["Profile", "Notifications", "Billing", "Security"];
  const [activeTab, setActiveTab] = useState("Profile");

  const planPrices: Record<string, string> = { starter: "₹999", pro: "₹2,499", business: "₹5,999" };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-xl font-bold text-white">Settings</h2>
        <p className="text-white/40 text-sm mt-0.5">Manage your account and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 glass rounded-xl p-1 border border-white/5 w-fit">
        {tabs.map((t) => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === t ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "text-white/40 hover:text-white/60"}`}>
            {t}
          </button>
        ))}
      </div>

      {/* ── Profile Tab ── */}
      {activeTab === "Profile" && (
        <div className="space-y-5">
          <div className="glass-card rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <User className="w-4 h-4 text-purple-400" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-2">Full Name</label>
                <input
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-2">Email</label>
                <input
                  value={user?.email ?? ""}
                  disabled
                  className="w-full px-4 py-3 bg-white/3 border border-white/5 rounded-xl text-white/40 text-sm cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-400" /> Business Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-2">Business Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    value={profile.businessName}
                    onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {profileError && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
              <AlertCircle className="w-4 h-4 shrink-0" /> {profileError}
            </div>
          )}

          <button
            onClick={handleProfileSave}
            disabled={profileState === "saving"}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60 ${profileState === "saved" ? "bg-green-500" : "btn-glow"}`}
          >
            {profileState === "saving" ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : profileState === "saved" ? (
              <><CheckCircle className="w-4 h-4" /> Saved!</>
            ) : (
              <><Save className="w-4 h-4" /> Save Changes</>
            )}
          </button>
        </div>
      )}

      {/* ── Notifications Tab ── */}
      {activeTab === "Notifications" && (
        <div className="glass-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
            <Bell className="w-4 h-4 text-yellow-400" /> Notification Preferences
          </h3>
          <div className="space-y-4">
            {[
              { key: "weeklyReport",   label: "Weekly SEO Report",   desc: "Get a summary every Monday morning" },
              { key: "reviewAlert",    label: "New Review Alert",     desc: "Instant notification for new reviews" },
              { key: "rankingChange",  label: "Ranking Changes",      desc: "Alert when keywords move significantly" },
              { key: "aiSuggestions", label: "AI Suggestions",       desc: "Daily AI-powered improvement tips" },
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

      {/* ── Billing Tab ── */}
      {activeTab === "Billing" && (
        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-purple-400" /> Current Plan
            </h3>
            <div className="flex items-center justify-between p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <div>
                <div className="text-lg font-bold text-white capitalize">{user?.plan} Plan</div>
                <div className="text-sm text-white/40">Renews on July 1, 2025</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{planPrices[user?.plan ?? "starter"]}</div>
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

      {/* ── Security Tab ── */}
      {activeTab === "Security" && (
        <div className="glass-card rounded-2xl p-6 border border-white/5">
          <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" /> Change Password
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-white/50 mb-2">Current Password</label>
              <input
                type="password"
                value={passwords.current}
                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-2">New Password</label>
              <input
                type="password"
                value={passwords.newPass}
                onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                placeholder="Min. 6 characters"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-2">Confirm New Password</label>
              <input
                type="password"
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                placeholder="Repeat new password"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
              />
            </div>

            {passError && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" /> {passError}
              </div>
            )}

            <button
              onClick={handlePasswordSave}
              disabled={passState === "saving" || !passwords.current || !passwords.newPass || !passwords.confirm}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-60 ${passState === "saved" ? "bg-green-500" : "btn-glow"}`}
            >
              {passState === "saving" ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : passState === "saved" ? (
                <><CheckCircle className="w-4 h-4" /> Password Updated!</>
              ) : (
                <><Shield className="w-4 h-4" /> Update Password</>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
