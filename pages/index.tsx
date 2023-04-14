import { AboutMe } from "@/components/aboutme";
import { Herosection } from "@/components/herosection";
import { Projects } from "@/components/projects";
import { Skillset } from "@/components/skillset";

export default function Home() {
  return (
    <main className="px-8">
      <Herosection />
      <AboutMe />
      <Skillset />
      <Projects />
    </main>
  );
}
