"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 370) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="z-50 fixed bottom-8 right-8 p-3 rounded-full bg-[#3B82F6] text-white shadow-lg hover:bg-gray-800 transition-all duration-300"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
