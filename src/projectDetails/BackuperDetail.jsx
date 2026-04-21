import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Backuper",
  category: "Automation / File Management",
  heroImg: "/projects/backup.webp",
  tagline: "An automated file management system that captures media and documents sent via Telegram and organizes them into specific Google Drive folders. It simplifies the process of cloud storage by automatically categorizing files based on their type.",
  year: "2025",
  stack: ["Telegram Bot API", "Google Drive API", "n8n", "Node.js"],
  features: [
    "Intelligent Media Filtering: Detects whether an incoming file is an image, video, or document using MIME type analysis.",
    "Automated Categorization: Directs files to separate, designated folders in Google Drive for better organization.",
    "Dynamic Timestamp Naming: Automatically renames every backed-up file using the current date and time (yyyy-MM-dd_HH-mm).",
    "Real-time User Notifications: Sends instant confirmation messages or error alerts back to the user on Telegram.",
  ],
  impact: [
    "The workflow is fully operational for personal file management, though it has not reached a commercial 'closing' or client implementation yet.",
    "It effectively eliminates the manual effort of downloading and re-uploading files between messaging apps and cloud storage.",
  ],
  links: {
    repo: "https://github.com/Habiburrahman2007/auto-backup",
  },
};

export default function BackuperDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
