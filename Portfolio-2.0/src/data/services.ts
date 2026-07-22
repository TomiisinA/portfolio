export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "SaaS Products",
    description:
      "Interfaces and dashboards for software products, startups, and growing teams.",
    icon: "mdi:view-dashboard-outline",
  },
  {
    title: "Ecommerce Websites",
    description:
      "Modern online stores and shopping experiences designed to help businesses showcase and sell products.",
    icon: "mdi:cart-outline",
  },
  {
    title: "Business Websites",
    description:
      "Professional websites that help businesses establish an online presence and reach more customers.",
    icon: "mdi:briefcase-outline",
  },
  {
    title: "Custom Web Applications",
    description:
      "Web applications built around specific business requirements and workflows.",
    icon: "mdi:application-brackets-outline",
  },
];
