// export type Project = {
//   id: "hrSmartly" | "instalab" | "eduSmart";
//   image: string;
//   technologies: string[];
//   liveUrl?: string;
//   githubUrl?: string;
//   featured?: boolean;
// };

// export const projects: Project[] = [
//   {
//     id: "hrSmartly",
//     image: "/projects/hr-smartly.webp",
//     technologies: [
//       "Next.js",
//       "TypeScript",
//       "NestJS",
//       "GraphQL",
//       "PostgreSQL",
//       "Docker",
//       "SaaS",
//     ],
//     liveUrl: "https://persistatechnology.hrsmartly.com/en",
//     featured: true,
//   },
//   {
//     id: "instalab",
//     image: "/projects/instalab.webp",
//     technologies: [
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "shadcn/ui",
//       "PDF Export",
//       "Excel Export",
//     ],
//     liveUrl: "https://instalab.io/",
//   },
//   {
//     id: "eduSmart",
//     image: "/projects/edusmart.webp",
//     technologies: [
//       "Full-Stack",
//       "PostgreSQL",
//       "Docker",
//       "Kubernetes",
//       "Git",
//       "Teamwork",
//     ],
//     githubUrl: "https://github.com/sana-sboui/eduSmart",
//   },
// ];

export type ProjectCategory = "academic" | "professional";

export type Project = {
  id: string;
  category: ProjectCategory;
  featured?: boolean;
  confidential?: boolean;
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
    demo: "#",
    live: "#",
  },
};

export const academicProjects: Project[] = [
  {
    id: "jobnest",
    category: "academic",
    technologies: ["React", "GraphQL", "NestJS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "unityhr",
    category: "academic",
    technologies: ["Java", "Spring Boot", "MySQL"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "edusmart",
    category: "academic",
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
      demo: "#",
      github: "#",
    },
  },
];

export const professionalProjects: Project[] = [
  {
    id: "instalab",
    category: "professional",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    links: {
      live: "#",
    },
  },
  {
    id: "confidential",
    category: "professional",
    confidential: true,
    technologies: [],
  },
];
