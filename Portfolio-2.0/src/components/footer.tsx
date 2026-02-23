import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <section id="contact" className=" relative py-20">
      <div className="container mx-auto max-w-6xl ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Contact Me
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 mb-10">
          <div className="flex gap-4 text-3xl">
            <Icon icon="material-symbols:mail-outline" width="35" height="35" />
            <p>
              <a href="mailto:examplemail@gmail.com">tomisinajayi@gmail.com</a>
            </p>
          </div>

          <div className="flex gap-4 text-3xl">
            <Icon icon="mdi:linkedin" width="35" height="35" className="contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/ajayi-oluwatomisin/">
                Ajayi Oluwatomisin
              </a>
            </p>
          </div>
        </div>

        <div className="bg-background-light pt-12 text-center text-foreground/80">
          <div></div>
          <p>
            © {new Date().getFullYear()} Oluwatomisin Ajayi. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
