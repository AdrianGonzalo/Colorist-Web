"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function VideoModal({
  videos,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const router = useRouter();
  const video = videos[currentIndex];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  if (!video) return null;

  const videoId = video.url?.match(
    /(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/
  )?.[1];

  /* ----------------------------------
     NAVEGACIÓN IMÁGENES
  ---------------------------------- */
  const navigateImage = useCallback(
    (direction) => {
      if (!video.gallery?.length) return;

      if (direction === "left") {
        if (selectedImageIndex > 0) {
          setSelectedImageIndex((i) => i - 1);
        } else {
          const prevVideo =
            currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
          setCurrentIndex(prevVideo);
          setSelectedImageIndex(videos[prevVideo].gallery.length - 1);
        }
      }

      if (direction === "right") {
        if (selectedImageIndex < video.gallery.length - 1) {
          setSelectedImageIndex((i) => i + 1);
        } else {
          const nextVideo =
            currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
          setCurrentIndex(nextVideo);
          setSelectedImageIndex(0);
        }
      }
    },
    [selectedImageIndex, currentIndex, video, videos, setCurrentIndex]
  );

  /* ----------------------------------
     TECLADO
  ---------------------------------- */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") navigateImage("left");
      if (e.key === "ArrowRight") navigateImage("right");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigateImage]);

  /* ----------------------------------
     HISTORIAL
  ---------------------------------- */
  useEffect(() => {
    const handlePopState = () => onClose();
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [onClose]);

  const handleClose = () => {
    onClose();
    if (window.history.state?.modal) window.history.back();
  };

  const handlePrevVideo = () => {
    setCurrentIndex(
      currentIndex > 0 ? currentIndex - 1 : videos.length - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentIndex(
      currentIndex < videos.length - 1 ? currentIndex + 1 : 0
    );
  };

  /* ----------------------------------
     GALERÍA
  ---------------------------------- */
  const Gallery = () => (
    <div className="mt-6 w-full">
      <h3 className="text-white text-xl font-bold mb-6">Gallery</h3>
      <div className="grid grid-cols-3 gap-2">
        {video.gallery?.length ? (
          video.gallery.map((img, index) => (
            <div
              key={index}
              className="relative h-20 cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover hover:opacity-80 transition"
              />
            </div>
          ))
        ) : (
          <p className="col-span-3 text-gray-400 text-sm">
            No gallery available
          </p>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* ================= MODAL VIDEO ================= */}
      <motion.div
        className="fixed inset-0 bg-black z-[5000] flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClose}
      >
        <div
          className="relative w-full h-full flex flex-col md:flex-row overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* -------- INFO -------- */}
          <aside className="w-full md:max-w-sm p-6 md:p-10">
            <h2
              onClick={() => {
                handleClose();
                router.push("/");
              }}
              className="text-4xl mb-10 cursor-pointer hover:text-blue-400 transition font-bold"
            >
              MrPix3l
            </h2>

            <h3 className="text-blue-600 font-semibold text-xl">
              {video.category || "CATEGORY"}
            </h3>
            <p className="text-white text-xl font-bold mb-6">
              {video.title}
            </p>

            {video.creditos && (
              <div className="text-gray-300 space-y-1">
                {Object.entries(video.creditos).map(
                  ([key, value]) =>
                    value && (
                      <p key={key}>
                        <span className="font-semibold capitalize">
                          {key}:
                        </span>{" "}
                        {value}
                      </p>
                    )
                )}
              </div>
            )}

            <div className="hidden md:block">
              <Gallery />
            </div>

            <div className="flex gap-4 mt-10">
              <button
                onClick={handlePrevVideo}
                className="border w-10 h-10 text-white hover:bg-white/20"
              >
                ←
              </button>
              <button
                onClick={handleNextVideo}
                className="border w-10 h-10 text-white hover:bg-white/20"
              >
                →
              </button>
            </div>
          </aside>

          {/* -------- VIDEO -------- */}
          <main className="w-full p-6 md:p-10 pt-20">
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            <div className="block md:hidden">
              <Gallery />
            </div>
          </main>

          {/* CERRAR */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-xl"
          >
            ✕
          </button>
        </div>
      </motion.div>

      {/* ================= MODAL IMAGEN ================= */}
      {selectedImageIndex !== null &&
        createPortal(
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[6000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* IZQUIERDA */}
            <button
              className="absolute left-4 text-white text-3xl z-20"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("left");
              }}
            >
              ←
            </button>

            {/* IMAGEN REAL */}
            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={video.gallery[selectedImageIndex]}
                alt="Expanded"
                width={1600}
                height={900}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                priority
              />
            </div>

            {/* DERECHA */}
            <button
              className="absolute right-4 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("right");
              }}
            >
              →
            </button>
          </motion.div>,
          document.body
        )}
    </>
  );
}
