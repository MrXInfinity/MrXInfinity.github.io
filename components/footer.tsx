import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 bg-stone-950 p-4 sm:mt-8 md:px-32 lg:flex-row">
      <div className="flex w-full max-w-md justify-between sm:max-w-none">
        <div className="flex items-center gap-4">
          <h1 className="font-playfairDisplay">jm.dev</h1>
          <SiGithub className="h-4 w-4 text-blue-500" />
          <SiLinkedin className="h-4 w-4 text-blue-500" />
        </div>
        <div className="flex items-center divide-x divide-solid font-playfairDisplay text-xs">
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
      </div>
      <h1 className="text-center font-playfairDisplay text-xs">
        designed & created by Johann Isaiah Mendoza
      </h1>
    </div>
  );
};
