export const metadata = {
  title: "Helí Suárez | Colorist",
  description:
    "Portfolio of Helí Suárez, professional colorist. Selected works, visual projects and contact information.",
};

import Carrusel from "@/components/Carrusel";
import About from "@/sections/Aboutme";
import Contact from "@/sections/Contact";
import Works from "@/sections/Works";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[url('/Textures/texture2.png')] bg-repeat"></div>

      <section id="inicio" className="relative w-full h-screen overflow-hidden">
        <Carrusel />
      </section>

      <section
        id="artista"
        className="text-white flex flex-col items-center justify-center"
      >
        <About />
      </section>

      <section id="trabajos">
        <Works />
      </section>

      <section
        id="contacto"
        className="text-white flex flex-col items-center justify-center"
      >
        <Contact />
      </section>
    </main>
  );
}
