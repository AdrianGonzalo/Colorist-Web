"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black text-white shadow-md" : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-14 py-6 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="w-16 h-auto object-contain"
            priority
          />
        </Link>

        <div className="flex space-x-16 text-2xl font-medium text-white">
          <Link
            href="#inicio"
            className="hover:text-gray-400 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#artista"
            className="hover:text-gray-400 transition-colors"
          >
            Artist
          </Link>
          <Link
            href="#trabajos"
            className="hover:text-gray-400 transition-colors"
          >
            Works
          </Link>
          <Link
            href="#contacto"
            className="hover:text-gray-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
