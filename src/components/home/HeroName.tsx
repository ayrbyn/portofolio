"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

export function HeroName() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Hero name floats up faster as page scrolls
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const firstName = "ABYAN".split("");
  const lastName = "DZAKKY".split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="font-display font-light text-text-primary leading-none tracking-tight flex flex-col"
    >
      <div className="flex text-[64px] sm:text-[80px] lg:text-[120px]">
        {firstName.map((char, index) => (
          <motion.span key={`f-${index}`} variants={childVariants}>{char}</motion.span>
        ))}
      </div>
      <div className="flex text-[64px] sm:text-[80px] lg:text-[120px]">
        {lastName.map((char, index) => (
          <motion.span key={`l-${index}`} variants={childVariants}>{char}</motion.span>
        ))}
      </div>
    </motion.div>
  );
}
