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
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "SCSS", icon: "logos:sass" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Framer Motion", icon: "logos:framer" },

    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Yarn", icon: "logos:yarn" },
      { name: "Figma", icon: "logos:figma" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillData.map((category) => (
            <div
              key={category.title}
              className="bg-card p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                  >
                    <Icon icon={skill.icon} width="25" height="25" />
                    <span className="text-md">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
