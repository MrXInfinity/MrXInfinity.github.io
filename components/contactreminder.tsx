import { motion } from "framer-motion";
import Link from "next/link";

export const ContactReminder = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-md items-center justify-between gap-4 rounded-md bg-blue-500 p-4 sm:max-w-none">
        <h1 className="font-playfairDisplay text-lg">
          Have I Piqued your Interest?
        </h1>
        <motion.div
          className="flex shrink-0"
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="/contact"
            className="button_transition border-2 border-white bg-white px-4 py-2 text-sm text-blue-500 hover:border-blue-400"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
