"use client";

import Image from "next/image";
import React from "react";
import myPicture from "../../public/Apple Memoji.jpg";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


type Props = {};

export default function Intro({}: Props) {
  const { ref } = useSectionInView("Home", 0.5);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
  useActiveSectionContext();
  return (
    <section     
    ref={ref}
    id="home"
    className="sm:mb-0 scroll-mt-[100rem] ">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              ease: "easeIn",
              duration: 2,
              x: { duration: 1 }
            }}
          >
            <Image
              src={myPicture}
              width="192"
              height="192"
              quality="95"
              property="true"
              alt="Foto do jorge luiz"
              className="rounded-full bg-transparent h-24 w-24 border-[0.35rem] shadow-[1px_9px_45px_17px_#38b2ac] object-cover "
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              ease: "easeIn",
              duration: 2,
              x: { duration: 1 }
            }}
            className="text-3xl absolute bottom-0 right-0"
          >
            🤙
          </motion.span>
        </div>
      </div>
      <Badge text="✨ Seja Bem-vindo"  />


          <motion.h1 className="mb-10 mt-4 px-4 text-lg font-normal sm:text-4xl"
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
          >
      <span className="font-bold">Olá, meu nome é Jorge Luiz.</span> Sou {" "}
        <span className="font-bold italic">Front-end developer</span>. {" "} Gosto de
        Construir <span className="italic">sites & apps</span>. Minhas Stacks Principais são  <br/>
        <span className="underline italic text-yellow-400">Javascript</span> & <span className="underline italic text-blue-800">Typescript</span>.
          </motion.h1>

          <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
            transition={{
              delay:0.1,
            }}
          > 
              <Link 
              href="#contact"
              onClick={()=> {setActiveSection("Contato")}}
              className="group bg-emerald-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-teal-950 active:scale-105 transition"
              >
                Entre em Contato {" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

                <a
          className="group bg-white/20 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Currículo Jorge Luiz A. Souza.pdf"
          
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white/20 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/jorge-andradesouza/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white/20 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/JorgeluizAndrade"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
          </motion.div>
      
    </section>
  );
}
