"use client";

import React from "react";
import SectionHeading from "./Ui/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import ButtonSubmit from "./ButtonSubmit";
import { toast } from "react-toastify";

type Props = {};

export default function Contact({}: Props) {
  const { ref } = useSectionInView("Contato", 0.5);

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      ref={ref}
      id="contact"
    >
      <SectionHeading>Contato</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Por Favor mande E-mail para{" "}
        <a className="underline" href="mailto:luizj1718@gmai.com">
          @luizj1718@gmai.com
        </a>{" "}
        Ou preencha o formulário{" "}
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error("🦄 Wow so easy!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }

          toast.success("Email sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }}
      >
        <input
          className="h-14 rounded-lg px-4 border border-black/10  "
          name="senderEmail"
          required
          maxLength={500}
          type="email"
          placeholder="Seu E-mail"
        />
        <textarea
          className="h-52 my-3 rounded-xl border-black/10 border p-4"
          name="message"
          required
          maxLength={500}
          placeholder="Sua mensaguem"
        />
        <ButtonSubmit />
      </form>
    </motion.section>
  );
}
