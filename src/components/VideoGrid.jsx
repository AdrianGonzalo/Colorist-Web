"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import VideoModal from "./VideoModal";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoGrid({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            variants={{
              hidden: { opacity: 0, scale: 0.97 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-lg bg-black aspect-video group cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <ReactPlayer
              url={video.url}
              width="100%"
              height="100%"
              playing={!selectedVideo}
              muted
              loop
              controls={false}
              playsinline
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                    controls: 0,
                    showinfo: 0,
                    disablekb: 1,
                  },
                },
              }}
              className="absolute top-0 left-0"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
              <h3 className="text-white font-semibold text-lg">
                {video.title}
              </h3>
              <p className="text-gray-300 text-sm">{video.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      /> */}
    </>
  );
}
