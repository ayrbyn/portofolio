"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // negative = moves up faster, positive = moves down slower
  className?: string;
}

export function Parallax({ children, speed = 0.3, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Map scrollY to a y translation based on speed
  const y = useTransform(scrollY, [0, 1500], [0, -1500 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxSection({ children, speed = 0.15, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 200, -speed * 200]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
