"use client";

import { motion } from "framer-motion";

interface CardFrontProps {
  groomName: string;
  brideName: string;
  isOpen: boolean;
}

export default function CardFront({
  groomName,
  brideName,
  isOpen,
}: CardFrontProps) {
  return (
    <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-cream to-cream-dark rounded-lg shadow-2xl overflow-hidden border-2 border-gold/30">
      {/* Decorative gold border frame */}
      <div className="absolute inset-3 border-2 border-gold/40 rounded-lg pointer-events-none" />
      <div className="absolute inset-5 border border-gold/20 rounded-lg pointer-events-none" />

      {/* Top decorative corner ornaments */}
      <div className="absolute top-4 left-4 w-16 h-16">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/60">
          <path
            d="M0,50 Q0,0 50,0 L50,10 Q10,10 10,50 L0,50"
            fill="currentColor"
          />
          <circle cx="25" cy="25" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 w-16 h-16 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/60">
          <path
            d="M0,50 Q0,0 50,0 L50,10 Q10,10 10,50 L0,50"
            fill="currentColor"
          />
          <circle cx="25" cy="25" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom decorative corner ornaments */}
      <div className="absolute bottom-4 left-4 w-16 h-16 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/60">
          <path
            d="M0,50 Q0,0 50,0 L50,10 Q10,10 10,50 L0,50"
            fill="currentColor"
          />
          <circle cx="25" cy="25" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-16 h-16 transform scale-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold/60">
          <path
            d="M0,50 Q0,0 50,0 L50,10 Q10,10 10,50 L0,50"
            fill="currentColor"
          />
          <circle cx="25" cy="25" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Floral decorations - Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-24 opacity-80">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          <defs>
            <linearGradient
              id="leafGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7A8B6F" />
              <stop offset="100%" stopColor="#5A6B4F" />
            </linearGradient>
            <linearGradient
              id="goldGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#D4BC8A" />
              <stop offset="100%" stopColor="#C5A572" />
            </linearGradient>
          </defs>
          {/* Leaves */}
          <ellipse
            cx="60"
            cy="40"
            rx="15"
            ry="25"
            fill="url(#leafGradient)"
            transform="rotate(-30 60 40)"
            opacity="0.7"
          />
          <ellipse
            cx="140"
            cy="40"
            rx="15"
            ry="25"
            fill="url(#leafGradient)"
            transform="rotate(30 140 40)"
            opacity="0.7"
          />
          <ellipse
            cx="80"
            cy="50"
            rx="12"
            ry="20"
            fill="url(#leafGradient)"
            transform="rotate(-15 80 50)"
            opacity="0.6"
          />
          <ellipse
            cx="120"
            cy="50"
            rx="12"
            ry="20"
            fill="url(#leafGradient)"
            transform="rotate(15 120 50)"
            opacity="0.6"
          />
          {/* Gold accents */}
          <circle cx="100" cy="30" r="4" fill="url(#goldGradient)" />
          <circle cx="85" cy="45" r="2" fill="url(#goldGradient)" />
          <circle cx="115" cy="45" r="2" fill="url(#goldGradient)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
        {/* Decorative top element */}
        <motion.div
          className="mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-gold">
            <path
              d="M30 5 L35 15 L45 15 L37 22 L40 32 L30 26 L20 32 L23 22 L15 15 L25 15 Z"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
        </motion.div>

        {/* Wedding text */}
        <p className="text-sm tracking-[0.3em] text-gold-dark/70 uppercase mb-2">
          Wedding Invitation
        </p>

        {/* Couple names */}
        <motion.h1
          className="text-4xl md:text-5xl font-script text-gradient-gold text-center leading-relaxed mb-4"
          style={{ fontFamily: "'Great Vibes', cursive" }}
          animate={!isOpen ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {groomName}
          <span className="block text-gold/60 text-3xl">&</span>
          {brideName}
        </motion.h1>

        {/* Decorative line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-2 h-2 rounded-full bg-gold/60" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Tap to open indicator */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="text-xs tracking-[0.2em] text-gold-dark/50 uppercase mb-2">
            Tap to Open
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold/60"
          >
            <path
              d="M12 4L12 20M12 20L6 14M12 20L18 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom floral decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-70">
        <svg
          viewBox="0 0 400 130"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bottomLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B9B7F" />
              <stop offset="100%" stopColor="#6A7B5F" />
            </linearGradient>
          </defs>
          {/* Left side flowers and leaves */}
          <ellipse
            cx="40"
            cy="100"
            rx="30"
            ry="50"
            fill="url(#bottomLeaf)"
            transform="rotate(30 40 100)"
            opacity="0.5"
          />
          <ellipse
            cx="80"
            cy="110"
            rx="25"
            ry="40"
            fill="url(#bottomLeaf)"
            transform="rotate(15 80 110)"
            opacity="0.4"
          />
          <circle cx="50" cy="85" r="8" fill="#D4BC8A" opacity="0.6" />
          <circle cx="70" cy="95" r="5" fill="#C5A572" opacity="0.5" />

          {/* Right side flowers and leaves */}
          <ellipse
            cx="360"
            cy="100"
            rx="30"
            ry="50"
            fill="url(#bottomLeaf)"
            transform="rotate(-30 360 100)"
            opacity="0.5"
          />
          <ellipse
            cx="320"
            cy="110"
            rx="25"
            ry="40"
            fill="url(#bottomLeaf)"
            transform="rotate(-15 320 110)"
            opacity="0.4"
          />
          <circle cx="350" cy="85" r="8" fill="#D4BC8A" opacity="0.6" />
          <circle cx="330" cy="95" r="5" fill="#C5A572" opacity="0.5" />
        </svg>
      </div>

      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
    </div>
  );
}
