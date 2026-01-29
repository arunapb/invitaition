"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Sparkle = ({ color = "#C5A572", size = 10, style }: SparkleProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      style={style}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.5039C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.5039 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.5039 58.5039C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
};

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  sparkleColor?: string;
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function Sparkles({
  children,
  className = "",
  sparkleColor = "#C5A572",
}: SparklesProps) {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: string; y: string; size: number }>
  >([]);

  useEffect(() => {
    const generateSparkle = () => ({
      id: Date.now() + Math.random(),
      x: `${random(0, 100)}%`,
      y: `${random(0, 100)}%`,
      size: random(8, 16),
    });

    const addSparkle = () => {
      const sparkle = generateSparkle();
      setSparkles((prev) => [...prev.slice(-6), sparkle]);
    };

    const interval = setInterval(addSparkle, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 800);
    return () => clearTimeout(timeout);
  }, [sparkles]);

  return (
    <span className={`relative inline-block ${className}`}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkleColor}
          size={sparkle.size}
          style={{
            position: "absolute",
            left: sparkle.x,
            top: sparkle.y,
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      ))}
      <span className="relative z-0">{children}</span>
    </span>
  );
}
