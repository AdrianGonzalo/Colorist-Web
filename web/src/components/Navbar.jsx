// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleSmoothScroll = (e, id) => {
//     e.preventDefault();
//     const section = document.getElementById(id);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop, // aquí puedes ajustar los px
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black text-white shadow-md" : "bg-transparent text-black"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-14 py-6 flex justify-between items-center">
//         <a href="/">
//           <Image
//             src="/Logo.svg"
//             alt="Logo"
//             width={60}
//             height={60}
//             className="w-16 h-auto object-contain"
//             priority
//           />
//         </a>

//         <div className="flex space-x-16 text-2xl font-medium text-white">
//           <a
//             href="#inicio"
//             onClick={(e) => handleSmoothScroll(e, "inicio")}
//             className="hover:text-gray-400 transition-colors"
//           >
//             Inicio
//           </a>

//           <a
//             href="#artista"
//             onClick={(e) => handleSmoothScroll(e, "artista")}
//             className="hover:text-gray-400 transition-colors"
//           >
//             Artist
//           </a>

//           <a
//             href="#trabajos"
//             onClick={(e) => handleSmoothScroll(e, "trabajos")}
//             className="hover:text-gray-400 transition-colors"
//           >
//             Works
//           </a>

//           <a
//             href="#contacto"
//             onClick={(e) => handleSmoothScroll(e, "contacto")}
//             className="hover:text-gray-400 transition-colors"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${mobileMenuOpen || scrolled
        ? "bg-black text-white"
        : "bg-transparent text-black"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/">
          {/* <Image
            src="/Logo.svg"
            alt="Logo"
            width={48} // tamaño base más pequeño
            height={48}
            className="w-12 h-auto md:w-16 md:h-auto object-contain"
            priority
          /> */}
          <h2 className="text-white text-3xl md:text-5xl font-bold">MrPix3l</h2>
        </a>

        {/* Menú desktop */}
        <div className="hidden text-xl md:flex space-x-10 text-2xl font-medium text-white">
          <a
            href="#inicio"
            onClick={(e) => handleSmoothScroll(e, "inicio")}
            className="hover:text-gray-400 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#artista"
            onClick={(e) => handleSmoothScroll(e, "artista")}
            className="hover:text-gray-400 transition-colors"
          >
            Artist
          </a>
          <a
            href="#trabajos"
            onClick={(e) => handleSmoothScroll(e, "trabajos")}
            className="hover:text-gray-400 transition-colors"
          >
            Works
          </a>
          <a
            href="/Blog"
            className="hover:text-gray-400 transition-colors"
          >
            Blog
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleSmoothScroll(e, "contacto")}
            className="hover:text-gray-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 flex flex-col space-y-4 text-xl font-medium">
          <div className="bg-gray-400 w-full h-0.5"></div>
          <a
            href="#inicio"
            onClick={(e) => handleSmoothScroll(e, "inicio")}
            className="hover:text-gray-400 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#artista"
            onClick={(e) => handleSmoothScroll(e, "artista")}
            className="hover:text-gray-400 transition-colors"
          >
            Artist
          </a>
          <a
            href="#trabajos"
            onClick={(e) => handleSmoothScroll(e, "trabajos")}
            className="hover:text-gray-400 transition-colors"
          >
            Works
          </a>
          <a
            href="/Blog"
            className="hover:text-gray-400 transition-colors"
          >
            Blog
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleSmoothScroll(e, "contacto")}
            className="hover:text-gray-400 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
