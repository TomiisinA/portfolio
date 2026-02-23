interface SkillCategory {
  title: string;
  skills: string[];
}

const skillData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Redux",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "SCSS / Sass",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Yarn",
      "VS Code",
      "Figma",
      "REST APIs",
      "Render (Deployment)",
      "Responsive Design",
      "Cross-Browser Testing",
    ],
  },
  // {
  //   title: "Other Skills",
  //   skills: [
  //     "Technical Writing",
  //     "API Integration",
  //     "UI/UX Implementation",
  //     "Performance Optimization",
  //     "Component Architecture",
  //     "State Management",
  //   ],
  // },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {skillData.map((category) => (
            <div
              key={category.title}
              className="bg-card p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
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
