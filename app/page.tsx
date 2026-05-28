import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stats } from "@/components/sections/stats";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Stats />
      <Skills />
      <Contact />
    </>
  );
}
