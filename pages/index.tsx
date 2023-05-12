import { AboutMe } from "@/components/aboutme";
import { ContactReminder } from "@/components/contactreminder";
import { Herosection } from "@/components/herosection";
import { Projects } from "@/components/projects";
import { Skillset } from "@/components/skillset";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>jm.dev</title>
      </Head>
      <main className="flex flex-col items-center gap-10 px-8 pt-8 md:gap-20 md:pt-14 lg:px-24 xl:px-32">
        <div className="flex flex-col gap-44 sm:gap-72  ">
          <Herosection />
          <Projects />
          <Skillset />
          <AboutMe />
        </div>
        <ContactReminder />
      </main>
    </>
  );
}
