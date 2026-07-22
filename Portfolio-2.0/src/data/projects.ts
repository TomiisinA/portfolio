import task from "../assets/images/task.png";
import lama from "../assets/images/lama.png";
import pulse from "../assets/images/pulseconnect.png";
import ajo from "../assets/images/Ajo.png";
import enugu from "../assets/images/enuguAir.png";
import rightice from "../assets/images/rightice.png";

export type ProjectCategory =
  | "SaaS"
  | "Ecommerce"
  | "Web Applications"
  | "Business Websites";

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  link: string;
  github: string;
}

export const projectCategories: ProjectCategory[] = [
  "SaaS",
  "Ecommerce",
  "Web Applications",
  "Business Websites",
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Pulseconnect",
    description:
      "A SaaS platform with seven integrated modules to streamline communication, automate workflows, and improve customer experience from a single dashboard.",
    image: pulse,
    category: "SaaS",
    tags: ["React", "TypeScript", "react-query", "SCSS"],
    link: "https://www.pulseconnect.xyz/",
    github: "",
  },
  {
    id: 2,
    name: "Ajo Savings",
    description:
      "A savings platform that lets users create and manage savings groups, set savings goals, and track progress through a secure, user-friendly interface.",
    image: ajo,
    category: "SaaS",
    tags: ["React", "Tailwind CSS"],
    link: "https://ajosavings.netlify.app/",
    github: "https://github.com/TomiisinA/Ajo-Savings",
  },
  {
    id: 3,
    name: "RighticeNG",
    description:
      "A web application connecting individuals in need of legal assistance with verified lawyers across various specialties, with a streamlined consultation flow.",
    image: rightice,
    category: "Web Applications",
    tags: ["React", "Next.js"],
    link: "https://righticeng.netlify.app/",
    github: "https://github.com/TomiisinA/RighticeNG",
  },
  {
    id: 4,
    name: "Enugu Air",
    description:
      "An aviation business website providing passenger and airline service information with a modern, flight-first digital experience.",
    image: enugu,
    category: "Business Websites",
    tags: ["React", "Redux"],
    link: "https://enuguairlines.com/",
    github: "",
  },
  {
    id: 5,
    name: "Lama Estate",
    description:
      "A real estate business website where users can browse and search properties, view listing details, and contact agents directly.",
    image: lama,
    category: "Business Websites",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://lamarealestatesite.netlify.app/",
    github: "https://github.com/TomiisinA/Lama-Real-estate",
  },
  {
    id: 6,
    name: "Task Manager",
    description:
      "A custom task management web application for organizing, tracking, and completing work with a clean, responsive interface.",
    image: task,
    category: "Web Applications",
    tags: ["React", "Tailwind CSS", "TypeScript", "Redux"],
    link: "",
    github: "https://github.com/TomiisinA/ToDo-App",
  },
];
