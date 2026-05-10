"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Wallet, Calculator, Shield, TrendingUp, Bot,
  Target, Bell, Settings, LogOut, Menu, ArrowUp, ArrowDown, Plus, Sparkles,
} from "lucide-react";
import { AreaChart, Area, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const navItems = [
  { icon: <LayoutDashboard size={17} />, label: "Dashboard", href: "/dashboard" },
  { icon: <Wallet size={17} />, label: "Expenses", href: "/dashboard" },
  { icon: <Calculator size={17} />, label: "Tax Planner", href: "/tax" },
  { icon: <Shield size={17} />, label: "Insurance", href: "/dashboard" },
  { icon: <TrendingUp size={17} />, label: "Investments", href: "/dashboard" },
  { icon: <Bot size={17} />, label: "AI Advisor", href: "/advisor" },
  { icon: <Target size={17} />, label: "Goals", href: "/dashboard" },
  { icon: <Bell size={17} />, label: "Reminders", href: "/dashboard" },
];

const incomeExpenseData = [
  { month: "Nov", income: 85000, expense: 51000 },
  { month: "Dec", income: 92000, expense: 58000 },
  { month: "Jan", income: 85000, expense: 49000 },
  { month: "Feb", income: 85000, expense: 52000 },
  { month: "Mar", income: 97000, expense: 55000 },
  { month: "Apr", income: 85000, expense: 48000 },
  { month: "May", income: 85000, expense: 52300 },
];

const expenseBreakdown = [
  { name: "Housing/Rent", value: 22000, color: "#7B9FE8" },
  { name: "Food & Dining", value: 8500, color: "#7EDCBA" },
  { name: "Transport", value: 4200, color: "#F8B48E" },
  { name: "Shopping", value: 6800, color: "#DDD3F8" },
  { name: "Medical", value: 3100, color: "#FCD7EC" },
  { name: "EMIs", value: 7700, color: "#FEF2C2" },
];

const sipData = [
  { name: "HDFC Mid Cap", invested: 60000, current: 78400, returns: "+30.7%" },
  { name: "Axis Bluechip", invested: 48000, current: 59200, returns: "+23.3%" },
  { name: "Parag Parikh Flexi", invested: 36000, current: 48600, returns: "+35%" },
];

const recentTx = [
  { desc: "Grocery — BigBasket", cat: "Food", date: "9 May", amt: -2840, icon: "🛒" },
  { desc: "Salary Credit", cat: "Income", date: "1 May", amt: 85000, icon: "💼" },
  { desc: "Petrol — BPCL", cat: "Fuel", date: "8 May", amt: -3200, icon: "⛽" },
  { desc: "Netflix Premium", cat: "Entertainment", date: "7 May", amt: -649, icon: "📺" },
  { desc: "HDFC SIP", cat: "Investment", date: "5 May", amt: -5000, icon: "📈" },
];

const goals = [
  { name: "Emergency Fund", target: 300000, current: 215000, color: "#52C9A0", icon: "🏦" },
  { name: "Family Holiday", target: 150000, current: 67000, color: "#7B9FE8", icon: "✈️" },
  { name: "New Car", target: 400000, current: 128000, color: "#F8B48E", icon: "🚗" },
];

export default function Dashboard({ children }: { children?: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [txForm, setTxForm] = useState({ desc: "", amt: "", cat: "Food", type: "expense" });
  const [txList, setTxList] = useState(recentTx);
  const pathname = usePathname();

  const addTransaction = () => {
    if (!txForm.desc || !txForm.amt) return;
    const newTx = { desc: txForm.desc, cat: txForm.cat, date: "Today", amt: txForm.type === "expense" ? -Math.abs(Number(txForm.amt)) : Math.abs(Number(txForm.amt)), icon: txForm.type === "expense" ? "💸" : "💰" };
    setTxList([newTx, ...txList]);
    setShowModal(false);
    setTxForm({ desc: "", amt: "", cat: "Food", type: "expense" });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg-light)" }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 99, backdropFilter: "blur(2px)" }} />
      )}

      {/* Add Transaction Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
          <div style={{ background: "var(--bg-card)", borderRadius: "20px", padding: "28px", width: "100%", maxWidth: "400px", boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}>
            <h3 style={{ fontWeight: 800, fontSize: "18px", color: "var(--text-primary)", marginBottom: "20px" }}>Add Transaction</h3>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              {["expense","income"].map(t => (
                <button key={t} onClick={() => setTxForm({...txForm, type: t})} style={{ flex:1, padding:"9px", borderRadius:"10px", border:"2px solid", borderColor: txForm.type===t?"var(--primary-light)":"var(--border)", background: txForm.type===t?"var(--primary-pastel)":"transparent", color: txForm.type===t?"var(--primary-dark)":"var(--text-secondary)", fontWeight:700, fontSize:"13px", cursor:"pointer", textTransform:"capitalize" }}>{t}</button>
              ))}
            </div>
            <input placeholder="Description" value={txForm.desc} onChange={e => setTxForm({...txForm, desc: e.target.value})} style={{ width:"100%", padding:"10px 14px", borderRadius:"10px", border:"1px solid var(--border)", background:"var(--bg-light)", color:"var(--text-primary)", fontSize:"14px", marginBottom:"12px" }} />
            <input type="number" placeholder="Amount (₹)" value={txForm.amt} onChange={e => setTxForm({...txForm, amt: e.target.value})} style={{ width:"100%", padding:"10px 14px", borderRadius:"10px", border:"1px solid var(--border)", background:"var(--bg-light)", color:"var(--text-primary)", fontSize:"14px", marginBottom:"12px" }} />
            <select value={txForm.cat} onChange={e => setTxForm({...txForm, cat: e.target.value})} style={{ width:"100%", padding:"10px 14px", borderRadius:"10px", border:"1px solid var(--border)", background:"var(--bg-light)", color:"var(--text-primary)", fontSize:"14px", marginBottom:"20px" }}>
              {["Food","Transport","Shopping","Medical","Housing","EMI","Investment","Income","Other"].map(c => <option key={c}>{c}</option>)}
            </select>
            <div style={{ display:"flex", gap:"10px" }}>
              <button onClick={() => setShowModal(false)} style={{ flex:1, padding:"11px", borderRadius:"10px", border:"1px solid var(--border)", background:"transparent", color:"var(--text-secondary)", fontWeight:600, cursor:"pointer" }}>Cancel</button>
              <button onClick={addTransaction} style={{ flex:2, padding:"11px", borderRadius:"10px", border:"none", background:"var(--gradient-primary)", color:"white", fontWeight:700, cursor:"pointer" }}>Add Transaction</button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside style={{
        width: 236, background: "var(--bg-card)", borderRight: "1px solid var(--border)",
        display: "flex", flexDirection: "column", position: "fixed", top: 0, height: "100vh", zIndex: 100,
        boxShadow: "2px 0 16px rgba(91,127,212,0.05)",
        transform: sidebarOpen ? "translateX(0)" : undefined,
      }} className="sidebar-desktop">
        <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid var(--border)" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "9px" }}>
            <div style={{ width: 32, height: 32, background: "var(--gradient-primary)", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sparkles size={16} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: "20px", letterSpacing: "-0.5px" }}>
              <span className="gradient-text">Fin</span>
              <span style={{ color: "var(--secondary)" }}>Wise</span>
            </span>
          </Link>
        </div>

        <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--primary-pastel)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)", fontWeight: 800, fontSize: "15px" }}>R</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "13px", color: "var(--text-primary)" }}>Rahul Sharma</div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>Pro Plan · AY 2025-26</div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: "10px 10px", overflowY: "auto" }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link key={item.label} href={item.href} style={{
              display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "10px", marginBottom: "2px",
              textDecoration: "none",
              background: isActive ? "var(--primary-pastel)" : "transparent",
              color: isActive ? "var(--primary-dark)" : "var(--text-secondary)",
              fontWeight: isActive ? 700 : 500, fontSize: "13px", transition: "all 0.2s",
            }}>
              {item.icon} {item.label}
            </Link>
          )})}
        </nav>

        <div style={{ padding: "10px", borderTop: "1px solid var(--border)" }}>
          {[{ icon: <Settings size={15} />, label: "Settings" }, { icon: <LogOut size={15} />, label: "Sign Out" }].map((item) => (
            <button key={item.label} style={{
              display: "flex", alignItems: "center", gap: "10px", width: "100%",
              padding: "9px 12px", borderRadius: "10px", border: "none",
              background: "transparent", color: "var(--text-muted)", fontWeight: 500, fontSize: "13px", cursor: "pointer",
            }}>{item.icon} {item.label}</button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, marginLeft: "236px" }} className="main-content">
        {/* Top bar */}
        <header style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "rgba(246,248,255,0.9)", backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)", padding: "0 24px", height: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)", display: "none", padding: "6px" }} className="mobile-menu-btn">
              <Menu size={20} />
            </button>
            <div>
              <h1 style={{ fontWeight: 700, fontSize: "17px", color: "var(--text-primary)" }}>Good evening, Rahul 👋</h1>
              <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>AY 2025-26 · May 2025 · Pro Plan</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "99px", background: "var(--secondary-pastel)" }}>
              <span style={{ color: "#1E7A5C", fontSize: "12px", fontWeight: 700 }}>AI Score: 92/100</span>
            </div>
            <button onClick={() => setShowModal(true)} style={{ display: "flex", alignItems: "center", gap: "7px", padding: "8px 16px", borderRadius: "10px", background: "var(--gradient-primary)", color: "white", border: "none", fontWeight: 600, fontSize: "13px", cursor: "pointer", boxShadow: "0 4px 12px rgba(91,127,212,0.3)" }}>
              <Plus size={14} /> Add Transaction
            </button>
          </div>
        </header>

        <div style={{ padding: "22px" }}>
          {children ? children : (
            <>
              {/* KPIs */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px", marginBottom: "20px" }} className="kpi-grid">
            {[
              { label: "Monthly Income", val: "₹85,000", change: "+8%", icon: <ArrowUp size={12} />, color: "var(--secondary)", bg: "var(--secondary-pastel)" },
              { label: "Total Expenses", val: "₹52,300", change: "-3%", icon: <ArrowDown size={12} />, color: "var(--accent)", bg: "var(--accent-pastel)" },
              { label: "Tax Saved (80C)", val: "₹1,50,000", change: "Limit used ✓", icon: null, color: "var(--primary)", bg: "var(--primary-pastel)" },
              { label: "Net Savings", val: "₹32,700", change: "+15%", icon: <ArrowUp size={12} />, color: "#9B7FD4", bg: "var(--purple-pastel)" },
            ].map((kpi) => (
              <div key={kpi.label} className="card" style={{ padding: "18px" }}>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500, marginBottom: "6px" }}>{kpi.label}</div>
                <div style={{ fontWeight: 800, fontSize: "21px", color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" }}>{kpi.val}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "3px", fontSize: "11px", fontWeight: 700, color: kpi.color, background: kpi.bg, padding: "3px 9px", borderRadius: "99px" }}>
                  {kpi.icon} {kpi.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "18px", marginBottom: "18px" }} className="charts-row">
            <div className="card" style={{ padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)" }}>Income vs Expenses</h3>
                <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Last 7 months</span>
              </div>
              <ResponsiveContainer width="100%" height={210}>
                <AreaChart data={incomeExpenseData}>
                  <defs>
                    <linearGradient id="incGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#52C9A0" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#52C9A0" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F4956A" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#F4956A" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--text-muted)" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "var(--text-muted)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
                  <Tooltip formatter={(v) => [`₹${Number(v).toLocaleString("en-IN")}`, ""]} contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "10px", fontSize: "12px" }} />
                  <Area type="monotone" dataKey="income" stroke="#52C9A0" strokeWidth={2.5} fill="url(#incGrad)" name="Income" />
                  <Area type="monotone" dataKey="expense" stroke="#F4956A" strokeWidth={2.5} fill="url(#expGrad)" name="Expense" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="card" style={{ padding: "22px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)", marginBottom: "14px" }}>Expense Breakdown</h3>
              <ResponsiveContainer width="100%" height={150}>
                <RePieChart>
                  <Pie data={expenseBreakdown} cx="50%" cy="50%" innerRadius={42} outerRadius={66} paddingAngle={3} dataKey="value">
                    {expenseBreakdown.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip formatter={(v) => [`₹${Number(v).toLocaleString("en-IN")}`, ""]} contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "11px" }} />
                </RePieChart>
              </ResponsiveContainer>
              {expenseBreakdown.slice(0, 4).map((e) => (
                <div key={e.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: e.color }} />
                    <span style={{ fontSize: "11px", color: "var(--text-secondary)" }}>{e.name}</span>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-primary)" }}>₹{e.value.toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "18px" }} className="bottom-grid">
            {/* Transactions */}
            <div className="card" style={{ padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "14px", color: "var(--text-primary)" }}>Recent Transactions</h3>
                <button onClick={() => setShowModal(true)} style={{ fontSize: "12px", color: "var(--primary)", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>+ Add</button>
              </div>
              {txList.map((tx, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "10px", borderBottom: i < txList.length - 1 ? "1px solid var(--border)" : "none", marginBottom: "10px" }}>
                  <div style={{ width: 34, height: 34, borderRadius: "9px", background: "var(--bg-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{tx.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{tx.desc}</div>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)" }}>{tx.cat} · {tx.date}</div>
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: tx.amt > 0 ? "var(--secondary)" : "var(--text-primary)", whiteSpace: "nowrap" }}>
                    {tx.amt > 0 ? "+" : ""}₹{Math.abs(tx.amt).toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>

            {/* SIP */}
            <div className="card" style={{ padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "14px", color: "var(--text-primary)" }}>SIP Portfolio</h3>
                <span style={{ fontSize: "11px", background: "var(--secondary-pastel)", color: "#1E7A5C", padding: "3px 9px", borderRadius: "99px", fontWeight: 600 }}>+28.4% XIRR</span>
              </div>
              <div style={{ marginBottom: "14px" }}>
                <div style={{ fontSize: "10px", color: "var(--text-muted)", marginBottom: "3px" }}>Total Portfolio Value</div>
                <div style={{ fontWeight: 800, fontSize: "24px", color: "var(--text-primary)", letterSpacing: "-0.5px" }}>₹1,86,200</div>
                <div style={{ fontSize: "12px", color: "var(--secondary)", fontWeight: 600 }}>Invested ₹1,44,000 · Gain ₹42,200</div>
              </div>
              {sipData.map((s) => (
                <div key={s.name} style={{ padding: "9px 0", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)" }}>{s.name}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--secondary)" }}>{s.returns}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>₹{s.invested.toLocaleString("en-IN")}</span>
                    <span style={{ fontSize: "10px", color: "var(--text-secondary)", fontWeight: 600 }}>₹{s.current.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Goals */}
            <div className="card" style={{ padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "14px", color: "var(--text-primary)" }}>Financial Goals</h3>
                <button style={{ fontSize: "12px", color: "var(--primary)", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>+ New Goal</button>
              </div>
              {goals.map((goal) => {
                const pct = Math.round((goal.current / goal.target) * 100);
                return (
                  <div key={goal.name} style={{ marginBottom: "18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <span style={{ fontSize: "16px" }}>{goal.icon}</span>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)" }}>{goal.name}</span>
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: goal.color }}>{pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${pct}%`, background: goal.color }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3px" }}>
                      <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>₹{goal.current.toLocaleString("en-IN")}</span>
                      <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>₹{goal.target.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                );
              })}
              <div style={{ background: "var(--primary-pastel)", borderRadius: "10px", padding: "12px", marginTop: "4px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "3px" }}>🤖 AI Tip</div>
                <p style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.5 }}>Increase your Emergency Fund SIP by ₹2,000/mo to reach target 4 months sooner.</p>
              </div>
            </div>
          </div>
          </>)}
        </div>
      </div>

      <style>{`
        .sidebar-desktop { left: 0; transition: transform 0.3s ease; }
        @media (max-width: 1024px) {
          .sidebar-desktop { transform: translateX(-100%); }
          .main-content { margin-left: 0 !important; }
          .mobile-menu-btn { display: flex !important; }
          .kpi-grid { grid-template-columns: repeat(2,1fr) !important; }
          .charts-row { grid-template-columns: 1fr !important; }
          .bottom-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { .kpi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
