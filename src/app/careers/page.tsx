import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CareerCard from "@/components/CareerCard";
import { CAREERS } from "@/data/careers";
import { Users, Wifi, BookOpen, TrendingUp, GraduationCap, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | RankVillage AI",
  description:
    "Join RankVillage AI — remote-first roles in SEO, engineering, design, and digital marketing. Help Indian local businesses grow online.",
};

const cultureValues = [
  {
    icon: Wifi,
    title: "Remote-First",
    desc: "Work from anywhere in India. Flexible hours, async collaboration, and no daily commute — focus on output, not office hours.",
  },
  {
    icon: BookOpen,
    title: "Learning Culture",
    desc: "SEO and AI evolve fast. We invest in courses, conferences, and mentorship so you keep growing with the industry.",
  },
  {
    icon: TrendingUp,
    title: "Real Impact",
    desc: "Your work directly helps local shop owners, restaurants, and clinics get found on Google. Measurable results, meaningful mission.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <PageHero
          badge="We're Hiring"
          badgeIcon={Users}
          title={<>Join <span className="gradient-text">RankVillage AI</span></>}
          subtitle="Build the future of local SEO for Indian businesses. We're looking for passionate people who care about helping small businesses win online."
        />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our <span className="gradient-text">Culture</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                A small, focused team doing big work for businesses across India.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cultureValues.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="glass-card rounded-2xl p-7 border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              Open <span className="gradient-text">Positions</span>
            </h2>
            {CAREERS.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {CAREERS.map((role) => (
                  <CareerCard key={role.id} role={role} />
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-12 border border-white/5 text-center">
                <p className="text-white/50">No open positions right now — check back soon.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Internship Program</h2>
                  <p className="text-white/55 text-sm leading-relaxed">
                    3-month paid internships for students and fresh graduates passionate about SEO, web development, or digital marketing.
                    Work on real client projects with mentorship from senior team members.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Currently pursuing or recently completed a degree in Marketing, CS, or Design
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Available 20+ hours/week for 3 months (remote)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  Strong written English; Hindi is a plus
                </li>
              </ul>
              <a
                href="mailto:careers@rankvillage.ai?subject=Internship%20Application"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              >
                Apply for Internship
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don&apos;t see your <span className="gradient-text">role?</span>
            </h2>
            <p className="text-white/50 mb-8">
              Send us your resume anyway — we&apos;re always interested in meeting talented people.
            </p>
            <a
              href="mailto:careers@rankvillage.ai"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white"
            >
              <Mail className="w-5 h-5" />
              careers@rankvillage.ai
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
