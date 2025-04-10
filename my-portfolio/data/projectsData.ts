export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  longDescription: string;
}

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    image: `https://picsum.photos/seed/project1/400/300`,
    description: "A full-featured e-commerce platform with cart functionality",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "project2",
    title: "Portfolio Website",
    image: `https://picsum.photos/seed/project2/400/300`,
    description: "A personal portfolio website with smooth animations",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "project3",
    title: "Task Management App",
    image: `https://picsum.photos/seed/project3/400/300`,
    description: "A Kanban-style task management application",
    technologies: ["React", "Redux", "TypeScript"],
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
