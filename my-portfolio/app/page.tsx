"use client";

import Intro from "@/components/Intro";
import { InfiniteMovingSkillCards } from "@/components/skillMarquee";
import { Spotlight } from "@/components/ui/spotlight";
import Projects from "./projects/page";
import ContactMe from "./contact/page";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="py-24 relative flex items-center justify-center min-h-screen ">
        <div className="">
          <Spotlight />
          <Intro />
        </div>
      </section>
      <InfiniteMovingSkillCards />
      <Projects />
      <ContactMe />
    </div>
  );
}
