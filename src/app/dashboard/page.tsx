import type { Metadata } from "next";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard — FinWise",
  description: "Your personal finance dashboard — income, expenses, tax savings, SIPs and insurance at a glance.",
};

export default function DashboardPage() {
  return <Dashboard />;
}
