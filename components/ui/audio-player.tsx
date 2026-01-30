"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  src?: string;
  isPlaying: boolean;
}

export default function AudioPlayer({
  src = "/background-music.mp3", 
  isPlaying,
}: AudioPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch((e) => {
          console.log("Audio play failed:", e);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={src} loop />

      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={toggleMute}
            className="w-12 h-12 rounded-full bg-[#8B1A4A] text-[#D4BC8A] shadow-lg flex items-center justify-center hover:bg-[#72153c] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
