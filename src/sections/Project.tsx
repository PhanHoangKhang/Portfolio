import ProjectCard from "../components/ui/ProjectCard";

const projects = [
  {
    number: "01",
    name: "FINRECRUIT",
    type: "Recruitment Management Platform",
    period: "2025 — PRESENT",
    description:
      "Internal recruitment platform developed for RMIT FinTech Club to streamline candidate evaluation and interview management.",
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "MONGODB",
      "REST API",
      "RBAC",
    ],
    github: "#",
    bullets: [
      "Developed backend APIs for the Digital Interview Cockpit, handling candidate evaluation, interview questions, notes, and final decisions.",
      "Implemented dynamic question templates and candidate-specific ad-hoc questions, keeping custom questions isolated from department templates.",
      "Built field-level PATCH APIs for collaborative note-taking, allowing interviewers to update notes concurrently without overwriting each other's data.",
      "Collaborated with the development team through Agile sprints, translating recruitment requirements into backend features and iterating based on team feedback.",
    ],
  },
  {
    number: "02",
    name: "MEDIBOOK",
    type: "Medical Appointment Booking Platform",
    period: "MAR 2026 — MAY 2026",
    description:
      "Web-based medical appointment platform designed to help patients find doctors, book appointments, and manage schedules.",
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "NODE.JS",
      "MONGODB",
      "GOOGLE OAUTH",
    ],
    github: "#",
    bullets: [
      "Developed doctor search and appointment booking workflows with real-time slot filtering and server-side validation to reduce scheduling conflicts.",
      "Built a doctor dashboard for managing availability and viewing appointment schedules and key booking metrics.",
      "Implemented JWT authentication, RBAC, server-side input validation, and file-upload restrictions to address common OWASP Top 10 risks.",
      "Led a 3-member team using Agile/Scrum, coordinating tasks and backlog items while supporting on-time delivery of project features.",
    ],
  },
  {
    number: "03",
    name: "FINAI",
    type: "Financial News Analytics & Recommendation Platform",
    period: "JUL 2026 — AUG 2026",
    description:
      "Financial analytics platform combining market data, financial news, and AI-powered insights to help users research stocks more efficiently.",
    technologies: [
      "SPRING BOOT",
      "PYTHON",
      "FASTAPI",
      "REACT",
      "GEMINI AI",
    ],
    github: "#",
    bullets: [
      "Led the technical development of the project, coordinating implementation decisions and aligning frontend, backend, and AI service integration.",
      "Designed a service-based architecture with Spring Boot handling core application logic and FastAPI supporting financial data and AI-related services.",
      "Built an interactive React dashboard with financial charts, stock search, inline financial term lookup, and personalized suggestions.",
      "Collaborated with the team to analyze retail-investor pain points and translate research findings into technical features and product decisions.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 px-[6.5%] py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex items-end justify-between border-b border-[var(--border)] pb-5">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            PROJECTS
          </h2>

          <span className="text-[10px] tracking-[0.15em] text-[var(--muted)]">
            03
          </span>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}