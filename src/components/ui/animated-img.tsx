import { motion } from "framer-motion";
import Image from "next/image";
import { HTMLAttributes, ImgHTMLAttributes } from "react";

type AnimatedImageProps = {
  className: string;
  alt: string;
  height: number;
  width: number;
  src: string;
  xanimation: number[];
  yanimation: number[];
};

export default function AnimatedImage(props: AnimatedImageProps) {
  const { alt, className, xanimation, yanimation } = props;
  return (
    <motion.div
      key={alt}
      animate={{
        x: xanimation,
        y: yanimation,
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
        repeat: Infinity,
        repeatDelay: 0,
      }}
      className={className}
    >
      <Image
        {...props}
        className="h-full w-full"
        alt={alt}
      />
    </motion.div>
  );
}
