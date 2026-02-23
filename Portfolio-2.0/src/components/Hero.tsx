import { Icon } from "@iconify/react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10  items-center text-center ">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            <span> Hi,</span> <br />
            <span> I'm </span>
            <span>Oluwatomisin Ajayi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto animate-fadeInUp animation-delay-500">
            I build functional and efficient web applications using React,
            Next.js, and TypeScript, focusing on clean code and practical
            solutions.
          </p>
          <div className=" gap-4 flex justify-center animate-fadeInUp animation-delay-1000 mb-0 pt-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};
