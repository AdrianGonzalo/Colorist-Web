"use client";
import { motion } from "framer-motion";

function getYouTubeID(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  const id = getYouTubeID(video.url);

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[2000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Caja del modal */}
      <motion.div
        className="bg-[#0c0c0c] w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl mx-4 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* VIDEO GRANDE ARRIBA */}
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={video.title}
          />
        </div>

        {/* DESCRIPCIÓN */}
        <div className="mt-4 flex items-start justify-between gap-4 p-4">
          <p className="text-gray-300 flex-1">{video.description}</p>

          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-xl backdrop-blur-sm transition"
          >
            Cerrar
          </button>
        </div>

        {/* IMÁGENES OPCIONALES */}
        {video.images?.length > 0 && (
          <div className="grid grid-cols-3 gap-2 p-4">
            {video.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`img-${i}`}
                className="rounded-lg object-cover w-full h-24"
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
