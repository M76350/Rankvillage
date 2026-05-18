"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, LayoutDashboard, LogOut, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth-context";

const navLinks = [
  { label: "Home",     href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Tools",    href: "/#dashboard" },
  { label: "Pricing",  href: "/#pricing" },
  { label: "FAQ",      href: "/#faq" },
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

  // Close menus on outside click
  useEffect(() => {
    const close = () => { setUserMenu(false); setMobileOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-glow-purple group-hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-300">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">
              <span className="gradient-text">RankVillage</span>
              <span className="text-white/60 text-sm font-normal ml-1">AI</span>
            </span>
          </Link>

          {/* Desktop nav — hide on dashboard */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setUserMenu(!userMenu)}
                  className="flex items-center gap-2 px-3 py-1.5 glass rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                    {user.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-white leading-none">{user.name.split(" ")[0]}</div>
                    <div className="text-xs text-white/40 leading-none mt-0.5 capitalize">{user.plan}</div>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform ${userMenu ? "rotate-180" : ""}`} />
                </button>

                {userMenu && (
                  <div className="absolute right-0 top-full mt-2 w-52 glass rounded-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/5">
                      <div className="text-sm font-medium text-white">{user.name}</div>
                      <div className="text-xs text-white/40 truncate">{user.email}</div>
                    </div>
                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/5 transition-all"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
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
              className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/70 border border-white/10 rounded-lg">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </Link>
                <button onClick={() => { logout(); setMobileOpen(false); }} className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 border border-red-500/20 rounded-lg">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-center text-white/60 hover:text-white border border-white/10 rounded-lg transition-all">
                  Login
                </Link>
                <Link href="/auth/signup" onClick={() => setMobileOpen(false)} className="btn-glow block px-4 py-2.5 text-sm font-semibold text-white text-center rounded-lg">
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
