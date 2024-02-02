import EachProject from "@/src/components/each-project";
import ProjectData from "@/src/project.json";
import Head from "next/head";

export type dataResponse = {
  title: string;
  tools: string[];
  description: string;
  githubLink?: string;
  liveLink?: string;
  isEmployed?: boolean;
};

export default function Project({ data }: { data: dataResponse[] }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>jm.dev - projects</title>
      </Head>
      <div className="flex w-full justify-center gap-10 overflow-hidden px-8 pt-8 md:gap-20 md:pt-14 lg:px-24 xl:px-32">
        <div className="flex w-full max-w-md flex-col items-stretch justify-between gap-4 rounded-md sm:max-w-none sm:px-8 md:px-12 xl:max-w-5xl">
          <h1 className="text-center text-2xl font-medium md:text-3xl">
            List of Projects.
          </h1>
          <div className="flex flex-col gap-2 divide-y-2 divide-gray-400">
            {data.map((data, index) => (
              <EachProject
                key={index}
                isOdd={index % 2 === 0}
                {...data}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const response = await fetch(
  //   "https://api.github.com/users/MrXInfinity/repos?sort=created_at"
  // );

  // const data = await response.json();

  return {
    props: {
      data: ProjectData,
    },
  };
}
