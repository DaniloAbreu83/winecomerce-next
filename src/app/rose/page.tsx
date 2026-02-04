import ProductCard from "@/components/ProductCard";
import Link from "next/link";


export default function RosePage() {
    const products = [
        {
      id: 4,
      name: "Port Da Luz Rosé",
      price: 899.99,
      image_url: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-da-luz.png",
      description: "Vinho rosé elegante, refrescante e aromático.",
    },
    {
      id: 5,
      name: "Fresh Rosé",
      price: 749.99,
      image_url: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-fresh-rose.png",
      description: "Rosé leve e frutado, ideal para dias quentes.",
    },
    ];

  return (
    <main style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
            
            <Link href="/">Home</Link>| {''}
            <Link href="/red">Red Wines</Link>| {''}
            <Link href="/white">White Wines</Link>| {''}
            
        </nav>
      <h1>🍷 Rosé Wines</h1>
      <p>Deliciosos, leves e refrescantes. Os vinhos rosé são preferidos para momentos especiais.</p>


        <section style={{ display : "flex", gap: "20px", marginTop: "20px" }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    </main>
  );
}