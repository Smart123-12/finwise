"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section style={{ padding: "96px 24px", background: "var(--bg-soft)", position: "relative", overflow: "hidden" }}>
      <div className="blob blob-blue" style={{ width: 500, height: 300, top: "-20%", left: "50%", transform: "translateX(-50%)", opacity: 0.7 }} />
      <div className="blob blob-green" style={{ width: 300, height: 300, bottom: "-15%", left: "10%", opacity: 0.6 }} />
      <div className="blob blob-peach" style={{ width: 250, height: 250, bottom: "-15%", right: "10%", opacity: 0.6 }} />

      <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "7px 16px", borderRadius: "99px", background: "var(--secondary-pastel)", marginBottom: "24px" }}>
          <span style={{ fontSize: "14px" }}>📱</span>
          <span style={{ color: "#1E7A5C", fontSize: "12px", fontWeight: 700 }}>Mobile App Coming Soon</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(30px, 5vw, 52px)", color: "var(--text-primary)", letterSpacing: "-1px", lineHeight: 1.15, marginBottom: "18px" }}>
          Start Your Financial<br /><span className="gradient-text">Freedom Today</span>
        </h2>

        <p style={{ color: "var(--text-secondary)", fontSize: "17px", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px" }}>
          Join 50,000+ Indian families who are saving smarter, investing better, and paying less tax with FinWise.
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/dashboard" className="btn-primary" style={{ fontSize: "15px", padding: "14px 28px" }}>
            Start Free — No Card <ArrowRight size={17} />
          </Link>
          <Link href="/tax" className="btn-secondary">
            Calculate Tax Free
          </Link>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "20px" }}>
          Free forever · No credit card needed · Takes 2 minutes to setup
        </p>
      </div>
    </section>
  );
}
