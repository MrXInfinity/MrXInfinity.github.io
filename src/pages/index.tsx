import { AboutMe } from "@/src/components/about-me";
import { ContactReminder } from "@/src/components/contact-reminder";
import { Herosection } from "@/src/components/herosection";
import { Projects } from "@/src/components/projects";
import { Skillset } from "@/src/components/skillset";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>jm.dev</title>
      </Head>
      <main className="flex flex-col items-center gap-10 px-12 md:gap-20 lg:px-24 xl:px-32">
        <div className="flex flex-col gap-36 sm:gap-60  ">
          <Herosection />
          <Skillset />
          <Projects />
          <AboutMe />
        </div>
        <ContactReminder />
      </main>
    </>
  );
}
