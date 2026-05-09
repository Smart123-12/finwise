"use client";
import { BarChart2, Calculator, Shield, TrendingUp, Bot, Wallet, Target, Bell } from "lucide-react";

const features = [
  { icon: <Wallet size={20} />, title: "Expense Tracker", desc: "Smart auto-categorization, monthly reports, CSV export. Never lose track of a single rupee.", color: "var(--primary)", bg: "var(--primary-pastel)" },
  { icon: <Calculator size={20} />, title: "Tax Calculator", desc: "Old & new regime for FY 2025-26 with 80C, 80D, HRA, NPS. AI picks the best for you.", color: "var(--secondary)", bg: "var(--secondary-pastel)" },
  { icon: <Shield size={20} />, title: "Insurance Compare", desc: "Compare 30+ health, life, term, car & bike plans with real claim settlement ratios.", color: "var(--accent)", bg: "var(--accent-pastel)" },
  { icon: <TrendingUp size={20} />, title: "Investment Tracker", desc: "Track SIPs, mutual funds, stocks, gold & FDs in one portfolio with CAGR & P&L.", color: "var(--purple)", bg: "var(--purple-pastel)" },
  { icon: <Bot size={20} />, title: "AI Financial Advisor", desc: "Personalised insights, saving suggestions, tax tips & investment recommendations.", color: "var(--pink)", bg: "var(--pink-pastel)" },
  { icon: <BarChart2 size={20} />, title: "Budget Planner", desc: "Set monthly budgets per category, track progress with visual gauges & smart alerts.", color: "#3DA8C5", bg: "#C8EDF8" },
  { icon: <Target size={20} />, title: "Goal Planner", desc: "Plan your car, home, education or retirement with SIP recommendations & timelines.", color: "#E07FB0", bg: "var(--pink-pastel)" },
  { icon: <Bell size={20} />, title: "EMI & Bill Tracker", desc: "Never miss an EMI or utility bill with WhatsApp, SMS & push notification reminders.", color: "#C5833D", bg: "#FAE8CC" },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "96px 24px", background: "var(--bg-light)", position: "relative", overflow: "hidden" }}>
      <div className="blob blob-blue" style={{ width: 400, height: 400, top: "-8%", left: "-8%", opacity: 0.6 }} />
      <div className="blob blob-peach" style={{ width: 320, height: 320, bottom: "-5%", right: "-5%", opacity: 0.5 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ display: "inline-flex" }}>Everything You Need</div>
          <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 46px)", color: "var(--text-primary)", lineHeight: 1.15, letterSpacing: "-0.5px", marginTop: "16px" }}>
            One Platform for Your<br /><span className="gradient-text">Complete Financial Life</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "14px", maxWidth: "500px", margin: "14px auto 0" }}>
            Everything an Indian family needs — from daily chai-sutta expenses to retirement planning.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }} className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className="card animate-fade-in-up" style={{ padding: "24px", animationDelay: `${i * 0.07}s` }}>
              <div style={{ width: 44, height: 44, borderRadius: "12px", background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", color: f.color, marginBottom: "14px" }}>
                {f.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)", marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.features-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:500px){.features-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
