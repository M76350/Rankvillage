import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Layers, Mail, Search, ArrowRight } from "lucide-react";

const quickLinks = [
  { icon: Home,   label: "Home",        href: "/" },
  { icon: Layers, label: "Services",    href: "/services" },
  { icon: Mail,   label: "Contact",     href: "/contact" },
  { icon: Search, label: "Free Audit",  href: "/free-audit" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            {/* 404 */}
            <div className="text-[120px] sm:text-[180px] font-bold gradient-text leading-none animate-float mb-4 select-none">
              404
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Oops! This page doesn&apos;t exist.
            </h1>
            <p className="text-white/50 mb-10 max-w-md mx-auto">
              The page you&apos;re looking for may have been moved, deleted, or never existed. Let&apos;s get you back on track.
            </p>

            {/* Quick links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {quickLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="glass-card rounded-xl p-4 border border-white/5 hover:border-purple-500/30 flex flex-col items-center gap-2 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/"
              className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
