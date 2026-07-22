import image from "../assets/images/Myprofile.png";
import resume from "../assets/Oluwatomisin-Ajayi-CV.pdf";

export const About = () => {
  return (
    <section id="about" className=" relative mb-20">
      <div className="container  mx-auto max-w-8xl ">
        {/* <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Frontend Developer
        </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between ">
          {/* left side */}
          <div className="text-left ps-8">
            <p className="text-xl text-muted-foreground text-justify">
              I'm a Frontend Developer focused on building thoughtful, reliable
              digital experiences. My work involves turning product ideas and
              designs into responsive, accessible, and maintainable
              interfaces.
            </p>
            <br />
            <p className="text-xl text-muted-foreground text-justify">
              I have experience working with React, TypeScript, REST APIs,
              application state management, and modern frontend
              technologies&mdash;building interfaces that hold up in
              production, not just in a demo.
            </p>
            <br />
            <p className="text-xl text-muted-foreground text-justify">
              I enjoy working on products that solve real problems, from SaaS
              platforms and custom web applications to ecommerce experiences
              and business websites.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-start">
              <a
                href="#contact"
                className="btn rounded-sm text-lg font-semibold"
              >
                Contact Me
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-sm text-lg font-semibold"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* right side */}

          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt="Oluwatomisin Ajayi"
              width={896}
              height={1195}
              loading="lazy"
              className="w-full max-w-md md:max-w-xs rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
