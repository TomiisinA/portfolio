import { Code } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className=" relative py-24 px-4">
      <div className="container max-w-4xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About 
        </h2>
        

        {/* left side */}

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <p className="text-lg text-muted-foreground">
              I have a strong background in JavaScript and React, and I'm always
              eager to learn new technologies and improve my skills. I enjoy
              working on projects that challenge me and allow me to grow as a
              developer. In my free time, I like to contribute to open-source
              projects and stay up-to-date with the latest trends in web
              development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </div>
          </div>

          {/* right side */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-light/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Web Development</h3>
                  <p className="text-muted-foreground">
                    Building responsive and modern web applications using React,
                    Node.js, and other technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
