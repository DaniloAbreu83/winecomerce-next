"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex items-center gap-6 px-6 py-4 border-b border-gray-300">
      <Link href="/" className="font-semibold hover:text-red-600">
        Home
      </Link>

      <Link href="/red" className="hover:text-red-600">
        Red
      </Link>

      <Link href="/white" className="hover:text-red-600">
        White
      </Link>

      <Link href="/rose" className="hover:text-red-600">
        Rosé
      </Link>

      {/* Empurra o carrinho para a direita */}
      <div className="ml-auto">
        <Link
          href="/cart"
          className="flex items-center gap-2 font-semibold hover:text-red-600"
        >
          🛒 Carrinho
          <span className="bg-red-600 text-white text-sm px-2 py-1 rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}
