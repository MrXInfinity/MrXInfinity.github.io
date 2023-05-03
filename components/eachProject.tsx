import { useState } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkIcon } from "@heroicons/react/24/outline";
import { dataResponse } from "@/pages/projects";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const EachProject = ({
  name: projectName,
  description,
  homepage,
  html_url,
  index,
}: dataResponse & { index: number }) => {
  const [isDescVisible, setIsDescVisible] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      }}
      viewport={{ once: true, amount: "all" }}
      className="button_transition flex cursor-pointer flex-col gap-2 rounded-none bg-[#202020] px-6 py-4 hover:bg-[#252525]"
      onClick={(e) => {
        setIsDescVisible((prev) => !prev);
      }}
    >
      <motion.div
        layout
        className="flex items-center justify-between gap-6 lg:gap-10  "
      >
        <div className="flex min-w-0 items-center gap-6 overflow-hidden lg:gap-10">
          <h1 className="shrink-0 select-none font-robotoSlab font-light md:text-lg">
            {projectName}
          </h1>
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {!isDescVisible && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 0.6,
                  y: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
                exit={{ opacity: 0, y: 20 }}
                className="hidden select-none truncate font-roboto text-sm font-light sm:block md:text-base"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-6 text-blue-500">
          {homepage && (
            <Link
              href={homepage}
              onClick={(e) => e.stopPropagation()}
            >
              <LinkIcon className="h-5 w-5" />
            </Link>
          )}
          <Link
            href={html_url}
            onClick={(e) => e.stopPropagation()}
          >
            <SiGithub className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {isDescVisible && (
          <motion.p
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.8, y: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, y: -20 }}
            className="select-none text-justify font-roboto text-sm font-light md:text-base"
          >
            {description ?? "No Description Yet."}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EachProject;
