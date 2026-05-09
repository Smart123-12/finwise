import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FinWise — Smart Finance Management for Every Indian Family",
  description: "Track expenses, save taxes, manage investments, and secure your future — all in one platform. India's most comprehensive personal finance app for salaried employees, freelancers and families.",
  keywords: "finance tracker India, tax saving app India, budgeting app India, insurance comparison India, SIP planner India, personal finance app India, FinWise",
  authors: [{ name: "FinWise" }],
  openGraph: {
    title: "FinWise — Smart Finance Management for Every Indian Family",
    description: "Track expenses, save taxes, manage investments, and secure your future — all in one platform.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinWise — Smart Finance for Indians",
    description: "Tax saving, expense tracking, insurance comparison & investments — all in one app.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme')||'light';document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
