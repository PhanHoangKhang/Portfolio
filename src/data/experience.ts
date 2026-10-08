import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    number: "01",
    company: "NÉT VIỆT FLORIST",
    role: "Product Developer",
    type: "Production E-commerce Platform",
    period: "July 2026 — PRESENT",
    logo: "/netviet-florist.jpg",
    description:
      "Planned and developed a production e-commerce platform from the ground up for a local flower business.",
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "MONGODB",
      "TAILWIND CSS",
      "VERCEL",
      "CLOUDINARY",
      "RESEND",
    ],
    bullets: [
    "Planned and developed the platform from the ground up, translating business requirements into application architecture, data models, API workflows, and production-ready features.",

    "Designed MongoDB/Mongoose models and implemented API routes for products, categories, orders, and notifications, maintaining consistent data relationships across core business workflows.",

    "Strengthened the platform with server-side validation, rate limiting, ObjectId validation, and secure image processing to improve the reliability and security of production operations.",

    "Deployed and maintained the application in production, integrating customer communication workflows while continuously addressing performance, SEO, responsive UI, and operational requirements.",
    ],
  },

  {
    number: "02",
    company: "FINTECH CLUB",
    role: "Technology Member",
    type: "RMIT University Vietnam",
    period: "Aug 2026 — PRESENT",
    logo: "/fintech-club.jpg",
    description:
      "Contributed to technical projects within the FinTech Club, including FinRecruit, an internal recruitment platform used to manage member recruitment each semester.",
    technologies: [
      "BACKEND",
      "RBAC",
      "AGILE",
      "PRODUCT",
      "CONTENT",
    ],
    bullets: [
      "Built and maintained backend services for internal technology projects, collaborating with the team through Agile sprints.",
      "Implemented Role-Based Access Control (RBAC) to secure user data and enforce authorization across different roles.",
      "Participated in product discussions to refine requirements while balancing user experience and technical feasibility.",
      "Produced and recorded FinTech 101 content, translating complex financial and technology concepts into accessible videos for students.",
    ],
  },
];