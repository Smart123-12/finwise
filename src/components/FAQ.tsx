"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Is AarthIQ free to use?",
    a: "Yes! AarthIQ offers a generous free plan with expense tracking, basic tax calculator, and investment overview. Premium plans unlock AI advisor, insurance comparison, and advanced analytics.",
  },
  {
    q: "Does AarthIQ support both old and new tax regimes for FY 2025-26?",
    a: "Absolutely. Our tax calculator fully supports FY 2025-26 calculations under both old regime (with 80C, 80D, HRA, NPS, home loan deductions) and the new simplified regime with updated slabs.",
  },
  {
    q: "How safe is my financial data?",
    a: "We use bank-level 256-bit AES encryption for all data at rest and TLS 1.3 for data in transit. We never store your bank passwords or OTPs. Your data is never sold to third parties.",
  },
  {
    q: "Can I use AarthIQ in Hindi or Gujarati?",
    a: "Yes! AarthIQ supports English, Hindi, and Gujarati. Switch languages anytime from the settings panel — all UI text, labels, and financial terms are fully translated.",
  },
  {
    q: "Does it work on mobile phones?",
    a: "AarthIQ is built mobile-first. It works perfectly on all screen sizes. A dedicated mobile app for Android and iOS is coming soon — join our waitlist to get early access.",
  },
  {
    q: "Can I track multiple family members' finances?",
    a: "With our Family Plan, you can add up to 5 family members and get a consolidated family financial health dashboard, separate budgets, and combined tax planning.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: "100px 24px",
        background: "var(--bg-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orb */}
      <div
        className="orb orb-blue"
        style={{ width: 400, height: 400, top: "10%", right: "-10%", opacity: 0.5 }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ justifyContent: "center", display: "inline-flex" }}>
            FAQ
          </div>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              marginTop: "16px",
            }}
          >
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "17px", marginTop: "12px" }}>
            Everything you need to know about AarthIQ
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                border: open === i ? "1px solid rgba(37,99,235,0.3)" : "1px solid var(--border)",
                transition: "all 0.3s ease",
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 24px",
                  gap: "16px",
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    color: open === i ? "var(--primary-light)" : "var(--text-primary)",
                    transition: "color 0.2s",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </h3>
                <div
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: "8px",
                    background: open === i ? "rgba(37,99,235,0.1)" : "var(--bg-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open === i ? "var(--primary-light)" : "var(--text-muted)",
                    transition: "all 0.2s",
                  }}
                >
                  {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    animation: "fadeInUp 0.2s ease",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
