import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type Props = {};

const MobileTechNotices = (props: Props) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const { ref } = useSectionInView("Tech Notícias", 0.5);

  const baseUrl = "https://www.tabnews.com.br/api/v1/";
  const endPointUrl = "contents?page=1&strategy=relevant&per_page=5";

  const fetchPostsApi = async () => {
    try {
      const res = await fetch(`${baseUrl}${endPointUrl}`);
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

  return (
    <div className="max-w-5xl mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {data &&
        data.map((item, idx) => (
          <div
            key={item.id}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                className="absolute inset-0 h-full w-full bg-slate-300 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-100/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                <h4 className="text-slate-950 font-bold tracking-wide mt-4">
                    <a
                      href={`https://www.tabnews.com.br/${item.owner_username}/${item.slug}`}
                      className="hover:text-blue-500"
                    >
                      {item.title}
                    </a>
                  </h4>
                  <p className="mt-8 text-slate-900 tracking-wide leading-relaxed text-sm">
                  {item.owner_username}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  );
};

export default MobileTechNotices;
