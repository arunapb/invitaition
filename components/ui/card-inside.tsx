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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(details.mapUrl, "_blank");
  };

  return (
    <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-cream to-cream-dark rounded-lg shadow-2xl overflow-hidden border-2 border-gold/30">
      {/* Decorative gold border frame */}
      <div className="absolute inset-3 border-2 border-gold/40 rounded-lg pointer-events-none" />

      {/* Top floral decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-16 opacity-70">
        <svg viewBox="0 0 150 80" className="w-full h-full">
          <defs>
            <linearGradient id="insideLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7A8B6F" />
              <stop offset="100%" stopColor="#5A6B4F" />
            </linearGradient>
          </defs>
          <ellipse
            cx="45"
            cy="35"
            rx="12"
            ry="22"
            fill="url(#insideLeaf)"
            transform="rotate(-25 45 35)"
            opacity="0.6"
          />
          <ellipse
            cx="105"
            cy="35"
            rx="12"
            ry="22"
            fill="url(#insideLeaf)"
            transform="rotate(25 105 35)"
            opacity="0.6"
          />
          <circle cx="75" cy="25" r="4" fill="#C5A572" opacity="0.7" />
        </svg>
      </div>

      {/* Couple illustration placeholder */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
        variants={itemVariants}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center border-2 border-gold/30">
          <svg viewBox="0 0 60 60" className="w-12 h-12 text-gold-dark/70">
            <circle cx="22" cy="18" r="8" fill="currentColor" opacity="0.6" />
            <circle cx="38" cy="18" r="8" fill="currentColor" opacity="0.6" />
            <path
              d="M15 55 Q22 35 30 40 Q38 35 45 55"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-28 pb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {/* Together with families */}
        <motion.p
          variants={itemVariants}
          className="text-xs tracking-[0.15em] text-gold-dark/60 uppercase text-center mb-1"
        >
          Together
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-xs tracking-[0.15em] text-gold-dark/60 uppercase text-center mb-4"
        >
          With Their Families
        </motion.p>

        {/* Couple names */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl text-center leading-tight mb-2"
          style={{ fontFamily: "'Great Vibes', cursive", color: "#C5A572" }}
        >
          {details.groomName} <span className="text-gold/50">&</span>{" "}
          {details.brideName}
        </motion.h1>

        {/* Invite text */}
        <motion.p
          variants={itemVariants}
          className="text-xs tracking-[0.15em] text-gold-dark/60 uppercase text-center mb-4"
        >
          Invite You to Celebrate Their Wedding
        </motion.p>

        {/* Date section */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <p
            className="text-sm tracking-[0.2em] text-maroon uppercase mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {details.month}
          </p>
          <div className="flex items-center justify-center gap-3">
            <span
              className="text-sm text-gold-dark/70"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {details.day}
            </span>
            <div className="flex flex-col items-center px-3 border-l border-r border-gold/30">
              <span className="text-2xl font-bold text-maroon">
                {details.date}
              </span>
            </div>
            <span
              className="text-sm text-gold-dark/70"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              At {details.time}
            </span>
          </div>
          <p
            className="text-lg text-gold mt-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {details.year}
          </p>
        </motion.div>

        {/* Venue section */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <p
            className="text-sm font-semibold text-maroon tracking-wide uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {details.venue}
          </p>
          <p className="text-xs text-gold-dark/70 mt-1">
            {details.venueAddress}
          </p>
          <p className="text-xs text-gold-dark/70">{details.city}</p>
        </motion.div>

        {/* Map section */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-xs"
          onClick={handleMapClick}
        >
          <div className="relative rounded-lg overflow-hidden border-2 border-gold/30 shadow-lg cursor-pointer group">
            {/* Map embed */}
            <div className="w-full h-24 bg-cream-dark relative overflow-hidden">
              <iframe
                src={details.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              />
              {/* Overlay for better tap */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-gold/10 transition-colors" />
            </div>

            {/* Location button */}
            <div className="flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-maroon/90 to-maroon text-cream text-xs font-medium">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gold"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
              <span>View Location</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom floral decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 opacity-60 pointer-events-none">
        <svg
          viewBox="0 0 400 80"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient
              id="insideBottomLeaf"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B9B7F" />
              <stop offset="100%" stopColor="#6A7B5F" />
            </linearGradient>
          </defs>
          <ellipse
            cx="30"
            cy="70"
            rx="20"
            ry="35"
            fill="url(#insideBottomLeaf)"
            transform="rotate(25 30 70)"
            opacity="0.5"
          />
          <ellipse
            cx="370"
            cy="70"
            rx="20"
            ry="35"
            fill="url(#insideBottomLeaf)"
            transform="rotate(-25 370 70)"
            opacity="0.5"
          />
          <circle cx="45" cy="55" r="5" fill="#D4BC8A" opacity="0.5" />
          <circle cx="355" cy="55" r="5" fill="#D4BC8A" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
