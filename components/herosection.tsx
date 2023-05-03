import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Herosection = () => {
  return (
    <div className="flex w-full max-w-md flex-col items-center justify-between gap-4 overflow-hidden sm:h-[90vh] sm:max-w-none sm:flex-row md:h-auto xl:max-w-7xl">
      <div className="flex flex-[1_1_300px] flex-col gap-6 sm:min-w-[300px] sm:gap-8 md:max-w-xl  md:gap-10 ">
        <div className="flex flex-col ">
          <h1 className="mb-2 font-playfairDisplay opacity-90 md:text-lg 	">
            Hi. I&apos;m Johann Mendoza, A Web Developer
          </h1>
          <h1 className="mb-4 font-robotoSlab text-3xl sm:-mt-2 md:text-5xl xl:text-6xl">
            Elegance & Quality in design and logic.
          </h1>
          <p className="text-justify font-roboto text-sm opacity-80 md:text-base">
            I am very passionate about programming, building websites, and
            learning new and different technologies and concepts. I am a Full
            Stack Developer, responsible for both the UI and the backend for my
            previous projects
          </p>
        </div>
        <div className="flex gap-4 font-playfairDisplay text-blue-500">
          <motion.div
            className="flex"
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/contact"
              className="button_transition bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Contact Me
            </Link>
          </motion.div>
          <motion.div
            className="flex"
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/johann_mendoza_resume.pdf"
              download
              target="_blank"
              className="button_transition border-2 border-solid border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              Resume
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="relative flex-[1_1_200px] md:max-w-lg">
        <Image
          className="aspect-square object-cover object-center sm:w-full"
          alt="Hero Image of Johann Mendoza"
          height={550}
          width={550}
          src="/heroIcon.svg"
        />
      </div>
    </div>
  );
};
