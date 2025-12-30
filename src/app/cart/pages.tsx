"use client";

import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();


    return (    
        <main style={{ padding: "20px" }}>
            <h1>🛒 Seu Carrinho</h1>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}> 
                        <div style={{marginBottom: "10px"}}>
                            <ProductCard product={product} />
                        </div>
                            {product.name} - R$ {product.price.toFixed(2)}
                            <button 
                                onClick={() => removeFromCart(product.id)}
                                style={{ marginLeft: "10px" }}
                            >
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}