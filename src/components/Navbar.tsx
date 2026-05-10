"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Sparkles, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Features", href: "#features",
    submenu: [
      { label: "Expense Tracker", href: "#features" },
      { label: "Tax Calculator", href: "/tax", isInternal: true },
      { label: "Insurance", href: "#insurance" },
      { label: "Investments", href: "#investments" },
    ],
  },
  { label: "Tax Planner", href: "/tax", isInternal: true },
  { label: "Dashboard", href: "/dashboard", isInternal: true },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("theme");
    if (t === "dark") { setDark(true); document.documentElement.classList.add("dark"); }
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const n = !dark;
    setDark(n);
    document.documentElement.classList.toggle("dark", n);
    localStorage.setItem("theme", n ? "dark" : "light");
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all 0.3s ease",
      background: scrolled ? (dark ? "rgba(13,17,32,0.92)" : "rgba(255,255,255,0.88)") : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      boxShadow: scrolled ? "0 2px 16px rgba(91,127,212,0.08)" : "none",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 36, height: 36, background: "var(--gradient-primary)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(91,127,212,0.35)" }}>
            <Sparkles size={18} color="white" />
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "22px", letterSpacing: "-0.5px" }}>
            <span className="gradient-text">Fin</span>
            <span style={{ color: "var(--secondary)" }}>Wise</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <div key={link.label} style={{ position: "relative" }}
              onMouseEnter={() => link.submenu && setActiveSub(link.label)}
              onMouseLeave={() => setActiveSub(null)}>
              {link.isInternal ? (
                <Link href={link.href} style={{
                  display: "flex", alignItems: "center", gap: "4px", padding: "8px 14px", borderRadius: "10px",
                  textDecoration: "none", color: "var(--text-secondary)", fontWeight: 500, fontSize: "14px", transition: "all 0.2s",
                }} className="hover:text-blue-500">
                  {link.label} {link.submenu && <ChevronDown size={13} />}
                </Link>
              ) : (
                <a href={link.href} style={{
                  display: "flex", alignItems: "center", gap: "4px", padding: "8px 14px", borderRadius: "10px",
                  textDecoration: "none", color: "var(--text-secondary)", fontWeight: 500, fontSize: "14px", transition: "all 0.2s",
                }} className="hover:text-blue-500">
                  {link.label} {link.submenu && <ChevronDown size={13} />}
                </a>
              )}
              {link.submenu && activeSub === link.label && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, background: "var(--bg-card)",
                  border: "1px solid var(--border)", borderRadius: "14px", padding: "8px", minWidth: "180px",
                  boxShadow: "var(--shadow-md)", animation: "fadeInUp 0.15s ease",
                }}>
                  {link.submenu.map((sub) => (
                    sub.isInternal ? (
                      <Link key={sub.label} href={sub.href} style={{
                        display: "block", padding: "8px 12px", borderRadius: "8px", textDecoration: "none",
                        color: "var(--text-secondary)", fontSize: "14px", fontWeight: 500, transition: "all 0.15s",
                      }} className="hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-500">
                        {sub.label}
                      </Link>
                    ) : (
                      <a key={sub.label} href={sub.href} style={{
                        display: "block", padding: "8px 12px", borderRadius: "8px", textDecoration: "none",
                        color: "var(--text-secondary)", fontSize: "14px", fontWeight: 500, transition: "all 0.15s",
                      }} className="hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-500">
                        {sub.label}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={toggleDark} style={{
            width: 36, height: 36, borderRadius: "10px", border: "1px solid var(--border)",
            background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "var(--text-secondary)", transition: "all 0.2s",
          }} aria-label="Toggle theme">
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <Link href="/dashboard" className="btn-primary hidden md:inline-flex" style={{ padding: "9px 20px", fontSize: "14px" }}>
            Open App
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} style={{
            width: 36, height: 36, borderRadius: "10px", border: "1px solid var(--border)",
            background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "var(--text-secondary)",
          }} className="md:hidden">
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "16px 24px 24px", animation: "fadeInUp 0.2s ease" }} className="md:hidden">
          {navLinks.map((link) => (
            link.isInternal ? (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} style={{
                display: "block", padding: "12px 0", borderBottom: "1px solid var(--border)",
                textDecoration: "none", color: "var(--text-primary)", fontWeight: 500, fontSize: "15px",
              }}>{link.label}</Link>
            ) : (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} style={{
                display: "block", padding: "12px 0", borderBottom: "1px solid var(--border)",
                textDecoration: "none", color: "var(--text-primary)", fontWeight: 500, fontSize: "15px",
              }}>{link.label}</a>
            )
          ))}
          <Link href="/dashboard" className="btn-primary" style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}>
            Open FinWise Free
          </Link>
        </div>
      )}
    </nav>
  );
}
