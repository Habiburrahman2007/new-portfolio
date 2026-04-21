import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Hifdz Tracker",
  category: "System Management",
  heroImg: "/projects/hifdz.webp",
  tagline: "A digital management system designed to modernize the monitoring of Al-Qur'an memorization (Tahfidz) progress within Islamic boarding school (pesantren) environments. This platform replaces traditional manual recording systems with a centralized digital solution to improve efficiency and data accuracy.",
  year: "2025",
  stack: ["Laravel", "Tailwind CSS"],
  features: [
    "Centralized Dashboard: Provides a comprehensive view to monitor student memorization statistics in one platform.",
    "Memorization & Fluency Tracking: Enables instructors to record daily progress and the level of fluency (itqan) for each student in detail.",
    "Attendance Management: An integrated digital attendance system to monitor student discipline.",
    "Real-time Data Access: Provides stakeholders with the ability to view memorization progress instantly at any time.",
  ],
  impact: [
    "The platform significantly impacts the digitalization of pesantren administration, enhancing data security and simplifying the student evaluation process.",
    "Beyond its current capabilities, it holds great potential for future expansion, such as automated progress reports for parents or full integration with broader school management systems.",
  ],
  links: {
    live: "https://hifdztracker.muhhabib.my.id/",
    repo: "https://github.com/Habiburrahman2007/hifdz-tracker",
  },
};

export default function HifdzTrackerDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
