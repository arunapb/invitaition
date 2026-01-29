"use client";

import { motion } from "framer-motion";

interface FloatingElementsProps {
  className?: string;
}

export default function FloatingElements({
  className = "",
}: FloatingElementsProps) {
  const elements = [
    { id: 1, x: "10%", y: "15%", size: 6, delay: 0, duration: 4 },
    { id: 2, x: "85%", y: "20%", size: 8, delay: 0.5, duration: 3.5 },
    { id: 3, x: "20%", y: "75%", size: 5, delay: 1, duration: 4.5 },
    { id: 4, x: "75%", y: "80%", size: 7, delay: 1.5, duration: 3.8 },
    { id: 5, x: "50%", y: "10%", size: 4, delay: 2, duration: 4.2 },
    { id: 6, x: "90%", y: "50%", size: 6, delay: 0.8, duration: 3.6 },
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-gold/40"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
