"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/types/product";


import HeroSection from "@/components/HeroSection";
import WineCarousel from "@/components/WineCarousel";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("wines")
      .select("*");

    if (error) {
      console.error("Erro ao buscar vinhos:", error);
    } else {
      setProducts(data ?? []);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
     

      <HeroSection 
        backgroundImage="https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/bg3.jpg"
      />

      <WineCarousel />

      <section className="px-10 pb-20">
        <h3 className="text-3xl font-bold mb-10 text-center text-red-600">
          Nossos Vinhos
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
