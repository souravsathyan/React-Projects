import { FaReact } from "react-icons/fa";

const skills = [
  {
    name: "React",
    Icon: () => <FaReact size={20} />,
  },
  {
    name: "React",
    Icon: () => <FaReact size={20} />,
  },
  {
    name: "React",
    Icon: () => <FaReact size={20} />,
  },
  {
    name: "React",
    Icon: () => <FaReact size={20} />,
  },
];

export const firstRow = skills.slice(0, skills.length / 2);
export const secondRow = skills.slice(skills.length / 2);
