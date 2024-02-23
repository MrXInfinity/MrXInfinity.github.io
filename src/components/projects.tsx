import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiHeadlessui,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button, FramerButton } from "./ui/button";

export const Projects = () => {
  const projectsList = [
    {
      title: "Traveloga",
      tools: [
        SiReact,
        SiTailwindcss,
        SiAxios,
        SiHeadlessui,
        SiMongodb,
        SiNodedotjs,
        SiExpress,
      ],
      description:
        "Traveloga is a website that allows you to book some famous tourists spots within the Philippines. It’s a full stack application built with Create-React-App. It has its own REST API, authentication, as well as database for user info and their bookings.",
      image: "traveloga",
      projectLink: "https://traveloga.onrender.com",
      githubLink: "https://github.com/MrXInfinity/traveloga",
    },
    {
      title: "SharedNotes",
      tools: [SiReact, SiTypescript, SiFirebase, SiMui, SiVite],
      description:
        "SharedNotes is a website that stores notes, either private or shared, reminders and tasks. Its note editor has added functionalities found in modern text editors. It’s a full stack application utilizing Vite-React for client and Firebase as its backend. ",
      image: "sharednotes",
      projectLink: "https://sharenotes-dev.web.app",
      githubLink: "https://github.com/MrXInfinity/SharedNotes",
    },
    {
      title: "Job Listings",
      tools: [
        SiReact,
        SiTypescript,
        SiNextdotjs,
        SiFramer,
        SiTailwindcss,
        SiPrisma,
      ],
      description:
        "JobListings lets you list and organize all your job application all in one platform. It has a simple interface that has all your needs to keep tabs on all your job listings.",
      image: "joblisting",
      projectLink: "https://job-listings-theta.vercel.app",
      githubLink: "https://github.com/MrXInfinity/JobListings",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeProject = (val: number) => {
    setSelectedIndex(val);
  };

  const nextProj = () => {
    setSelectedIndex((prev) =>
      prev === projectsList.length - 1 ? 0 : prev + 1
    );
  };

  const prevProj = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projectsList.length - 1 : prev - 1
    );
  };

  const { title, description, tools, image, projectLink, githubLink } =
    projectsList[selectedIndex];

  return (
    <div className="flex justify-center">
      <div className="flex w-full flex-col gap-6 sm:gap-10 lg:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: "all" }}
          className="flex w-full max-w-md items-center justify-between sm:max-w-none"
        >
          <h1 className="text-center text-2xl font-medium md:text-3xl">
            My Personal Project.
          </h1>
          <FramerButton
            className="button_transition flex items-center gap-2 text-sm text-primary-main hover:bg-slate-400/20"
            variant="basic"
            href="/projects"
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="hidden md:inline">view all</h1>

            <FolderIcon className="h-5 w-5" />
          </FramerButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: "all" }}
          className="flex w-full flex-col gap-4 md:flex-row md:gap-10"
        >
          <div className="flex w-full flex-col md:w-2/3 ">
            <div className="relative flex">
              <Image
                className=" w-80 object-contain  object-center md:w-[40rem]"
                src={`/assets/${image}-web.png`}
                alt={title}
                width={600}
                height={300}
              />
              <Image
                className="absolute bottom-0 right-0 w-20 object-contain object-center md:w-40"
                src={`/assets/${image}-mobile.png`}
                alt={title}
                width={600}
                height={300}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-1/3 md:gap-4">
            <h2 className=" -mb-3.5 text-lg font-medium md:-mb-3 md:text-xl">
              {title}
            </h2>
            <div className="flex gap-2 ">
              {tools.map((EachTool, index) => (
                <EachTool
                  className="h-4 w-4 object-contain object-center"
                  color="#00000099"
                  key={index}
                />
              ))}
            </div>
            <p className="text-sm md:text-base">{description}</p>
            <div className="flex items-center gap-4">
              <Button
                target="_blank"
                href={projectLink}
              >
                Live Site
              </Button>
              <Button
                target="_blank"
                href={githubLink}
              >
                Github
              </Button>
            </div>
            <div className="order-first mt-4 flex justify-center md:order-last md:justify-start">
              <ChevronLeftIcon
                className="h-6 w-6 md:h-5 md:w-5"
                onClick={prevProj}
              />
              <ChevronRightIcon
                className="h-6 w-6 md:h-5 md:w-5"
                onClick={nextProj}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
