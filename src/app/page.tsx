"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HeroName } from "@/components/home/HeroName";
import { AboutSection } from "@/components/home/AboutSection";
import { MotivationSection } from "@/components/home/MotivationSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { DecorativeFeather } from "@/components/ui/DecorativeFeather";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Photo parallax — slower than scroll
  const photoY = useTransform(scrollY, [0, 1000], [0, -80]);

  // Feather drifts opposite direction — creates depth
  const featherY = useTransform(scrollY, [0, 1000], [0, 60]);
  const featherOpacity = useTransform(scrollY, [0, 500], [0.6, 0]);

  // About/subtitle slides in subtly
  const subtitleY = useTransform(scrollY, [0, 600], [0, -40]);

  // Motivation section parallax
  const motivationY = useTransform(scrollY, [300, 1200], [30, -30]);

  // Footer nav stays visible but has subtle float
  const footerY = useTransform(scrollY, [500, 1500], [0, -20]);

  return (
    <div ref={containerRef} className="flex flex-col w-full relative">
      {/* Top Row: Name, Email, About */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Column - Top */}
        <div className="w-full md:w-[55%] pl-12 pt-12 flex flex-col relative z-10">
          <HeroName />

          <motion.div style={{ y: subtitleY }}>
            <p className="text-[16px] tracking-[0.2em] text-[#6b6b6b] mt-4 uppercase">
              Graphic Designer / Developer
            </p>

            <div className="text-[16px] text-[#6b6b6b] mt-10 max-w-xs">
              <p>For business inquiries, email me at</p>
              <a href="mailto:abyan.dzakky77@gmail.com" className="border-b border-[#3d3d3d] hover:text-text-primary hover:border-text-primary transition-colors pb-0.5 mt-1 inline-block">
                abyan.dzakky77@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Decorative Feather with opposite parallax */}
          <motion.div
            style={{ y: featherY, opacity: featherOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 -z-10 pointer-events-none"
          >
            <DecorativeFeather />
          </motion.div>
        </div>

        {/* Right Column - Top */}
        <motion.div
          style={{ y: subtitleY }}
          className="flex-1 pl-8 pt-16 md:pt-64 pr-12 flex flex-col relative z-10"
        >
          <AboutSection />
        </motion.div>
      </div>

      {/* Bottom Row: Motivation and Photo */}
      <div className="flex flex-col md:flex-row w-full mt-[30rem] xl:mt-[60vh]">
        {/* Left Column - Bottom */}
        <motion.div
          style={{ y: motivationY }}
          className="w-full md:w-[55%] pl-12 flex flex-col relative z-10"
        >
          <MotivationSection />
        </motion.div>

        {/* Right Column - Bottom: Photo with parallax */}
        <div className="flex-1 pr-12 flex flex-col items-center relative z-10">
          <motion.div
            style={{ y: photoY }}
            className="w-[85%] md:w-[75%] xl:w-[65%] max-w-[400px] aspect-square relative"
          >
            <Image
              src="/images/abyan.jpeg"
              alt="Abyan Dzakky"
              fill
              className="object-cover grayscale-[20%] contrast-[110%]"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Full Width Bottom */}
      <div className="w-full pl-12 pr-12">
        <SkillsSection />
      </div>

      {/* Footer Navigation */}
      <motion.div
        style={{ y: footerY }}
        className="absolute bottom-12 right-12 flex flex-col gap-4 z-50 text-right mix-blend-difference"
      >
        <Link href="/works" className="group flex items-center justify-end gap-2 text-[#6b6b6b] hover:text-text-primary transition-colors">
          <span className="font-display text-[15px] tracking-[0.2em] uppercase">WORKS</span>
          <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-200">
            <ArrowRight size={16} strokeWidth={1} />
          </span>
        </Link>
        <Link href="/gallery" className="group flex items-center justify-end gap-2 text-[#6b6b6b] hover:text-text-primary transition-colors">
          <span className="font-display text-[15px] tracking-[0.2em] uppercase">GALLERY</span>
          <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-200">
            <ArrowRight size={16} strokeWidth={1} />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
