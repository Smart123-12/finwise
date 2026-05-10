"use client";
import { useState } from "react";
import { Shield, Heart, Car, Bike, ArrowRight, CheckCircle } from "lucide-react";

const allPlans = {
  Health: [
    { name: "Star Health Assure", cover: "₹10L", premium: "₹8,400/yr", claim: "90%", badge: "Popular" },
    { name: "Care Insurance", cover: "₹15L", premium: "₹10,200/yr", claim: "87%", badge: null },
    { name: "Niva Bupa Aspire", cover: "₹20L", premium: "₹14,800/yr", claim: "92%", badge: "Best Claim" },
    { name: "HDFC ERGO Optima", cover: "₹10L", premium: "₹7,900/yr", claim: "89%", badge: null },
  ],
  Term: [
    { name: "LIC Tech Term", cover: "₹1 Cr", premium: "₹12,000/yr", claim: "98.7%", badge: "Trusted" },
    { name: "HDFC Life Click 2P", cover: "₹1 Cr", premium: "₹9,800/yr", claim: "99.4%", badge: "Best Claim" },
    { name: "ICICI iProtect Smart", cover: "₹1 Cr", premium: "₹10,500/yr", claim: "97.9%", badge: null },
    { name: "Max Life Smart Secure", cover: "₹1 Cr", premium: "₹11,200/yr", claim: "99.3%", badge: null },
  ],
  Car: [
    { name: "HDFC ERGO Comprehensive", cover: "IDV ₹8.5L", premium: "₹12,400/yr", claim: "91%", badge: "Popular" },
    { name: "Bajaj Allianz Smart Drive", cover: "IDV ₹8.5L", premium: "₹11,800/yr", claim: "88%", badge: null },
    { name: "ICICI Lombard Complete", cover: "IDV ₹8.5L", premium: "₹13,200/yr", claim: "93%", badge: "Best Claim" },
    { name: "Tata AIG AutoSecure", cover: "IDV ₹8.5L", premium: "₹10,900/yr", claim: "86%", badge: null },
  ],
  Bike: [
    { name: "Bajaj Allianz Two Wheeler", cover: "IDV ₹80K", premium: "₹1,800/yr", claim: "87%", badge: "Popular" },
    { name: "HDFC ERGO Two Wheeler", cover: "IDV ₹80K", premium: "₹2,100/yr", claim: "90%", badge: "Best Claim" },
    { name: "Royal Sundaram Bike", cover: "IDV ₹80K", premium: "₹1,650/yr", claim: "84%", badge: null },
    { name: "New India Two Wheeler", cover: "IDV ₹80K", premium: "₹1,950/yr", claim: "88%", badge: null },
  ],
};

const tabs = [
  { label: "Health", key: "Health" as const, icon: <Heart size={16} />, color: "#EF4444" },
  { label: "Term Life", key: "Term" as const, icon: <Shield size={16} />, color: "#2563EB" },
  { label: "Car", key: "Car" as const, icon: <Car size={16} />, color: "#10B981" },
  { label: "Bike", key: "Bike" as const, icon: <Bike size={16} />, color: "#F59E0B" },
];

type TabKey = keyof typeof allPlans;

export default function InsuranceSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Health");
  const plans = allPlans[activeTab];

  return (
    <section id="insurance" style={{ padding: "100px 24px", background: "var(--bg-light)", position: "relative", overflow: "hidden" }}>
      <div className="blob blob-yellow" style={{ width: 450, height: 450, top: "5%", right: "-8%", opacity: 0.4 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-label" style={{ display: "inline-flex", background: "rgba(245,158,11,0.1)", color: "#D97706", border: "1px solid rgba(245,158,11,0.2)" }}>Insurance</div>
          <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text-primary)", letterSpacing: "-0.5px", marginTop: "16px" }}>
            Compare & Buy Insurance<br />
            <span className="gradient-text">The Smart Way</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "17px", marginTop: "12px", maxWidth: "520px", margin: "12px auto 0" }}>
            Compare plans from 30+ insurers. See real claim settlement ratios. Make informed decisions.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "40px", flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "10px 22px", borderRadius: "50px",
              background: activeTab === tab.key ? "var(--gradient-primary)" : "var(--bg-card)",
              color: activeTab === tab.key ? "white" : "var(--text-secondary)",
              border: activeTab === tab.key ? "none" : "1px solid var(--border)",
              fontWeight: 600, fontSize: "14px", cursor: "pointer",
              boxShadow: activeTab === tab.key ? "0 4px 15px rgba(37,99,235,0.3)" : "none",
              transition: "all 0.25s ease", transform: activeTab === tab.key ? "translateY(-1px)" : "none",
            }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Plans Table */}
        <div className="card" style={{ padding: "28px", maxWidth: "900px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1.2fr 0.8fr 120px", gap: "10px", padding: "10px 14px", background: "var(--bg-light)", borderRadius: "10px", marginBottom: "10px" }}>
            {["Plan Name", "Cover", "Premium", "Claim %", ""].map((h) => (
              <div key={h} style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{h}</div>
            ))}
          </div>

          {plans.map((p, i) => (
            <div key={p.name} style={{
              display: "grid", gridTemplateColumns: "2.5fr 1fr 1.2fr 0.8fr 120px", gap: "10px",
              padding: "14px", borderRadius: "10px", marginBottom: "6px",
              border: "1px solid var(--border)", alignItems: "center",
              background: i === 0 ? "rgba(37,99,235,0.02)" : "transparent",
              transition: "all 0.2s", cursor: "pointer",
            }}
              className="insurance-row"
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--text-primary)" }}>{p.name}</div>
                {p.badge && (
                  <span style={{ fontSize: "10px", background: "rgba(16,185,129,0.1)", color: "#10B981", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>{p.badge}</span>
                )}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>{p.cover}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--secondary)" }}>{p.premium}</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: Number(p.claim.replace("%","")) >= 95 ? "#10B981" : "var(--text-primary)" }}>{p.claim}</div>
              <button style={{
                padding: "7px 14px", borderRadius: "8px", border: "1.5px solid var(--primary-light)",
                background: "transparent", color: "var(--primary-light)", fontWeight: 600,
                fontSize: "12px", cursor: "pointer", transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: "4px",
              }}>
                Get Quote <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "48px" }} className="ins-highlights">
          {[
            { num: "30+", label: "Insurance Partners", icon: "🏢" },
            { num: "₹10L–5Cr", label: "Coverage Range", icon: "🛡️" },
            { num: "2 min", label: "To Get a Quote", icon: "⚡" },
            { num: "100%", label: "Online Process", icon: "💻" },
          ].map((h) => (
            <div key={h.label} style={{ textAlign: "center", padding: "22px 16px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "26px", marginBottom: "8px" }}>{h.icon}</div>
              <div style={{ fontWeight: 800, fontSize: "26px", color: "var(--primary-light)" }}>{h.num}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "13px", marginTop: "4px" }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .insurance-row:hover { background: rgba(37,99,235,0.04) !important; border-color: rgba(37,99,235,0.3) !important; }
        @media (max-width: 768px) {
          .ins-highlights { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .insurance-row { grid-template-columns: 1fr 1fr !important; }
          .insurance-row > *:nth-child(3), .insurance-row > *:nth-child(4) { display: none; }
        }
      `}</style>
    </section>
  );
}
