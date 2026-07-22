import { Icon } from "@iconify/react";
import { services } from "../data/services";

export const WhatIBuild = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-8xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          What I Build
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
          A quick look at how I can help, whether you're hiring a frontend
         developer or building a product from the ground up.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card rounded-xl border border-border card-hover"
            >
              <Icon icon={service.icon} width="32" height="32" className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
