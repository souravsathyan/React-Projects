"use client";

import Intro from "@/components/Intro";
import { TimelineDemo } from "@/components/myTimeline";
import { InfiniteMovingSkillCards } from "@/components/skillMarquee";
import { Spotlight } from "@/components/ui/spotlight";
import ReactIcon from "@/public/icons/react";
import { FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="py-24 relative flex items-center justify-center min-h-screen overflow-hidden">
        <Spotlight />
        <Intro />
      </section>
      <section className=" w-screen flex justify-center my-12">
        <InfiniteMovingSkillCards />
      </section>
      <TimelineDemo />
    </>
  );
}
