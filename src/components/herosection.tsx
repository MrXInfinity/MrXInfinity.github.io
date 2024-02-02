import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedImage from "./ui/animated-img";

export const Herosection = () => {
  return (
    <section className="flex h-[90svh] w-full max-w-md flex-col items-center gap-4 overflow-hidden pb-10 pt-16 sm:max-w-none sm:pb-0 sm:pt-8 md:h-[90vh] md:gap-12 md:pt-12 xl:max-w-7xl">
      <div className="flex h-full flex-col gap-28 sm:min-w-[300px] sm:gap-8 md:gap-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true, amount: "all" }}
          className="flex max-w-2xl flex-col items-center"
        >
          <h2 className="mb-2 font-sans text-lg md:text-2xl">
            Hi. I&apos;m Johann Mendoza
          </h2>
          <h1 className="text-center text-3xl font-semibold text-primary-main md:text-5xl md:font-normal lg:text-6xl">
            FULLSTACK DEVELOPER.
          </h1>
          <p className=" text-center text-sm opacity-80 md:text-base">
            I am very passionate about programming, building websites, and
            learning innovative technologies. I am a Full Stack Developer,
            responsible for both the UI, as well as the backend for my previous
            projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          viewport={{ once: true, amount: "some" }}
          className="relative flex h-full w-full justify-center"
        >
          <Image
            className="h-60 object-contain object-center md:h-80"
            alt="Laptop graphic"
            height={550}
            width={550}
            src="/assets/laptop.png"
          />
          <AnimatedImage
            className="absolute -bottom-10 -left-16 h-44 w-60 object-contain  object-center md:left-8 md:h-60 md:w-80"
            alt="Left hand"
            height={550}
            width={550}
            src="/assets/left-hand.png"
            xanimation={[0, 25, 45, 25, 0, 25, 45, 25, 0]}
            yanimation={[0, 5, 10, 5, 0, 5, 10, 5, 0]}
          />
          <AnimatedImage
            className="absolute -bottom-12 -right-12 h-44 w-60 object-contain object-center md:right-8 md:h-60 md:w-80"
            alt="RIght hand"
            height={550}
            width={550}
            src="/assets/right-hand.png"
            xanimation={[-50, -30, -0, -30, -50, -30, 0, -30, -50]}
            yanimation={[5, 8, 4, 7, 5, 2, 0, 3, 5]}
          />
        </motion.div>
      </div>
    </section>
  );
};
