"use client";

import { useState, useRef, useEffect } from "react";

export default function WhatsAppFloat() {
  const [confirm, setConfirm] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    if (!confirm) {
      setConfirm(true);
      return;
    }

    window.open("https://wa.me/123343434", "_blank", "noopener,noreferrer");
    setConfirm(false);
  };

  useEffect(() => {
    const handleOutside = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setConfirm(false);
      }
    };

    if (confirm) {
      document.addEventListener("click", handleOutside);
    }

    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, [confirm]);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`fixed bottom-5 right-5 z-50 flex items-center justify-center
        ${confirm ? "w-48 px-4" : "w-14"} h-14
        bg-green-500 text-white rounded-full shadow-lg
        hover:scale-110 transition-all duration-300 overflow-hidden`}
    >
      {confirm ? (
        <span className="text-sm whitespace-nowrap">
          Se te redirigirá a WhatsApp
        </span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12 .1 11.9 11.9 0 0 0 1.7 18.04L.1 24l5.92-1.56A11.9 11.9 0 1 0 20.52 3.48Zm-8.52 18a9.55 9.55 0 0 1-4.87-1.34L6.8 20l-3.3.9.88-3.3-.17-.32A9.53 9.53 0 1 1 12 21.5Zm6-7.35c-.22-.13-1.6-.82-1.85-.92s-.43-.15-.63.15-.7.9-.86 1.1-.32.22-.6.08a7.83 7.83 0 0 1-2.28-1.42 8.52 8.52 0 0 1-1.56-2c-.16-.3 0-.46.13-.6s.3-.32.44-.49.22-.3.32-.49a.54.54 0 0 0 0-.53c-.07-.14-.64-1.54-.87-2.1s-.47-.47-.63-.48h-.54a1 1 0 0 0-.72.33A3.06 3.06 0 0 0 6.1 8.08a5.31 5.31 0 0 0 1.1 2.83 12.15 12.15 0 0 0 4.6 4.13c2.28 1.16 2.75 1 3.26 1s1.6-.66 1.83-1.28a2.18 2.18 0 0 0 .11-1.22c-.1-.14-.24-.22-.4-.32-.3-.13-.32-.15-.5-.22Z" />
        </svg>
      )}
    </button>
  );
}
