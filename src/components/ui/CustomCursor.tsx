"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 30 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 3);
      cursorY.set(e.clientY - 3);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none w-1.5 h-1.5 bg-white rounded-full mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
