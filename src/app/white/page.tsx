import ProductCard from "@/components/ProductCard";
import Link from "next/link";


export default function WhitePage() {
    const products = [
        {
            id: "1",
            name: "Port Wine White",
            price: 899.99,
            image_url: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/img_page_white-removebg-preview.png",
            description: "Vinho branco elegante, refrescante e aromático.",
        },
        {
            id: "2",
            name: "PS White",
            price: 899.99,
            image_url: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/img_page_white3-removebg-preview.png",
            description: "Vinho branco seco, com notas de frutas cítricas.",
        },
    ]


  return (
    <main style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
            <Link href="/">Home</Link>| {''}
            <Link href="/red">Red Wines</Link>| {''}
            <Link href="/rose">Rosé Wines</Link>
        </nav>


      <h1>🍷 White Wines</h1>
      
      <p>Os vinhos brancos são perfeitos para acompanhar pratos leves e momentos descontraídos.</p>


        <section style= {{ display : "flex", gap: "20px", marginTop: "20px" }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    </main>
  );
}