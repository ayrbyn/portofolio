"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WorkItem as WorkItemType } from "@/lib/types";
import Image from "next/image";

export function WorksShowcase({ works }: { works: WorkItemType[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeWork = works[activeIndex];

  return (
    <div className="flex flex-col md:flex-row relative w-full h-full items-start gap-8 lg:gap-16">
      
      {/* Left Column: Scrolling Frames */}
      <div 
        ref={scrollRef}
        className="w-full md:w-[50%] lg:w-[55%] flex flex-col pt-6 md:pt-[30vh] pb-4 md:pb-[30vh] gap-16 md:gap-[40vh] z-10 md:h-full md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {works.map((work, index) => (
          <div key={work.id} className="flex flex-col">
            <motion.div
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ root: scrollRef, amount: 0.5, margin: "-25% 0px -25% 0px" }}
              className="relative w-full aspect-video border border-border-subtle overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background/80 via-transparent to-background/80" />
              <Image
                src={work.imageUrl || `https://picsum.photos/seed/${work.slug}/800/450`}
                alt={work.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 55vw"
                unoptimized // Use unoptimized to avoid Next.js timeout on external APIs
              />
            </motion.div>

            {/* Mobile Text (Visible only on small screens) */}
            <div className="md:hidden flex flex-col mt-5 mb-6 px-1">
              <div className="font-mono text-[12px] text-[#6b6b6b] tracking-widest-2 mb-2">
                [ {work.index} / {work.total} ]
              </div>
              <h2 className="text-[24px] font-display font-medium text-text-primary leading-tight mb-1 uppercase">
                {work.title}
              </h2>
              <div className="text-[13px] text-[#6b6b6b] mb-3">
                {work.category} / {work.type}
              </div>
              <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-5">
                {work.description}
              </p>
              {work.link && (
                <a 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] text-text-primary hover:text-[#6b6b6b] transition-colors border-b border-text-primary hover:border-[#6b6b6b] pb-0.5 w-max tracking-wider uppercase font-sans"
                >
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Static Text (Visible only on md screens and up) */}
      <div className="hidden md:flex w-[50%] lg:w-[45%] h-full flex-col justify-center pl-8 lg:pl-16 pr-8 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWork.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="font-mono text-[15px] text-[#6b6b6b] tracking-widest-2 mb-4">
              [ {activeWork.index} / {activeWork.total} ]
            </div>
            
            <h2 className="text-[32px] md:text-[40px] font-display font-medium text-text-primary leading-tight mb-2 uppercase">
              {activeWork.title}
            </h2>
            
            <div className="text-[15px] text-[#6b6b6b] mb-6">
              {activeWork.category} / {activeWork.type}
            </div>
            
            <p className="text-[17px] text-[#6b6b6b] leading-relaxed max-w-sm lg:max-w-md mb-6">
              {activeWork.description}
            </p>

            {activeWork.link && (
              <a 
                href={activeWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-text-primary hover:text-[#6b6b6b] transition-colors border-b border-text-primary hover:border-[#6b6b6b] pb-0.5 w-max tracking-wider uppercase font-sans"
              >
                Visit Website
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
    </div>
  );
}
