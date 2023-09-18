"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";


type Props = {};

export default function Header({}: Props) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2  h-[4.5rem] w-full 
      rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 
      shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
      sm:top-6 sm:h-[3.50rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        {" "}
      </motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-10 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 
            text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap 
            sm:gap-5"
        >
          {links.map((link) => {
            const isSelected = link.name === activeSection;
            return (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="h-3/4 flex items-center justify-center mb-2"
              >
                <Link
                  href={link.hash}
                  className={`flex w-full  items-center ${
                    isSelected ? "font-semibold text-gray-900" : "text-gray-500"
                  }
                        justify-center px-2 py-3 relative hover:text-gray-950`}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {isSelected ? (
                    <motion.div className="absolute -bottom-[1px] left-0 mt-1 right-0 sm:-bottom-[1.5px] ">
                      <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                        <motion.path
                          d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                          stroke="#3505f5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{
                            strokeDasharray: 84.20591735839844,
                            strokeDashoffset: 84.20591735839844,
                          }}
                          animate={{
                            strokeDashoffset: 0,
                          }}
                          transition={{
                            duration: 1,
                          }}
                        />
                      </svg>
                    </motion.div>
                  ) : null}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
