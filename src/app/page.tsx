"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


type Product = {
  id: number;  
  name: string;
  price: number;
};


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    // Simulando uma chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1000));
      
    const data: Product[] = [
    { id: 1, name: "Vinho Tinto Reserva", price: 89.9 },
    { id: 2, name: "Vinho Branco Seco", price: 74.5 },
    { id: 3, name: "Vinho Rosé", price: 69.9 },
  ];
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>🍷 WineCommerce</h1>
      <p>Seu e-commerce de vinhos especiais</p>

      <section>
        <h2>Vinhos em destaque</h2>

        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}          
          />
        ))}
        
      </section>
    </main>
  );
}
