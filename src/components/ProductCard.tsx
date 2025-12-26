import Link from "next/link";


type Product = {
  id: number;  
  name: string;
  price: number;
};


type props = {
  product: Product;
};


export default function ProductCard({ product }: props) {
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
    </div>
  );
}