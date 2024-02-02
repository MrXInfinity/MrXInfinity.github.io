import { LinkIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { dataResponse } from "../pages/projects";
import { Button } from "./ui/button";

const EachProject = ({
  title,
  tools,
  description,
  githubLink,
  liveLink,
  isOdd,
  isEmployed,
}: dataResponse & { isOdd: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isOdd ? 30 : -30 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      }}
      viewport={{ once: true, amount: "all" }}
      className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between lg:gap-8 "
    >
      <div className="flex min-w-0 flex-col">
        <h1 className="text-lg font-semibold md:text-xl">{title}</h1>
        <div className="flex gap-2 pb-1.5">
          {tools.map((eachTool) => (
            <span
              className="text-xs font-light text-slate-700"
              key={eachTool}
            >
              {eachTool}
            </span>
          ))}
        </div>
        <p className="font-light leading-tight md:max-w-lg">{description}</p>
      </div>

      <div className="flex gap-6">
        {isEmployed && (
          <div className="flex cursor-default gap-4 rounded-lg bg-gray-100 px-5 py-2 text-center text-base font-semibold text-primary-main">
            <BriefcaseIcon className="h-5 w-5" />
            <h3>Employed</h3>
          </div>
        )}
        {liveLink && (
          <Button
            href={liveLink}
            className="flex gap-4 "
          >
            <LinkIcon className="h-5 w-5" />
            Live
          </Button>
        )}
        {githubLink && (
          <Button
            href={githubLink}
            className="flex gap-4 "
          >
            <SiGithub className="h-5 w-5" />
            Github
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default EachProject;
