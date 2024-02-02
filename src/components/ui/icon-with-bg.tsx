import { cn } from "@/src/utils";
import { IconType } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default function IconWithBg({
  EachIcon,
  isOdd,
}: {
  EachIcon: IconType;
  isOdd: boolean;
}) {
  return (
    <div className="relative flex">
      <div className="absolute inset-0 -z-10 flex items-center">
        <Image
          className="h-10 object-contain object-center"
          alt="Laptop graphic"
          height={40}
          width={350}
          src="/assets/wave.svg"
        />
      </div>

      <EachIcon
        color="default"
        className={cn(
          isOdd ? "mb-20" : "mt-20",
          "mx-8 h-10 w-10 md:h-14 md:w-14"
        )}
      />
    </div>
  );
}
