import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col items-center justify-center px-4"
    >
      <div className="items-center text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-8xl font-bold tracking-tight leading-tight"
        >
          <span className="block text-muted-foreground text-xl md:text-3xl mb-2">
            Hi, I’m
          </span>
          <span className="block bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Oluwatomisin Ajayi
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto animate-fadeInUp animation-delay-500"
        >
          I build scalable, responsive interfaces with clean architecture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=" gap-4 flex justify-center animate-fadeInUp animation-delay-1000 mb-0 pt-4"
        >
          <a href="http://">
            <Icon icon="mdi:linkedin" width="35" height="35" />
          </a>
          <a href="">
            {" "}
            <Icon icon="mdi:github" width="35" height="35" />
          </a>
          <a href="">
            <Icon icon="material-symbols:mail-outline" width="35" height="35" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
