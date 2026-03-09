import task from "../assets/images/task.png";
import lama from "../assets/images/lama.png";
import fine from "../assets/images/Screenshot (32).png";
import ajo from "../assets/images/Ajo.png";
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
    name: "Ajo Savings",
    description: "Description",
    image: ajo,
    tags: ["React", "TailwindCss"],
    link: "https://ajosavings.netlify.app/",
    github: "https://github.com/TomiisinA/Ajo-Savings",
  },
  {
    id: 2,
    name: "Lama Estate",
    description: "Description ",
    image: lama,
    tags: ["React", "TypeScript"],
    link: "https://lamarealestatesite.netlify.app/",
    github: "https://github.com/TomiisinA/Lama-Real-estate",
  },
  {
    id: 3,
    name: "Task Manager",
    description: "Description of project 3",
    image: task,
    tags: ["React", "Tailwind CSS"],
    link: "https://example.com/project3",
    github: "",
  },
  {
    id: 4,
    name: "Recipe App",
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
    image: lama,
    tags: ["React", "GraphQL"],
    link: "https://example.com/project5",
    github: "",
  },
  {
    id: 6,
    name: "Project 6",
    description: "Description of project 6",
    image: task,
    tags: ["React", "Redux"],
    link: "https://example.com/project6",
    github: "",
  },
];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-6xl">
//         <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
//           Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, key) => (
//             <div
//               key={key}
//               className="group border  p-4 rounded-lg overflow-hidden shadow-xs "
//             >
//               <div className=" h-48  overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               <div className="py-3">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       className="bg-primary text-xs font-medium px-2 py-1 border rounded-sm text-white"
//                       key={tag}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold  mb-1">{project.name}</h3>
//               <p className=" mb-4 text-sm text-muted-foreground">
//                 {project.description}
//               </p>
//               <div className="flex justify-between items-center">
//                 <div className="flex space-x-3">
//                   <div className="flex border rounded-md px-2 py-1 items-center gap-1 bg-primary/10  hover:text-secondary cursor-pointer">
//                     <p> Live Demo</p>
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="cursor "
//                     >
//                       <ExternalLink size={20} className="w-4 h-4" />
//                     </a>
//                   </div>
//                   <div className="flex border rounded-md px-2 py-1 items-center gap-1 bg-primary/10 cursor-pointer">
//                     <p>GitHub</p>
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="cursor"
//                     >
//                       <Github className="w-5 h-5 hover:text-secondary" />
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
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
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};