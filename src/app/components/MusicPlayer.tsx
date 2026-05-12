import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl p-4 flex items-center gap-3">
        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" fill="white" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" fill="white" />
          )}
        </motion.button>

        {/* Song Info */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="text-sm font-semibold text-gray-800 truncate">
            Libu-Libong Buwan
          </div>
          <div className="text-xs text-gray-600 truncate">
            Kyle Raphael ❤️
          </div>
        </div>

        {/* Volume Button */}
        <motion.button
          onClick={toggleMute}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </motion.button>

        {/* Animated Music Waves */}
        {isPlaying && (
          <div className="flex items-center gap-0.5 ml-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full"
                animate={{
                  height: ["8px", "16px", "8px"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/Libu-Libong Buwan (Uuwian) - Kyle Raphael (Lyric Video).mp3"
        loop
      />
    </motion.div>
  );
}
