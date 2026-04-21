import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Finance Tracker",
  category: "Finance / Automation",
  heroImg: "/projects/finance.webp",
  tagline: "An automated financial recording assistant that utilizes AI to parse natural language messages from Telegram and log them as structured transactions into a Google Sheet. The system is designed to identify income and expenses automatically, making personal finance tracking seamless and conversational.",
  year: "2025",
  stack: ["Telegram Bot API", "n8n", "Google Gemini", "Google Sheets API", "JavaScript"],
  features: [
    "Natural Language Parsing: Employs an AI agent to understand unstructured text and extract key financial details like amount and category.",
    "Automatic Transaction Classification: Intelligently categorizes entries as 'Income' or 'Outcome' based on the message content.",
    "Structured Data Logging: Automatically appends the date, amount, transaction type, and notes to a centralized Google Sheet for easy reporting.",
    "Instant Confirmation & Validation: Sends a formatted summary back to the user upon successful logging or a report if the input is invalid.",
    "Data Formatting: Includes a custom JavaScript node to ensure AI-generated data is correctly formatted as valid JSON before processing.",
  ],
  impact: [
    "This workflow streamlines the habit of financial tracking by removing the need for manual data entry into spreadsheets.",
    "By integrating a familiar messaging interface with AI intelligence, it ensures more consistent and accurate personal financial records.",
  ],
  links: {
    repo: "https://github.com/Habiburrahman2007/finance-tracker",
  },
};

export default function FinanceTrackerDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
