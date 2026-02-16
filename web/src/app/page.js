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

      <section id="home" className="relative w-full h-screen overflow-hidden">
        <Carrusel />
      </section>

      <section
        className="text-white flex flex-col items-center justify-center"
      >
        <About />
      </section>

      <section id="works">
        <Works />
      </section>

      <section
        id="contact"
        className="text-white flex flex-col items-center justify-center"
      >
        <Contact />
      </section>
    </main>
  );
}
