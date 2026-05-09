"use client";
import { Shield, Heart, Car, Bike, ArrowRight } from "lucide-react";

const plans = [
  {
    type: "Health Insurance", icon: <Heart size={20} />, color: "#EF4444", bg: "rgba(239,68,68,0.1)",
    topPlans: [
      { name: "Star Health", cover: "₹10L", premium: "₹8,400/yr", claim: "90%", badge: "Popular" },
      { name: "Care Insurance", cover: "₹15L", premium: "₹10,200/yr", claim: "87%", badge: null },
      { name: "Niva Bupa", cover: "₹20L", premium: "₹14,800/yr", claim: "92%", badge: "Best Claim" },
    ],
  },
  {
    type: "Term Insurance", icon: <Shield size={20} />, color: "#2563EB", bg: "rgba(37,99,235,0.1)",
    topPlans: [
      { name: "LIC Tech Term", cover: "₹1Cr", premium: "₹12,000/yr", claim: "98.7%", badge: "Trusted" },
      { name: "HDFC Life Click 2P", cover: "₹1Cr", premium: "₹9,800/yr", claim: "99.4%", badge: "Best Claim" },
      { name: "ICICI Prulife iProtect", cover: "₹1Cr", premium: "₹10,500/yr", claim: "97.9%", badge: null },
    ],
  },
];

export default function InsuranceSection() {
  return (
    <section id="insurance" style={{ padding: "100px 24px", background: "var(--bg-light)", position: "relative", overflow: "hidden" }}>
      <div className="orb orb-amber" style={{ width: 450, height: 450, top: "5%", right: "-8%", opacity: 0.4 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ display: "inline-flex", background: "rgba(245,158,11,0.1)", color: "#D97706", border: "1px solid rgba(245,158,11,0.2)" }}>Insurance</div>
          <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text-primary)", letterSpacing: "-0.5px", marginTop: "16px" }}>
            Compare & Buy Insurance<br />
            <span className="gradient-text-amber">The Smart Way</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "17px", marginTop: "12px", maxWidth: "520px", margin: "12px auto 0" }}>
            Compare plans from 30+ insurers. See real claim settlement ratios. Make informed decisions.
          </p>
        </div>

        {/* Insurance type tabs */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "48px", flexWrap: "wrap" }}>
          {[
            { label: "Health", icon: <Heart size={16} />, active: true },
            { label: "Term Life", icon: <Shield size={16} />, active: false },
            { label: "Car", icon: <Car size={16} />, active: false },
            { label: "Bike", icon: <Bike size={16} />, active: false },
          ].map((tab) => (
            <button key={tab.label} style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "10px 20px", borderRadius: "50px",
              background: tab.active ? "var(--gradient-primary)" : "var(--bg-card)",
              color: tab.active ? "white" : "var(--text-secondary)",
              border: tab.active ? "none" : "1px solid var(--border)",
              fontWeight: 600, fontSize: "14px", cursor: "pointer",
              boxShadow: tab.active ? "0 4px 15px rgba(37,99,235,0.3)" : "none",
              transition: "all 0.2s",
            }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Comparison tables */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="insurance-grid">
          {plans.map((plan) => (
            <div key={plan.type} className="card" style={{ padding: "28px", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: 44, height: 44, borderRadius: "12px", background: plan.bg, display: "flex", alignItems: "center", justifyContent: "center", color: plan.color }}>
                  {plan.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--text-primary)" }}>{plan.type}</h3>
              </div>

              {/* Table header */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "8px", padding: "8px 12px", background: "var(--bg-light)", borderRadius: "8px", marginBottom: "8px" }}>
                {["Plan", "Cover", "Premium", "Claim%"].map((h) => (
                  <div key={h} style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{h}</div>
                ))}
              </div>

              {plan.topPlans.map((p) => (
                <div key={p.name} style={{
                  display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "8px",
                  padding: "12px", borderRadius: "8px", marginBottom: "4px",
                  border: "1px solid var(--border)", alignItems: "center",
                  transition: "all 0.2s",
                }} className="hover:border-blue-300">
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "13px", color: "var(--text-primary)" }}>{p.name}</div>
                    {p.badge && (
                      <span style={{ fontSize: "10px", background: "rgba(16,185,129,0.1)", color: "#10B981", padding: "2px 6px", borderRadius: "4px", fontWeight: 600 }}>{p.badge}</span>
                    )}
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>{p.cover}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{p.premium}</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: p.claim >= "95%" ? "#10B981" : "var(--text-primary)" }}>{p.claim}</div>
                </div>
              ))}

              <button style={{
                width: "100%", marginTop: "16px", padding: "12px",
                background: "var(--gradient-primary)", color: "white",
                border: "none", borderRadius: "10px", fontWeight: 600,
                fontSize: "14px", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", gap: "8px",
              }}>
                Compare All Plans <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "48px" }} className="ins-highlights">
          {[
            { num: "30+", label: "Insurance Partners" },
            { num: "₹10L–5Cr", label: "Coverage Range" },
            { num: "2min", label: "To Get a Quote" },
            { num: "100%", label: "Online Process" },
          ].map((h) => (
            <div key={h.label} style={{ textAlign: "center", padding: "20px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <div style={{ fontWeight: 800, fontSize: "28px", color: "var(--primary-light)" }}>{h.num}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "13px", marginTop: "4px" }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .insurance-grid { grid-template-columns: 1fr !important; }
          .ins-highlights { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
