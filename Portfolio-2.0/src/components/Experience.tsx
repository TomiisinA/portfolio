import { motion } from "framer-motion";
import { experience } from "../data/experience";
import resume from "../assets/Oluwatomisin-Ajayi-CV.pdf";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-8xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline rounded-sm text-sm font-semibold"
          >
            Download Resume
          </a>
        </div>

        <div className="relative border-l border-border pl-8 space-y-16">
          {experience.map((role, index) => (
            <motion.div
              key={`${role.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[2.32rem] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-sm font-semibold tracking-wide text-primary mb-2">
                {role.start.toUpperCase()} — {role.end.toUpperCase()}
              </p>
              <h3 className="text-2xl font-semibold">{role.title}</h3>
              <p className="text-lg text-muted-foreground mb-4">{role.company}</p>

              <ul className="space-y-2 mb-4">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground">
                {role.tech.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
