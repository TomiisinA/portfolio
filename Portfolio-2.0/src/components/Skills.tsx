import { Icon } from "@iconify/react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    title: "Core Expertise",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "SCSS", icon: "logos:sass" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "logos:framer" },
      { name: "Redux", icon: "logos:redux" },
      { name: "react-query", icon: "logos:react-query-icon" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "firebase", icon: "logos:firebase-icon" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillData.flatMap(category => category.skills).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition group"
            >
              <Icon
                icon={skill.icon}
                width="40"
                height="40"
                className="mb-3 group-hover:scale-110 transition-transform"
              />

              <span className="text-sm md:text-base font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
