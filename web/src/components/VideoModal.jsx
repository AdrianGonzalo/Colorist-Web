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

  // 🔍 ZOOM STATE
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 3;

  if (!video) return null;

  const videoId = video.url?.match(
    /(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/
  )?.[1];

  /* ----------------------------------
     ZOOM HELPERS
  ---------------------------------- */
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prev) => {
      const next = prev - e.deltaY * 0.001;
      return Math.min(Math.max(next, MIN_ZOOM), MAX_ZOOM);
    });
  };

  useEffect(() => {
    resetZoom();
  }, [selectedImageIndex]);

  /* ----------------------------------
     NAVEGACIÓN IMÁGENES
  ---------------------------------- */
  const navigateImage = useCallback(
    (direction) => {
      if (!video.gallery?.length) return;

      resetZoom();

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

  /* ----------------------------------
     GALERÍA (THUMBNAILS)
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
                sizes="(max-width: 768px) 33vw, 120px"
                quality={75}
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
          {/* INFO */}
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

            <div className="hidden md:block">
              <Gallery />
            </div>
          </aside>

          {/* VIDEO */}
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

          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-xl"
          >
            ✕
          </button>
        </div>
      </motion.div>

      {/* ================= MODAL IMAGEN CON ZOOM ================= */}
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

            {/* CONTENEDOR */}
            <div
              className="relative max-w-[90vw] max-h-[90vh] cursor-zoom-in"
              onClick={(e) => e.stopPropagation()}
              onDoubleClick={() =>
                setScale((prev) => (prev === 1 ? 2 : 1))
              }
            >
              <motion.div
                drag={scale > 1}
                dragConstraints={{
                  left: -300,
                  right: 300,
                  top: -300,
                  bottom: 300,
                }}
                dragElastic={0.05}
                animate={{
                  scale,
                  x: 0,
                  y: 0,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className={scale > 1 ? "cursor-grab" : ""}
              >
                <Image
                  src={video.gallery[selectedImageIndex]}
                  alt="Expanded"
                  width={1920}
                  height={1080}
                  sizes="90vw"
                  quality={95}
                  unoptimized
                  priority
                  draggable={false}
                  className="object-contain max-w-[90vw] max-h-[90vh] select-none"
                />
              </motion.div>
            </div>

            {/* DERECHA */}
            <button
              className="absolute right-4 text-white text-3xl z-20"
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
