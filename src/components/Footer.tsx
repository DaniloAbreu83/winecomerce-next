"use client";

import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 text-white">
      <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-red-600">WineCommerce</h3>
          <p className="text-gray-400 text-sm">
            Redes sociais.
          </p>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
            <FaTwitter />
          </a>
          <a href="https://wa.me/5581999999999" target="_blank" rel="noreferrer" className="hover:text-green-500 transition">
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <div className="text-center text-xs py-4 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} WineCommerce — Todos os direitos reservados.
      </div>
    </footer>
  );
}
