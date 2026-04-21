export const PROJECT_META = [
  {
    id: 1,
    slug: "bali-evisa-indonesia",
    title: "Bali E-Visa Indonesia",
    category: "Company Profile",
    color: "bg-cyan-400",
    img: "/projects/balievisa.webp",
  },
  {
    id: 2,
    slug: "simple-rag",
    title: "Simple RAG",
    category: "Chatbot",
    color: "bg-teal-400",
    img: "/projects/rag.webp",
  },
  {
    id: 3,
    slug: "hifdz-tracker",
    title: "Hifdz Tracker",
    category: "System Management",
    color: "bg-teal-400",
    img: "/projects/hifdz.webp",
  },
  {
    id: 4,
    slug: "backuper",
    title: "Backuper",
    category: "Automation",
    color: "bg-teal-400",
    img: "/projects/backup.webp",
  },
  {
    id: 5,
    slug: "relax-spa",
    title: "Relax Spa",
    category: "Landing Page",
    color: "bg-teal-400",
    img: "/projects/spa.webp",
  },
  {
    id: 6,
    slug: "finansial-assistant-bot",
    title: "Finance Tracker",
    category: "Finance",
    color: "bg-teal-400",
    img: "/projects/finance.webp",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
