import image from "../assets/images/profile.jpeg";

export const About = () => {
  return (
    <section id="about" className=" relative py-20">
      <div className="container  mx-auto max-w-6xl ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between ">
          {/* left side */}
          <div className="flex-1 space-y-6 text-left ">
            <p className="text-xl text-muted-foreground text-left ">
              I have a strong background in JavaScript and React, and I'm always
              eager to learn new technologies and improve my skills. <br /> I
              enjoy working on projects that challenge me and allow me to grow
              as a developer. In my free time, I like to contribute to
              open-source projects and stay up-to-date with the latest trends in
              web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="btn rounded-md font-semibold">
                Contact Me
              </a>
              <a href="#contact" className="btn rounded-md font-semibold">
                Resume
              </a>
            </div>
          </div>

          {/* right side */}

          <div className="flex-1 flex justify-center rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Oluwatomisin Ajayi"
              className="w-100 md:w-50  object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
