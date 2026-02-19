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
    name: "Project 1",
    description: "Description of project 1",
    image: beb,
    tags: ["React", "TypeScript"],
    link: "https://example.com/project1",
    github: "",
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
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs "
            >
              <div className=" h-48  overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="bg-primary text-xs font-medium px-2 py-1 border rounded-full text-secondary-foreground">
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="w-5 h-5 text-primary hover:text-secondary" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-primary hover:text-secondary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
