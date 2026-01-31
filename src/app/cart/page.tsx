"use client";

import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // ✅ TOTAL CORRETAMENTE CALCULADO
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Seu Carrinho</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-500">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    −
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ TOTAL */}
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">
              Total: R$ {total.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </main>
  );
}
