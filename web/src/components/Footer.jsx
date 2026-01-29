"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-neutral-900 text-neutral-400 py-8 px-6 text-sm"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold text-neutral-100">
            Helí Suárez · Colorist
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>

        </div>

        <div className="flex flex-row items-center gap-6 md:gap-8 mt-4 md:mt-0 md:mr-12">
          <a href="/Warning" className="hover:text-neutral-200 transition">
            Legal Notice
          </a>
          <a href="/Privacy" className="hover:text-neutral-200 transition">
            Privacy
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
