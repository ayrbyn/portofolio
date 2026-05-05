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
      <div className="text-[17px] text-[#6b6b6b] leading-relaxed space-y-4 mt-6 md:pr-12 max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Saya adalah graphic designer dan developer dengan latar belakang informatika yang menggabungkan desain visual dengan pendekatan teknis. Saya memiliki pengalaman dalam branding, social media design, serta pengembangan visual identity untuk berbagai kebutuhan, mulai dari organisasi, produk, hingga aplikasi digital.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          Selain desain, saya juga memiliki pengalaman sebagai full-stack developer dan pernah mengembangkan sistem berbasis web serta aplikasi berbasis AI, termasuk sistem deteksi stres menggunakan computer vision.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          Saya terbiasa bekerja secara end-to-end, mulai dari perancangan konsep visual hingga implementasi dalam bentuk produk digital. Pendekatan ini membantu saya menciptakan desain yang tidak hanya menarik secara visual, tetapi juga fungsional dan terintegrasi dengan sistem.
        </motion.p>
      </div>
    </motion.div>
  );
}
