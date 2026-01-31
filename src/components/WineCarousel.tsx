"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Vinhos Tintos",
    image: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-red-vitalo.png",
  },
  {
    id: 2,
    title: "Vinhos Brancos",
    image: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/img_page_white3-removebg-preview.png",
  },
  {
    id: 3,
    title: "Vinhos Rosé",
    image: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-da-luz.png",
  },
];

export default function WineCarousel() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">

      {/* IMAGEM */}
      <div className="w-full h-64 md:h-72 lg:h-80 bg-black rounded-xl overflow-hidden flex">
        <img
            src={slides[current].image}
            alt={slides[current].title}
            className="m-auto max-h-full max-w-full object-contain transition-all duration-500 block"
        />
      </div>

      
      {/* TÍTULO */}
      <h3 className="text-center text-2xl font-bold mt-4">
        {slides[current].title}
      </h3>

      {/* BOTÕES */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-r hover:bg-black transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-l hover:bg-black transition"
      >
        ›
      </button>
    </div>
  );
}
