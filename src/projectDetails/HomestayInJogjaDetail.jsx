import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Homestay in Jogja",
  category: "Hospitality Website",
  heroImg: "/projects/homestay_in_jogja.webp",
  tagline: "A hospitality website showcasing comfortable homestays in Yogyakarta for holidaymakers and families. It highlights a relaxed, home-like stay, modern amenities, and convenient access to popular destinations including Malioboro, Kraton, Alun-Alun, and Tugu Station.",
  year: "2025",
  stack: [],
  features: [
    "Homestay Showcase: Presents available accommodation units and their comfortable, home-like atmosphere.",
    "Amenities Overview: Highlights the modern facilities available to guests.",
    "Location Discovery: Promotes convenient access to Yogyakarta destinations such as Malioboro, Kraton, Alun-Alun, and Tugu Station.",
    "Guest-Focused Positioning: Introduces the accommodation as an option for family trips and holidays.",
  ],
  impact: [
    "Gives the homestay a dedicated online presence where prospective guests can explore the accommodation.",
    "Clearly communicates the property's amenities, relaxed atmosphere, and proximity to popular Yogyakarta destinations.",
  ],
  links: {
    live: "https://homestayinjogja.com/",
  },
};

export default function HomestayInJogjaDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
