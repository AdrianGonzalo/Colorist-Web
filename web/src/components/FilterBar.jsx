"use client";
import { motion } from "framer-motion";

export default function FilterBar({ categories, selected, onSelect }) {
  return (
    <motion.div
      className="flex justify-center gap-4 mb-10 flex-wrap"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 font-semibold transition-all ${
            selected === cat
              ? "bg-white text-black shadow-lg"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  );
}
