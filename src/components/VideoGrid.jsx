"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {videos.map((video) => {
        const id = getYouTubeID(video.url);
        const thumb = id
          ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
          : null;

        const desc = video.tittle ? video.tittle : truncate(video.title, 60);

        return (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="relative overflow-hidden shadow-lg bg-black aspect-video group cursor-pointer"
            onMouseEnter={() => setHovered(video.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Overlay del título */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end">
              <div className="w-full text-white text-sm leading-5 px-3 py-1 truncate bg-black">
                {desc}
              </div>
            </div>

            {/* Thumbnail y video con fade */}
            {thumb ? (
              <>
                {/* Thumbnail */}
                <motion.img
                  src={thumb}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: hovered === video.id ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='315' viewBox='0 0 560 315'%3E%3Crect width='100%25' height='100%25' fill='%23000' /%3E%3Ctext x='50%25' y='50%25' fill='%23fff' dy='.3em' font-family='Arial, Helvetica, sans-serif' font-size='20' text-anchor='middle'%3EThumbnail not available%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Video */}
                {hovered === video.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${id}`}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </motion.div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                No thumbnail
              </div>
            )}

            {/* Botón de play overlay */}
            <a
              href={id ? `https://www.youtube.com/watch?v=${id}` : video.url}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Open ${video.title} on YouTube`}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center border border-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 22v-20l18 10-18 10z" />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
