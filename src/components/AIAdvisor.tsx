"use client";
import { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AIAdvisor() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi Rahul! I'm your FinWise AI Advisor. Based on your spending, I noticed you could reach your 'Emergency Fund' goal 4 months earlier by increasing your SIP by ₹2,000/month. Would you like me to help you rebalance your budget?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { id: Date.now(), text: input, sender: "user" }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "That sounds like a great plan! I've updated your projected financial snapshot. To achieve this, we could reduce the 'Food & Dining' budget from ₹8,500 to ₹6,500. Does that work for you?", 
        sender: "ai" 
      }]);
    }, 1200);
  };

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 120px)", overflow: "hidden" }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "12px", background: "var(--bg-light)" }}>
        <div style={{ width: 42, height: 42, borderRadius: "12px", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
          <Sparkles size={20} />
        </div>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: "18px", color: "var(--text-primary)" }}>AI Financial Advisor</h2>
          <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Powered by advanced AI to optimize your wealth.</p>
        </div>
      </div>

      <div style={{ flex: 1, padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "20px", background: "var(--bg-light)" }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ display: "flex", gap: "14px", flexDirection: msg.sender === "user" ? "row-reverse" : "row" }}>
            <div style={{ 
              width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: msg.sender === "user" ? "var(--primary-pastel)" : "var(--gradient-primary)",
              color: msg.sender === "user" ? "var(--primary-dark)" : "white"
            }}>
              {msg.sender === "user" ? <User size={18} /> : <Bot size={18} />}
            </div>
            <div style={{ 
              background: msg.sender === "user" ? "var(--primary)" : "var(--bg-card)",
              color: msg.sender === "user" ? "white" : "var(--text-primary)",
              padding: "14px 18px", borderRadius: "16px", maxWidth: "75%",
              border: msg.sender === "user" ? "none" : "1px solid var(--border)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              fontSize: "14px", lineHeight: "1.6"
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "20px 24px", borderTop: "1px solid var(--border)", background: "var(--bg-card)" }}>
        <form onSubmit={sendMessage} style={{ display: "flex", gap: "12px" }}>
          <input 
            type="text" 
            value={input} 
            onChange={e => setInput(e.target.value)}
            placeholder="Ask anything about your finances..." 
            style={{ 
              flex: 1, padding: "14px 20px", borderRadius: "99px", 
              border: "1px solid var(--border)", background: "var(--bg-light)", 
              fontSize: "14px", color: "var(--text-primary)", outline: "none"
            }} 
          />
          <button 
            type="submit" 
            style={{ 
              width: 48, height: 48, borderRadius: "50%", border: "none", 
              background: "var(--gradient-primary)", color: "white", 
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", flexShrink: 0, boxShadow: "0 4px 12px rgba(37,99,235,0.3)"
            }}
          >
            <Send size={20} />
          </button>
        </form>
        <div style={{ textAlign: "center", marginTop: "12px", fontSize: "11px", color: "var(--text-muted)" }}>
          FinWise AI can make mistakes. Consider verifying important financial decisions.
        </div>
      </div>
    </div>
  );
}
