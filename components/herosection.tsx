import React from "react";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

export const Herosection = () => {
  return (
    <div className=" flex flex-col gap-10 py-12 sm:flex-row">
      <div className="flex max-w-[560px] flex-col">
        <div className="flex flex-col">
          <h1 className="mb-2 font-playfairDisplay text-sm font-medium opacity-80	">
            Hi. I&apos;m Johann Isaiah Mendoza,
          </h1>
          <h1 className="mb-4 font-robotoSlab text-5xl md:text-7xl">
            JAVASCRIPT DEVELOPER.
          </h1>
          <p className="text-justify font-roboto text-sm opacity-70 sm:text-base">
            I am very passionate about programming, building websites, and
            learning new and different technologies and concepts. I consider
            myself an eager learner, as I&apos;m open to new challenges as I
            continue to improve my skills and create better and more complex
            projects.
          </p>
        </div>
        <div className=" hidden text-blue-500 sm:flex">
          <SiGithub />
          <SiLinkedin />
        </div>
      </div>
      <div className="flex gap-6">
        <div className=" flex  flex-col gap-10 text-blue-500 sm:hidden">
          <SiGithub className="h-6 w-6" />
          <SiLinkedin className="h-6 w-6" />
        </div>
        <div className="relative min-w-[250px]">
          <Image
            className="max-h-[300px] rounded-bl-[120px] rounded-br-[60px] rounded-tl-[60px] rounded-tr-[120px] object-cover object-center sm:aspect-[1/1]"
            alt="Hero Image of Johann Mendoza"
            height={400}
            width={400}
            src="/heroImage.jpg"
          />
        </div>
      </div>
    </div>
  );
};
