"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Play, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", background: "var(--gradient-hero)",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", paddingTop: "80px",
    }}>
      {/* Pastel blob decorations */}
      <div className="blob blob-blue animate-blob" style={{ width: 480, height: 480, top: "-5%", right: "5%", animationDuration: "10s" }} />
      <div className="blob blob-green animate-blob" style={{ width: 340, height: 340, bottom: "5%", left: "-5%", animationDuration: "13s", animationDelay: "2s" }} />
      <div className="blob blob-peach animate-blob" style={{ width: 260, height: 260, top: "55%", right: "30%", animationDuration: "9s", animationDelay: "4s" }} />
      <div className="blob blob-purple animate-blob" style={{ width: 200, height: 200, bottom: "20%", right: "10%", animationDuration: "11s", animationDelay: "1s" }} />
      <div className="blob blob-yellow animate-blob" style={{ width: 180, height: 180, top: "20%", left: "25%", animationDuration: "14s", animationDelay: "3s" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="hero-grid">

          {/* Left */}
          <div>
            <div className="animate-fade-in-up" style={{
              display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px",
              borderRadius: "99px", background: "var(--primary-pastel)", border: "1px solid rgba(91,127,212,0.2)",
              marginBottom: "28px",
            }}>
              <Sparkles size={13} color="var(--primary)" />
              <span style={{ color: "var(--primary-dark)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.3px" }}>
                #1 Finance App for Indian Families
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-100" style={{
              fontFamily: "var(--font-body)", fontWeight: 800,
              fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.1,
              color: "var(--text-primary)", letterSpacing: "-1.5px", marginBottom: "20px",
            }}>
              Smart Finance<br />
              <span className="gradient-text">Management</span><br />
              for Every Indian
            </h1>

            <p className="animate-fade-in-up delay-200" style={{
              fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.75,
              marginBottom: "36px", maxWidth: "460px",
            }}>
              Track expenses, save taxes under old & new regime, manage SIPs, compare insurance — all in one beautifully simple platform built for India 🇮🇳
            </p>

            <div className="animate-fade-in-up delay-300" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "44px" }}>
              <Link href="/dashboard" className="btn-primary" style={{ fontSize: "15px", padding: "14px 28px" }}>
                Start Free — No Card <ArrowRight size={17} />
              </Link>
              <button style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "13px 22px", borderRadius: "50px",
                background: "white", border: "1.5px solid var(--border)",
                color: "var(--text-secondary)", fontWeight: 600, fontSize: "15px",
                cursor: "pointer", boxShadow: "var(--shadow)", transition: "all 0.2s",
              }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Play size={11} color="white" fill="white" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust signals */}
            <div className="animate-fade-in-up delay-400" style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              {[
                { icon: "🔒", text: "Bank-grade security" },
                { icon: "🇮🇳", text: "Made for India" },
                { icon: "⭐", text: "50,000+ families" },
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "14px" }}>{t.icon}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: 500 }}>{t.text}</span>
                  {i < 2 && <div style={{ width: 1, height: 14, background: "var(--border)", marginLeft: "20px" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard card */}
          <div className="animate-fade-in-up delay-300" style={{ position: "relative" }}>
            <div className="animate-float" style={{
              background: "rgba(255,255,255,0.72)", backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.9)", borderRadius: "28px",
              padding: "28px", boxShadow: "0 24px 80px rgba(91,127,212,0.18)",
            }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>Financial Health Score</div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>92 <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-muted)" }}>/100</span></div>
                </div>
                <div style={{ padding: "8px 14px", borderRadius: "12px", background: "var(--secondary-pastel)" }}>
                  <div style={{ fontSize: "11px", color: "#1E7A5C", fontWeight: 700 }}>EXCELLENT</div>
                </div>
              </div>

              {/* Progress bars */}
              {[
                { label: "Savings Rate", val: "32%", pct: 32, color: "var(--secondary)", bg: "var(--secondary-pastel)" },
                { label: "Tax Saved (80C)", val: "₹1.4L", pct: 70, color: "var(--primary)", bg: "var(--primary-pastel)" },
                { label: "Insurance Cover", val: "₹50L", pct: 85, color: "var(--purple)", bg: "var(--purple-pastel)" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-primary)" }}>{item.val}</span>
                  </div>
                  <div style={{ height: 8, background: item.bg, borderRadius: "99px", overflow: "hidden" }}>
                    <div style={{ width: `${item.pct}%`, height: "100%", background: item.color, borderRadius: "99px" }} />
                  </div>
                </div>
              ))}

              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "18px" }}>
                {[
                  { label: "Monthly Income", val: "₹85,000", tag: "+8%", tagColor: "tag-green" },
                  { label: "Expenses", val: "₹52,300", tag: "-3%", tagColor: "tag-peach" },
                  { label: "SIP Portfolio", val: "₹1,86,200", tag: "+28%", tagColor: "tag-green" },
                  { label: "Tax Saved 80C", val: "₹1,50,000", tag: "Maxed!", tagColor: "tag-blue" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "var(--bg-soft)", borderRadius: "12px", padding: "12px 14px", border: "1px solid var(--border-soft)" }}>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px" }}>{s.label}</div>
                    <div style={{ fontWeight: 800, fontSize: "15px", color: "var(--text-primary)", marginBottom: "4px" }}>{s.val}</div>
                    <span className={`tag ${s.tagColor}`} style={{ fontSize: "10px" }}>{s.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="animate-float delay-300" style={{
              position: "absolute", top: -16, right: -16, background: "var(--gradient-peach)",
              borderRadius: "14px", padding: "10px 16px", boxShadow: "0 8px 24px rgba(244,149,106,0.3)",
              border: "2px solid rgba(255,255,255,0.8)",
            }}>
              <div style={{ color: "white", fontSize: "10px", fontWeight: 700, marginBottom: "2px" }}>Tax Saved 🎉</div>
              <div style={{ color: "white", fontSize: "18px", fontWeight: 800 }}>₹42,000</div>
            </div>
            <div className="animate-float delay-500" style={{
              position: "absolute", bottom: 24, left: -24, background: "white",
              border: "1px solid var(--border)", borderRadius: "14px", padding: "10px 16px",
              boxShadow: "var(--shadow-md)",
            }}>
              <div style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: 500 }}>AI Score</div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "var(--secondary)" }}>92/100</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
