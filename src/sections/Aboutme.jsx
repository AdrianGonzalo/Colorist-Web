"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden w-7xl"
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-neutral-200 via-neutral-400/10 to-neutral-900 pointer-events-none dark:from-neutral-800 dark:via-neutral-700/20 dark:to-black" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative md:w-1/3 mb-10 md:mb-0 md:mr-12 flex justify-center z-10"
      >
        <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <Image
            src="/Test/Imagen.jpg"
            alt="Retrato de Helí Suárez"
            fill
            className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 ease-out"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="md:w-2/3 text-center md:text-left space-y-7 text-gray-700 dark:text-gray-300 leading-relaxed z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extralight tracking-wide text-gray-800 dark:text-gray-100 mb-8 relative">
          Sobre mí
          <span className="absolute -bottom-2 left-1/2 md:left-0 w-20 h-[2px] bg-neutral-700 dark:bg-neutral-300 transform -translate-x-1/2 md:translate-x-0" />
        </h2>

        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Soy{" "}
          <span className="font-semibold text-neutral-900 dark:text-white">
            Helí Suárez
          </span>
          , colorista profesional apasionado por el equilibrio entre{" "}
          <span className="text-neutral-900 dark:text-neutral-100">luz</span>,{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            textura
          </span>{" "}
          y{" "}
          <span className="text-neutral-900 dark:text-neutral-100">
            emoción
          </span>
          . Cada proyecto es una oportunidad de traducir sensaciones en color.
        </p>

        <p className="text-neutral-600 dark:text-neutral-400">
          Mi enfoque combina la sensibilidad artística con una precisión técnica
          que busca resaltar la intención detrás de cada plano. Creo firmemente
          en el poder del color como lenguaje visual que trasciende la imagen.
        </p>

        <p className="text-neutral-600 dark:text-neutral-400">
          He colaborado en proyectos donde la narrativa visual es esencial,
          aportando una mirada estética que une coherencia y emoción en cada
          detalle cromático.
        </p>
      </motion.div>
    </section>
  );
}
