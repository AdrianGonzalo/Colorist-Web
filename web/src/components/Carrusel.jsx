"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Lobster, Poiret_One, Boldonse, Jersey_25, Roboto, Montserrat, Special_Gothic_Expanded_One } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const poiret = Poiret_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "800",
  style: "normal",
});

const montse = Montserrat({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const special = Special_Gothic_Expanded_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

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

        <h1
          className={`${special.className} z-40 text-white tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Helí Suárez
        </h1>

        {/* <h1
          className={`${lobster.className} z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
        >
          Helí Suárez
        </h1>

        <h1
          className={`${lobster.className} z-40 text-white tracking-[-0.03em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
        >
          Helí Suárez
        </h1>

        <h1
          className={`${boldonse.className} z-40 text-white tracking-[-0.03em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4`}
        >
          Helí Suárez
        </h1>
        <h1
          className={` z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase `}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Helí Suárez.
        </h1>
        <h1
          className={` z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-[0.50em]`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Helí Suárez
        </h1>

        <h1
          className={` z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Helí Suárez
        </h1>

        <h1
          className={` z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Helí Suárez
        </h1>

        <h1
          className={` z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Helí Suárez
        </h1>

        <h1
          className={`${poiret.className} z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          HELÍ SUÁREZ
        </h1> */}

        {/* <h1
          className={`${poiret.className} z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          Helí Suárez
        </h1>

        <h1
          className={`${montse.className} z-40 text-white tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.6)',
          }}
        >
          Helí Suárez
        </h1> */}
        <span className="z-40 mt-4 w-12 h-px bg-white/90 shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />


        <p className="z-40 mt-4 text-white uppercase tracking-[0.35em] sm:text-xl"
          style={{
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}>

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
