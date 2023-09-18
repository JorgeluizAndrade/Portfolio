"use client";

import React from "react";
import SectionHeading from "./Ui/section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

const fadeInAnimateVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills(props: Props) {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <motion.section 
    ref={ref}
    id="skills"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mb-28 mt-[10rem] max-w-[53rem] scroll-mt-24 text-center sm:mb-40">
      <SectionHeading>Minhas Skills</SectionHeading>
      <ul className="flex flex-wrap gap-4 justify-center text-lg text-black">
        {skillsData.map((skill, index) => (
        <motion.li
        className="group flex items-center italic gap-6 rounded-full outline-none transition cursor-pointer border-2 border-transparent  hover:border-emerald-400 px-5 py-3"
        key={index}
        initial="initial"
        variants={fadeInAnimateVariants}
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
        whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.8 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        {skill}
      </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
