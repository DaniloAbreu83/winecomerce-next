"use client";

import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        

        {/* REDES SOCIAIS */}
        <div className="flex justify-center gap-6 text-2xl mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaTwitter />
          </a>
          
          <a
            href="https://wa.me/5581999999999"
            target="_blank"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-800">
        © {new Date().getFullYear()} WineCommerce — Todos os direitos reservados.
      </div>
    </footer>
  );
}
