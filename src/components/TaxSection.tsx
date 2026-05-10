"use client";
import Link from "next/link";
import { Check, ArrowRight, IndianRupee } from "lucide-react";

const deductions = [
  { section: "80C", items: ["ELSS Mutual Funds", "PPF", "EPF", "Life Insurance", "NSC", "ULIP"], limit: "₹1,50,000" },
  { section: "80D", items: ["Health Insurance Premium", "Family Floater", "Senior Citizen Parents"], limit: "₹50,000" },
  { section: "HRA", items: ["House Rent Allowance Exemption", "Actual rent paid minus 10% salary"], limit: "As applicable" },
  { section: "NPS", items: ["National Pension System Tier-1", "Additional 80CCD(1B) benefit"], limit: "₹50,000" },
];

const slabs = {
  old: [
    { range: "Up to ₹2.5L", rate: "NIL" },
    { range: "₹2.5L – ₹5L", rate: "5%" },
    { range: "₹5L – ₹10L", rate: "20%" },
    { range: "Above ₹10L", rate: "30%" },
  ],
  new: [
    { range: "Up to ₹3L", rate: "NIL" },
    { range: "₹3L – ₹7L", rate: "5%" },
    { range: "₹7L – ₹10L", rate: "10%" },
    { range: "₹10L – ₹12L", rate: "15%" },
    { range: "₹12L – ₹15L", rate: "20%" },
    { range: "Above ₹15L", rate: "30%" },
  ],
};

export default function TaxSection() {
  return (
    <section id="tax" style={{ padding: "100px 24px", background: "var(--bg-card)", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ display: "inline-flex", background: "rgba(16,185,129,0.1)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}>
            Tax Planning
          </div>
          <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text-primary)", letterSpacing: "-0.5px", marginTop: "16px" }}>
            Save More Tax — Old vs New<br />
            <span className="gradient-text-green">Regime FY 2025-26</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "17px", marginTop: "12px", maxWidth: "520px", margin: "12px auto 0" }}>
            Our AI compares both regimes instantly and recommends the one that saves you more money.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px" }} className="tax-grid">
          {/* Old Regime */}
          <div className="card" style={{ padding: "28px", border: "2px solid rgba(37,99,235,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--text-primary)" }}>Old Regime</h3>
              <span style={{ background: "rgba(37,99,235,0.1)", color: "#2563EB", padding: "4px 12px", borderRadius: "99px", fontSize: "12px", fontWeight: 600 }}>With Deductions</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {slabs.old.map((s) => (
                <div key={s.range} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "var(--bg-light)", borderRadius: "8px" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "13px" }}>{s.range}</span>
                  <span style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "13px" }}>{s.rate}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", marginBottom: "12px" }}>Key deductions available:</p>
              {["80C (₹1.5L)", "80D (₹50K)", "HRA Exemption", "NPS (₹50K extra)", "Home Loan Interest"].map((d) => (
                <div key={d} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Check size={14} color="#10B981" />
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* New Regime */}
          <div className="card" style={{ padding: "28px", border: "2px solid rgba(16,185,129,0.25)", background: "linear-gradient(135deg, rgba(16,185,129,0.03) 0%, rgba(37,99,235,0.03) 100%)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--text-primary)" }}>New Regime</h3>
              <span style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", padding: "4px 12px", borderRadius: "99px", fontSize: "12px", fontWeight: 600 }}>Simplified Slabs</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {slabs.new.map((s) => (
                <div key={s.range} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "var(--bg-light)", borderRadius: "8px" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "13px" }}>{s.range}</span>
                  <span style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "13px" }}>{s.rate}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "10px", padding: "12px" }}>
              <p style={{ color: "#10B981", fontSize: "13px", fontWeight: 600 }}>✓ Standard deduction ₹75,000</p>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "4px" }}>No other deductions needed — simpler filing</p>
            </div>
          </div>
        </div>

        {/* Deduction cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "40px" }} className="deduction-grid">
          {deductions.map((d) => (
            <div key={d.section} className="card" style={{ padding: "20px" }}>
              <div style={{ fontWeight: 800, fontSize: "20px", color: "var(--primary-light)", marginBottom: "4px" }}>Section {d.section}</div>
              <div style={{ fontSize: "12px", color: "#10B981", fontWeight: 600, marginBottom: "12px" }}>Limit: {d.limit}</div>
              {d.items.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--primary-light)", flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/tax" className="btn-primary" style={{ background: "var(--gradient-green)", boxShadow: "0 8px 25px rgba(16,185,129,0.3)" }}>
            <IndianRupee size={18} /> Calculate My Tax Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tax-grid { grid-template-columns: 1fr !important; }
          .deduction-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .deduction-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
