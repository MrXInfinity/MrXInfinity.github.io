import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FramerButton } from "./ui/button";

export const ContactReminder = () => {
  const [numberOfNoClicks, setNumberOfNoClicks] = useState(0);
  const [randonNumber, setRandomNumber] = useState<number | null>(null);

  const possibilities = [
    "Why Not?",
    "Pretty Please?",
    "Having a Bad Day?",
    "Maybe you're too interested?",
    "Come on now, don't be shy",
    "Perhaps you misclicked?",
    "What if I'm the on interesteed in you?",
  ];

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const clickNo = () => {
    setNumberOfNoClicks((prev) => prev + 1);
    setRandomNumber((prev) => {
      const randomNumber = getRandomNumber(possibilities.length);
      if (prev === randomNumber) return getRandomNumber(possibilities.length);
      return randomNumber;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      viewport={{ once: true, amount: "all" }}
      className="flex w-full max-w-md items-center justify-between gap-4 rounded-md bg-primary-main p-4 sm:max-w-none sm:px-8 md:px-12 lg:max-w-5xl"
    >
      <h1 className="w-fit shrink text-lg text-white sm:text-2xl">
        {numberOfNoClicks > 20
          ? "There let me help you! :>"
          : numberOfNoClicks !== 0
          ? possibilities[randonNumber!]
          : "Have I Piqued your Interest?"}
      </h1>

      <div className=" flex gap-4">
        <FramerButton
          onClick={clickNo}
          className={numberOfNoClicks > 20 ? "hidden" : ""}
          variant="reverseOutline"
        >
          NO
        </FramerButton>

        <FramerButton
          href="/contact"
          variant="reverseOutline"
        >
          YES
        </FramerButton>
      </div>
    </motion.div>
  );
};
