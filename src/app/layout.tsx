import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* NAVBAR */}
        <nav style={{
          padding: "16px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          gap: "20px"
        }}>
          <Link href="/">Home</Link>
          <Link href="/red">Red</Link>
          <Link href="/white">White</Link>
          <Link href="/rose">Rosé</Link>
        </nav>

        {/* CONTEÚDO DAS PÁGINAS */}
        {children}
      </body>
    </html>
  );
}

