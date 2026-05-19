"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Zap, LayoutDashboard, LogOut, ChevronDown,
  Star, Search, Building2, FileText, Users, BarChart3, Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth-context";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Features", href: "/features" },
  { label: "Tools",    href: "/tools" },
  { label: "Pricing",  href: "/pricing" },
  { label: "FAQ",      href: "/faq" },
];

const dashboardLinks = [
  { label: "Overview",    href: "/dashboard",             icon: LayoutDashboard },
  { label: "Keywords",    href: "/dashboard/keywords",    icon: Search },
  { label: "Reviews",     href: "/dashboard/reviews",     icon: Star },
  { label: "GBP",         href: "/dashboard/gbp",         icon: Building2 },
  { label: "Content",     href: "/dashboard/content",     icon: FileText },
  { label: "Competitors", href: "/dashboard/competitors", icon: Users },
  { label: "Reports",     href: "/dashboard/reports",     icon: BarChart3 },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenu, setUserMenu]     = useState(false);
  const { user, logout }            = useAuth();
  const pathname                    = usePathname();
  const isDashboard                 = pathname?.startsWith("/dashboard");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      // Only close if click is outside the nav entirely
      const nav = document.getElementById("rv-user-menu");
      if (nav && !nav.contains(e.target as Node)) {
        setUserMenu(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const planColors: Record<string, string> = {
    starter:  "text-blue-400 bg-blue-500/10 border-blue-500/20",
    pro:      "text-purple-400 bg-purple-500/10 border-purple-500/20",
    business: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || isDashboard
          ? "bg-[#080812]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-glow-purple group-hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-300">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">
              <span className="gradient-text">RankVillage</span>
              <span className="text-white/60 text-sm font-normal ml-1">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg transition-all duration-200",
                    pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div id="rv-user-menu" className="relative">
                {/* Avatar button */}
                <button
                  onClick={(e) => { e.stopPropagation(); setUserMenu(!userMenu); }}
                  className="flex items-center gap-2.5 px-3 py-1.5 glass rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shadow-glow-purple">
                    {user.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white leading-none">{user.name.split(" ")[0]}</div>
                    <div className={cn("text-xs leading-none mt-0.5 capitalize font-medium px-1 rounded border", planColors[user.plan] ?? planColors.starter)}>
                      {user.plan}
                    </div>
                  </div>
                  <ChevronDown className={cn("w-3.5 h-3.5 text-white/40 transition-transform duration-200", userMenu && "rotate-180")} />
                </button>

                {/* Dropdown */}
                {userMenu && (
                  <div className="absolute right-0 top-full mt-2 w-64 glass rounded-2xl border border-white/10 shadow-[0_16px_60px_rgba(0,0,0,0.6)] overflow-hidden z-50">

                    {/* User info header */}
                    <div className="px-4 py-4 border-b border-white/5 bg-white/2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white shadow-glow-purple shrink-0">
                          {user.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white truncate">{user.name}</div>
                          <div className="text-xs text-white/40 truncate">{user.email}</div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-white/40">{user.businessName || "My Business"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Go to Dashboard */}
                    <Link
                      href="/dashboard"
                      onClick={() => setUserMenu(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white bg-purple-500/10 hover:bg-purple-500/20 border-b border-white/5 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                        <LayoutDashboard className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <span className="gradient-text">Go to Dashboard</span>
                    </Link>

                    {/* Quick links */}
                    <div className="px-2 py-2 border-b border-white/5">
                      <div className="text-xs text-white/25 px-2 py-1 uppercase tracking-wider font-medium">Quick Access</div>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        {dashboardLinks.slice(1, 5).map((link) => {
                          const Icon = link.icon;
                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setUserMenu(false)}
                              className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs text-white/50 hover:text-white hover:bg-white/5 transition-all"
                            >
                              <Icon className="w-3.5 h-3.5 text-white/30" />
                              {link.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Settings + Logout */}
                    <div className="px-2 py-2">
                      <Link
                        href="/dashboard/settings"
                        onClick={() => setUserMenu(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all w-full"
                      >
                        <Settings className="w-4 h-4" /> Settings
                      </Link>
                      <button
                        onClick={() => { setUserMenu(false); logout(); }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400/80 hover:text-red-400 hover:bg-red-500/5 transition-all"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/login" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/auth/signup" className="btn-glow px-5 py-2 text-sm font-semibold text-white rounded-lg">
                  Start Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setMobileOpen(!mobileOpen); }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-300", mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
        <div className="bg-[#080812]/95 backdrop-blur-xl border-b border-white/5 px-4 py-4 space-y-1">
          {!isDashboard && navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-4 py-2.5 text-sm rounded-lg transition-all",
                pathname === link.href
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 flex flex-col gap-2">
            {user ? (
              <>
                {/* Mobile user card */}
                <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white shrink-0">
                    {user.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">{user.name}</div>
                    <div className="text-xs text-white/40 truncate">{user.email}</div>
                  </div>
                </div>
                <Link href="/dashboard" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-purple-500/15 border border-purple-500/30 rounded-xl">
                  <LayoutDashboard className="w-4 h-4 text-purple-400" />
                  <span className="gradient-text">Go to Dashboard</span>
                </Link>
                {/* Mobile quick links */}
                <div className="grid grid-cols-2 gap-2">
                  {dashboardLinks.slice(1, 5).map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs text-white/50 border border-white/10 rounded-lg hover:text-white hover:border-white/20 transition-all">
                        <Icon className="w-3.5 h-3.5" /> {link.label}
                      </Link>
                    );
                  })}
                </div>
                <button onClick={() => { logout(); setMobileOpen(false); }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 border border-red-500/20 rounded-xl">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-center text-white/60 hover:text-white border border-white/10 rounded-lg transition-all">
                  Login
                </Link>
                <Link href="/auth/signup" onClick={() => setMobileOpen(false)}
                  className="btn-glow block px-4 py-2.5 text-sm font-semibold text-white text-center rounded-lg">
                  Start Free
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
