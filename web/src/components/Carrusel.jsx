"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/Carrusel/Imagen1.png",
  "/Carrusel/Imagen2.jpg",
  "/Carrusel/Imagen3.jpg",
  "/Carrusel/Imagen4.jpg",
  // "/Carrusel/Imagen5.jpg",
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
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === images.length - 1) {
          setOrder(shuffleArray(images.map((_, i) => i)));
          return 0;
        }
        return prev + 1;
      });
    }, 10000); // Velocidad

    return () => clearInterval(interval);
  }, [order]);

  return (
    <section className="relative w-screen h-screen overflow-hidden">

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="z-40 text-white font-light tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Helí Suárez
        </h1>

        <span className="z-40 mt-4 w-12 h-px bg-white/90" />

        <p className="z-40 mt-4 text-white/80 uppercase tracking-[0.35em] sm:text-lg">
          Colorist
        </p>
      </div>

      {images.map((src, i) => {
        const currentImageIndex = order[index];

        return (
          <div
            key={i}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${i === currentImageIndex
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-full opacity-0 z-10"
              }`}
            style={{ transitionProperty: "transform, opacity" }}
          >
            <Image
              src={src}
              alt={`Imagen ${i + 1}`}
              fill
              className="object-cover"
              priority={i === currentImageIndex}
            />
          </div>
        );
      })}
    </section>
  );
}
