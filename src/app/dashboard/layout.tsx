"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Zap, LayoutDashboard, Search, Star, Building2, FileText,
  Users, BarChart3, Settings, Bell, LogOut, Menu, X, ChevronDown,
  TrendingUp, Sparkles
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview",    href: "/dashboard",              icon: LayoutDashboard },
  { label: "Keywords",    href: "/dashboard/keywords",     icon: Search },
  { label: "Reviews",     href: "/dashboard/reviews",      icon: Star },
  { label: "GBP",         href: "/dashboard/gbp",          icon: Building2 },
  { label: "Content",     href: "/dashboard/content",      icon: FileText },
  { label: "Competitors", href: "/dashboard/competitors",  icon: Users },
  { label: "Reports",     href: "/dashboard/reports",      icon: BarChart3 },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router   = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.replace("/auth/login");
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#080812] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href);

  return (
    <div className="min-h-screen bg-[#080812] flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-60 bg-[#0a0a18] border-r border-white/5 z-50 flex flex-col transition-transform duration-300",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Logo */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/5 shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-sm">
              <span className="gradient-text">RankVillage</span>
              <span className="text-white/40 text-xs font-normal ml-1">AI</span>
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/40 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Business selector */}
        <div className="px-3 py-3 border-b border-white/5 shrink-0">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/8 transition-all border border-white/5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
              {user.businessName.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="text-xs font-medium text-white truncate">{user.businessName}</div>
              <div className="text-xs text-white/30 truncate">{user.location}</div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-white/30 shrink-0" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-purple-500/15 text-purple-300 border border-purple-500/25"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5 border border-transparent"
                )}
              >
                <Icon className={cn("w-4 h-4 shrink-0", active ? "text-purple-400" : "text-white/30")} />
                {item.label}
                {item.label === "Reviews" && (
                  <span className="ml-auto text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded-full">2</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* AI Usage */}
        <div className="px-3 py-3 border-t border-white/5 shrink-0">
          <div className="px-3 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-medium text-purple-300">AI Credits</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mb-1">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: "68%" }} />
            </div>
            <div className="text-xs text-white/30">340 / 500 used this month</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="px-3 py-3 border-t border-white/5 space-y-0.5 shrink-0">
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white/80 hover:bg-white/5 transition-all">
            <Settings className="w-4 h-4 text-white/30" /> Settings
          </Link>
          <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-all">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 bg-[#080812]/90 backdrop-blur-xl border-b border-white/5 flex items-center px-4 sm:px-6 gap-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white/50 hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>

          {/* Page title */}
          <div className="flex-1">
            <h1 className="text-sm font-semibold text-white capitalize">
              {navItems.find((n) => isActive(n.href))?.label ?? "Dashboard"}
            </h1>
            <p className="text-xs text-white/30">{user.businessName} · {user.location}</p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* SEO score badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg border border-white/5">
              <TrendingUp className="w-3.5 h-3.5 text-green-400" />
              <span className="text-xs text-white/60">SEO Score:</span>
              <span className="text-xs font-bold text-green-400">87/100</span>
            </div>

            {/* Notifications */}
            <button className="relative w-9 h-9 glass rounded-xl border border-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
              {user.avatar}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
