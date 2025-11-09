"use client";

import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-100 px-6 py-16 w-7xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-16 tracking-wide text-center"
      >
        Contacto
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h3 className="text-xl font-semibold tracking-wide">Helí Suárez</h3>

          <p className="text-neutral-300 leading-relaxed">
            ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones,{" "}
            <span className="text-neutral-100 font-medium">color grading</span>y
            asesorías visuales.
          </p>

          <div className="space-y-2 text-neutral-400">
            <p className="flex items-center justify-center md:justify-start gap-2">
              Ejemplo@gmail.com <Mail size={18} />
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              +34 123 456 789 <Phone size={18} />
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          <p className="text-sm text-neutral-500 mt-10">
            © 2025 Helí Suárez | Colorista
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full bg-neutral-900 border border-neutral-700 rounded-md p-8 space-y-6"
        >
          <div>
            <label className="block text-sm mb-2 text-neutral-400">
              Nombre
            </label>
            <input
              type="text"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-400">Email</label>
            <input
              type="email"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-400">
              Mensaje
            </label>
            <textarea
              rows="5"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-300 text-neutral-800 py-3 rounded-md font-semibold hover:bg-neutral-200 transition"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
}
