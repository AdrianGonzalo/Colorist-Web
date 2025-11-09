"use client";
import { useState } from "react";
import { videosData } from "@/data/videosData";
import FilterBar from "@/components/FilterBar";
import VideoGrid from "@/components/VideoGrid";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", "Películas", "Comerciales", "Musicales"];

  const filteredVideos =
    selectedCategory === "Todos"
      ? videosData
      : videosData.filter((v) => v.category === selectedCategory);

  return (
    <div className="bg-neutral-900 text-white min-h-screen py-10 px-4">
      <h1 className="text-3xl font-extrabold text-center mb-8">Trabajos</h1>

      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <VideoGrid videos={filteredVideos} />
    </div>
  );
}
