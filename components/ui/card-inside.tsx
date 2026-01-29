"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { CoupleIllustration, FloralBouquet, FloralStem } from "@/assets/images";

interface WeddingDetails {
  groomName: string;
  brideName: string;
  date: string;
  day: string;
  time: string;
  month: string;
  year: string;
  venue: string;
  venueAddress: string;
  city: string;
  mapUrl: string;
  mapEmbedUrl: string;
}

interface CardInsideProps {
  details: WeddingDetails;
  isOpen: boolean;
}

export default function CardInside({ details, isOpen }: CardInsideProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleLocationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(details.mapUrl, "_blank");
  };

  return (
    <div className="relative w-full aspect-3/4 overflow-hidden rounded-sm shadow-2xl">
      {/* Background */}
      <div className="absolute inset-0 bg-[#FBF7F0]" />

      {/* Gold vertical stripes - left */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-linear-to-r from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute left-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Gold vertical stripes - right */}
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-linear-to-l from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute right-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Watercolor floral - top right */}

      {/* Watercolor floral - top left */}
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
      <div className="absolute left-10 top-1/4 w-20 h-40 opacity-45">
        <Image
          src={FloralStem}
          alt="Floral stems"
          fill
          className="object-contain mix-blend-multiply"
        />
      </div>

      {/* Watercolor floral - bottom left */}

      {/* Watercolor floral - bottom right */}
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
      <div className="absolute top-24 left-20 w-1.5 h-1.5 rounded-full bg-[#C5A572]/50" />
      <div className="absolute top-40 right-24 w-1 h-1 rounded-full bg-[#D4BC8A]/40" />
      <div className="absolute bottom-32 left-24 w-2 h-2 rounded-full bg-[#C5A572]/30" />
      <div className="absolute top-1/2 right-16 w-1 h-1 rounded-full bg-[#D4BC8A]/50" />

      {/* Main content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-start px-10 pt-8 pb-6"
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {/* Couple illustration */}
        <motion.div variants={itemVariants} className="relative w-20 h-20 mb-2">
          <Image
            src={CoupleIllustration}
            alt="Couple illustration"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Together with families */}
        <motion.p
          variants={itemVariants}
          className="text-[10px] tracking-[0.2em] text-[#9A8B7A] uppercase text-center"
        >
          Together
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-[10px] tracking-[0.2em] text-[#9A8B7A] uppercase text-center mb-2"
        >
          With Their Families
        </motion.p>

        {/* Couple names */}
        <motion.h1 variants={itemVariants} className="text-center mb-1">
          <span
            className="text-3xl md:text-4xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              background:
                "linear-gradient(135deg, #C5A572 0%, #D4BC8A 50%, #B8956A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {details.groomName}
          </span>
          <span
            className="text-xl mx-2"
            style={{ fontFamily: "'Great Vibes', cursive", color: "#C5A572" }}
          >
            &
          </span>
          <span
            className="text-3xl md:text-4xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              background:
                "linear-gradient(135deg, #C5A572 0%, #D4BC8A 50%, #B8956A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {details.brideName}
          </span>
        </motion.h1>

        {/* Invite text */}
        <motion.p
          variants={itemVariants}
          className="text-[9px] tracking-[0.15em] text-[#9A8B7A] uppercase text-center mb-3"
        >
          Invite You to Celebrate Their Wedding
        </motion.p>

        {/* Month */}
        <motion.p
          variants={itemVariants}
          className="text-sm tracking-[0.25em] uppercase mb-1"
          style={{ fontFamily: "'Playfair Display', serif", color: "#8B1A4A" }}
        >
          {details.month}
        </motion.p>

        {/* Date section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-1"
        >
          <span
            className="text-xs text-[#7A6B5A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {details.day.toUpperCase()}
          </span>
          <div className="flex items-center gap-1 px-2 border-l-2 border-r-2 border-[#C5A572]/40">
            <div className="w-1 h-5 rounded-full bg-[#C5A572]/70" />
            <span className="text-xl font-bold text-[#8B1A4A] mx-1">
              {details.date}
            </span>
            <div className="w-1 h-5 rounded-full bg-[#C5A572]/70" />
          </div>
          <span
            className="text-xs text-[#7A6B5A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            AT {details.time.toUpperCase()}
          </span>
        </motion.div>

        {/* Year */}
        <motion.p
          variants={itemVariants}
          className="text-base mb-3"
          style={{ fontFamily: "'Playfair Display', serif", color: "#C5A572" }}
        >
          {details.year}
        </motion.p>

        {/* Venue */}
        <motion.div variants={itemVariants} className="text-center mb-3">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#8B1A4A",
            }}
          >
            {details.venue}
          </p>
          <p className="text-xs text-[#7A6B5A] mt-0.5">
            {details.venueAddress}
          </p>
          <p className="text-xs text-[#7A6B5A]">{details.city}</p>
        </motion.div>

        {/* Contact Details */}
        <motion.p
          variants={itemVariants}
          className="text-[10px] tracking-wider text-[#9A8B7A] uppercase mb-4"
        >
          Darshana +94 74 146 2698
        </motion.p>

        {/* Location QR Code Section */}
        <motion.div
          variants={itemVariants}
          className="flex items-end justify-end w-full mt-auto"
          onClick={handleLocationClick}
        >
          <div className="flex items-center gap-2 cursor-pointer group">
            {/* QR Code placeholder */}
            <div className="w-14 h-14 bg-linear-to-br from-[#C5A572] to-[#D4BC8A] rounded p-0.5 shadow-md group-hover:shadow-lg transition-shadow">
              <div className="w-full h-full bg-white rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 50 50" className="w-11 h-11">
                  {/* QR Code pattern */}
                  <rect x="5" y="5" width="12" height="12" fill="#C5A572" />
                  <rect x="33" y="5" width="12" height="12" fill="#C5A572" />
                  <rect x="5" y="33" width="12" height="12" fill="#C5A572" />
                  <rect x="8" y="8" width="6" height="6" fill="white" />
                  <rect x="36" y="8" width="6" height="6" fill="white" />
                  <rect x="8" y="36" width="6" height="6" fill="white" />
                  <rect x="10" y="10" width="2" height="2" fill="#C5A572" />
                  <rect x="38" y="10" width="2" height="2" fill="#C5A572" />
                  <rect x="10" y="38" width="2" height="2" fill="#C5A572" />
                  {/* Center pattern */}
                  <rect x="20" y="5" width="3" height="3" fill="#C5A572" />
                  <rect x="25" y="8" width="3" height="3" fill="#C5A572" />
                  <rect x="20" y="11" width="3" height="3" fill="#C5A572" />
                  <rect x="5" y="20" width="3" height="3" fill="#C5A572" />
                  <rect x="11" y="22" width="3" height="3" fill="#C5A572" />
                  <rect
                    x="20"
                    y="20"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#C5A572"
                    strokeWidth="2"
                  />
                  <rect x="23" y="23" width="4" height="4" fill="#C5A572" />
                  <rect x="33" y="20" width="3" height="3" fill="#C5A572" />
                  <rect x="42" y="22" width="3" height="3" fill="#C5A572" />
                  <rect x="20" y="35" width="3" height="3" fill="#C5A572" />
                  <rect x="25" y="40" width="3" height="3" fill="#C5A572" />
                  <rect x="35" y="35" width="10" height="10" fill="#C5A572" />
                  <rect x="38" y="38" width="4" height="4" fill="white" />
                </svg>
              </div>
            </div>
            {/* Location label */}
            <div className="flex items-center gap-1 bg-[#8B1A4A]/90 text-white text-[9px] px-2 py-1 rounded shadow group-hover:bg-[#A52A5A] transition-colors">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#D4BC8A]"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="tracking-wider uppercase">Location</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
