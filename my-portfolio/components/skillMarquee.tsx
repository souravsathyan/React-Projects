"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTestinglibrary,
  SiRedux,
  SiReactquery,
  SiGraphql,
} from "react-icons/si";
import { BsRobot } from "react-icons/bs";

const skills = [
  {
    name: "HTML",
    Icon: <FaHtml5 size={20} color="#E34F26" />,
  },
  {
    name: "CSS",
    Icon: <FaCss3Alt size={20} color="#1572B6" />,
  },
  {
    name: "JavaScript",
    Icon: <SiJavascript size={20} color="#F7DF1E" />,
  },
  {
    name: "React",
    Icon: <FaReact size={20} color="#61DAFB" />,
  },
  {
    name: "Node.js",
    Icon: <FaNodeJs size={20} color="#339933" />,
  },
  {
    name: "MongoDB",
    Icon: <SiMongodb size={20} color="#47A248" />,
  },
  {
    name: "Express",
    Icon: <SiExpress size={20} color="#000000" />,
  },
  {
    name: "Next.js",
    Icon: <SiNextdotjs size={20} color="#000000" />,
  },
  {
    name: "React Testing Library",
    Icon: <SiTestinglibrary size={20} color="#E33332" />,
  },
  {
    name: "React Native",
    Icon: <FaReact size={20} color="#61DAFB" />,
  },
  {
    name: "Redux",
    Icon: <SiRedux size={20} color="#764ABC" />,
  },
  {
    name: "TanStack Query",
    Icon: <SiReactquery size={20} color="#FF4154" />,
  },
  {
    name: "Prompt Engineering",
    Icon: <BsRobot size={20} color="#6C63FF" />,
  },
  {
    name: "GraphQL",
    Icon: <SiGraphql size={20} color="#E10098" />,
  },
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

export function InfiniteMovingSkillCards() {
  return (
    <section className=" w-screen flex justify-center my-12">
      <div className=" max-w-4xl rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
        <h1 className="text-xl md:text-4xl mb-4">Skills</h1>
        <InfiniteMovingCards
          items={firstRow}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards
          items={secondRow}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
}
