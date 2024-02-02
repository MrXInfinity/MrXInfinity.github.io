import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, FramerButton } from "./ui/button";
import { cn } from "@/src/utils";
import RouteButtons from "./route-buttons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = (val?: boolean) => {
    setIsOpen((prev) => val ?? !prev);
  };

  const routes = ["projects", "contact"];

  const navbar = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  return (
    <div className="sticky top-0 z-10 flex justify-center bg-[#F1EFE7] md:px-8 lg:px-28 xl:px-32">
      <div className="flex w-full max-w-md items-center justify-between sm:max-w-none lg:max-w-7xl">
        <Button
          href="/"
          variant="basic"
          className="ml-8 py-2 md:ml-0"
        >
          <Image
            src="/assets/logo.png"
            height={64}
            width={104}
            alt="jm.dev logo"
            className="h-16 w-20"
          />
        </Button>
        <div className="hidden h-full items-center gap-8 md:flex">
          <RouteButtons routes={routes} />

          <FramerButton
            whileTap={{ scale: 0.9 }}
            href="/johann_mendoza_resume.pdf"
            target="_blank"
            download
            className="button_transition rounded-md border-2 border-solid border-primary-main px-4 py-2 text-lg text-primary-main hover:bg-primary-main hover:text-white"
          >
            resume
          </FramerButton>
        </div>

        <FramerButton
          className="mr-8 flex items-center justify-center p-0 md:mr-0 md:hidden"
          variant="basic"
          whileTap={{ scale: 0.7 }}
          onClick={() => toggleMenu()}
        >
          {!isOpen ? (
            <Bars3Icon className="h-10 w-10" />
          ) : (
            <XMarkIcon className="h-10 w-10" />
          )}
        </FramerButton>
        <>
          <AnimatePresence
            initial={false}
            mode="wait"
          >
            {isOpen && (
              <motion.div
                variants={navbar}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed right-0 top-[4.5rem] flex w-40 flex-col divide-y divide-black bg-[#F1EFE7]"
              >
                <RouteButtons
                  routes={routes}
                  closeMenu={() => toggleMenu(false)}
                />

                <Button
                  href="/johann_mendoza_resume.pdf"
                  download
                  onClick={() => toggleMenu(false)}
                  variant="basic"
                  target="_blank"
                  className=" button_transition px-6 py-4 hover:text-primary-main md:h-full"
                >
                  resume
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </div>
    </div>
  );
}
