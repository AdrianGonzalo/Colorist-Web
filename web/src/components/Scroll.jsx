"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 370);
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
    <div className="fixed inset-0 pointer-events-none z-50">
      {visible && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto absolute bottom-8 right-8 p-3 rounded-full bg-[#3B82F6] text-white shadow-lg hover:bg-gray-800 transition-all duration-300"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
