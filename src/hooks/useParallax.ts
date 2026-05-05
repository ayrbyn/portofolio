"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
  return { ref, y };
}

export function useParallaxRange(
  inputRange: [number, number],
  outputRange: [number, number],
  scrollY?: MotionValue<number>
) {
  const { scrollY: defaultScrollY } = useScroll();
  const scroll = scrollY ?? defaultScrollY;
  const y = useTransform(scroll, inputRange, outputRange);
  return y;
}
