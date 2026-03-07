import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>

        <p className="text-muted-foreground max-w-xl text-lg mx-auto mb-12">
          I'm currently open to frontend developer roles, collaborations, and
          interesting projects. Feel free to reach out.
        </p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}

          <a
            href="mailto:tomisinajayi@gmail.com"
            className="flex items-center gap-4 p-6 rounded-sm  hover:border-primary/50 transition"
          >
            <Icon icon="material-symbols:mail-outline" width="30" />

            <div className="text-left">
          
              <p className="text-2xl text-muted-foreground">
                tomisinajayi@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/ajayi-oluwatomisin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-sm hover:border-primary/50 transition"
          >
            <Icon icon="mdi:linkedin" width="30" />

            <div className="text-left">
            
              <p className="text-2xl text-muted-foreground">
                Ajayi Oluwatomisin
              </p>
            </div>
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/TomiisinA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6  hover:border-primary/50 transition"
          >
            <Icon icon="mdi:github" width="30" />

            <div className="text-left">
             
              <p className="text-2xl text-muted-foreground">
                github.com/TomiisinA
              </p>
            </div>
          </a>
        </div>

        {/* Footer */}

        <div className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oluwatomisin Ajayi. All rights reserved.
        </div>
      </div>
    </section>
  );
};
