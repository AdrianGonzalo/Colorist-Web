// "use client";
// import { motion } from "framer-motion";

// function getYouTubeID(url) {
//   const match = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
//   return match ? match[1] : null;
// }

// export default function VideoModal({ video, onClose }) {
//   if (!video) return null;

//   const id = getYouTubeID(video.url);

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[2000]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       onClick={onClose}
//     >
//       {/* Caja del modal */}
//       <motion.div
//         className="
//           bg-[#0c0c0c]
//           w-full
//           max-w-7xl
//           overflow-hidden
//           shadow-2xl
//           mx-4
//           relative
//         "
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* VIDEO */}
//         <div className="relative w-full pb-[56.25%] bg-black">
//           <iframe
//             src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
//             className="absolute top-0 left-0 w-full h-full"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//             title={video.title}
//           />
//         </div>

//         {/* DESCRIPCIÓN */}
//         <div className="mt-4 flex items-start justify-between gap-4 p-4">
//           <p className="text-gray-300 flex-1">{video.description}</p>

//           <button
//             onClick={onClose}
//             className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 backdrop-blur-sm transition"
//           >
//             Cerrar
//           </button>
//         </div>

//         {/* IMÁGENES */}
//         {video.images?.length > 0 && (
//           <div className="grid grid-cols-3 gap-2 p-4">
//             {video.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`img-${i}`}
//                 className="rounded-lg object-cover w-full h-24"
//               />
//             ))}
//           </div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function VideoModal({
  videos,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const video = videos[currentIndex];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!video) return null;

  const id = video.url?.match(
    /(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/
  )?.[1];
  const images = video.images || [];

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));

  return (
    <>
      {/* MODAL VIDEO PRINCIPAL */}
      <motion.div
        className="fixed inset-0 bg-black z-[5000] flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose} // clic fuera cierra modal
      >
        <div
          className="relative w-full h-full flex"
          onClick={(e) => e.stopPropagation()} // evita cerrar modal al clicar dentro
        >
          {/* COLUMNA IZQUIERDA */}
          <aside className="w-full max-w-sm p-10 flex flex-col justify-between">
            {/* INFO */}
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl mb-10">MrPixel</h1>
                <h2 className="text-blue-600 font-semibold text-xl">
                  {video.category || "CATEGORY"}
                </h2>
                <h1 className="text-white text-2xl font-bold">{video.title}</h1>
              </div>

              <div className="text-gray-300 text-sm space-y-2">
                {video.description?.split("\n").map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
              {/* CREDITOS */}
              <div>
                <p>Fotografo: Heli Suarez </p>
                <p>Fotografo: Heli Suarez </p>
                <p>Fotografo: Heli Suarez </p>
                <p>Fotografo: Heli Suarez </p>
              </div>

              {/* GALERIA */}
              <div className="mt-6">
                <h3 className="text-white text-2xl font-bold mb-8">Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((n) => (
                    <img
                      key={n}
                      src={`/Gallery/1/${n}.jpg`}
                      className="w-full h-20 object-cover cursor-pointer hover:opacity-80 transition"
                      onClick={() => setSelectedImage(`/Gallery/1/${n}.jpg`)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* FLECHAS */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={handlePrev}
                className="text-white border border-white/30  w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="text-white border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
              >
                →
              </button>
            </div>
          </aside>

          {/* COLUMNA DERECHA */}
          <main className="flex-1 flex relative p-10">
            {/* BOTÓN CERRAR */}
            <button
              onClick={onClose}
              className="absolute w-10 h-10 top-6 right-6 text-white text-xl bg-white/10 hover:bg-white/20 p-2  transition z-[7000]"
            >
              ✕
            </button>

            {/* VIDEO PRINCIPAL */}
            <div className="w-full max-w-8xl pr-80">
              <div className="aspect-video bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              {/* MINIATURAS DEBAJO */}
              {images.length > 0 && (
                <div className="grid grid-cols-4 gap-4 mt-6">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-24 object-cover cursor-pointer hover:opacity-80 transition "
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </motion.div>

      {/* IMAGEN AMPLIADA USANDO PORTAL */}
      {selectedImage &&
        createPortal(
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[6000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)} // clic fuera cierra imagen
          >
            <motion.img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()} // clic en imagen no cierra modal padre
            />
          </motion.div>,
          document.body
        )}
    </>
  );
}

// Ejemplo 3
