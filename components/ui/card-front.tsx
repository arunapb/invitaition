"use client";

import { motion } from "framer-motion";

interface CardFrontProps {
  groomName: string;
  brideName: string;
  isOpen: boolean;
}

export default function CardFront({ groomName, brideName }: CardFrontProps) {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
      {/* Background with cream color */}
      <div className="absolute inset-0 bg-[#FBF7F0]" />

      {/* Gold vertical stripes - left */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute left-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Gold vertical stripes - right */}
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute right-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Watercolor floral decoration - top right */}
      <div className="absolute -top-4 -right-4 w-40 h-40 opacity-90">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="frontLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7A8B6F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5A6B4F" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="frontFlower1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#D4BC8A" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#C5A572" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Main leaves cluster */}
          <ellipse
            cx="150"
            cy="50"
            rx="35"
            ry="55"
            fill="url(#frontLeaf1)"
            transform="rotate(45 150 50)"
          />
          <ellipse
            cx="170"
            cy="80"
            rx="30"
            ry="45"
            fill="url(#frontLeaf1)"
            transform="rotate(30 170 80)"
            opacity="0.7"
          />
          <ellipse
            cx="130"
            cy="70"
            rx="25"
            ry="40"
            fill="url(#frontLeaf1)"
            transform="rotate(60 130 70)"
            opacity="0.6"
          />
          <ellipse
            cx="160"
            cy="110"
            rx="20"
            ry="35"
            fill="url(#frontLeaf1)"
            transform="rotate(20 160 110)"
            opacity="0.5"
          />
          {/* Flower accents */}
          <circle cx="145" cy="35" r="12" fill="url(#frontFlower1)" />
          <circle
            cx="175"
            cy="55"
            r="8"
            fill="url(#frontFlower1)"
            opacity="0.8"
          />
          <circle cx="125" cy="90" r="6" fill="#E8D5B5" opacity="0.7" />
        </svg>
      </div>

      {/* Watercolor floral decoration - bottom left */}
      <div className="absolute -bottom-8 -left-8 w-48 h-48 opacity-85">
        <svg viewBox="0 0 250 250" className="w-full h-full">
          <defs>
            <linearGradient id="frontLeaf2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6B7B5F" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8B9B7F" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Large leaves */}
          <ellipse
            cx="60"
            cy="190"
            rx="45"
            ry="70"
            fill="url(#frontLeaf2)"
            transform="rotate(-45 60 190)"
          />
          <ellipse
            cx="30"
            cy="160"
            rx="35"
            ry="55"
            fill="url(#frontLeaf2)"
            transform="rotate(-30 30 160)"
            opacity="0.7"
          />
          <ellipse
            cx="90"
            cy="220"
            rx="30"
            ry="50"
            fill="url(#frontLeaf2)"
            transform="rotate(-60 90 220)"
            opacity="0.6"
          />
          {/* Small decorative elements */}
          <circle cx="70" cy="170" r="10" fill="#E8D5B5" opacity="0.6" />
          <circle cx="45" cy="200" r="6" fill="#D4BC8A" opacity="0.5" />
        </svg>
      </div>

      {/* Watercolor floral decoration - bottom right */}
      <div className="absolute -bottom-6 -right-6 w-44 h-44 opacity-80">
        <svg viewBox="0 0 220 220" className="w-full h-full">
          <ellipse
            cx="170"
            cy="180"
            rx="40"
            ry="60"
            fill="#7A8B6F"
            opacity="0.6"
            transform="rotate(45 170 180)"
          />
          <ellipse
            cx="190"
            cy="150"
            rx="30"
            ry="50"
            fill="#6B7B5F"
            opacity="0.5"
            transform="rotate(30 190 150)"
          />
          <circle cx="150" cy="165" r="8" fill="#D4BC8A" opacity="0.6" />
        </svg>
      </div>

      {/* Scattered gold dots */}
      <div className="absolute top-20 left-16 w-2 h-2 rounded-full bg-[#C5A572]/60" />
      <div className="absolute top-32 right-20 w-1.5 h-1.5 rounded-full bg-[#D4BC8A]/50" />
      <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full bg-[#C5A572]/40" />
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#D4BC8A]/30" />

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-12 py-16">
        {/* Couple illustration */}
        <motion.div
          className="mb-6"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4BC8A]/30 to-[#C5A572]/20 flex items-center justify-center">
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              {/* Groom */}
              <circle cx="30" cy="25" r="10" fill="#3D2914" opacity="0.7" />
              <ellipse
                cx="30"
                cy="55"
                rx="12"
                ry="18"
                fill="#2F4858"
                opacity="0.6"
              />
              {/* Bride */}
              <circle cx="50" cy="25" r="10" fill="#3D2914" opacity="0.6" />
              <ellipse
                cx="50"
                cy="55"
                rx="14"
                ry="18"
                fill="#F5EDE3"
                opacity="0.8"
              />
              <ellipse
                cx="50"
                cy="55"
                rx="14"
                ry="18"
                fill="none"
                stroke="#C5A572"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>
        </motion.div>

        {/* Wedding invitation text */}
        <p className="text-xs tracking-[0.25em] text-[#7A6B5A] uppercase mb-4">
          Wedding Invitation
        </p>

        {/* Couple names */}
        <motion.h1
          className="text-center leading-tight mb-6"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span
            className="block text-4xl md:text-5xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              background:
                "linear-gradient(135deg, #C5A572 0%, #D4BC8A 50%, #B8956A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {groomName}
          </span>
          <span
            className="block text-2xl my-1"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "#C5A572",
            }}
          >
            &
          </span>
          <span
            className="block text-4xl md:text-5xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              background:
                "linear-gradient(135deg, #C5A572 0%, #D4BC8A 50%, #B8956A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {brideName}
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C5A572]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A572]/60" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#C5A572]/60" />
        </div>

        {/* Tap to open */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="text-xs tracking-[0.15em] text-[#9A8B7A] uppercase mb-2">
            Tap to Open
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#C5A572]/70"
          >
            <path
              d="M12 5L12 19M12 19L6 13M12 19L18 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      />
    </div>
  );
}
