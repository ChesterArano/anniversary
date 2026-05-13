import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface EnvelopeCardProps {
  onOpen: () => void;
}

export function EnvelopeCard({ onOpen }: EnvelopeCardProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    if (!isOpened) {
      setIsOpening(true);
      setTimeout(() => {
        setIsOpened(true);
        onOpen();
      }, 1500);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto cursor-pointer" onClick={handleClick}>
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Envelope Body */}
            <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-pink-200 to-rose-300 rounded-lg shadow-2xl overflow-hidden">
              {/* Envelope Flap */}
              <motion.div
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-pink-300 to-rose-400 origin-top"
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                }}
                animate={
                  isOpening
                    ? {
                        rotateX: -180,
                        y: -10,
                      }
                    : {
                        rotateX: 0,
                      }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                {/* Wax Seal */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                  animate={
                    isOpening
                      ? {
                          scale: 0,
                          opacity: 0,
                        }
                      : {
                          scale: 1,
                          opacity: 1,
                        }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl">❤️</span>
                </motion.div>
              </motion.div>

              {/* Letter Inside */}
              <motion.div
                className="absolute inset-4 bg-cream-50 rounded shadow-inner flex items-center justify-center"
                initial={{ y: 0 }}
                animate={
                  isOpening
                    ? {
                        y: -100,
                      }
                    : {
                        y: 0,
                      }
                }
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-center px-4 mt-10">
                  <p className="text-sm text-gray-600 font-serif italic">
                     Play the music below before you Click to open...
                  </p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 text-xs text-pink-600 font-serif">
                To: Fiel
              </div>
              <div className="absolute bottom-2 left-2 text-xs text-pink-600 font-serif">
                From: Cjay
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 182, 193, 0.4), transparent)",
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
