"use client";
import { Check, Zap } from "lucide-react";
const plans = [
  { name: "Free", price: "₹0", period: "Forever", desc: "Perfect for getting started", accent: "#5B7FD4", pastel: "var(--primary-pastel)", features: ["Expense tracking (100/mo)", "Basic budget planner", "Tax regime comparison", "2 financial goals", "Community support"], cta: "Start Free", style: "ghost", popular: false },
  { name: "Pro", price: "₹299", period: "per month", desc: "For serious financial planning", accent: "#52C9A0", pastel: "var(--secondary-pastel)", features: ["Unlimited expense tracking", "AI financial advisor", "Full tax calculator (80C–80U)", "Insurance comparison", "SIP & investment tracker", "CSV & PDF reports", "WhatsApp reminders", "Hindi/Gujarati support", "Priority support"], cta: "Start 14-day Trial", style: "primary", popular: true },
  { name: "Family", price: "₹499", period: "per month", desc: "For the whole family", accent: "#9B7FD4", pastel: "var(--purple-pastel)", features: ["Everything in Pro", "Up to 5 family members", "Family dashboard", "Joint goal planning", "AI receipt scanner", "Voice assistant (Hindi/Gujarati)", "Dedicated advisor chat", "Tax filing assistance"], cta: "Start Family Plan", style: "purple", popular: false },
];
export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: "96px 24px", background: "var(--bg-light)", position: "relative", overflow: "hidden" }}>
      <div className="blob blob-blue" style={{ width: 360, height: 360, top: "5%", left: "5%", opacity: 0.5 }} />
      <div className="blob blob-purple" style={{ width: 300, height: 300, bottom: "5%", right: "5%", opacity: 0.45 }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label" style={{ display: "inline-flex" }}>Pricing</div>
          <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(26px, 4vw, 44px)", color: "var(--text-primary)", letterSpacing: "-0.5px", marginTop: "16px" }}>
            Simple, Transparent<br /><span className="gradient-text">Pricing for Indians</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "12px" }}>No hidden charges. Cancel anytime. Save more than you pay.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px", alignItems: "start" }} className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className="card" style={{
              padding: "30px", position: "relative",
              border: plan.popular ? `2px solid ${plan.accent}55` : "1px solid var(--border)",
              transform: plan.popular ? "scale(1.04)" : "scale(1)",
              boxShadow: plan.popular ? `0 20px 50px ${plan.accent}20` : "var(--shadow)",
            }}>
              {plan.popular && (
                <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg, ${plan.accent}, #7EDCBA)`, color: "white", padding: "4px 18px", borderRadius: "99px", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", gap: "5px", whiteSpace: "nowrap" }}>
                  <Zap size={11} /> Most Popular
                </div>
              )}
              <div style={{ width: 44, height: 44, borderRadius: "12px", background: plan.pastel, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", fontSize: "22px" }}>
                {plan.name === "Free" ? "🌱" : plan.name === "Pro" ? "⚡" : "👨‍👩‍👧‍👦"}
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "17px", color: "var(--text-primary)" }}>{plan.name}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "3px" }}>{plan.desc}</p>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontWeight: 800, fontSize: "38px", color: "var(--text-primary)", letterSpacing: "-1px" }}>{plan.price}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "13px", marginLeft: "5px" }}>/{plan.period}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "24px" }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: plan.pastel, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <Check size={10} color={plan.accent} />
                    </div>
                    <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%", padding: "13px",
                background: plan.style === "primary" ? `linear-gradient(135deg, ${plan.accent}, #7EDCBA)` : plan.style === "purple" ? "var(--gradient-purple)" : "transparent",
                color: plan.style === "ghost" ? "var(--primary)" : "white",
                border: plan.style === "ghost" ? "1.5px solid var(--primary-pastel)" : "none",
                borderRadius: "12px", fontWeight: 600, fontSize: "14px", cursor: "pointer",
                boxShadow: plan.style !== "ghost" ? `0 4px 16px ${plan.accent}33` : "none",
                transition: "all 0.2s",
              }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "12px", marginTop: "28px" }}>
          All plans include 14-day money-back guarantee · Secure payments via Razorpay · GST invoice
        </p>
      </div>
      <style>{`@media(max-width:900px){.pricing-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
