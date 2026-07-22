export interface ExperienceEntry {
  title: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Front-End Developer",
    company: "Xclaim Labs",
    start: "March 2025",
    end: "Present",
    bullets: [
      "Built, optimized, and maintained 7+ production-grade web applications using React and TypeScript, writing clean, reusable code following frontend best practices.",
      "Integrated RESTful APIs and managed application state with the React Context API, improving data consistency and reducing UI bugs in production by 70%.",
      "Translated Figma designs into responsive, accessible, pixel-perfect interfaces with consistent cross-browser compatibility across Chrome, Firefox, and Safari.",
      "Debugged and resolved complex frontend and performance issues, contributing to lower production bug rates.",
      "Collaborated closely with backend developers, designers, and project managers to deliver scalable web solutions.",
    ],
    tech: ["React", "TypeScript", "REST APIs", "Context API", "Figma"],
  },
  {
    title: "Software Developer",
    company: "InstiQ Professional Services",
    start: "August 2022",
    end: "March 2025",
    bullets: [
      "Developed responsive web interfaces using HTML5, CSS3, JavaScript, Bootstrap, and jQuery.",
      "Worked with cross-functional teams to implement business requirements and improve application usability.",
      "Assisted with API integrations, testing, troubleshooting, and deployment support for enterprise applications.",
      "Maintained and enhanced frontend components for banking and workflow automation applications, improving UI consistency and responsiveness across multiple internal systems.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
  },
];
