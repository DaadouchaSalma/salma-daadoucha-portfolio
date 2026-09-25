import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Server,
} from "lucide-react";

export type SkillCategory = {
  key: "frontend" | "backend" | "data" | "ai" | "devops";
  icon: typeof Code2;
  skills: string[];
  size: "large" | "small";
};

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    icon: Code2,
    size: "large",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
      "Ionic",
    ],
  },
  {
    key: "backend",
    icon: Server,
    size: "large",
    skills: [
      "NestJS",
      "Node.js",
      "Spring Boot",
      "FastAPI",
      "Django",
      "Python",
      "Java",
      "GraphQL",
    ],
  },
  {
    key: "data",
    icon: Database,
    size: "small",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
    ],
  },
  {
    key: "ai",
    icon: BrainCircuit,
    size: "small",
    skills: ["LangGraph", "Hugging Face"],
  },
  {
    key: "devops",
    icon: Cloud,
    size: "small",
    skills: [
      "Docker",
      "Kubernetes",
      "Vercel",
      "CI/CD",
      "Git",
      "GitHub",
      "GitHub Actions",
    ],
  },
];
