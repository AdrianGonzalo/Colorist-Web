import Image from "next/image";

import Carrusel from "@/components/Carrusel";
import About from "@/sections/Aboutme";
import Contact from "@/sections/Contact";
import Works from "@/sections/Works";

export default function Home() {
  return (
    <main className="relative flex flex-col ">
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[url('/Textures/texture2.png')] bg-repeat"></div>

      <section id="inicio" className="relative w-screen h-screen">
        <Carrusel />
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <h1 className="z-40 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Helí Suárez
          </h1>
          <h4 className="z-40 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Colorist
          </h4>
        </div>
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
