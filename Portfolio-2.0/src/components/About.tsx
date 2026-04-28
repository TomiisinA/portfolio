import image from "../assets/images/Myprofile.png";
import resume from "../assets/Oluwatomisin Ajayi CV (1).pdf";

export const About = () => {
  return (
    <section id="about" className=" relative mb-20">
      <div className="container  mx-auto max-w-8xl ">
        {/* <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Frontend Developer
        </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between ">
          {/* left side */}
          <div className="text-left ">
            <p className="text-xl text-muted-foreground  text-justify ">
              I’m a frontend developer focused on building scalable, responsive
              web applications. I care deeply about clean architecture,
              maintainable code, and intuitive user interfaces.
            </p>
            <br />
            <p className="text-xl text-muted-foreground text-justify ">
              With a commitment to continuous learning, I stay updated on
              industry trends to leverage the latest technologies and best
              practices. My focus on writing clean, maintainable code and
              following agile methodologies ensures efficient and effective
              project delivery.
            </p>
            <br />
            <p className="text-xl text-muted-foreground text-justify">
              I am eager to contribute to dynamic teams, bring fresh
              perspectives to frontend development challenges, and create
              impactful digital experiences. Feel free to reach out if you will
              like to discuss web development, industry trends, or potential
              collaboration opportunities!
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-start">
              <a
                href="#contact"
                className="btn rounded-sm  text-lg font-semibold"
              >
                Contact Me
              </a>
              <a
                href={resume}
                target="_blank"
                className="btn rounded-sm text-lg font-semibold"
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
              className="w-full max-w-md md:max-w-xs rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
