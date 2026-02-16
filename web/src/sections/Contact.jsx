"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikb7aon",      // Service ID
        "template_lln490a",     // Template ID
        form.current,
        "U78x8lZ9qW-cjLpZo"     // Public Key
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente. ¡Gracias por contactarme!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Error al enviar el mensaje. Inténtalo de nuevo.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-neutral-100 px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extralight tracking-wide text-white mb-12 relative text-center"
      >
        Contact
        <span className="absolute left-1/2 -bottom-3 w-20 h-[2px] bg-white transform -translate-x-1/2" />
      </motion.h2>



      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl gap-12">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h3 className="text-lg font-semibold tracking-wide">Helí Suárez</h3>

          <p className="text-neutral-300 leading-relaxed">
            Do you have a project in mind? I'm available for collaborations,{" "}
            <span className="text-neutral-100 font-medium">color grading</span>{" "}
            and visual consultations.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=heli.suarez@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center gap-2 md:justify-start md:text-left"
          >
            <Mail size={18} />
            Contact via email,{" "}
            <span className="underline">heli.suarez@outlook.com</span>
          </a>


          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://www.instagram.com/mrpix3l/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-neutral-800 hover:bg-neutral-700 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full bg-neutral-900 border border-neutral-700 p-8 space-y-6"
        >
          <div>
            <label className="block text-sm mb-2 text-neutral-400">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-400">Email</label>
            <input
              type="email"
              name="reply_to"
              required
              className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-400">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-300 text-neutral-800 py-3 font-semibold hover:bg-neutral-200 transition"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
}
