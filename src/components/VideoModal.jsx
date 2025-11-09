// "use client";
// import dynamic from "next/dynamic";
// import { motion, AnimatePresence } from "framer-motion";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// export default function VideoModal({ video, onClose }) {
//   if (!video) return null;

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-md"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//       >
//         <motion.div
//           className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <ReactPlayer
//             url={video.url}
//             width="100%"
//             height="100%"
//             playing
//             controls
//             config={{
//               youtube: {
//                 playerVars: {
//                   modestbranding: 1,
//                   rel: 0,
//                   showinfo: 0,
//                   disablekb: 0,
//                 },
//               },
//             }}
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
//           >
//             ✕
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
