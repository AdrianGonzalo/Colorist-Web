"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoGrid({ videos }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {videos.map((video) => (
        <motion.div
          key={video.id}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden rounded-xl shadow-lg bg-black aspect-video group cursor-pointer"
          onMouseEnter={() => setHovered(video.id)}
          onMouseLeave={() => setTimeout(() => setHovered(null), 100)}
        >
          <ReactPlayer
            url={video.url}
            playing={hovered === video.id}
            light={true}
            muted
            loop
            controls={false}
            playsinline
            style={{
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  rel: 0,
                  controls: 0,
                  disablekb: 1,
                  fs: 0,
                  iv_load_policy: 3,
                },
              },
            }}
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
            <h3 className="text-white font-semibold text-lg text-center px-2">
              {video.title}
            </h3>
            <p className="text-gray-300 text-sm">{video.category}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
