// GALERIA A LA IZQUIERDA
// 
// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { createPortal } from "react-dom";
// import { useRouter } from "next/navigation";

// export default function VideoModal({
//   videos,
//   currentIndex,
//   setCurrentIndex,
//   onClose,
// }) {
//   const router = useRouter();
//   const video = videos[currentIndex];
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!video) return null;

//   const id = video.url?.match(
//     /(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/
//   )?.[1];

//   const handlePrev = () =>
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
//   const handleNext = () =>
//     setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));

//   return (
//     <>
//       {/* MODAL VIDEO PRINCIPAL */}
//       <motion.div
//         className="fixed inset-0 bg-black z-[5000] flex"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         onClick={onClose}
//       >
//         <div
//           className="relative w-full h-full flex flex-col md:flex-row overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* COLUMNA IZQUIERDA */}
//           <aside className="w-full md:max-w-sm p-6 md:p-10 flex flex-col order-1">
//             <div className="space-y-6">
//               {/* TÍTULO Y CATEGORÍA */}
//               <div>
//                 <h1
//                   onClick={() => {
//                     onClose();
//                     router.push("/");
//                   }}
//                   className="text-4xl md:text-6xl mb-6 md:mb-10 cursor-pointer hover:text-blue-400 transition"
//                 >
//                   MrPix3l
//                 </h1>

//                 <h2 className="text-blue-600 font-semibold text-lg md:text-xl">
//                   {video.category || "CATEGORY"}
//                 </h2>

//                 <h1 className="text-white text-xl md:text-2xl font-bold">
//                   {video.title}
//                 </h1>
//               </div>

//               {/* DESCRIPCIÓN */}
//               <div className="text-gray-300 text-sm md:text-base space-y-2">
//                 {video.description?.split("\n").map((l, i) => (
//                   <p key={i}>{l}</p>
//                 ))}
//               </div>

//               {/* CREDITOS */}
//               <div className="text-gray-300">
//                 <p>Fotografo: Heli Suarez</p>
//                 <p>Fotografo: Heli Suarez</p>
//                 <p>Fotografo: Heli Suarez</p>
//                 <p>Fotografo: Heli Suarez</p>
//               </div>

//               {/* GALERÍA */}
//               <div className="mt-6">
//                 <h3 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-8">
//                   Gallery
//                 </h3>

//                 <div className="grid grid-cols-3 gap-2">
//                   {video.gallery && video.gallery.length > 0 ? (
//                     video.gallery.map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         className="w-full h-20 object-cover cursor-pointer hover:opacity-80 transition"
//                         onClick={() => setSelectedImage(img)}
//                       />
//                     ))
//                   ) : (
//                     <p className="col-span-3 text-gray-400 text-sm">
//                       No gallery available
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* FLECHAS */}
//               <div className="flex gap-4 mt-10">
//                 <button
//                   onClick={handlePrev}
//                   className="text-white border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
//                 >
//                   ←
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="text-white border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
//                 >
//                   →
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* BOTÓN CERRAR */}
//           <button
//             onClick={onClose}
//             className="absolute top-6 right-6 text-white text-xl bg-white/10 
//                        hover:bg-white/20 p-2 w-10 h-10 transition z-[7000]"
//           >
//             ✕
//           </button>

//           {/* COLUMNA DERECHA (VIDEO) */}
//           <main className="w-full flex p-6 md:p-10 justify-center items-start order-2">
//             <div className="w-full max-w-[1700px]">
//               <div className="aspect-video bg-black overflow-hidden">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
//                   className="w-full h-full"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                 />
//               </div>
//             </div>
//           </main>
//         </div>
//       </motion.div>

//       {/* IMAGEN AMPLIADA */}
//       {selectedImage &&
//         createPortal(
//           <motion.div
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[6000]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.img
//               src={selectedImage}
//               className="max-w-[90%] max-h-[90%] shadow-2xl"
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               onClick={(e) => e.stopPropagation()}
//             />
//           </motion.div>,
//           document.body
//         )}
//     </>
//   );
// }


// GALRIA DEBAJO DEL VIDEO

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { createPortal } from "react-dom";
// import { useRouter } from "next/navigation";

// export default function VideoModal({
//   videos,
//   currentIndex,
//   setCurrentIndex,
//   onClose,
// }) {
//   const router = useRouter();
//   const video = videos[currentIndex];
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!video) return null;

//   const id = video.url?.match(
//     /(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/
//   )?.[1];

//   const handlePrev = () =>
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
//   const handleNext = () =>
//     setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));

//   return (
//     <>
//       {/* MODAL VIDEO PRINCIPAL */}
//       <motion.div
//         className="fixed inset-0 bg-black z-[5000] flex"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         onClick={onClose}
//       >
//         <div
//           className="relative w-full h-full flex flex-col md:flex-row overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* COLUMNA IZQUIERDA */}
//           <aside className="w-full md:max-w-sm p-6 md:p-10 flex flex-col order-1">
//             <div className="space-y-6">
//               {/* TÍTULO Y CATEGORÍA */}
//               <div>
//                 <h1
//                   onClick={() => {
//                     onClose();
//                     router.push("/");
//                   }}
//                   className="text-4xl md:text-6xl mb-6 md:mb-10 cursor-pointer hover:text-blue-400 transition"
//                 >
//                   MrPix3l
//                 </h1>

//                 <h2 className="text-blue-600 font-semibold text-lg md:text-xl">
//                   {video.category || "CATEGORY"}
//                 </h2>

//                 <h1 className="text-white text-xl md:text-2xl font-bold">
//                   {video.title}
//                 </h1>
//               </div>

//               {/* DESCRIPCIÓN */}
//               <div className="text-gray-300 text-sm md:text-base space-y-2">
//                 {video.description?.split("\n").map((l, i) => (
//                   <p key={i}>{l}</p>
//                 ))}
//               </div>

//               {/* CREDITOS */}
//               <div className="text-gray-300">
//                 <p>Fotografo: Heli Suarez</p>
//                 <p>Fotografo: Heli Suarez</p>
//                 <p>Fotografo: Heli Suarez</p>
//                 <p>Fotografo: Heli Suarez</p>
//               </div>

//               {/* FLECHAS */}
//               <div className="flex gap-4 mt-10">
//                 <button
//                   onClick={handlePrev}
//                   className="text-white border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
//                 >
//                   ←
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="text-white border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
//                 >
//                   →
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* BOTÓN CERRAR */}
//           <button
//             onClick={onClose}
//             className="absolute top-6 right-6 text-white text-xl bg-white/10 
//                        hover:bg-white/20 p-2 w-10 h-10 transition z-[7000]"
//           >
//             ✕
//           </button>

//           {/* COLUMNA DERECHA (VIDEO + GALERÍA) */}
//           <main className="w-full flex flex-col p-6 md:p-10 pt-0 md:pt-0 justify-start items-start order-2">
//             <div className="w-full max-w-[1700px]">
//               {/* VIDEO */}
//               <div className="aspect-video bg-black overflow-hidden">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
//                   className="w-full h-full"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                 />
//               </div>

//               {/* GALERÍA DE IMÁGENES */}
//               <div className="mt-6 w-full">
//                 <h3 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-8">
//                   Gallery
//                 </h3>
//                 <div className="grid grid-cols-3 gap-2">
//                   {video.gallery && video.gallery.length > 0 ? (
//                     video.gallery.map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         className="w-full h-20 object-cover cursor-pointer hover:opacity-80 transition"
//                         onClick={() => setSelectedImage(img)}
//                       />
//                     ))
//                   ) : (
//                     <p className="col-span-3 text-gray-400 text-sm">
//                       No gallery available
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </main>

//         </div>
//       </motion.div>

//       {/* IMAGEN AMPLIADA */}
//       {selectedImage &&
//         createPortal(
//           <motion.div
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[6000]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.img
//               src={selectedImage}
//               className="max-w-[90%] max-h-[90%] shadow-2xl"
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               onClick={(e) => e.stopPropagation()}
//             />
//           </motion.div>,
//           document.body
//         )}
//     </>
//   );
// }


// GALERIA IZQUIERDA EN DESK DEBAJO EN MOVIL

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function VideoModal({
  videos,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const router = useRouter();
  const video = videos[currentIndex];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  if (!video) return null;

  const id = video.url?.match(
    /(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/
  )?.[1];

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));

  const Gallery = () => (
    <div className="mt-6 w-full">
      <h3 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-8">
        Gallery
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {video.gallery && video.gallery.length > 0 ? (
          video.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-20 object-cover cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedImageIndex(index)}
            />
          ))
        ) : (
          <p className="col-span-3 text-gray-400 text-sm">
            No gallery available
          </p>
        )}
      </div>
    </div>
  );

  useEffect(() => {
    const handlePopState = () => {
      onClose(); // cierra el modal si se pulsa atrás
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [onClose]);

  const handleClose = () => {
    onClose();
    if (window.history.state && window.history.state.modal) {
      window.history.back();
    }
  };

  return (
    <>
      {/* MODAL VIDEO PRINCIPAL */}
      <motion.div
        className="fixed inset-0 bg-black z-[5000] flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClose}
      >
        <div
          className="relative w-full h-full flex flex-col md:flex-row overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* COLUMNA IZQUIERDA (desktop) */}
          <aside className="w-full md:max-w-sm p-6 md:p-10 flex flex-col order-1">
            <div className="space-y-6">
              {/* TÍTULO Y CATEGORÍA */}
              <div>
                <h2
                  onClick={() => {
                    handleClose();
                    router.push("/");
                  }}
                  className="text-4xl md:text-6xl mb-6 md:mb-10 cursor-pointer hover:text-blue-400 transition"
                >
                  MrPix3l
                </h2>

                <h2 className="text-blue-600 font-semibold text-lg md:text-xl">
                  {video.category || "CATEGORY"}
                </h2>

                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {video.title}
                </h3>
              </div>

              {/* CREDITOS */}
              {video.creditos && (
                <div className="text-gray-300 space-y-1">
                  {video.creditos.descripcion && (
                    <p>
                      <span className="font-semibold">Descripcion:</span>{" "}
                      {video.creditos.descripcion}
                    </p>
                  )}
                  {video.creditos.director && (
                    <p>
                      <span className="font-semibold">Director:</span>{" "}
                      {video.creditos.director}
                    </p>
                  )}
                  {video.creditos.photographer && (
                    <p>
                      <span className="font-semibold">Photographer:</span>{" "}
                      {video.creditos.photographer}
                    </p>
                  )}
                </div>
              )}

              {/* GALERÍA SOLO EN DESKTOP */}
              <div className="hidden md:block">
                <Gallery />
              </div>

              {/* FLECHAS */}
              <div className="flex gap-4 mt-10">
                <button
                  onClick={handlePrev}
                  className="text-white border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-white/20 transition"
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
            </div>
          </aside>

          {/* BOTÓN CERRAR */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-xl bg-white/30
                       hover:bg-white/0 p-2 w-10 h-10 transition z-[7000]"
          >
            ✕
          </button>

          {/* COLUMNA DERECHA (video + galería mobile) */}
          <main className="w-full flex flex-col p-6 md:p-10 pt-10 md:pt-20 justify-start items-start order-2">
            <div className="w-full max-w-[1700px]">
              {/* VIDEO */}
              <div className="aspect-video bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              {/* GALERÍA SOLO EN MOBILE */}
              <div className="block md:hidden">
                <Gallery />
              </div>
            </div>
          </main>
        </div>
      </motion.div>

      {/* IMAGEN AMPLIADA CON NAVEGACIÓN */}
      {selectedImageIndex !== null &&
        createPortal(
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[6000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* FLECHA IZQUIERDA */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-white/40 text-white text-2xl rounded-md shadow-lg transition z-[7000]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) =>
                  prev > 0 ? prev - 1 : video.gallery.length - 1
                );
              }}
            >
              ←

            </button>

            {/* IMAGEN */}
            <motion.img
              src={video.gallery[selectedImageIndex]}
              className="max-w-[90%] max-h-[90%] shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* FLECHA DERECHA */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-white/40 text-white text-2xl rounded-md shadow-lg transition z-[7000]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) =>
                  prev < video.gallery.length - 1 ? prev + 1 : 0
                );
              }}
            >
              →
            </button>
          </motion.div>,
          document.body
        )}

    </>
  );
}
