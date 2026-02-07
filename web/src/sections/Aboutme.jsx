"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Clients from "@/components/Clients";

export default function About() {
  return (
    <section className="w-full">

      <Clients />

      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="space-y-6 text-center mt-40 max-w-6xl mx-auto px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-3xl uppercase tracking-[0.4em] text-white font-bold"
        >
          Cinematic Color Grading for Premium Film & Commercials
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="italic text-xl md:text-2xl font-extralight text-neutral-400 leading-relaxed"
        >
          "Transforming your footage into visually striking, high-end cinematic stories."
        </motion.p>
      </motion.div>


      {/* ABOUT SECTION */}
      <div
        id="about"
        className="relative flex flex-col md:flex-row items-center px-8 py-30 overflow-hidden max-w-7xl mx-auto"
      >
        {/* IMAGE */}
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

        {/* TEXT */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-2/3 text-center md:text-left space-y-7 text-neutral-300 leading-relaxed z-10 text-base md:text-lg lg:text-xl"
        >

          <p>
            I’m a{" "}
            <span className="font-semibold text-white">
              senior colorist
            </span>{" "}
            with professional experience since{" "}
            <span className="text-white">2016</span>, specializing in cinematic
            color grading for{" "}
            <span className="text-white">
              music videos, film, and commercials
            </span>.
          </p>

          <p className="text-neutral-400">
            I work in{" "}
            <span className="font-medium text-white">
              DaVinci Resolve
            </span>{" "}
            to craft digital cinematic looks and authentic{" "}
            <span className="italic">
              film-inspired, analog aesthetics
            </span>
            , adapting each grade to the creative and technical needs of every
            project.
          </p>

          <p className="text-neutral-400">
            My focus is on solving image issues, creating{" "}
            <span className="text-white">
              visual consistency
            </span>{" "}
            and elevating{" "}
            <span className="text-white">
              production value
            </span>
            , always serving the story and the emotion behind the image.
          </p>

          {/* CTA */}
          <div className="pt-6 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-7 py-3 border border-neutral-200 text-neutral-200 font-light tracking-wide transition-all duration-300 hover:bg-neutral-200 hover:text-neutral-900"
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
