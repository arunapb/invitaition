"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Petal = ({
  delay,
  duration,
  x,
}: {
  delay: number;
  duration: number;
  x: number;
}) => {
  return (
    <motion.div
      className="absolute top-0 pointer-events-none z-50"
      initial={{ y: -20, x, opacity: 0, rotate: 0 }}
      animate={{
        y: "100vh",
        opacity: [0, 1, 1, 0],
        rotate: [0, 180, 360],
        x: [x, x + (Math.random() * 40 - 20), x],
      }}
      transition={{
        duration,
        delay,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 14 8 20 12C14 16 12 22 12 22C12 22 10 16 4 12C10 8 12 2 12 2Z"
          fill="#D4BC8A"
          fillOpacity="0.6"
        />
      </svg>
    </motion.div>
  );
};

export default function FallingFlowers() {
  const [petals, setPetals] = useState<
    Array<{ id: number; delay: number; duration: number; x: number }>
  >([]);

  useEffect(() => {
    // Generate petals only on client to avoid hydration mismatch
    const newPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
      x: Math.random() * 100, // percentage string logic needs visual width or calculation
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-0"
          style={{ left: `${petal.x}%` }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 0],
            rotate: [0, 360],
            //  x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
          }}
        >
          <svg
            width={Math.random() > 0.5 ? 14 : 10}
            height={Math.random() > 0.5 ? 14 : 10}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C12 2 14 8 20 12C14 16 12 22 12 22C12 22 10 16 4 12C10 8 12 2 12 2Z"
              fill={Math.random() > 0.5 ? "#C5A572" : "#E8D5B5"}
              fillOpacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
