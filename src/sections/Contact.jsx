"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_639zkkq", //Service ID
        "template_12lbby9", //Template ID
        form.current,
        "aMbe8ed0UKS7TzjG2" //Public Key
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente. ¡Gracias por contactarme!");
          e.target.reset();
        },
        (error) => {
          alert(
            "❌ Ocurrió un error al enviar el mensaje. Inténtalo nuevamente."
          );
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center  text-neutral-100 px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extralight tracking-wide text-gray-800 dark:text-gray-100 mb-12 relative "
      >
        Contact
        <span className="absolute -bottom-2 left-1/2 md:left-0 w-20 h-[2px] bg-neutral-700 dark:bg-neutral-300 transform -translate-x-1/2 md:translate-x-0" />
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
            Do you have a project in mind? I'm available for collaborations,{" "}
            <span className="text-neutral-100 font-medium">color grading</span>{" "}
            and visual consultations.
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
          </div>

          <p className="text-sm text-neutral-500 mt-10">
            © 2025 Helí Suárez | Colorist
          </p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full bg-neutral-900 border border-neutral-700 rounded-md p-8 space-y-6"
        >
          <div>
            <label className="block text-sm mb-2 text-neutral-400">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-400">Email</label>
            <input
              type="email"
              name="reply_to"
              required
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-400">
              Menssage
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-300 text-neutral-800 py-3 rounded-md font-semibold hover:bg-neutral-200 transition"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
}
