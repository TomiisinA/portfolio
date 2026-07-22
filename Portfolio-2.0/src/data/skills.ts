export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      {name: "framer-motion", icon: "logos:framer" }, 
      { name: "SCSS", icon: "logos:sass" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Responsive Design", icon: "mdi:responsive" },
      { name: "Accessibility", icon: "mdi:human-white-cane" },
      { name: "Component Systems", icon: "mdi:view-grid-outline" },
    ],
  },
  {
    title: "Data & APIs",
    skills: [
      { name: "REST APIs", icon: "mdi:api" },
      { name: "React Query", icon: "logos:react-query-icon" },
      { name: "Axios", icon: "logos:axios" },
      { name: "API Integration", icon: "mdi:connection" },
    ],
  },
  {
    title: "Backend & Platforms",
    skills: [
      { name: ".NET / C#", icon: "logos:c-sharp" },
      { name: "SQL", icon: "mdi:database-outline" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Vite", icon: "logos:vitejs" },
    ],
  },
];
