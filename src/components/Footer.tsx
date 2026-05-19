import Link from "next/link";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features",   href: "/features" },
    { label: "Pricing",    href: "/pricing" },
    { label: "Dashboard",  href: "/dashboard" },
    { label: "AI Tools",   href: "/tools" },
    { label: "Changelog",  href: "#" },
  ],
  Resources: [
    { label: "Blog",             href: "#" },
    { label: "Help Center",      href: "#" },
    { label: "Video Tutorials",  href: "#" },
    { label: "Local SEO Guide",  href: "#" },
    { label: "Case Studies",     href: "#" },
  ],
  Company: [
    { label: "About Us",  href: "#" },
    { label: "Careers",   href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Partners",  href: "#" },
    { label: "Contact",   href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy",    href: "#" },
    { label: "Refund Policy",    href: "#" },
    { label: "GDPR",             href: "#" },
  ],
};

// Inline SVG social icons (lucide-react v1 removed social brand icons)
const socials = [
  {
    label: "X (Twitter)",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050510]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:shadow-glow-purple transition-all">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-text">RankVillage</span>
                <span className="text-white/40 text-sm font-normal ml-1">AI</span>
              </span>
            </Link>
              

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a
                href="mailto:support@rankvillage.ai"
                className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                support@rankvillage.ai
              </a>
              <a
                href="tel:+918800000000"
                className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                +91 88000 00000
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Bangalore, India
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg glass border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-purple-500/30 transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/70 font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white/70 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} RankVillage AI. All rights reserved. Made with ❤️ in India.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white/50 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
