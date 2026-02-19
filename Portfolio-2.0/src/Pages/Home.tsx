import { About } from "../components/About"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import  { Projects } from "../components/projects"
import { Skills } from "../components/Skills"



export const Home = () => {
  return (
    <div className="min-h-screen text-2xl overflow-x-hidden ">

        {/* Toggle */}
        {/* <ThemeToggle/> */}

        {/* Navbar */}
        <Navbar/>
        {/* Main content */}

        <main>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
        </main>
    </div>
  )
}
