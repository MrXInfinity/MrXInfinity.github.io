import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 bg-[#F1EFE7] px-8 py-4 sm:mt-8 sm:flex-row lg:px-24 xl:px-32">
      <div className="flex w-full max-w-md flex-auto items-center justify-between sm:max-w-none">
        <div className="flex items-center gap-4">
          <h1>jm.dev</h1>
          <Button
            className="px-0"
            variant="basic"
            href="https://www.github.com/MrXInfinity"
          >
            <SiGithub className="h-4 w-4 text-primary-main" />
          </Button>
          <Button
            className="px-0"
            variant="basic"
            href="https://www.linkedin.com/in/johann-mendoza-09465822a"
          >
            <SiLinkedin className="h-4 w-4 text-primary-main" />
          </Button>
        </div>
        <div className="flex items-center divide-x divide-solid divide-slate-400 text-xs">
          <Button
            href="/"
            variant="basic"
            className="px-2"
          >
            home
          </Button>
          <Button
            href="/projects"
            variant="basic"
            className="px-2"
          >
            projects
          </Button>
          <Button
            href="/contact"
            variant="basic"
            className="px-2"
          >
            contact
          </Button>
        </div>
        <span className=" hidden text-xs sm:block ">
          designed & created by Johann Isaiah Mendoza
        </span>
      </div>
      <span className="flex-auto shrink-0 text-center text-xs sm:hidden">
        designed & created by Johann Isaiah Mendoza
      </span>
    </div>
  );
};
