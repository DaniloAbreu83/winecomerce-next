"use client";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Seu Carrinho</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">
          Seu carrinho está vazio.
        </p>
      ) : (
        <ul className="space-y-4">
          {cart.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
            >
              <div>
                <ProductCard product={product} />
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="font-semibold">
                  R$ {product.price.toFixed(2)}
                </span>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
