"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { skills } from "@/lib/data/skills";
import { SectionLabel } from "../ui/SectionLabel";
import { SkillBadge } from "./SkillBadge";

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -30]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="w-full mt-32 mb-24 pr-12"
    >
      <SectionLabel label="SKILLS" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {skills.map((category, catIdx) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: catIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-text-primary text-[18px] tracking-widest-2 mb-4 font-medium uppercase">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.04 }}
                >
                  <SkillBadge>{skill}</SkillBadge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
