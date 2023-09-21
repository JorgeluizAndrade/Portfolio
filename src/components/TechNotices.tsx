"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./Ui/section-heading";
import Styles from "./Ui/Moving.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import { useSectionInView } from "@/lib/hooks";
import MobileTechNotices from "./MobileTechNotices";

type Props = {};

export default function TechNotices({}: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const { ref } = useSectionInView("Tech Notícias", 0.5);

  const baseUrl = "https://www.tabnews.com.br/api/v1/"
  const endPointUrl = "contents?page=1&strategy=relevant&per_page=5"

  const fetchPostsApi = async () => {
    try {
      const res = await fetch(
        `${baseUrl}${endPointUrl}`
      );
      const data = await res.json();
      setLoading(true);
      setData(data);
      if (!data) throw "No data";
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostsApi();
  }, []);

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(0, 0, 0, 1)"
    }
  }

  return (
    <motion.section
    ref={ref}
    id="notices"
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
      className="mb-28 mt-[10rem] scroll-mt-28 sm:mb-40"
      
    >
      <SectionHeading>Tech Notícias☕</SectionHeading>

      <div className="md:hidden">
        <MobileTechNotices 
        />
      </div>

      <div className="hidden md:flex flex-none space-x-8 overflow-hidden sm:overflow-hidden justify-center items-center">
        <div className="flex flex-none">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className={`card-container shadow-[-17px_-2px_41px_3px_#4fd1c5] max-w-lg min-w-lg   ${Styles.scrollBg} rounded-b-md rounded-t-md transform rotate-12`}
              >
                <div className="top-text p-8">
                  <div className="icon-quotes">
                    <svg
                      width="45"
                      height="36"
                      className="mb-5 fill-current"
                    >
                      <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1 }}
                        d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 
                      12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 
                      0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384
                       13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 
                       0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
                      ></motion.path>
                    </svg>
                  </div>
                  <div className="container-text max-w-lg">
                    <p className="font-semibold text-gray-900 text-xl py-8">
                       <a href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`}>{item.title}</a>
                    </p>
                  </div>
                </div>
                <div className="footer-container flex flex-row flex-nowrap justify-between min-w-lg max-w-lg bg-gradient-to-r from-amber-900 to-amber-950 py-4 px-8 rounded-2xl">
                  <div className="avatar-container">
                    <div className="footer-img flex flex-row flex-nowrap">
                      <Image
                        alt={`${item.author} profile`}
                        src={avatar}
                        height={60}
                        width={60}
                        quality={95}
                        className="rounded-full bg-transparent border-[0.35rem] shadow-[-2px_7px_31px_8px_#975a16] object-cover "
                      />
                      <div className="footer-text flex flex-col flex-nowrap">
                        <p className="text-gray-100 font-bold ml-6">
                          {item.owner_username}
                        </p>
                        <p className="text-gray-200 ml-6">
                          Tabcoins:{item.tabcoins}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-auto">
                    <a
                      href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`}
                    >
                      <svg
                        width="33"
                        height="32"
                        fill="currentColor"
                        className="text-gray-100"
                      >
                        <motion.path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        ></motion.path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}
