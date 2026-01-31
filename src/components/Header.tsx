"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 border-b border-gray-800 bg-black text-white">
      <h1 className="text-2xl font-bold">
        🍷 WineCommerce
      </h1>

      <nav className="flex gap-6 text-lg">
        <Link href="/" className="hover:text-red-500 transition">Home</Link>
        <Link href="/red" className="hover:text-red-500 transition">Red</Link>
        <Link href="/rose" className="hover:text-red-500 transition">Rosé</Link>
        <Link href="/white" className="hover:text-red-500 transition">White</Link>
        <Link href="/cart" className="hover:text-red-500 transition">🛒 Carrinho</Link>
      </nav>
    </header>
  );
}
