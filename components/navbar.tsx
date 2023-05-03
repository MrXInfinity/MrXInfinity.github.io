import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navbar = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 5,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
  },
};
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="sticky top-0 z-10 flex justify-center bg-[#151515] px-8 py-4 font-playfairDisplay sm:relative lg:px-28 xl:px-32">
      <div className="flex w-full max-w-md items-center justify-between sm:max-w-none xl:max-w-[80rem]">
        <Link href="/">JM.dev</Link>
        <div className="hidden items-center gap-6 md:flex ">
          <Link
            className={`${
              router.pathname === "/" ? "border-white/50" : "border-transparent"
            } button_transition rounded-none border-b-2 hover:border-blue-500/50`}
            href="/"
          >
            home
          </Link>
          <Link
            className={`${
              router.pathname === "/projects"
                ? "border-white/50"
                : "border-transparent"
            } button_transition rounded-none border-b-2 hover:border-blue-500/50`}
            href="/projects"
          >
            projects
          </Link>
          <Link
            className={`${
              router.pathname === "/contact"
                ? "border-white/50"
                : "border-transparent"
            } button_transition rounded-none border-b-2 hover:border-blue-500/50`}
            href="/contact"
          >
            contact
          </Link>
          <motion.div
            className="flex shrink-0"
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/johann_mendoza_resume.pdf"
              target="_blank"
              download
              className="button_transition border-2 border-solid border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              resume
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-col md:hidden">
          <motion.button
            className="flex items-center justify-center"
            whileTap={{ scale: 0.7 }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {!isOpen ? (
              <Bars3Icon className="h-10 w-10" />
            ) : (
              <XMarkIcon className="h-10 w-10" />
            )}
          </motion.button>
          <div className="relative">
            <AnimatePresence
              initial={false}
              mode="wait"
            >
              {isOpen && (
                <motion.div
                  variants={navbar}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 top-0 flex flex-col divide-y divide-dashed divide-white bg-[#151515] text-white"
                >
                  {[
                    ["home", "/"],
                    ["projects", "/projects"],
                    ["contact", "/contact"],
                  ].map(([title, link], index) => (
                    <div
                      className="flex"
                      key={index}
                    >
                      <motion.div
                        className="flex"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link
                          className={`${
                            router.pathname === link
                              ? "text-blue-500"
                              : "text-white"
                          } px-6 py-4`}
                          href={link}
                        >
                          {title}
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                  <Link
                    href="/johann_mendoza_resume.pdf"
                    download
                    target="_blank"
                    className=" px-6 py-4"
                  >
                    resume
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
