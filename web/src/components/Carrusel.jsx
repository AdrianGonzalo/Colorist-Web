"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Special_Gothic_Expanded_One } from "next/font/google";

const special = Special_Gothic_Expanded_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const images = [
  "/Carrusel/Imagen1.png",
  "/Carrusel/Imagen2.jpg",
  "/Carrusel/Imagen3.jpg",
  "/Carrusel/Imagen4.jpg",
  "/Carrusel/Imagen6.jpg",
  "/Carrusel/Imagen7.jpg",
  "/Carrusel/Imagen8.jpg",
  "/Carrusel/Imagen9.jpg",
  "/Carrusel/Imagen10.jpg",
  "/Carrusel/Imagen11.jpg",
  "/Carrusel/Imagen12.jpg",
  "/Carrusel/Imagen13.jpg",
  "/Carrusel/Imagen14.jpg",
  "/Carrusel/Imagen15.jpg",
  "/Carrusel/Imagen16.jpg",
  "/Carrusel/Imagen17.jpg",
  "/Carrusel/Imagen18.jpg",
  "/Carrusel/Imagen19.jpg",
  "/Carrusel/Imagen20.jpg",
  "/Carrusel/Imagen21.jpg",
  "/Carrusel/Imagen22.jpg",
  "/Carrusel/Imagen23.jpg",
  "/Carrusel/Imagen24.jpg",
  "/Carrusel/Imagen25.jpg",
  "/Carrusel/Imagen26.jpg",
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Carrusel() {
  const [order, setOrder] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setOrder(shuffleArray(images.map((_, i) => i)));
  }, []);

  useEffect(() => {
    if (order.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === order.length - 1) {
          setOrder(shuffleArray(images.map((_, i) => i)));
          return 0;
        }
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [order]);

  if (order.length === 0) return null;

  const current = order[index];
  const next = order[(index + 1) % order.length];

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Overlay texto */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center pointer-events-none select-none">
        <h1
          className={`${special.className} text-white tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}
        >
          Helí Suárez
        </h1>

        <span className="mt-4 w-12 h-px bg-white/90 shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />

        <p
          className="mt-4 text-white uppercase tracking-[0.35em] sm:text-xl"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}
        >
          Colorist
        </p>
      </div>

      {/* Imagen actual */}
      <Image
        key={current}
        src={images[current]}
        alt="Imagen actual"
        fill
        priority
        quality={95}
        sizes="100vw"
        unoptimized
        className="object-cover opacity-100 transition-opacity duration-1000"
      />

      {/* Imagen siguiente (preload visual) */}
      <Image
        key={next}
        src={images[next]}
        alt="Imagen siguiente"
        fill
        quality={95}
        sizes="100vw"
        unoptimized
        className="object-cover opacity-0"
      />
    </section>
  );
}
