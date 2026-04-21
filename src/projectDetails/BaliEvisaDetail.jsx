import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Bali E-Visa Indonesia",
  category: "Company Profile",
  heroImg: "/projects/balievisa.webp",
  tagline: "A professional visa consultancy portal designed to assist foreign nationals in navigating the Indonesian immigration process. The platform focuses on providing a streamlined experience for travelers to obtain necessary documentation with ease, speed, and reliability.",
  year: "2025",
  stack: [
    "Laravel",
    "Filament",
    "Tailwind CSS"
  ],
  features: [
    "e-Visa on Arrival (e-VoA) Services: Simplifies the application process for electronic visas.",
    "Arrival Card Assistance: Helps travelers complete mandatory arrival documentation.",
    "Bali Tourist Levy Payment: Provides a dedicated channel for paying the regional tourist tax.",
    "Professional Consultancy: Offers guidance and support for navigating complex immigration requirements."
  ],
  impact: [
    "The platform is currently in its early stages of implementation with no completed transactions (closing) at this time.",
    "Positioned to serve as a high-trust bridge between international tourists and Indonesian immigration services."
  ],
  links: {
    live: "https://balievisaindonesia.com/",
    repo: "https://github.com/Habiburrahman2007/balievisa",
  },
};

export default function BaliEvisaDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
