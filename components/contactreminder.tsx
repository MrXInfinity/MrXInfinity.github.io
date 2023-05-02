import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ContactReminder = () => {
  const [restrictLeave, setRestrictLeave] = useState(false);
  const [isWidthMobile, setIsWidthMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsWidthMobile(true);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      viewport={{ once: true, amount: "all" }}
      className="flex w-full max-w-md items-center justify-between gap-4 rounded-md bg-blue-500 p-4 sm:max-w-none sm:px-8 md:px-12 xl:max-w-[80rem]"
    >
      <h1 className="w-fit shrink font-playfairDisplay text-lg sm:text-2xl">
        Have I Piqued your Interest?
      </h1>

      {isWidthMobile ? (
        <div
          className="flex gap-4"
          onMouseEnter={() => setRestrictLeave(true)}
          onMouseLeave={() => setRestrictLeave(false)}
        >
          <motion.div
            className="flex"
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/contact"
              className="button_transition border-2 border-white bg-white px-4 py-2 text-center text-sm text-blue-500 hover:border-blue-400"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      ) : (
        <div
          className="flex gap-4"
          onMouseEnter={() => setRestrictLeave(true)}
          onMouseLeave={() => setRestrictLeave(false)}
        >
          <motion.button
            initial={{ opacity: 1, x: 0 }}
            whileHover={{ opacity: 0, x: 40 }}
            whileTap={{ scale: 0.9, x: 0 }}
            className="button_transition hidden border-2 px-4 py-2 md:flex"
          >
            Leave
          </motion.button>
          <AnimatePresence
            initial={false}
            mode="wait"
          >
            {restrictLeave ? (
              <motion.div
                className="flex shrink-0"
                initial={{ x: 0 }}
                animate={{ x: -100 }}
                exit={{ x: 0 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href="/contact"
                  className="button_transition border-2 border-white bg-white px-4 py-2 text-sm text-blue-500 hover:border-blue-400"
                >
                  Contact Me
                </Link>
              </motion.div>
            ) : (
              <motion.div
                className="flex"
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href="/contact"
                  className="button_transition border-2 border-white bg-white px-4 py-2 text-center text-sm text-blue-500 hover:border-blue-400"
                >
                  Contact Me
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};
