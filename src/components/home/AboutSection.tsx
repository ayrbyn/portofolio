"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div ref={ref} className="mb-16">
      <SectionLabel label="ABOUT ME" />
      <div className="text-[17px] text-[#6b6b6b] leading-relaxed space-y-4 mt-6 pr-12 max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Saya adalah graphic designer dan developer dengan latar belakang informatika yang terbiasa menggabungkan desain visual dengan pendekatan teknis. Fokus utama saya adalah menciptakan desain yang tak sekadar menarik secara visual, tetapi juga fungsional dan terintegrasi dengan baik ke dalam sebuah produk digital.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          Selain identitas visual dan UI/UX, saya memiliki jam terbang sebagai full-stack developer untuk sistem berbasis web serta eksplorasi di bidang artificial intelligence, termasuk implementasi deteksi stres lewat computer vision. Saya senang bekerja secara menyeluruh dari perancangan hingga tahap implementasi.
        </motion.p>
      </div>
    </motion.div>
  );
}
