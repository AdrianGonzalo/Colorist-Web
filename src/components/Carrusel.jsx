"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/Carrusel/1.webp",
  "/Carrusel/2.jpg",
  "/Carrusel/3.jpg",
  "/Carrusel/4.jpg",
  "/Carrusel/5.webp",
];

export default function Carrusel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            i === index
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
            priority={i === index}
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Helí Suárez
        </h1>
        <h4 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Colorist
        </h4>
      </div>
    </section>
  );
}
