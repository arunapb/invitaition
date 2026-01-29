"use client";

import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
      {/* Background */}
      <div className="absolute inset-0 bg-[#FBF7F0]" />

      {/* Gold vertical stripes - left */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute left-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Gold vertical stripes - right */}
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#C5A572] to-[#D4BC8A]" />
      <div className="absolute right-5 top-0 bottom-0 w-1 bg-[#C5A572]/50" />

      {/* Watercolor floral - top right */}
      <div className="absolute -top-6 -right-6 w-44 h-44 opacity-85">
        <svg viewBox="0 0 220 220" className="w-full h-full">
          <defs>
            <linearGradient
              id="insideLeaf1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7A8B6F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5A6B4F" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <ellipse
            cx="170"
            cy="50"
            rx="40"
            ry="60"
            fill="url(#insideLeaf1)"
            transform="rotate(45 170 50)"
          />
          <ellipse
            cx="185"
            cy="85"
            rx="30"
            ry="45"
            fill="url(#insideLeaf1)"
            transform="rotate(30 185 85)"
            opacity="0.7"
          />
          <ellipse
            cx="145"
            cy="75"
            rx="25"
            ry="40"
            fill="url(#insideLeaf1)"
            transform="rotate(55 145 75)"
            opacity="0.6"
          />
          <circle cx="160" cy="40" r="10" fill="#E8D5B5" opacity="0.7" />
          <circle cx="190" cy="60" r="6" fill="#D4BC8A" opacity="0.6" />
        </svg>
      </div>

      {/* Watercolor floral - top left */}
      <div className="absolute -top-4 -left-4 w-36 h-36 opacity-75">
        <svg viewBox="0 0 180 180" className="w-full h-full">
          <ellipse
            cx="40"
            cy="50"
            rx="35"
            ry="50"
            fill="#7A8B6F"
            opacity="0.6"
            transform="rotate(-45 40 50)"
          />
          <ellipse
            cx="25"
            cy="80"
            rx="25"
            ry="40"
            fill="#6B7B5F"
            opacity="0.5"
            transform="rotate(-30 25 80)"
          />
          <circle cx="55" cy="35" r="8" fill="#D4BC8A" opacity="0.6" />
        </svg>
      </div>

      {/* Watercolor wash splash - left side */}
      <div className="absolute left-8 top-1/4 w-20 h-32 opacity-40">
        <svg viewBox="0 0 100 160" className="w-full h-full">
          <ellipse
            cx="40"
            cy="80"
            rx="35"
            ry="70"
            fill="#D4BC8A"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Delicate floral stems - center left */}
      <div className="absolute left-12 top-1/3 w-24 h-40 opacity-50">
        <svg viewBox="0 0 120 200" className="w-full h-full">
          <path
            d="M60 180 Q50 140 55 100 Q60 60 45 30"
            fill="none"
            stroke="#9A8B7A"
            strokeWidth="1"
            opacity="0.6"
          />
          <path
            d="M70 180 Q80 130 70 90 Q55 50 75 20"
            fill="none"
            stroke="#9A8B7A"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="45" cy="30" r="4" fill="#E8D5B5" opacity="0.7" />
          <circle cx="75" cy="20" r="3" fill="#D4BC8A" opacity="0.6" />
          <circle cx="55" cy="70" r="2" fill="#F5EDE3" opacity="0.8" />
        </svg>
      </div>

      {/* Watercolor floral - bottom left */}
      <div className="absolute -bottom-10 -left-10 w-52 h-52 opacity-80">
        <svg viewBox="0 0 260 260" className="w-full h-full">
          <defs>
            <linearGradient
              id="insideLeaf2"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6B7B5F" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8B9B7F" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <ellipse
            cx="70"
            cy="200"
            rx="50"
            ry="75"
            fill="url(#insideLeaf2)"
            transform="rotate(-45 70 200)"
          />
          <ellipse
            cx="35"
            cy="175"
            rx="40"
            ry="60"
            fill="url(#insideLeaf2)"
            transform="rotate(-25 35 175)"
            opacity="0.7"
          />
          <ellipse
            cx="100"
            cy="230"
            rx="35"
            ry="55"
            fill="url(#insideLeaf2)"
            transform="rotate(-60 100 230)"
            opacity="0.6"
          />
          <ellipse
            cx="55"
            cy="220"
            rx="25"
            ry="40"
            fill="#8B9B7F"
            opacity="0.4"
            transform="rotate(-35 55 220)"
          />
          {/* Flowers */}
          <circle cx="80" cy="180" r="12" fill="#F5EDE3" opacity="0.8" />
          <circle cx="80" cy="180" r="6" fill="#D4BC8A" opacity="0.6" />
          <circle cx="50" cy="210" r="8" fill="#F5F0E8" opacity="0.7" />
          <circle cx="50" cy="210" r="4" fill="#E8D5B5" opacity="0.6" />
        </svg>
      </div>

      {/* Watercolor floral - bottom right */}
      <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-75">
        <svg viewBox="0 0 240 240" className="w-full h-full">
          <ellipse
            cx="190"
            cy="190"
            rx="45"
            ry="65"
            fill="#7A8B6F"
            opacity="0.6"
            transform="rotate(45 190 190)"
          />
          <ellipse
            cx="200"
            cy="160"
            rx="35"
            ry="50"
            fill="#6B7B5F"
            opacity="0.5"
            transform="rotate(35 200 160)"
          />
          <ellipse
            cx="165"
            cy="200"
            rx="30"
            ry="45"
            fill="#8B9B7F"
            opacity="0.4"
            transform="rotate(55 165 200)"
          />
          <circle cx="170" cy="175" r="10" fill="#E8D5B5" opacity="0.6" />
        </svg>
      </div>

      {/* Scattered gold dots */}
      <div className="absolute top-24 left-20 w-1.5 h-1.5 rounded-full bg-[#C5A572]/50" />
      <div className="absolute top-40 right-24 w-1 h-1 rounded-full bg-[#D4BC8A]/40" />
      <div className="absolute bottom-32 left-24 w-2 h-2 rounded-full bg-[#C5A572]/30" />
      <div className="absolute top-1/2 right-16 w-1 h-1 rounded-full bg-[#D4BC8A]/50" />

      {/* Main content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-start px-10 pt-10 pb-6"
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {/* Couple illustration */}
        <motion.div variants={itemVariants} className="mb-3">
          <div className="w-20 h-20 flex items-center justify-center">
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              {/* Groom */}
              <circle cx="30" cy="22" r="9" fill="#3D2914" opacity="0.7" />
              <ellipse
                cx="30"
                cy="50"
                rx="11"
                ry="16"
                fill="#2F4858"
                opacity="0.6"
              />
              {/* Bride */}
              <circle cx="50" cy="22" r="9" fill="#3D2914" opacity="0.6" />
              <ellipse
                cx="50"
                cy="50"
                rx="13"
                ry="16"
                fill="#FAF5EF"
                opacity="0.9"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="13"
                ry="16"
                fill="none"
                stroke="#C5A572"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </div>
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
          className="text-[10px] tracking-[0.2em] text-[#9A8B7A] uppercase text-center mb-3"
        >
          With Their Families
        </motion.p>

        {/* Couple names */}
        <motion.h1 variants={itemVariants} className="text-center mb-2">
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
          className="text-[9px] tracking-[0.15em] text-[#9A8B7A] uppercase text-center mb-4"
        >
          Invite You to Celebrate Their Wedding
        </motion.p>

        {/* Month */}
        <motion.p
          variants={itemVariants}
          className="text-sm tracking-[0.25em] uppercase mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: "#8B1A4A" }}
        >
          {details.month}
        </motion.p>

        {/* Date section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-1"
        >
          <span
            className="text-sm text-[#7A6B5A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {details.day.toUpperCase()}
          </span>
          <div className="flex items-center gap-1 px-3 border-l-2 border-r-2 border-[#C5A572]/40">
            <div className="w-1 h-6 rounded-full bg-[#C5A572]/70" />
            <span className="text-2xl font-bold text-[#8B1A4A] mx-1">
              {details.date}
            </span>
            <div className="w-1 h-6 rounded-full bg-[#C5A572]/70" />
          </div>
          <span
            className="text-sm text-[#7A6B5A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            AT {details.time.toUpperCase()}
          </span>
        </motion.div>

        {/* Year */}
        <motion.p
          variants={itemVariants}
          className="text-lg mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "#C5A572" }}
        >
          {details.year}
        </motion.p>

        {/* Venue */}
        <motion.div variants={itemVariants} className="text-center mb-4">
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

        {/* Location QR Code Section */}
        <motion.div
          variants={itemVariants}
          className="flex items-end justify-end w-full mt-auto"
          onClick={handleLocationClick}
        >
          <div className="flex items-center gap-2 cursor-pointer group">
            {/* QR Code placeholder */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#C5A572] to-[#D4BC8A] rounded p-1 shadow-md group-hover:shadow-lg transition-shadow">
              <div className="w-full h-full bg-white rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 50 50" className="w-12 h-12">
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
            <div className="flex items-center gap-1 bg-[#8B1A4A]/90 text-white text-[10px] px-2 py-1 rounded shadow group-hover:bg-[#A52A5A] transition-colors">
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
