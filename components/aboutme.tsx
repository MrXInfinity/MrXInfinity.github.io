import React from "react";

export const AboutMe = () => {
  return (
    <div className="my-12 flex flex-col sm:flex-row">
      <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 ">
        <div className="flex flex-col gap-4">
          <h1 className="font-playfairDisplay">About Me</h1>
          <div className="flex flex-col gap-2">
            <h1 className="font-robotoSlab text-3xl">Journey</h1>
            <p className="text-justify font-roboto text-sm">
              Growing up, I always loved games and fashion. Games are a way to
              solve problems, explore and discover new things. Fashion is my way
              of expressing myself. All those things have cultivated and
              overlapped with my passion for web development. The games I played
              made me strategic and detail-oriented. Fashion has also helped me
              a bit better in designing my own personal projects.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-end font-robotoSlab text-3xl sm:text-start">
            Experience
          </h1>
          <p className="text-justify font-roboto text-sm">
            My passion for coding started at senior high school, where I first
            experienced HTML and CSS. While we were taught general programming
            languages such as C++ and C# in junior high school, it didn&apos;t
            spark interest, unlike web development. My deciding factor was that
            you could visualize creativity. Learning javascript then has shown
            me a new way of creativity. Creativity in logic while providing
            efficiency which has made me appreciate the ecosystem and its
            continuous innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
