import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import EachProject from "@/components/eachProject";

export type dataResponse = {
  html_url: string;
  name: string;
  description: string;
  homepage: string;
};

export default function Project({ data }: { data: dataResponse[] }) {
  return (
    <>
      <Head>
        <title>jm.dev - projects</title>
      </Head>
      <div className="flex justify-center gap-10 px-8 pt-8 md:gap-20 md:pt-14 lg:px-24 xl:px-32">
        <div className="flex w-full max-w-md flex-col items-stretch justify-between gap-4 rounded-md sm:max-w-none sm:px-8 md:px-12 xl:max-w-5xl">
          <h1 className="font-playfairDisplay font-bold sm:text-left sm:text-lg lg:text-xl">
            List of Projects
          </h1>
          <div className="flex flex-col gap-2">
            {data.map(({ html_url, name, description, homepage }, index) => (
              <EachProject
                key={index}
                {...{ name, description, homepage, html_url, index }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.github.com/users/MrXInfinity/repos?sort=created_at"
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
