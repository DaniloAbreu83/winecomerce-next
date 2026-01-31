"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import WineCarousel from "@/components/WineCarousel";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("wines")
      .select("*");

    if (error) {
      console.error("Erro ao buscar vinhos:", error);
    } else {
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* MENU */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
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

      {/* FRASE / HERO */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-extrabold mb-6">
          O vinho perfeito para cada momento
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore nossa curadoria de vinhos tintos, brancos e rosés selecionados
          para transformar sua experiência.
        </p>
      </section>
      <WineCarousel />

      {/* LISTAGEM DE PRODUTOS */}
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

    </main>
  );
}
