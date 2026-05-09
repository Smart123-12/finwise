import type { Metadata } from "next";
import TaxCalculator from "@/components/TaxCalculator";

export const metadata: Metadata = {
  title: "Tax Calculator FY 2025-26 — FinWise",
  description: "Free Indian income tax calculator for FY 2025-26. Compare old vs new regime, calculate 80C, 80D, HRA, NPS deductions. Save more tax today.",
};

export default function TaxPage() {
  return <TaxCalculator />;
}
