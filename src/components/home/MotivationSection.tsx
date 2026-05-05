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
      <div className="text-[17px] text-[#6b6b6b] leading-relaxed space-y-4 mt-6 max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Bagi saya, esensi desain terletak pada perpotongannya dengan teknologi—bagaimana sebuah karya bisa dipahami, diakses, dan memberikan pengalaman yang lancar bagi pengguna. Pengalaman saya memecahkan masalah teknis dalam software engineering melatih saya untuk berpikir secara strategis dan sistematis dalam merancang solusi.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          Saat ini, saya terdorong untuk terus mengekspansi keahlian saya tidak hanya di aspek eksekusi estetik, namun mendalami fondasi arsitektur UX, flow pengguna, dan kesiapan teknis di ranah digital product design.
        </motion.p>
      </div>
    </motion.div>
  );
}
