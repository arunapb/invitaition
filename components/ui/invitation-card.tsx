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
    <div className="w-full max-w-md mx-auto" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full cursor-pointer"
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{
          duration: 0.8,
          ease: [0.645, 0.045, 0.355, 1],
        }}
        onClick={handleCardClick}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div className="w-full" style={{ backfaceVisibility: "hidden" }}>
          <CardFront
            groomName={details.groomName}
            brideName={details.brideName}
            isOpen={isOpen}
          />
        </div>

        {/* Back/Inside of Card */}
        <div
          className="absolute inset-0 w-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <CardInside details={details} isOpen={isOpen} />
        </div>
      </motion.div>

      {/* Tap indicator */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.p
          className="text-sm text-[#7A6B5A]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isOpen ? "Tap to close" : "Tap to open invitation"}
        </motion.p>
      </motion.div>
    </div>
  );
}
