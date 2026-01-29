"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CardFront from "./card-front";
import CardInside from "./card-inside";

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

interface InvitationCardProps {
  details: WeddingDetails;
}

export default function InvitationCard({ details }: InvitationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md mx-auto" style={{ perspective: "1500px" }}>
      <div className="relative w-full aspect-3/4">
        {/* Inside Card - Always present at the back/bottom */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          onClick={() => isOpen && setIsOpen(false)}
        >
          <CardInside details={details} isOpen={isOpen} />
        </div>

        {/* Left Door */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full z-10 origin-left cursor-pointer"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? -140 : 0 }}
          transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
          onClick={handleCardClick}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Mask container */}
          <div className="relative w-full h-full overflow-hidden backface-hidden">
            <div className="absolute top-0 left-0 w-[200%] h-full">
              <CardFront
                groomName={details.groomName}
                brideName={details.brideName}
                isOpen={isOpen}
              />
            </div>
            {/* Overlay shadow for depth */}
            <motion.div
              className="absolute inset-0 bg-black/10 pointer-events-none"
              animate={{ opacity: isOpen ? 0.3 : 0 }}
            />
          </div>
          {/* Back of Left Door (visible when open) */}
          <div
            className="absolute inset-0 w-full h-full bg-[#f0e6d2] border-r border-[#C5A572]/30"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </motion.div>

        {/* Right Door */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full z-10 origin-right cursor-pointer"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? 140 : 0 }}
          transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
          onClick={handleCardClick}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Mask container */}
          <div className="relative w-full h-full overflow-hidden backface-hidden">
            <div className="absolute top-0 right-0 w-[200%] h-full">
              <CardFront
                groomName={details.groomName}
                brideName={details.brideName}
                isOpen={isOpen}
              />
            </div>
            {/* Overlay shadow for depth */}
            <motion.div
              className="absolute inset-0 bg-black/10 pointer-events-none"
              animate={{ opacity: isOpen ? 0.3 : 0 }}
            />
          </div>
          {/* Back of Right Door (visible when open) */}
          <div
            className="absolute inset-0 w-full h-full bg-[#f0e6d2] border-l border-[#C5A572]/30"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </motion.div>

        {/* Tap indicator text below card */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-xs tracking-[0.25em] text-[#8B1A4A] font-medium uppercase mb-2">
            Tap to Open
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#C5A572] mx-auto"
            >
              <path
                d="M12 5L12 19M12 19L6 13M12 19L18 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
