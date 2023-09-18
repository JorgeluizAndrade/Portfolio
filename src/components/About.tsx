"use client";

import React from "react";
import SectionHeading from "./Ui/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

export default function About({}: Props) {
  const { ref } = useSectionInView("Sobre Mim", 0.5);

  return (
    <motion.section
    ref={ref}
    id="about"
      className="mb-28 max-w-[45rem] scroll-mt-24 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-4">
        Olá! Meu nome é Jorge luiz e sou do Rio de Janeiro.{" "}
        <span className="font-medium">
          Tenho experiência em projetos com JavaScript e TypeScript.{" "}
        </span>
        Minha <span className="font-medium"> proficiência </span> em JavaScript
        e TypeScript me capacita a desenvolver aplicações coesas e intuitivas,{" "}
        <span className="italic">
          {" "}
          assegurando uma experiênciade{" "}
          <span className="font-medium">
            usuário coesa, confiável e altamente escalável
          </span>
          .
        </span>
      </p>
      <p>
        Além de minha atuação no frontend, também possuo algumas habilidades em
        Node.js, permitindo-me explorar o desenvolvimento do lado do servidor com{" "}
        <span className="font-bold">confiança e competência</span>{" "}
        <span className="italic">
          Estou constantemente comprometido em expandir meu repertório
          tecnológico, prontamente abraçando novas tecnologias à medida que
          surgem.{" "}
        </span>
        <span className="font-medium">
          {" "}
          Em busca de oportunidades, desejo contribuir ativamente para o
          desenvolvimento de soluções.{" "}
        </span>
      </p>

      <h2 className="text-3xl mt-4  italic text-center font-medium capitalize mb-8">Kaizen</h2>
      <p className="mb-4">
        A Filosofia da melhoria constante. {" "}
        Cada dia é uma oportunidade para melhorar, {" "}
        <span className="font-medium">mesmo que seja apenas 1%.</span>{" "}
        <span className="italic font-bold">
          Não se trata de ser ivencível, trata-se de ser impáravel.{" "}
        </span>
      </p>
    </motion.section>

    
  );
}
