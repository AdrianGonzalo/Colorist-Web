"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Clients from "@/components/Clients";

export default function About() {
  return (
    <section className="w-full">
      <Clients />

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
          <div className="space-y-4 mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400 font-light">
              Cinematic Color Grading for Premium Film & Commercials
            </p>

            <p className="italic text md:text-xl font-extralight text-neutral-700 dark:text-neutral-300 leading-relaxed max-full mx-auto md:mx-0">
              “Transforming your footage into visually striking, high-end cinematic stories.”
            </p>
          </div>



          <h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-gray-800 dark:text-gray-100 mb-8 relative">
            About me
            <span className="absolute -bottom-2 left-1/2 md:left-0 w-20 h-[2px] bg-neutral-700 dark:bg-neutral-300 transform -translate-x-1/2 md:translate-x-0" />
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300">
            I’m a{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              freelance colorist
            </span>{" "}
            with professional experience since{" "}
            <span className="text-neutral-900 dark:text-neutral-100">2017</span>,
            specializing in cinematic color grading for{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              music videos, film, and commercials
            </span>
            .
          </p>

          <p className="text-neutral-600 dark:text-neutral-400">
            I work in{" "}
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              DaVinci Resolve
            </span>{" "}
            to craft digital cinematic looks and authentic{" "}
            <span className="italic">film-inspired, analog aesthetics</span>, adapting
            each grade to the creative and technical needs of every project.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400">
            My focus is on solving image issues, creating{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              visual consistency
            </span>{" "}
            and elevating{" "}
            <span className="text-neutral-900 dark:text-neutral-100">
              production value
            </span>
            , always serving the story and the emotion behind the image.
          </p>

          <div className="pt-6 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-3 border border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200 font-light tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-neutral-900"
            >
              Let’s elevate your project
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
