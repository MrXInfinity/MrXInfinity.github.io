import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiHeadlessui,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Projects = () => {
  const projectsList = [
    {
      title: "Traveloga",
      usedToolIcons: [
        SiReact,
        SiTailwindcss,
        SiAxios,
        SiHeadlessui,
        SiMongodb,
        SiNodedotjs,
        SiExpress,
      ],
      description:
        "Traveloga is a website that allows you to book some famous tourists spots within the Philippines. It’s a full stack application built with Create-React-App and has its own REST API, Authentication and Database storage for users and their bookings.",
      image: "/traveloga_img.png",
      projectLink: "traveloga.onrender.com",
      githubLink: "https://github.com/MrXInfinity/traveloga",
    },
    {
      title: "SharedNotes",
      usedToolIcons: [SiReact, SiTypescript, SiFirebase, SiMui, SiVite],
      description:
        "SharedNotes is a website that stores notes, either private or shared, reminders and tasks. Its note editor has added functionalities found in modern text editors. It’s a full stack application utilizing Vite-React for client and Firebase as its backend. ",
      image: "/sharednotes_img.png",
      projectLink: "https://sharenotes-dev.web.app",
      githubLink: "https://github.com/MrXInfinity/SharedNotes",
    },
    // {
    //   title: "Muntinlupa University",
    //   usedTools: ["", ""],
    //   description: "",
    //   image: "",
    //   projectLink: "https://muntinlupa-university.onrender.com/",
    //   githubLink: "https://github.com/MrXInfinity/MuntinlupaUniversity",
    // },
    // {
    //   title: "this.portfolio",
    //   usedTools: ["", ""],
    //   description: "",
    //   image: "",
    //   projectLink: "",
    //   githubLink: "",
    // },
  ];

  const [showLink, setShowLink] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="flex snap-center flex-col items-center gap-6 sm:gap-10 xl:max-w-[80rem]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: "all" }}
          className="flex w-full max-w-md items-center justify-between font-playfairDisplay sm:max-w-none"
        >
          <h1 className="sm:text-xl">My Personal Project</h1>
          <motion.div
            className="flex"
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/projects"
              className="button_transition flex cursor-pointer items-center gap-2 text-xs text-blue-500/80 hover:bg-slate-400/20"
            >
              <h1>See more...</h1>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
        <div className="flex max-w-md flex-col gap-10 sm:max-w-none sm:gap-12">
          {projectsList.map(
            (
              {
                title,
                description,
                githubLink,
                image,
                projectLink,
                usedToolIcons,
              },
              index
            ) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true, amount: "all" }}
                className="group flex flex-col justify-between gap-4 sm:flex-row sm:gap-10 sm:even:flex-row-reverse"
                key={index}
              >
                <div className="flex justify-between sm:max-w-sm sm:flex-col sm:justify-start sm:group-even:items-end md:max-w-none">
                  <h1 className="font-robotoSlab text-lg sm:mb-3 md:text-2xl">
                    {title}
                  </h1>
                  <div className="flex gap-2 sm:mb-5">
                    {usedToolIcons.map((EachToolIcon, index) => (
                      <EachToolIcon
                        key={index}
                        className="h-4 w-4 sm:h-6 sm:w-6"
                      />
                    ))}
                  </div>
                  <p className="hidden text-justify sm:block">{description}</p>
                </div>
                <EachProjectImage
                  {...{ title, image, githubLink, projectLink }}
                />

                <p className="text-sm opacity-80 sm:hidden">{description}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const EachProjectImage: React.FC<{
  title: string;
  image: string;
  githubLink: string;
  projectLink: string;
}> = ({ image, title, githubLink, projectLink }) => {
  const [showLink, setShowLink] = useState(false);
  return (
    <motion.div
      className="relative grow"
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      {showLink && (
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link
                target="_blank"
                href={githubLink}
                className="button_transition flex items-center gap-2 border-2 hover:border-blue-500 "
              >
                <h1>Github</h1>
                <SiGithub className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link
                target="_blank"
                href={projectLink}
                className="button_transition flex items-center gap-2 border-2 hover:border-blue-500 "
              >
                <h1>Live Site</h1>
                <LinkIcon className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
      <Image
        className="w-full "
        src={image}
        alt={title}
        width={600}
        height={300}
      />
    </motion.div>
  );
};
