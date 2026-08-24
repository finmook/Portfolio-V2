// ---------------------------------------------------------------------------
// All portfolio content lives in this one file. Edit the arrays below to
// update your info — the rest of the site renders from this data.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Apimook Sarovath",
  nickname: "Nif",
  role: "Computer Engineering Student @ Chulalongkorn University",
  tagline: "Turning Ideas into Interactive Experiences",
  bio: "I specialize in building modern, responsive, and user-focused applications across web and software development — from full-stack products to embedded / IoT systems. I like taking an idea from a rough sketch to something people can actually click through.",
  location: "Bangkok, Thailand",
  // Add a resume/CV link here if you have one — wire it up in Hero.tsx to show a button.
  resumeUrl: "",
};

export const contact = {
  email: "apimooksarovath@gmail.com",
  phone: "0991018883",
  phoneHref: "tel:+66991018883",
  instagram: { handle: "nif.mook", url: "https://www.instagram.com/nif.mook" },
  github: { handle: "finmook", url: "https://github.com/finmook" },
  linkedin: {
    handle: "Apimook Sarovath",
    url: "https://www.linkedin.com/in/apimook-sarovath",
  },
};

export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "web",
    label: "Web",
    description: "Building interfaces and client-side experiences",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "MUI",
      "Bootstrap",
      "jQuery",
      "EJS",
      "JSP"
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, services and server-side logic",
    skills: ["Node.js / Express", "Spring Boot", "FastAPI", "SQL", "PostgreSQL", "Supabase", "Neon", "MongoDB", "Prisma"],
  },
  {
    id: "data",
    label: "Data",
    description: "Databases, ORMs and data modeling",
    skills: ["LLM", "ML pipelines", "Deep learning", "Python", "Streamlit"],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    description: "Shipping and running software reliably",
    skills: ["Docker", "AWS", "GitHub Actions", "Vercel", "Gitlab CI/CD"],
  },
  {
    id: "tools",
    label: "Tools",
    description: "Workflow and collaboration",
    skills: ["Git", "GitHub", "GitLab", "Claude MCP"],
  },
];

export type ProjectCategory = {
  id: string;
  label: string;
};

export const projectCategories: ProjectCategory[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "data-ai", label: "Data & AI" },
  { id: "software", label: "Software" },
];

export type Project = {
  title: string;
  description: string;
  category: string[]; // one or more ProjectCategory ids
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Ride Sharing Web",
    description:
      "Full-stack ride sharing platform built as a group project; served as the full-stack developer on the team.",
    category: ["fullstack"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Supabase", "Prisma"],
    github: "https://github.com/SE-Term-Project-NoCarNoProblem",
    featured: true,
    image: "/images/nocarnoproblem.webp",
  },
  {
    title: "AI Food Tracker",
    description:
      "Individual project with a FastAPI backend connected to Gemini for food recognition, backed by a database, with a Streamlit frontend.",
    category: ["data-ai", "backend"],
    tech: ["Python", "FastAPI", "Supabase", "Docker", "GitHub Actions", "Streamlit"],
    github: "https://github.com/finmook/AI-Food-Tracker",
    featured: true,
    image: "/images/FoodTracker.webp",
  },
  {
    title: "Home Safety (Smart Home)",
    description:
      "Group project delivering a web application that retrieves real-time sensor data over MQTT for home safety monitoring.",
    category: ["fullstack"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Netpie", "MQTT", "Neon", "Prisma"],
    github: "https://github.com/finmook/embed_final",
    featured: true,
    image: "/images/Embedded.webp",
  },
  {
    title: "Financial Tracker",
    description:
      "Individual project with a Java / Spring Boot backend deployed on AWS, paired with a Next.js frontend.",
    category: ["backend", "fullstack"],
    tech: ["Java", "Spring Boot", "Neon", "AWS", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/finmook/fintrack-backend",
    image: "/images/FinTrack.webp",
  },
  {
    title: "Weather Forecast",
    description:
      "Weather forecasting web app with a React frontend and Express backend. First request may take a few seconds — deployed on a free backend tier.",
    category: ["fullstack"],
    tech: ["React", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/finmook/weather-forecast-web.git",
    demo: "https://weather-forecast-web-nu.vercel.app/",
    image: "/images/weatherForecast.webp",
  },
  {
    title: "Social Media (Ongoing)",
    description:
      "A minimal social media app built to practice authentication, real-time data, and data modeling.",
    category: ["fullstack"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Supabase", "Prisma"],
    github: "https://github.com/finmook/Social-Media.git",
    image: "/images/SocialMedia.webp",
  },
  {
    title: "Com Sampan",
    description:
      "Frontend work for an inter-university computer engineering event, including the results page and navigation bar.",
    category: ["frontend"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MUI"],
    github: "https://github.com/Dpyde/comsampanfrontend",
    image: "/images/comsampanweb.webp",
  },
  {
    title: "Moodeng Game",
    description:
      "Java 2D arcade game with collectibles, scoring, and decreasing HP, built as a course project.",
    category: ["software"],
    tech: ["Java"],
    github: "https://github.com/finmook/Progmeth_Project.git",
    image: "/images/moodengGame.jpg",
  },
  {
    title: "Clone Website",
    description:
      "Static clone project focused on matching layout structure, spacing, and responsive behavior of the original.",
    category: ["frontend"],
    tech: ["HTML", "CSS"],
    github: "https://github.com/finmook/Paper-MC-clone.git",
    image: "/images/paperMCclone.jpg",
  },
  {
    title: "Portfolio (v1)",
    description:
      "The previous version of this portfolio — a responsive site showcasing projects, activities, and contact info.",
    category: ["frontend"],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/finmook/Portfolio.git",
    image: "/images/Portfolio.webp",
  },
];

export type Activity = {
  title: string;
  role: string;
  description: string;
  image?: string;
};

export const activities: Activity[] = [
  {
    title: "SET Internship Hackathon",
    role: "Team Member — 1st Prize",
    description:
      "Competed on a team focused on Gen-Z investment, winning first prize.",
    image: "/images/SetHackathon.webp",
  },
  {
    title: "Com Sampan",
    role: "Frontend Developer",
    description:
      "Contributed as a frontend developer for an event connecting computer engineering students from many universities.",
    image: "/images/comSampan.jpg",
  },
  {
    title: "Vishnu Camp",
    role: "Staff",
    description: "Managed first-year students and organized camp activities.",
    image: "/images/vishnu2.jpg",
  },
  {
    title: "Rubpoenkaomai",
    role: "PR Team",
    description: "Created and promoted group content across social media.",
    image: "/images/baankids.webp",
  },
  {
    title: "CBA club",
    role: "SP (sales professionist) position",
    description:
      "This club is run by the Business Faculty of Chulalongkorn University. It operates as a mock company where every role — from salesperson to CEO — is filled by students. I was admitted to this club for the first time between my second and third year.",
    image: "/images/CBAparty.webp",
  },
];

export type CertificationCategory = {
  id: string;
  label: string;
};

export const certificationCategories: CertificationCategory[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "data", label: "Data" },
  { id: "cloud", label: "Cloud" },
  { id: "basic", label: "Basic" },
  { id: "communication", label: "Communication" },
  { id: "experience", label: "Experience" },
];

export type Certification = {
  name: string;
  image: string;
  category: string; // one CertificationCategory id
};

export const certifications: Certification[] = [
  {
    name: "Retrieval Augmented Generation (RAG) with LangChain",
    image: "/images/RAG.webp",
    category: "data",
  },
  {
    name: "Developing LLM Applications with LangChain",
    image: "/images/RAG2.webp",
    category: "data",
  },
  { name: "Vercel Certificate", image: "/images/vercel.webp", category: "web" },
  { name: "Huawei Certificate", image: "/images/Huawei.PNG", category: "cloud" },
  {
    name: "Introduction to Computer Science Certificate",
    image: "/images/introToComsci.webp",
    category: "basic",
  },
  { name: "Leadership Certificate", image: "/images/LeaderShip.webp", category: "communication" },
  {
    name: "SET Internship Certificate",
    image: "/images/SETCertificate.webp",
    category: "experience",
  },
  {
    name: "CBA Certified Sales Professional",
    image: "/images/CBAcertificate.webp",
    category: "experience",
  },
];
