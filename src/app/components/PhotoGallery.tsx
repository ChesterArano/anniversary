import { motion } from "motion/react";
import { useState } from "react";
import Masonry from "react-responsive-masonry";

// Beautiful memories from our time together
const photos = [
  { id: 1, src: "/assets/1.jpg", rotation: -2, size: "md", caption: "Sunset" },
  { id: 2, src: "/assets/2.jpg", rotation: 3, size: "lg", caption: "City" },
  { id: 3, src: "/assets/3.jpg", rotation: -1, size: "md", caption: "Smile" },
  { id: 4, src: "/assets/4.jpg", rotation: 2.5, size: "sm", caption: "Picnic" },
  { id: 5, src: "/assets/5.jpg", rotation: -3, size: "md", caption: "Roadtrip" },
  { id: 6, src: "/assets/6.jpg", rotation: 1.5, size: "lg", caption: "Morning" },
  { id: 7, src: "/assets/7.jpg", rotation: -2.5, size: "md", caption: "Silly" },
  { id: 8, src: "/assets/8.jpg", rotation: 2, size: "md", caption: "Rain" },
  { id: 9, src: "/assets/9.jpg", rotation: -1.5, size: "sm", caption: "Birthday" },
  { id: 10, src: "/assets/10.jpg", rotation: 3, size: "md", caption: "Stars" },
  { id: 11, src: "/assets/11.jpg", rotation: -2.8, size: "lg", caption: "Cafe" },
  { id: 12, src: "/assets/12.jpg", rotation: 1, size: "md", caption: "Laughs" },
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const currentPhoto = photos.find((p) => p.id === selectedPhoto) ?? null;

  const getSizeClass = (size: string) => {
    switch (size) {
      case "sm":
        return "max-w-xs";
      case "lg":
        return "max-w-sm";
      default:
        return "max-w-xs";
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Beautiful Memories
      </motion.h2>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="break-inside-avoid cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
              whileHover={{ scale: 1.08, rotate: photo.rotation + 2, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              {/* Polaroid Scrapbook Frame */}
              <motion.div
                className="bg-white p-4 md:p-5 shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative group"
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Top Tape */}
                <motion.div
                  className="absolute -top-3 left-1/4 w-12 h-8 bg-amber-100 opacity-70 blur-sm"
                  animate={{ rotate: -5 }}
                />
                <motion.div
                  className="absolute -top-3 right-1/4 w-12 h-8 bg-amber-100 opacity-70 blur-sm"
                  animate={{ rotate: 5 }}
                />

                {/* Photo Container */}
                <div className="relative overflow-hidden rounded-sm mb-4 shadow-md">
                  <motion.img
                    src={photo.src}
                    alt={`Memory ${photo.id}`}
                    className="w-full h-auto object-cover rounded-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shine Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 0.2, x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Memory Number with Aesthetic Style */}
                <div className="relative">
                  <motion.div
                    className="text-sm font-serif text-pink-600 mb-2 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.3 }}
                  >
                    <span className="text-xl">✨</span>
                    <span className="italic">Memory #{photo.id}</span>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="h-0.5 w-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                  />
                </div>

                {/* Heart Stickers */}
                <div className="absolute top-3 right-3 text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                  ❤️
                </div>
                <div className="absolute bottom-3 left-3 text-xl opacity-40 group-hover:opacity-70 transition-opacity">
                  💕
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="relative max-w-3xl w-full bg-white p-8 rounded-lg shadow-2xl"
            initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg font-bold text-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </motion.button>

            {/* Polaroid Style Lightbox */}
            <div className="bg-white p-6 rounded-sm shadow-lg">
              <div className="relative overflow-hidden rounded-sm mb-4 shadow-md">
                <motion.img
                  src={photos.find((p) => p.id === selectedPhoto)?.src}
                  alt={`Memory ${selectedPhoto}`}
                  className="w-full h-auto object-cover"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="text-center pt-2">
                <motion.p
                  className="font-serif text-gray-600 text-sm italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentPhoto?.caption ?? "A cherished moment ✨"}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
