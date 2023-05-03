import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <div className="flex max-w-md flex-col gap-6 sm:max-w-none sm:gap-8 xl:max-w-7xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        viewport={{ once: true, amount: "all" }}
        className="text-center font-playfairDisplay font-bold sm:text-left sm:text-lg lg:text-xl"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col items-center gap-14 sm:flex-row sm:items-start sm:gap-10 md:gap-14 lg:gap-20 xl:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          viewport={{ once: true, amount: "all" }}
          className="relative shrink-0"
        >
          <Image
            className="inset-0 mb-4 mr-4 aspect-[3/5] shrink-0 object-cover object-center"
            src="/aboutusImage.jpg"
            alt="Picture of Johann Isaiah Mendoza"
            width={240}
            height={400}
          />
          <div className="absolute inset-2 -z-10 aspect-[3/5] h-full border-2 " />
        </motion.div>
        <div className="flex  shrink flex-col gap-10 sm:gap-8 lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: "all" }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <h1 className="font-robotoSlab text-lg font-semibold md:text-xl">
              Journey
            </h1>
            <p className="text-justify font-roboto text-sm opacity-80 sm:opacity-90 md:text-base">
              Growing up, I always loved games and fashion. Games are a way to
              solve problems, explore and discover new things. Fashion is my way
              of expressing myself. All those things have cultivated and
              overlapped with my passion for web development. The games I played
              made me strategic and detail-oriented. Fashion has also helped me
              a bit better in designing my own personal projects.{" "}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true, amount: "all" }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <h1 className="text-end font-robotoSlab text-lg font-semibold sm:text-start md:text-xl">
              Experience
            </h1>
            <p className="text-justify font-roboto text-sm opacity-80 sm:opacity-90 md:text-base">
              My passion for coding started at senior high school, when I first
              experienced HTML and CSS. While we were taught general programming
              languages such as C++ and C# in junior high school, it didn&apos;t
              spark interest, unlike web development. My deciding factor was
              that you could visualize creativity. Learning javascript then has
              shown me a new way of creativity. Creativity in logic while
              providing efficiency which has made me appreciate the ecosystem
              and its continuous innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
