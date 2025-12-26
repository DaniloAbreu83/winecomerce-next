import ProductCard from "@/src/components/ProductCard";
import Link from "next/link";


export default function RedWinePage() {
    const products = [
        { id: 1, name: "Red Wine Alesia", price: 899.99 },
        { id: 2, name: "Lanarche", price: 749.99 },
        { id: 3, name: "Vitalo Vermelho", price: 699.99 },
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