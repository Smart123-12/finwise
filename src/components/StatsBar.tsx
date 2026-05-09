"use client";
const stats = [
  { val: "50,000+", label: "Indian Families", icon: "🏠", color: "var(--primary-pastel)" },
  { val: "₹12 Cr+", label: "Tax Saved", icon: "💰", color: "var(--yellow-pastel)" },
  { val: "₹340 Cr+", label: "SIPs Tracked", icon: "📈", color: "var(--secondary-pastel)" },
  { val: "4.8★", label: "App Rating", icon: "⭐", color: "var(--accent-pastel)" },
  { val: "2L+", label: "Expenses Logged", icon: "📊", color: "var(--purple-pastel)" },
  { val: "99.9%", label: "Uptime SLA", icon: "🛡️", color: "var(--pink-pastel)" },
];
export default function StatsBar() {
  return (
    <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "28px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "16px" }} className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ width: 40, height: 40, borderRadius: "12px", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", fontSize: "18px" }}>{s.icon}</div>
            <div style={{ fontWeight: 800, fontSize: "20px", color: "var(--text-primary)", letterSpacing: "-0.5px" }}>{s.val}</div>
            <div style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500, marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:1024px){.stats-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:480px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}
