import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <section id="contact" className="mb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-8xl "
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          {" "}
          Interested in working together?
        </h2>

        <p className="text-muted-foreground  text-xl mx-auto mb-3">
          I'm currently open to frontend developer roles, collaborations, and
          interesting projects. Feel free to reach out.
        </p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}

          <a
            href="mailto:tomisinajayi@gmail.com"
            className="flex items-center gap-4 p-2 rounded-sm  hover:border-primary/50 transition"
          >
            <Icon icon="material-symbols:mail-outline" width="30" />

            <div className="text-left">
              <p className="text-2xl text-muted-foreground">
                tomisinajayi@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/ajayi-oluwatomisin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-2 rounded-sm hover:border-primary/50 transition"
          >
            <Icon icon="mdi:linkedin" width="30" />

            <div className="text-left">
              <p className="text-2xl text-muted-foreground">
                Ajayi Oluwatomisin
              </p>
            </div>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/TomiisinA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-2  hover:border-primary/50 transition"
          >
            <Icon icon="mdi:github" width="30" />

            <div className="text-left">
              <p className="text-2xl text-muted-foreground">
                github.com/TomiisinA
              </p>
            </div>
          </a>
        </div>

        {/* Footer */}

        {/* <div className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oluwatomisin Ajayi. All rights reserved.
        </div> */}
      </motion.div>
    </section>
  );
};
