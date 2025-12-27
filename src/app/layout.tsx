import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/contexts/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          {/* NAVBAR */}
          <nav
            style={{
              padding: "16px",
              borderBottom: "1px solid #ddd",
              display: "flex",
              gap: "20px",
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/red">Red</Link>
            <Link href="/white">White</Link>
            <Link href="/rose">Rosé</Link>
          </nav>

          {/* PÁGINAS */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}


