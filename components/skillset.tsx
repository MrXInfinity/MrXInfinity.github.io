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
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export const Skillset = () => {
  return (
    <div className="flex w-full flex-col gap-12 sm:gap-20 xl:max-w-7xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        viewport={{ once: true, amount: "all" }}
        className="text-center font-playfairDisplay font-bold sm:text-lg lg:text-xl"
      >
        My Current Skillset
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        viewport={{ once: true, amount: "all" }}
        className="grid grid-cols-2 place-content-center justify-items-center gap-y-8 sm:grid-cols-5 sm:gap-y-20"
      >
        {[
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
        ].map((EachIcon, index) => (
          <EachIcon
            key={index}
            className="h-10 w-10 md:h-14 md:w-14"
          />
        ))}
      </motion.div>
    </div>
  );
};
