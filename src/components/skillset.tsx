import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiVuedotjs,
  SiPostgresql,
  SiMysql,
  SiPrisma,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import IconWithBg from "./ui/icon-with-bg";

export const Skillset = () => {
  const icons = [
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiVuedotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiTypescript,
    SiFirebase,
    SiNextdotjs,
    SiPrisma,
  ];

  const additionalIcons = [
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiVuedotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiTypescript,
  ];

  const marqueeContainer = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 2, delayChildren: 2 },
    },
  };

  const marquee = {
    initial: {
      x: 0,
    },

    animate: {
      x: [0, -1680],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex w-full flex-col gap-12 sm:gap-20 xl:max-w-7xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        }}
        viewport={{ once: true, amount: "all" }}
        className="text-center text-2xl font-medium  md:text-3xl"
      >
        My Current Skillset.
      </motion.h1>
      <motion.div
        variants={marqueeContainer}
        initial="initial"
        whileInView="inView"
        className="relative h-40 w-full overflow-x-hidden"
        viewport={{ once: true, amount: "all" }}
      >
        <motion.div
          className="absolute flex"
          variants={marquee}
          initial="initial"
          animate="animate"
        >
          {icons.map((EachIcon, index) => (
            <IconWithBg
              key={index}
              isOdd={index % 2 === 1}
              EachIcon={EachIcon}
            />
          ))}
          {additionalIcons.map((EachIcon, index) => (
            <IconWithBg
              key={index}
              isOdd={index % 2 === 1}
              EachIcon={EachIcon}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
