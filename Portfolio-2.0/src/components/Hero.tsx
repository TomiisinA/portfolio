import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

const buildPhrases = [
  "ecommerce experiences",
  "SaaS products",
  "web applications",
  "modern digital interfaces",
];

export const Hero = () => {
  const typedPhrase = useTypewriter(buildPhrases);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24"
    >
      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-semibold tracking-[0.2em] text-primary mb-4"
        >
          FRONTEND DEVELOPER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          I build thoughtful digital products
          <br className="hidden md:block" /> for businesses and the web.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          I specialize in building scalable interfaces, ecommerce experiences,
          SaaS products, and modern web applications with React, Next.js and TypeScript.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl font-medium mb-8 min-h-8"
        >
          I build{" "}
          <span className="text-primary">
            {typedPhrase}
            <span className="inline-block w-0.5 h-5 md:h-6 bg-primary ml-1 align-middle animate-pulse" />
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm text-muted-foreground tracking-wide mb-8"
        >
          React · TypeScript · JavaScript · UI Engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a href="#projects" className="btn rounded-sm text-base font-semibold">
            View Projects
          </a>
          <a href="#contact" className="btn-outline rounded-sm text-base font-semibold">
            Let's Work Together
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for select projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex justify-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/ajayi-oluwatomisin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/70 hover:text-primary transition"
          >
            <Icon icon="mdi:linkedin" width="28" height="28" />
          </a>
          <a
            href="https://github.com/TomiisinA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/70 hover:text-primary transition"
          >
            <Icon icon="mdi:github" width="28" height="28" />
          </a>
          <a
            href="mailto:tomisinajayi@gmail.com"
            aria-label="Email"
            className="text-foreground/70 hover:text-primary transition"
          >
            <Icon icon="material-symbols:mail-outline" width="28" height="28" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
