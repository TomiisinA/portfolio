import { About } from "../components/About"
import  { Footer } from "../components/footer"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import  { Projects } from "../components/projects"
import { Skills } from "../components/Skills"



export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth ">
      {/* Toggle */}
      {/* <ThemeToggle/> */}

      {/* Navbar */}
      <Navbar />
      {/* Main content */}

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
