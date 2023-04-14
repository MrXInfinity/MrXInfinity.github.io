import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="sticky flex items-center justify-between border-b-2 border-dashed border-white px-6 py-4 font-playfairDisplay">
      <h1>JM.dev</h1>
      <div className="hidden items-center gap-6 sm:flex ">
        <h1>home</h1>
        <h1>about me</h1>
        <h1>skills</h1>
        <h1>projects</h1>
        <h1>contacts</h1>
        <div className="border-2 border-solid border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
          resume
        </div>
      </div>
      <Bars3Icon className="h-8 w-8 text-blue-500 sm:hidden" />
    </div>
  );
};
