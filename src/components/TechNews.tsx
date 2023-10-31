"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import { useSectionInView } from "@/lib/hooks";
import { DiCoffeescript } from "react-icons/di";
import useSWR from "swr";
import SectionHeading from "./Ui/section-heading";

type Props = {};

type Interval<T> = T;

type DataItem = {
  id: number;
  title: string;
  owner_username: string;
  slug: string;
  author: string;
  tabcoins: number;
};

let interval: Interval<NodeJS.Timeout>;

export default function TechNews() {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const baseUrl = "https://www.tabnews.com.br/api/v1/";
  const endPointUrl = "contents?page=1&strategy=relevant&per_page=5";

  const { data, error, isLoading } = useSWR<DataItem[]>(
    `${baseUrl}${endPointUrl}`,
    fetcher
  );

  const [currentCard, setCurrentCard] = useState<DataItem | null>(null);

  const { ref } = useSectionInView("Tech Notícias", 0.5);

  const startFlipping = useCallback(() => {
    if (data && data.length > 0) {
      setCurrentCard((currentCard) => {
        const currentIndex = data.findIndex(
          (item) => item.id === currentCard?.id
        );
        const nextIndex = (currentIndex + 1) % data.length;
        return data[nextIndex];
      });
    }
  }, [data]);

  useEffect(() => {
    if (data && data.length > 0) {
      setCurrentCard(data[0]);
      const interval = setInterval(startFlipping, 1000 * 4);

      return () => {
        clearInterval(interval);
      };
    }
  }, [data, setCurrentCard, startFlipping]);

  return (
    <div ref={ref} id="notices" className="pt- 9 pb-6">
      <SectionHeading>Tech Notícias☕</SectionHeading>

      <div className="flex max-w-sm w-full mx-auto flex-col justify-center items-start mb-16 relative min-h-40 h-36">
        <div className="absolute border rounded-md transform scale-[.85] -top-9 h-full w-full z-10 dark:border-slate-800"></div>
        <div className="absolute border rounded-md transform scale-90 -top-6 h-full w-full z-20 backdrop-blur-sm dark:border-slate-800">
          <span className="absolute h-px -top-px inset-x-4 bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
        </div>
        <div className="absolute border rounded-md transform scale-95 -top-3 h-full w-full z-30 backdrop-blur-sm dark:border-slate-800"></div>

        <TwitterCard card={currentCard} />
      </div>
    </div>
  );
}

const TwitterCard: React.FC<{ card: DataItem | null }> = ({ card }) => {
  const dropIn = {
    hidden: {
      y: "-4vh",
      x: "0",
      scale: 1.2,
      opacity: 0,
    },
    visible: {
      y: "0",
      x: "0",
      scale: 1,
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  if (card) {
    return (
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={card.id}
        className=" rounded-lg px-8 py-4 border border-slate-200 dark:border-slate-700 z-50 relative bg-white dark:bg-zinc-900"
      >
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <div className="flex justify-between items-center">
          <div className="flex flex-row space-x-4 items-center ">
            <Image
              src={avatar}
              alt="avatar"
              className="w-8 h-8 object-cover rounded-full shadow"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm font-semibold text-zinc-700 dark:text-slate-300">
                {card.author}
              </p>
              <small className="text-zinc-500 text-xs">@{card.author}</small>
            </div>
          </div>
          <DiCoffeescript className="text-blue-500 " />
        </div>
        <div className="mt-4">
          <a
            href={`https://www.tabnews.com.br/${card.owner_username}/${card.slug}`}
            className="text-gray-700 text-base dark:text-slate-300"
          >
            {card.title}
          </a>
        </div>
      </motion.div>
    );
  }
};
