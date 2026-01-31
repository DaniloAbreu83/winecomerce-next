"use client";


import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";


//type Product = {
  //id: number;
  //name: string;
  //price: number;
//};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
  <div className="border border-gray-300 rounded-lg p-4 w-56 shadow-sm hover:shadow-md transition bg-white">

    <img
      src={product.image_url}
      alt={product.name}
      className="w-full h-48 object-cover rounded-md mb-3"
    />

    <h3 className="text-lg font-semibold mb-2">
      {product.name}
    </h3>

    <p className="text-gray-700 mb-1">
      {product.description}
    </p>

    <p className="text-red-600 font-bold mb-3">
      R$ {product.price.toFixed(2)}
    </p>

    <button
      onClick={() => addToCart(product)}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition w-full"
    >
      Adicionar ao carrinho
    </button>

  </div>
);

}
