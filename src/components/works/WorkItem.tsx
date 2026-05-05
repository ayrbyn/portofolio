"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { WorkItem as WorkItemType } from "@/lib/types";
import { DecorativeFeather } from "../ui/DecorativeFeather";

export function WorkItem({ work, isLast }: { work: WorkItemType; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="relative">
      <div className="min-h-[60vh] flex items-center py-16">
        <div className="flex flex-col md:flex-row gap-16 justify-center w-full items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:w-[45%] aspect-video border border-[#2a2a2a] group overflow-hidden"
          >
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0f0f0f]/80 via-transparent to-[#0f0f0f]/80" />
            {work.link ? (
              <div className="absolute inset-0 overflow-hidden bg-surface group-hover:scale-[1.02] transition-transform duration-700">
                <iframe
                  src={work.link}
                  className="absolute top-0 left-0 border-0 pointer-events-none origin-top-left"
                  style={{
                    width: '300%',
                    height: '300%',
                    transform: 'scale(0.333333)'
                  }}
                  title={work.title}
                  loading="lazy"
                />
              </div>
            ) : (
              <Image
                src={work.imageUrl || `https://picsum.photos/seed/${work.slug}/800/450`}
                alt={work.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            )}
          </motion.div>

          {/* Right Column: Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-[40%] flex flex-col"
          >
            <div className="font-mono text-[15px] text-[#6b6b6b] tracking-widest-2 mb-4">
              [ {work.index} / {work.total} ]
            </div>
            
            <h2 className="text-[32px] md:text-[40px] font-display font-medium text-text-primary leading-tight mb-2">
              {work.title}
            </h2>
            
            <div className="text-[15px] text-[#6b6b6b] mb-6">
              {work.category} / {work.type}
            </div>
            
            <p className="text-[17px] text-[#6b6b6b] leading-relaxed max-w-sm mb-6">
              {work.description}
            </p>

            {work.link && (
              <a 
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-text-primary hover:text-[#6b6b6b] transition-colors border-b border-text-primary hover:border-[#6b6b6b] pb-0.5 w-max tracking-wider uppercase font-sans"
              >
                Visit Website
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {!isLast && (
        <div className="absolute -bottom-8 right-[10%] opacity-10 scale-75 pointer-events-none z-0">
          <DecorativeFeather />
        </div>
      )}
    </div>
  );
}
