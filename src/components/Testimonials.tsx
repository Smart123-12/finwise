"use client";
const testimonials = [
  { name: "Priya Mehta", city: "Ahmedabad", role: "Software Engineer", rating: 5, text: "FinWise showed me I was in the wrong tax regime! Switched to old regime and saved ₹38,000. The AI advisor is incredible.", color: "#5B7FD4" },
  { name: "Rajesh Kumar", city: "Bengaluru", role: "Salaried Professional", rating: 5, text: "Finally an app that understands Indian finance. The 80C, HRA and NPS calculations are spot on. My CA verified everything!", color: "#52C9A0" },
  { name: "Anita Shah", city: "Mumbai", role: "Freelancer", rating: 5, text: "As a freelancer, tracking advance tax was a nightmare. FinWise calculates it automatically and sends reminders. Lifesaver!", color: "#F4956A" },
  { name: "Vikram Nair", city: "Chennai", role: "Small Business Owner", rating: 5, text: "The insurance comparison saved me 30% on my family health cover. Found a better plan with higher claim ratio. Brilliant!", color: "#9B7FD4" },
  { name: "Sunita Joshi", city: "Pune", role: "Homemaker & Investor", rating: 5, text: "Hindi support makes it so easy for my parents. They track FD renewals and pension here. Very helpful for families.", color: "#E07FB0" },
  { name: "Arjun Patel", city: "Surat", role: "Government Employee", rating: 5, text: "The goal planner helped me plan my daughter's education fund. SIP recommendations were exactly what I needed!", color: "#F5C842" },
];
export default function Testimonials() {
  return (
    <section style={{ padding: "96px 24px", background: "var(--bg-card)", position: "relative", overflow: "hidden" }}>
      <div className="blob blob-purple" style={{ width: 400, height: 250, bottom: "-10%", left: "50%", transform: "translateX(-50%)", opacity: 0.5 }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label" style={{ display: "inline-flex" }}>Testimonials</div>
          <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(26px, 4vw, 44px)", color: "var(--text-primary)", letterSpacing: "-0.5px", marginTop: "16px" }}>
            Loved by <span className="gradient-text">50,000+ Indians</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginTop: "12px" }}>Real people, real savings, real results.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="test-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className="card animate-fade-in-up" style={{ padding: "26px", animationDelay: `${i * 0.08}s`, borderTop: `3px solid ${t.color}20` }}>
              <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                {Array.from({ length: t.rating }).map((_, j) => <span key={j} style={{ color: "#F5C842", fontSize: "14px" }}>★</span>)}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7, marginBottom: "18px" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid var(--border)", paddingTop: "14px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${t.color}22`, border: `2px solid ${t.color}44`, display: "flex", alignItems: "center", justifyContent: "center", color: t.color, fontWeight: 800, fontSize: "15px" }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{t.role} · {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.test-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.test-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
