import task from "../assets/images/task.png";
import lama from "../assets/images/lama.png";
import pulse from "../assets/images/pulseconnect.png";
import ajo from "../assets/images/Ajo.png";
import enugu from "../assets/images/enuguAir.png";
import rightice from "../assets/images/rightice.png";
import { ExternalLink, Github } from "lucide-react";

interface Projects {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const projects: Projects[] = [
  {
    id: 1,
    name: "Pulseconnect",
    description:
      "Pulseconnect is a SaaS platform with seven integrated modules to streamline communication, automate workflows, and improve customer experience from a single dashboard.",
    image: pulse,
    tags: ["React", "Typescript", "react-query", "SCSS"],
    link: "https://www.pulseconnect.xyz/",
    github: "",
  },
  {
    id: 2,
    name: "Ajo Savings",
    description:
      "Ajo is a savings app that allows users to create and manage savings groups, set savings goals, and track their progress. It provides a secure and user-friendly platform for individuals to achieve their financial goals.",
    image: ajo,
    tags: ["React", "TailwindCss"],
    link: "https://ajosavings.netlify.app/",
    github: "https://github.com/TomiisinA/Ajo-Savings",
  },
  {
    id: 3,
    name: "RighticeNG",
    description:
      "Rightice.ng is a web application designed to connect individuals in need of legal assistance with verified lawyers across various specialties. Rightice.ng provides a seamless user experience, allowing clients to easily find, consult, and collaborate with legal professionals to resolve their cases efficiently.",
    image: rightice,
    tags: ["React", "Next.js"],
    link: "https://righticeng.netlify.app/",
    github: "https://github.com/TomiisinA/RighticeNG",
  },
  {
    id: 4,
    name: "Enugu Air",
    description:
      "Enugu Air is an aviation website focused on providing passenger and airline service information with a modern flight-first digital experience.",
    image: enugu,
    tags: ["React", "Redux"],
    link: "https://enuguairlines.com/",
    github: "",
  },

  {
    id: 5,
    name: "Lama Estate",
    description:
      "Lama Estate is a real estate website that provides users with a platform to browse and search for properties, view property details, and contact real estate agents for inquiries.",
    image: lama,
    tags: ["React", "TypeScript", "TailwindCss"],
    link: "https://lamarealestatesite.netlify.app/",
    github: "https://github.com/TomiisinA/Lama-Real-estate",
  },
  {
    id: 6,
    name: "Task Manager",
    description:
      "A simple task manager application built with React and Tailwind CSS.",
    image: task,
    tags: ["React", "Tailwind CSS", "TypeScript", "Redux"],
    link: "https://example.com/project3",
    github: "https://github.com/TomiisinA/ToDo-App",
  },
];


export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-9xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden border border-bordershadow-sm hover:shadow-lg transition-all duration-300  group   p-2 rounded-lg "
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  <a
                    href={item.link}
                    target="_blank"
                    className="bg-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>

                  <a
                    href={item.github}
                    target="_blank"
                    className="bg-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <Github className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};