"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";

export function MotivationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div ref={ref} className="mb-16">
      <SectionLabel label="MOTIVATION" />
      <div className="text-[17px] text-[#6b6b6b] leading-relaxed space-y-4 mt-6 md:max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Saya tertarik pada bagaimana desain dan teknologi saling melengkapi. Bagi saya, desain bukan hanya soal visual, tetapi bagaimana sebuah produk digunakan, dipahami, dan memberikan pengalaman yang jelas bagi pengguna.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          Pengalaman di bidang software engineering dan machine learning membentuk cara berpikir saya menjadi lebih terstruktur dan berbasis problem solving. Saya terbiasa memulai dari masalah, membangun konsep, lalu mengeksekusi dengan pendekatan yang terukur.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          Saat ini, saya fokus mengembangkan diri sebagai designer yang tidak hanya kuat secara visual, tetapi juga memahami sistem, user flow, dan implementasi teknis di balik sebuah produk digital.
        </motion.p>
      </div>
    </motion.div>
  );
}
