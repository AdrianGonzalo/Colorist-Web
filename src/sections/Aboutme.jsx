"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Clients from "@/components/Clients";

export default function About() {
  return (
    <section className="w-full">
      <div
        id="about"
        className="relative flex flex-col md:flex-row items-center px-8 py-30 overflow-hidden max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative md:w-1/3 mb-10 md:mb-0 md:mr-12 flex justify-center z-10"
        >
          <div className="relative w-64 h-80 overflow-hidden shadow-xl group">
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
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-2/3 text-center md:text-left space-y-7 text-gray-700 dark:text-gray-300 leading-relaxed z-10"
        >
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wide text-gray-800 dark:text-gray-100 mb-8 relative">
            About me
            <span className="absolute -bottom-2 left-1/2 md:left-0 w-20 h-[2px] bg-neutral-700 dark:bg-neutral-300 transform -translate-x-1/2 md:translate-x-0" />
          </h2>

          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            I am{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              Helí Suárez
            </span>
            , a professional colorist and lover of stories told through light. My
            work aims to capture that moment when{" "}
            <span className="text-neutral-900 dark:text-neutral-100">color</span>{" "}
            becomes{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              emotion
            </span>
            .
          </p>

          <p className="text-neutral-600 dark:text-neutral-400">
            I believe that color does more than beautify an image: it defines it,
            gives it rhythm, and depth. Each project is an exploration between{" "}
            <span className="italic">artistic sensitivity</span> and{" "}
            <span className="italic">technical precision</span>, always seeking
            the balance between what is seen and what is felt.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400">
            I have collaborated on productions where visual storytelling is the
            heart of the project, bringing a perspective that unites{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              coherence
            </span>{" "}
            and{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              emotion
            </span>{" "}
            in every color-related decision. My goal is always the same: that each
            image leaves an impression that is not only seen but felt.
          </p>
        </motion.div>

      </div>
      <Clients />
    </section>
  );
}
