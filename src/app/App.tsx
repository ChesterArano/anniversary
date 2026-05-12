import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { EnvelopeCard } from "./components/EnvelopeCard";
import { LoveLetter } from "./components/LoveLetter";
import { PhotoGallery } from "./components/PhotoGallery";
import { Timeline } from "./components/Timeline";
import { CountdownTimer } from "./components/CountdownTimer";
import { MusicPlayer } from "./components/MusicPlayer";
import { FloatingHearts } from "./components/FloatingHearts";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleEnvelopeOpen = () => {
    setShowLetter(true);
    setTimeout(() => {
      setShowGallery(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Music Player */}
      <MusicPlayer />

      {/* Main Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Happy 3rd Anniversary
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              className="text-6xl md:text-7xl"
            >
              ❤️
            </motion.div>
          </motion.div>

          {/* Envelope */}
          <AnimatePresence mode="wait">
            {!showLetter && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="w-full max-w-md px-4"
              >
                <EnvelopeCard onOpen={handleEnvelopeOpen} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Love Letter */}
          <AnimatePresence>
            {showLetter && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full px-4 mt-8"
              >
                <LoveLetter />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Photo Gallery Section */}
        <AnimatePresence>
          {showGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="py-20"
            >
              <PhotoGallery />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Countdown Timer Section */}
        <AnimatePresence>
          {showGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="py-20 bg-white/40 backdrop-blur-sm"
            >
              <CountdownTimer />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timeline Section */}
        <AnimatePresence>
          {showGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="py-20"
            >
              <Timeline />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <AnimatePresence>
          {showGallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="py-20 text-center"
            >
              <div className="relative inline-block">
                <motion.p
                  className="text-2xl md:text-3xl font-serif text-gray-800"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Forever & Always ❤️
                </motion.p>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}