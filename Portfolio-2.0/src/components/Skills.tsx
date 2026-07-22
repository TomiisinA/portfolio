import { Icon } from "@iconify/react";
import { skillCategories } from "../data/skills";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-8xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card rounded-xl border border-border"
            >
              <h3 className="text-lg font-semibold mb-5">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 text-sm"
                  >
                    <Icon icon={skill.icon} width="16" height="16" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
