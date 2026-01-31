import ProductCard from "@/components/ProductCard";
import Link from "next/link";


export default function RedWinePage() {
    const products = [
        {
            id: "1",
            name: "Red Wine Alesia",
            price: 899.99,
            image_url: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-red-alesia.png",
            description: "Vinho tinto suave, com notas de frutas vermelhas.",
        },
        {
            id: "2",
            name: "Vitalo Vermelho",
            price: 749.99,
            image_url: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-red-vitalo.png",
            description: "Vinho tinto encorpado, perfeito para acompanhar carnes.",
        },
        {
            id: "3",
            name: "Red Larnache",
            price: 699.99,
            image_url: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-red-larnache.png",
            description: "Vinho tinto robusto, com sabor intenso e duradouro.",
        },
       
    ];


  return (
    <main style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
            <Link href="/">Home</Link>| {''}
            <Link href="/white">White Wines</Link>| {''}
            <Link href="/rose">Rosé Wines</Link>
        </nav>


      <h1>🍷 Red Wines</h1>
      <p>Os vinhos tintos são ideais para quem aprecia sabores profundos e experiências sofisticadas.</p>

        <section style= {{ display : "flex", gap: "20px", marginTop: "20px" }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    </main>
  );
}