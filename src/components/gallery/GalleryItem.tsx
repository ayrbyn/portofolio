"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { GalleryItem as GalleryItemType } from "@/lib/types";

export function GalleryItem({ item, index }: { item: GalleryItemType; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Parallax on the image itself — image scrolls slightly slower than the card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col w-full"
    >
      <div className="relative w-full overflow-hidden">
        <motion.div style={{ y: imageY }}>
          <Image
            src={item.imageUrl || `https://picsum.photos/seed/gallery-${item.id}/600/${600 + (index % 3) * 100}`}
            alt={item.title}
            width={600}
            height={600 + (index % 3) * 100}
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: index * 0.06 + 0.15 }}
      >
        <h3 className="text-[18px] font-sans font-normal text-text-primary mt-3 mb-2">
          {item.title}
        </h3>

        <div className="grid grid-cols-2 gap-y-1">
          {item.designer && (
            <>
              <span className="text-[14px] text-[#6b6b6b]">Designer</span>
              <span className="text-[14px] text-text-primary text-right">{item.designer}</span>
            </>
          )}
          {item.folder && (
            <>
              <span className="text-[14px] text-[#6b6b6b]">Category</span>
              <span className="text-[14px] text-text-primary text-right">{item.folder}</span>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
