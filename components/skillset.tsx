import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
} from "@icons-pack/react-simple-icons";

export const Skillset = () => {
  return (
    <div className="my-12 flex flex-col gap-12 ">
      <h1 className="text-center font-playfairDisplay text-lg">
        My Current Skillset
      </h1>
      <div className="grid grid-cols-5 justify-items-center gap-4">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiNodedotjs />
        <SiExpress />
        <SiMongodb />
        <SiTypescript />
        <SiFirebase />
        <SiNextdotjs />
      </div>
    </div>
  );
};
