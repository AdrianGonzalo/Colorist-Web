import Image from "next/image";

import About from "@/sections/Aboutme";
import Contact from "@/sections/Contact";
import Works from "@/sections/Works";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative w-screen h-screen">
        <Image
          src="/Test/Prueba.webp"
          alt="Fondo principal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <h1 className="text-white text-5xl font-bold">Helí Suárez</h1>
          <h4 className="text-white text-5xl font-bold">Colorist</h4>
        </div>
      </section>

      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-20 py-40">
        <About />
      </section>

      <section>
        <Works />
      </section>

      <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-20 py-40">
        <Contact />
      </section>
    </main>
  );
}
