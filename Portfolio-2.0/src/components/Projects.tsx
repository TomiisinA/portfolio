import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projectCategories, projects, type ProjectCategory } from "../data/projects";

const filters: ("ALL" | ProjectCategory)[] = ["ALL", ...projectCategories];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"ALL" | ProjectCategory>("ALL");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "ALL"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-9xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Projects
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition border ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 p-2 rounded-lg"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.name} live`}
                      className="bg-white p-3 rounded-full hover:scale-110 transition"
                    >
                      <ExternalLink className="w-5 h-5 text-black" />
                    </a>
                  )}

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.name} on GitHub`}
                      className="bg-white p-3 rounded-full hover:scale-110 transition"
                    >
                      <Github className="w-5 h-5 text-black" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-xs font-semibold tracking-wide text-primary shrink-0">
                    {item.category.toUpperCase()}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>

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
