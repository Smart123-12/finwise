import type { Metadata } from "next";
import Dashboard from "@/components/Dashboard";
import AIAdvisor from "@/components/AIAdvisor";

export const metadata: Metadata = {
  title: "AI Advisor — FinWise",
  description: "Get personalized financial advice powered by AI.",
};

export default function AdvisorPage() {
  return (
    <Dashboard>
      <AIAdvisor />
    </Dashboard>
  );
}
