"use client";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Product: ["Expense Tracker", "Tax Calculator", "Insurance Compare", "Investment Tracker", "AI Advisor", "EMI Calculator"],
  Company: ["About Us", "Careers", "Press", "Blog", "Partners", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Security", "Refund Policy"],
  Resources: ["Help Center", "API Docs", "Community", "Tax Guide 2025-26", "Webinars", "Financial Glossary"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0D1120", color: "rgba(255,255,255,0.65)", paddingTop: "72px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 200, background: "radial-gradient(ellipse, rgba(91,127,212,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "48px", paddingBottom: "56px", borderBottom: "1px solid rgba(255,255,255,0.07)" }} className="footer-top">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <div style={{ width: 38, height: 38, background: "var(--gradient-primary)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={18} color="white" />
              </div>
              <span style={{ fontWeight: 800, fontSize: "22px", letterSpacing: "-0.5px" }}>
                <span style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Fin</span>
                <span style={{ color: "#52C9A0" }}>Wise</span>
              </span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.8, marginBottom: "24px", maxWidth: "260px", color: "rgba(255,255,255,0.45)" }}>
              Smart finance management for every Indian family. Track, save, invest, and insure — all in one trusted platform.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: <Mail size={13} />, text: "hello@finwise.in" },
                { icon: <Phone size={13} />, text: "+91 98765 43210" },
                { icon: <MapPin size={13} />, text: "Ahmedabad, Gujarat, India" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                  <span style={{ color: "#7B9FE8" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "22px" }}>
              {["𝕏", "in", "ig", "yt"].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 34, height: 34, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "11px", fontWeight: 700, transition: "all 0.2s",
                }} className="hover:border-blue-400 hover:text-blue-400">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", marginBottom: "18px", letterSpacing: "0.8px", textTransform: "uppercase" }}>{heading}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }} className="hover:text-blue-400">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", flexWrap: "wrap", gap: "14px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>
            © 2025 FinWise Technologies Pvt. Ltd. All rights reserved. | AMFI Registered | SEBI Compliant
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.28)", textDecoration: "none", fontSize: "12px" }} className="hover:text-blue-400">{item}</a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "14px 0", fontSize: "11px", color: "rgba(255,255,255,0.18)", lineHeight: 1.6 }}>
          Disclaimer: Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Tax calculations are for informational purposes. Please consult a qualified financial advisor.
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.footer-top{grid-template-columns:1fr 1fr!important;gap:32px!important}}
        @media(max-width:480px){.footer-top{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}
