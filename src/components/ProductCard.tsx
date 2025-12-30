"use client";


import { useCart } from "@/contexts/CartContext";


type Product = {
  id: number;  
  name: string;
  price: number;
};


type props = {
  product: Product;
};


export default function ProductCard({ product }: props) {
    const { addToCart } = useCart();
    return (
    <div style={{ 
            border: "1px solid #ccc", 
            borderRadius: "8px",
            padding: "12px", 
            width: "200px" 
            }}
        >
        <h3>{product.name}</h3>
        <p>R$ {product.price.toFixed(2)}</p>
        <button
            onClick={() => addToCart(product)}
            style={{
                marginTop: "10px",
                padding: "6px 10px",
                cursor: "pointer",
            }}
            >
            Adicionar ao carrinho
        
        </button>
    </div>
  );
}