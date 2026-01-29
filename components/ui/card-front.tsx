"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CoupleIllustration,
  FloralBouquet,
  FloralStem,
  FloralSplash,
} from "@/assets/images";

interface CardFrontProps {
  groomName: string;
  brideName: string;
  isOpen: boolean;
}

export default function CardFront({ groomName, brideName }: CardFrontProps) {
  return (
    <div className="relative w-full aspect-3/4 overflow-hidden rounded-sm shadow-2xl">
      {/* Background with cream color */}
      <div className="absolute inset-0 bg-[#FBF7F0]" />

      {/* Background Splash */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src={FloralSplash}
          alt="Watercolor splash"
          fill
          className="object-cover"
        />
      </div>

      {/* Gold vertical stripes - left */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-linear-to-r from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute left-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Gold vertical stripes - right */}
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-linear-to-l from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute right-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Watercolor floral decoration - top right */}

      {/* Watercolor floral decoration - top left */}
      <div className="absolute -top-10 -left-10 w-56 h-56 opacity-90">
        <Image
          src={FloralBouquet}
          alt="Floral decoration"
          fill
          className="object-contain"
          style={{ transform: "rotate(-30deg)" }}
        />
      </div>

      {/* Delicate floral stems - left side */}
      <div className="absolute left-8 top-1/3 w-20 h-36 opacity-50">
        <Image
          src={FloralStem}
          alt="Floral stems"
          fill
          className="object-contain"
        />
      </div>

      {/* Watercolor floral decoration - bottom left */}

      {/* Watercolor floral decoration - bottom right */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-85">
        <Image
          src={FloralBouquet}
          alt="Floral decoration"
          fill
          className="object-contain"
          style={{ transform: "scaleX(-1) rotate(0deg)" }}
        />
      </div>

      {/* Scattered gold dots */}
      <div className="absolute top-20 left-16 w-2 h-2 rounded-full bg-[#C5A572]/60" />
      <div className="absolute top-32 right-20 w-1.5 h-1.5 rounded-full bg-[#D4BC8A]/50" />
      <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full bg-[#C5A572]/40" />
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#D4BC8A]/30" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#C5A572]/25" />

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-12 py-16">
        {/* Couple illustration */}
        <motion.div
          className="mb-4 relative w-24 h-24"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={CoupleIllustration}
            alt="Couple illustration"
            fill
            className="object-contain"
          />
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
          <div className="w-8 h-px bg-linear-to-r from-transparent to-[#C5A572]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A572]/60" />
          <div className="w-8 h-px bg-linear-to-l from-transparent to-[#C5A572]/60" />
        </div>
      </div>

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      />
    </div>
  );
}
