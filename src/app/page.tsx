"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("wines")
      .select("*");

    if (error) {
      console.error("Erro ao buscar vinhos:", error);
    } else {
      console.log(data)
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="px-10 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-red-600">
        Nossos Vinhos
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}


