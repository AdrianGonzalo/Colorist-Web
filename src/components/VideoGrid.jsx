"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";

function getYouTubeID(url) {
  const patterns = [
    /(?:youtube\.com\/.*v=|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m && m[1]) return m[1];
  }
  const maybe = url.split("v=")[1] || url.split("/").pop();
  return maybe && maybe.length >= 11 ? maybe.slice(0, 11) : null;
}

function truncate(text, n = 80) {
  if (!text) return "";
  return text.length > n ? text.slice(0, n - 1) + "…" : text;
}

export default function VideoGrid({ videos }) {
  const [hovered, setHovered] = useState(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {videos.map((video, i) => {
          const id = getYouTubeID(video.url);

          // 📌 Miniatura máxima resolución + fallback automático
          const thumb = id
            ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
            : null;

          const desc = video.title ? truncate(video.title, 60) : "Sin título";

          return (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden shadow-lg bg-black aspect-video group cursor-pointer"
              onMouseEnter={() => setHovered(video.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedVideoIndex(i)}
            >
              {/* Título overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none">
                <div className="w-full text-white text-sm leading-5 px-3 py-1 truncate bg-black">
                  {desc}
                </div>
              </div>

              {/* Miniatura HD */}
              {thumb ? (
                <>
                  <motion.img
                    src={thumb}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hovered === video.id ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      // fallback automático a 720p
                      e.target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                    }}
                  />

                  {/* Preview autoplay cuando está en hover */}
                  {hovered === video.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${id}`}
                        className="w-full h-full object-cover pointer-events-none"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={video.title}
                      />
                    </motion.div>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  No thumbnail
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* MODAL */}
      {selectedVideoIndex !== null && (
        <VideoModal
          videos={videos}
          currentIndex={selectedVideoIndex}
          setCurrentIndex={setSelectedVideoIndex}
          onClose={() => setSelectedVideoIndex(null)}
        />
      )}
    </>
  );
}
