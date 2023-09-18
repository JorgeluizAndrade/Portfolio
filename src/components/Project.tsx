"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {  FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  linkProject,
  linkGithub,
}: ProjectProps) {


  const ref = useRef<HTMLDivElement>(null);
   const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1 ", "1.33 1"],

  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    ref={ref}

    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}
    className="group mb-3 sm:mb-8 last:mb-0"
  >
    <div className="max-w-[50rem] flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition">
      <Image className="rounded-lg" src={imageUrl} alt={title} width={400} height={250} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="inline-grid">
        <Link
          href={linkProject}
          className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white/30  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Visualizar
          <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
        </Link>
        <Link
          href={linkGithub}
          className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white/30  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Repositório
          <FaGithub />
        </Link>
        </div>

        <div className="mt-4">
          {tags.map((tag, index) => (
            <span
              className="inline-block bg-black/20  px-2 py-2 text-xs font-semibold mr-2 mt-2 text-white gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-black active:scale-105 transition"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
  );
}
