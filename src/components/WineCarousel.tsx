"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Vinhos Tintos",
    image: "https://ousobkdlgxyowzipmxab.supabase.co/storage/v1/object/public/wines/image-wine-red-vitalo.png",
  },
  {
    id: 2,
    title: "Vinhos’ Brancos",
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
  const [paused, setPaused] = useState(false);

  // 🔄 AUTOPLAY
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  function goToSlide(index: number) {
    setCurrent(index);
  }

  return (
    <div
      className="relative w-full max-w-5xl mx-auto mt-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full flex flex-col items-center">
            <div className="h-80 flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4">{slide.title}</h3>
          </div>
        ))}
      </div>

      {/* BOTÕES LATERAIS */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 px-4 py-2 rounded-full hover:bg-black"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 px-4 py-2 rounded-full hover:bg-black"
      >
        ›
      </button>

      {/* INDICADORES */}
      <div className="flex justify-center mt-6 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-red-600 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
