import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "RelaxSpa & Wellness",
  category: "Landing Page",
  heroImg: "/projects/spa.webp",
  tagline: "A professional digital platform designed for a spa and wellness center to modernize its business operations. The website serves as a digital storefront that showcases various therapeutic treatments and provides a seamless way for clients to explore services and make inquiries.",
  year: "2025",
  stack: ["JS Native", "Tailwind CSS"],
  features: [
    "Treatment Catalog: A categorized display of spa services, including durations, benefits, and pricing.",
    "Online Reservation System: Integrated booking functionality that allows customers to schedule sessions digitally.",
    "Mobile-First Design: A fully responsive layout ensuring a luxury user experience across smartphones, tablets, and desktops.",
    "Location & Contact Integration: Built-in maps and direct contact triggers to help local clients find and reach the spa easily.",
  ],
  impact: [
    "The project is currently in the deployment and showcase phase, providing the business with a high-end digital identity.",
    "Significantly increases visibility to potential customers in the Semarang area and establishes a professional online presence.",
  ],
  links: {
    live: "https://relaxspa.vibedev.my.id/",
    repo: "https://github.com/Habiburrahman2007/relax_spa",
  },
};

export default function RelaxSpaDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
