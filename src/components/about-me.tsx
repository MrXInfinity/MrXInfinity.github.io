import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const info = [
    {
      title: "JOURNEY",
      desc: "Growing up, I always loved games and fashion. Games are a way to solve problems, explore and discover new things. Fashion is my way of expressing myself. All those things have cultivated over the years, thus it overlapped with my passion for web development. The games I played made me strategic, as well as detail-oriented. Fashion has also helped me a bit better in designing my own personal projects.",
    },
    {
      title: "EXPERIENCE",
      desc: "My passion for coding started at senior high school, when I first experienced HTML and CSS. While we were taught general programming languages like c++ and c#, web development was the initial spark that made me curious and passionate. Learning javascript then has shown me a new way of creativity. Creativity in logic while providing efficiency which has made me appreciate the ecosystem and its continuous innovation.",
    },
  ];
  return (
    <div className="flex max-w-md flex-col gap-6 sm:max-w-none sm:gap-8 xl:max-w-7xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        viewport={{ once: true, amount: "all" }}
        className="text-center text-2xl font-medium md:text-3xl"
      >
        About Me.
      </motion.h1>
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start md:gap-14 lg:gap-20 xl:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          viewport={{ once: true, amount: "all" }}
          className="relative shrink-0"
        >
          <Image
            className="inset-0 shrink-0 object-cover object-center"
            src="/assets/author-pic.png"
            alt="Picture of Johann Isaiah Mendoza"
            width={400}
            height={400}
          />
        </motion.div>
        <div className="flex  shrink flex-col gap-8 lg:max-w-4xl">
          {info.map(({ title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
              viewport={{ once: true, amount: "all" }}
              className="flex flex-col gap-1 "
            >
              <h1 className=" text-base font-semibold md:text-lg">{title}</h1>
              <p className="text-justify text-sm opacity-80 sm:opacity-90 md:text-base">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
