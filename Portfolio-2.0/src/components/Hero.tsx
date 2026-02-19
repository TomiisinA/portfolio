import { ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10  items-center text-center ">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span> Hi,</span> <br />
            <span> I'm </span>
            <span>Oluwatomisin Ajayi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto animate-fadeInUp animation-delay-500">
            I build functional and efficient web applications using React,
            Next.js, and TypeScript, focusing on clean code and practical
            solutions..
          </p>
          <div className=" gap-4 flex justify-center animate-fadeInUp animation-delay-1000">
            <a href="http://">
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </a>
            {/* {" "}
            <a href="" className="btn ">
              {" "}
              Resume{" "}
            </a>{" "}
            <a href="" className="btn">
              {" "}
              Contact Me{" "}
            </a>{" "} */}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center ">
        {/* <span className="text-sm">Scroll</span> */}
        <ChevronDown className="w-4 h-4 text-foreground" />
      </div>
    </section>
  );
};
