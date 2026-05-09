"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, IndianRupee, Check, Info, TrendingDown } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend,
} from "recharts";

// Tax calculation helpers
function calcTaxOld(taxableIncome: number): number {
  let tax = 0;
  if (taxableIncome <= 250000) return 0;
  if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
  else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
  else tax = 112500 + (taxableIncome - 1000000) * 0.30;
  // Rebate 87A
  if (taxableIncome <= 500000) tax = 0;
  return Math.round(tax);
}

function calcTaxNew(taxableIncome: number): number {
  let tax = 0;
  const slabs = [
    [300000, 0],
    [700000, 0.05],
    [1000000, 0.10],
    [1200000, 0.15],
    [1500000, 0.20],
    [Infinity, 0.30],
  ];
  let prev = 0;
  for (const [limit, rate] of slabs) {
    if (taxableIncome <= prev) break;
    const taxable = Math.min(taxableIncome, Number(limit)) - prev;
    tax += taxable * Number(rate);
    prev = Number(limit);
    if (taxableIncome <= Number(limit)) break;
  }
  // Rebate 87A (new regime: up to 7L)
  if (taxableIncome <= 700000) tax = 0;
  return Math.round(tax);
}

const CESS = 0.04;

export default function TaxCalculator() {
  const [income, setIncome] = useState(1200000);
  const [deductions, setDeductions] = useState({
    section80C: 150000, section80D: 25000, hra: 120000,
    nps: 50000, homeLoan: 200000, educationLoan: 0, lta: 0,
  });
  const [age, setAge] = useState<"below60" | "60to80" | "above80">("below60");

  const results = useMemo(() => {
    // Old regime
    const totalDeductions = Math.min(deductions.section80C, 150000)
      + Math.min(deductions.section80D, age === "below60" ? 25000 : 50000)
      + deductions.hra + Math.min(deductions.nps, 50000)
      + Math.min(deductions.homeLoan, 200000) + deductions.educationLoan + deductions.lta;
    const stdDeduction = 50000;
    const oldTaxable = Math.max(0, income - stdDeduction - totalDeductions);
    const oldTax = calcTaxOld(oldTaxable);
    const oldCess = Math.round(oldTax * CESS);
    const oldTotal = oldTax + oldCess;

    // New regime
    const newStdDed = 75000;
    const newTaxable = Math.max(0, income - newStdDed);
    const newTax = calcTaxNew(newTaxable);
    const newCess = Math.round(newTax * CESS);
    const newTotal = newTax + newCess;

    const betterRegime = oldTotal <= newTotal ? "old" : "new";
    const savings = Math.abs(oldTotal - newTotal);

    return { oldTaxable, oldTax, oldCess, oldTotal, newTaxable, newTax, newCess, newTotal, betterRegime, savings, totalDeductions };
  }, [income, deductions, age]);

  const chartData = [
    { name: "Old Regime", tax: results.oldTotal, taxable: results.oldTaxable, color: "#3B82F6" },
    { name: "New Regime", tax: results.newTotal, taxable: results.newTaxable, color: "#10B981" },
  ];

  const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-light)", paddingTop: "80px" }}>
      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "var(--bg-card)", borderBottom: "1px solid var(--border)", height: 60, display: "flex", alignItems: "center", padding: "0 24px", gap: "16px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "var(--text-secondary)", fontSize: "13px" }}>
          <ArrowLeft size={15} /> Back to Home
        </Link>
        <div style={{ width: 1, height: 18, background: "var(--border)" }} />
        <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "15px" }}>Tax Calculator — FY 2025-26</span>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label" style={{ display: "inline-flex", marginBottom: "16px" }}>FY 2025-26</div>
          <h1 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(26px, 4vw, 42px)", color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
            Indian Income Tax Calculator<br />
            <span className="gradient-text">FY 2025-26 (AY 2026-27)</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginTop: "12px" }}>
            Compare old vs new tax regime. Includes all deductions — 80C, 80D, HRA, NPS & more.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "28px" }} className="tax-layout">
          {/* Input Panel */}
          <div>
            {/* Income */}
            <div className="card" style={{ padding: "24px", marginBottom: "20px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--text-primary)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <IndianRupee size={18} color="#10B981" /> Income Details
              </h3>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>Annual Gross Income</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: "16px" }}>₹</span>
                  <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))}
                    style={{ width: "100%", padding: "12px 14px 12px 32px", borderRadius: "10px", border: "1px solid var(--border)", background: "var(--bg-light)", color: "var(--text-primary)", fontSize: "16px", fontWeight: 600 }} />
                </div>
                <input type="range" min={100000} max={5000000} step={50000} value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  style={{ width: "100%", marginTop: "10px", accentColor: "#2563EB" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-muted)" }}>
                  <span>₹1L</span><span>{fmt(income)}</span><span>₹50L</span>
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>Age Category</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  {[["below60", "Below 60"], ["60to80", "60-80 yrs"], ["above80", "Above 80"]].map(([val, label]) => (
                    <button key={val} onClick={() => setAge(val as typeof age)}
                      style={{ flex: 1, padding: "8px", borderRadius: "8px", border: "2px solid", borderColor: age === val ? "var(--primary-light)" : "var(--border)", background: age === val ? "rgba(37,99,235,0.08)" : "transparent", color: age === val ? "var(--primary-light)" : "var(--text-secondary)", fontWeight: 600, fontSize: "12px", cursor: "pointer" }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div className="card" style={{ padding: "24px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--text-primary)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <TrendingDown size={18} color="#3B82F6" /> Deductions (Old Regime)
              </h3>
              {[
                { key: "section80C", label: "Section 80C", placeholder: "ELSS, PPF, LIC...", max: 150000 },
                { key: "section80D", label: "Section 80D", placeholder: "Health Insurance...", max: 50000 },
                { key: "hra", label: "HRA Exemption", placeholder: "House rent allowance", max: 0 },
                { key: "nps", label: "NPS 80CCD(1B)", placeholder: "Additional NPS...", max: 50000 },
                { key: "homeLoan", label: "Home Loan Interest", placeholder: "Section 24(b)...", max: 200000 },
                { key: "educationLoan", label: "Education Loan", placeholder: "Section 80E...", max: 0 },
              ].map((d) => (
                <div key={d.key} style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>{d.label}</label>
                    {d.max > 0 && <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Max: {fmt(d.max)}</span>}
                  </div>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: "13px" }}>₹</span>
                    <input type="number" value={deductions[d.key as keyof typeof deductions]}
                      onChange={(e) => setDeductions({ ...deductions, [d.key]: Number(e.target.value) })}
                      style={{ width: "100%", padding: "9px 10px 9px 24px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg-light)", color: "var(--text-primary)", fontSize: "14px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Panel */}
          <div>
            {/* Recommendation Banner */}
            <div style={{
              padding: "20px 24px", borderRadius: "16px", marginBottom: "20px",
              background: results.betterRegime === "old" ? "var(--gradient-primary)" : "var(--gradient-green)",
              color: "white", position: "relative", overflow: "hidden",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, opacity: 0.85, marginBottom: "4px" }}>AI Recommendation</div>
              <div style={{ fontWeight: 800, fontSize: "20px" }}>
                {results.betterRegime === "old" ? "Old Regime" : "New Regime"} saves you more! 🎉
              </div>
              <div style={{ fontSize: "15px", opacity: 0.9, marginTop: "4px" }}>
                You save <strong>{fmt(results.savings)}</strong> extra per year
              </div>
            </div>

            {/* Comparison Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
              {[
                { label: "Old Regime Tax", total: results.oldTotal, taxable: results.oldTaxable, tax: results.oldTax, cess: results.oldCess, isBetter: results.betterRegime === "old" },
                { label: "New Regime Tax", total: results.newTotal, taxable: results.newTaxable, tax: results.newTax, cess: results.newCess, isBetter: results.betterRegime === "new" },
              ].map((r) => (
                <div key={r.label} className="card" style={{ padding: "20px", border: r.isBetter ? "2px solid rgba(16,185,129,0.4)" : "1px solid var(--border)", position: "relative" }}>
                  {r.isBetter && (
                    <div style={{ position: "absolute", top: -10, right: 12, background: "#10B981", color: "white", fontSize: "10px", fontWeight: 700, padding: "2px 10px", borderRadius: "99px" }}>BEST FOR YOU</div>
                  )}
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "8px" }}>{r.label}</div>
                  <div style={{ fontWeight: 800, fontSize: "24px", color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "12px" }}>{fmt(r.total)}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Taxable Income</span><span style={{ fontWeight: 600, color: "var(--text-secondary)" }}>{fmt(r.taxable)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Income Tax</span><span style={{ fontWeight: 600, color: "var(--text-secondary)" }}>{fmt(r.tax)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Health & Ed Cess 4%</span><span style={{ fontWeight: 600, color: "var(--text-secondary)" }}>{fmt(r.cess)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="card" style={{ padding: "24px", marginBottom: "20px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)", marginBottom: "16px" }}>Tax Comparison</h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={chartData} barGap={12}>
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: "var(--text-secondary)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: "var(--text-muted)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
                  <Tooltip formatter={(v: number) => [fmt(v), "Tax"]} contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "13px" }} />
                  <Bar dataKey="tax" radius={[6, 6, 0, 0]}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Deduction summary */}
            <div className="card" style={{ padding: "20px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)", marginBottom: "16px" }}>Old Regime — Deduction Summary</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  ["Standard Deduction", 50000],
                  ["Section 80C", Math.min(deductions.section80C, 150000)],
                  ["Section 80D", deductions.section80D],
                  ["HRA", deductions.hra],
                  ["NPS 80CCD(1B)", Math.min(deductions.nps, 50000)],
                  ["Home Loan Interest", Math.min(deductions.homeLoan, 200000)],
                ].map(([label, val]) => (
                  <div key={label as string} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{label}</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#10B981" }}>− {fmt(val as number)}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>Total Deductions</span>
                  <span style={{ fontSize: "14px", fontWeight: 800, color: "var(--primary-light)" }}>{fmt(results.totalDeductions + 50000)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tax-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
