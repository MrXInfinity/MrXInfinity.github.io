import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 bg-stone-950 px-8 py-4 font-playfairDisplay sm:mt-8 sm:flex-row lg:px-24 xl:px-32">
      <div className="flex w-full max-w-md flex-auto items-center justify-between sm:max-w-none">
        <div className="flex items-center gap-4">
          <h1>jm.dev</h1>
          <SiGithub className="h-4 w-4 text-blue-500" />
          <SiLinkedin className="h-4 w-4 text-blue-500" />
        </div>
        <div className="flex items-center divide-x divide-solid text-xs">
          <Link
            href="/"
            className="px-2"
          >
            home
          </Link>
          <Link
            href="/projects"
            className="px-2"
          >
            projects
          </Link>
          <Link
            href="/contact"
            className="px-2"
          >
            contact
          </Link>
        </div>
        <div className=" hidden text-xs sm:block ">
          designed & created by Johann Isaiah Mendoza
        </div>
      </div>
      <div className="flex-auto shrink-0 text-center text-xs sm:hidden">
        designed & created by Johann Isaiah Mendoza
      </div>
    </div>
  );
};
