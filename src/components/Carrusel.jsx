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

      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <h1 className="z-40 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Helí Suárez
        </h1>
        <h4 className="z-40 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Colorist
        </h4>
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
