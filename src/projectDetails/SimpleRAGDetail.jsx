import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Simple RAG",
  category: "Chatbot / Automation",
  heroImg: "/projects/rag.webp",
  tagline: "An automated n8n workflow that enables a Telegram-based AI assistant to learn from uploaded documents. It features a dual-path system: one for ingesting and vectorizing documents into a knowledge base, and another for querying that data using an AI agent to provide grounded, context-aware responses.",
  year: "2025",
  stack: ["n8n", "Google Gemini", "Supabase", "PostgreSQL", "Telegram API"],
  features: [
    "Automated Document Ingestion: Automatically detects, downloads, and processes documents sent via Telegram, converting them into searchable vectors.",
    "Intelligent Knowledge Retrieval: Utilizes an AI agent to search the vector database and answer questions based strictly on the provided documents.",
    "Context-Aware Conversations: Uses a dedicated database to store session history, allowing the chatbot to remember previous parts of the conversation.",
    "Strict Input Validation: Includes a filtering system that only accepts document formats for the knowledge base while rejecting unsupported media like images or audio.",
  ],
  impact: [
    "This workflow bridges the gap between static documentation and interactive AI, providing a seamless way to build a custom knowledge base through a familiar messaging interface.",
    "It ensures high accuracy in responses and provides a scalable solution for automated information retrieval or customer support.",
  ],
  links: {
    repo: "https://github.com/Habiburrahman2007/simple-rag",
  },
};

export default function SimpleRAGDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
