import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiHeadlessui,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";

export const Projects = () => {
  const projectsList = [
    {
      title: "Traveloga",
      usedToolIcons: [
        SiReact,
        SiTailwindcss,
        SiAxios,
        SiHeadlessui,
        SiMongodb,
        SiNodedotjs,
        SiExpress,
      ],
      description:
        "Traveloga is a website that allows you to book some famous tourists spots within the Philippines. It’s a full stack application built with Create-React-App and has its own REST API, Authentication and Database storage for users and their bookings.",
      image: "",
      projectLink: "traveloga.onrender.com",
      githubLink: "https://github.com/MrXInfinity/traveloga",
    },
    {
      title: "SharedNotes",
      usedToolIcons: [SiReact, SiTypescript, SiFirebase, SiMui, SiVite],
      description:
        "SharedNotes is a website that stores notes, either private or shared, reminders and tasks. Its note editor has added functionalities found in modern text editors. It’s a full stack application utilizing Vite-React for client and Firebase as its backend. ",
      image: "",
      projectLink: "https://sharenotes-dev.web.app",
      githubLink: "https://github.com/MrXInfinity/SharedNotes",
    },
    // {
    //   title: "Muntinlupa University",
    //   usedTools: ["", ""],
    //   description: "",
    //   image: "",
    //   projectLink: "https://muntinlupa-university.onrender.com/",
    //   githubLink: "https://github.com/MrXInfinity/MuntinlupaUniversity",
    // },
    // {
    //   title: "this.portfolio",
    //   usedTools: ["", ""],
    //   description: "",
    //   image: "",
    //   projectLink: "",
    //   githubLink: "",
    // },
  ];
  return (
    <div>
      <h1 className="font-playfairDisplay">My Personal Project</h1>
      {projectsList.map(
        (
          { title, description, githubLink, image, projectLink, usedToolIcons },
          index
        ) => (
          <div
            className="flex flex-col sm:flex-row"
            key={index}
          >
            <div className="flex justify-between sm:flex-col">
              <h1>{title}</h1>
              <div className="grid grid-flow-col grid-rows-1">
                {usedToolIcons.map((EachToolIcon, index) => (
                  <EachToolIcon key={index} />
                ))}
              </div>
            </div>
            <a href="">
              <Image
                src={image}
                alt={title}
              />
            </a>
          </div>
        )
      )}
    </div>
  );
};
