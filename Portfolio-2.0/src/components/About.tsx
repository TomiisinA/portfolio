import image from "../assets/images/Myprofile.png";
import resume from "../../public/Oluwatomisin Ajayi CV (1).pdf";

export const About = () => {
  return (
    <section id="about" className=" relative py-20">
      <div className="container  mx-auto max-w-6xl ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-between ">
          {/* left side */}
          <div className=" space-y-6 text-left ">
            <p className="text-2xl text-muted-foreground text-left ">
              I’m a frontend developer focused on building scalable, responsive
              web applications using React and TypeScript. I care deeply about
              clean architecture, maintainable code, and intuitive user
              interfaces.
            </p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Currently, I’m strengthening my expertise in API integration,
              performance optimization, and modern frontend workflows while
              continuously improving my engineering depth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-start">
              <a
                href="#contact"
                className="btn rounded-md  text-lg font-semibold"
              >
                Contact Me
              </a>
              <a
                href={resume}
                target="_blank"
                className="btn rounded-md text-lg font-semibold"
              >
                Resume
              </a>
            </div>
          </div>

          {/* right side */}

          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt="Oluwatomisin Ajayi"
              className="w-full max-w-md md:max-w-xs rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
