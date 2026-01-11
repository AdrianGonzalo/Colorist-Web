"use client";
import { useState } from "react";
import { videosData } from "@/data/videosData";
import FilterBar from "@/components/FilterBar";
import VideoGrid from "@/components/VideoGrid";
import { motion } from "framer-motion";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Movies", "Commercials", "Musicals"];

  const filteredVideos =
    selectedCategory === "All"
      ? videosData
      : videosData.filter((v) => v.category === selectedCategory);

  return (
    <div className=" text-white min-h-screen py-30 px-1">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extralight tracking-wide text-gray-800 dark:text-gray-100 mb-12 relative text-center"
      >
        Works
        <span className="absolute -bottom-2 left-1/2 w-20 h-[2px] bg-neutral-700 dark:bg-neutral-300 transform -translate-x-1/2" />
      </motion.h2>

      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <VideoGrid videos={filteredVideos} />
    </div>
  );
}
