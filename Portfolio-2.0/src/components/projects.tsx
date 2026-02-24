import pics from "../assets/images/Screenshot (31).png";
import beb from "../assets/images/Screenshot (33).png";
import fine from "../assets/images/Screenshot (32).png";
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
    name: "Lama Estate",
    description: "Description of project 1",
    image: beb,
    tags: ["React", "TypeScript"],
    link: "https://lamarealestatesite.netlify.app/",
    github: "https://github.com/TomiisinA/Lama-Real-estate",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description of project 2",
    image: pics,
    tags: ["React", "Node.js"],
    link: "https://example.com/project2",
    github: "",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description of project 3",
    image: fine,
    tags: ["React", "Tailwind CSS"],
    link: "https://example.com/project3",
    github: "",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description of project 4",
    image: fine,
    tags: ["React", "Next.js"],
    link: "https://example.com/project4",
    github: "",
  },
  {
    id: 5,
    name: "Project 5",
    description: "Description of project 5",
    image: beb,
    tags: ["React", "GraphQL"],
    link: "https://example.com/project5",
    github: "",
  },
  {
    id: 6,
    name: "Project 6",
    description: "Description of project 6",
    image: pics,
    tags: ["React", "Redux"],
    link: "https://example.com/project6",
    github: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group border  p-4 rounded-lg overflow-hidden shadow-xs "
            >
              <div className=" h-48  overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="py-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className="bg-primary text-xs font-medium px-2 py-1 border rounded-sm text-white"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold  mb-1">{project.name}</h3>
              <p className=" mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <div className="flex border rounded-md px-2 py-1 items-center gap-1 bg-primary/10  hover:text-secondary">
                    <p> Live Demo</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor "
                    >
                      <ExternalLink size={20} className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex border rounded-md px-2 py-1 items-center gap-1 bg-primary/10">
                    <p>GitHub</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor"
                    >
                      <Github className="w-5 h-5 hover:text-secondary" />
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
