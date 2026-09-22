export type ProjectCategory = "academic" | "professional";

export type Project = {
  id: string;
  category: ProjectCategory;
  featured?: boolean;
  confidential?: boolean;
  image?: string;
  video?: string;
  technologies: string[];
  links?: {
    demo?: string;
    live?: string;
    github?: string;
  };
};

export const featuredProject: Project = {
  id: "hrsmartly",
  category: "professional",
  featured: true,
  image: "/projects/hrsmartly_preview.png",
  technologies: [
    "NestJS",
    "Next.js",
    "React",
    "FastAPI",
    "Python",
    "LangGraph",
    "TypeScript",
    "Tailwind CSS",
    "Hugging Face",
    "GraphQL",
    "GitHub Actions",
  ],
  links: {
    live: "https://persistatechnology.hrsmartly.com/en",
  },
};

export const academicProjects: Project[] = [
  {
    id: "jobnest",
    category: "academic",
    image: "/projects/jobnest_preview.png",
    video: "/projects/jobnest_demo.mp4",
    technologies: ["React", "GraphQL", "NestJS"],
    links: {
      github: "https://github.com/DaadouchaSalma/Plateforme_Freelance.git",
    },
  },
  {
    id: "unityhr",
    category: "academic",
    image: "/projects/unityhr_preview.png",
    video: "/projects/unityhr_demo.mp4",
    technologies: ["Java", "Spring Boot", "MySQL"],
    links: {
      github: "https://github.com/DaadouchaSalma/RHSystem.git",
    },
  },
  {
    id: "edusmart",
    category: "academic",
    image: "/projects/edusmart_preview.png",
    video: "/projects/edusmart_demo.mp4",
    technologies: [
      "Python",
      "Django",
      "Angular",
      "Ionic",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    links: {

      github: "https://github.com/sana-sboui/eduSmart.git",
    },
  },
  {
      id: "smartcare",
      category: "academic",
      image: "/projects/smartcare_preview.png",
      video: "/projects/smartcare_demo.mp4",
      technologies: [
        ".NET",
        "Angular",
        "Stripe API",
        "Gemini API",
      ],
      links: {

        github: "https://github.com/DaadouchaSalma/HMS.git",
      },
    },
];

export const professionalProjects: Project[] = [
  {
    id: "hrsmartly",
    category: "professional",
    featured: true,
    image: "/projects/hrsmartly_preview.png",
    video: "/projects/hrsmartly_demo.mp4",
    technologies: [
      "NestJS",
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "LangGraph",
      "TypeScript",
      "Tailwind CSS",
      "Hugging Face",
      "GraphQL",
      "GitHub Actions",
    ],
    links: {

      live: "https://persistatechnology.hrsmartly.com/en",
    },
  },
  {
    id: "instalab",
    category: "professional",
    image: "/projects/instalab_preview.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Next.js",
      "GraphQL",
      "NestJS",
      "Git",
      "Github",
    ],
    links: {
      live: "https://instalab.io",
    },
  },
  {
    id: "deepshift",
    category: "professional",
    confidential: true,
    technologies: ["React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Next.js"],
    links: {},
  },
];
