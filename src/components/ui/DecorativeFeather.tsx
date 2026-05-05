"use client";

import { motion } from "framer-motion";

export function DecorativeFeather({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative ${className}`}
      animate={{ translateY: [-10, 10] }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        repeatType: "reverse", 
        ease: "easeInOut" 
      }}
    >
      <svg 
        width="200" 
        height="200" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-15"
      >
        <path 
          d="M50 95C50 95 30 70 30 45C30 20 45 5 50 5C55 5 70 20 70 45C70 70 50 95 50 95Z" 
          stroke="white" 
          strokeWidth="0.5" 
          fill="url(#featherGradient)"
        />
        <path d="M50 5 V 95" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
        <defs>
          <linearGradient id="featherGradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.8" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
