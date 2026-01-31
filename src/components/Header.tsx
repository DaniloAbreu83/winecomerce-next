"use client";

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-black via-zinc-900 to-black py-10 text-center border-b border-zinc-800">
      <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-wide">
        🍷 WineCommerce
      </h1>

      <p className="text-gray-400 mt-3 text-lg">
        Experiências únicas em cada taça
      </p>
    </div>
  );
}
