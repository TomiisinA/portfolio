import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { WhatIBuild } from "../components/WhatIBuild";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <WhatIBuild />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
