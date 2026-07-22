import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="mb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-8xl text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Let's build something
          <br className="hidden md:block" /> that matters.
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8">
          Have a product idea, a business, or an opportunity? Let's talk
          about it.
        </p>

        <a
          href="mailto:tomisinajayi@gmail.com"
          className="btn rounded-sm text-lg font-semibold inline-block mb-16"
        >
          Let's Work Together →
        </a>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <a
            href="mailto:tomisinajayi@gmail.com"
            className="flex items-center gap-4 p-3 rounded-sm border border-border hover:border-primary/50 transition"
          >
            <Icon icon="material-symbols:mail-outline" width="26" className="text-primary shrink-0" />
            <p className="text-base text-muted-foreground break-all">
              tomisinajayi@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/ajayi-oluwatomisin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-sm border border-border hover:border-primary/50 transition"
          >
            <Icon icon="mdi:linkedin" width="26" className="text-primary shrink-0" />
            <p className="text-base text-muted-foreground">Ajayi Oluwatomisin</p>
          </a>

          <a
            href="https://github.com/TomiisinA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-sm border border-border hover:border-primary/50 transition"
          >
            <Icon icon="mdi:github" width="26" className="text-primary shrink-0" />
            <p className="text-base text-muted-foreground">github.com/TomiisinA</p>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
