import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fauzi Taufik | Full Stack Developer",
    template: "%s | Fauzi Taufik",
  },
  description: "Portofolio Fauzi Taufik, Full Stack Developer yang berfokus pada pengembangan aplikasi web dan solusi digital modern.",
  keywords: ["Fauzi Taufik", "Full Stack Developer", "Web Developer", "Laravel", "Next.js", "Portfolio"],
  authors: [
    {
      name: "Fauzi Taufik",
    },
  ],
  openGraph: {
    title: "Fauzi Taufik | Full Stack Developer",
    description: "Portofolio profesional Fauzi Taufik.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
