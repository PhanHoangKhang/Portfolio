import ProjectCard from "../components/ui/ProjectCard";

const projects = [
  {
    number: "01",
    name: "FINRECRUIT",
    type: "Recruitment Management Platform",
    period: "2025 — PRESENT",
    role: "Backend Engineer",
    description:
      "Internal recruitment platform developed for RMIT FinTech Club to streamline candidate evaluation and interview management.",
    technologies: ["NEXT.JS", "TYPESCRIPT", "MONGODB", "REST API", "RBAC"],
    github: "#",
    image: "/projects/finrecruit.jpg",
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
    role: "Project Leader",
    description:
      "Web-based medical appointment platform for doctor discovery, appointment booking, and schedule management.",
    technologies: [
      "NEXT.JS",
      "TYPESCRIPT",
      "NODE.JS",
      "MONGODB",
      "GOOGLE OAUTH",
    ],
    github: "#",
    image: "/projects/medibook.png",
    bullets: [
      "Developed doctor search and appointment booking workflows with real-time slot filtering and server-side validation to reduce scheduling conflicts.",
      "Built a doctor dashboard for managing availability, appointments, and key booking metrics.",
      "Implemented JWT authentication, RBAC, server-side input validation, and file-upload restrictions to address common OWASP Top 10 risks.",
      "Led a 3-member team through Agile/Scrum, coordinating tasks and backlog items to support on-time feature delivery.",
    ],
  },

  {
    number: "03",
    name: "FINAI",
    type: "Financial News Analytics Platform",
    period: "JUL 2026 — AUG 2026",
    role: "Technical Leader · Backend Engineer",
    description:
      "Financial analytics platform combining market data, financial news, and AI-powered insights.",
    technologies: ["SPRING BOOT", "FASTAPI", "REACT", "GEMINI AI"],
    github: "#",
    image: "/projects/finai.png",
    bullets: [
      "Led technical development across frontend, backend, and AI service integration, coordinating implementation decisions within the team.",
      "Designed a service-based architecture with Spring Boot for core application logic and FastAPI for financial data and AI-related services.",
      "Developed backend integration flows for financial data and AI-powered analysis, connecting external services with the application.",
      "Built an interactive React dashboard with financial charts, stock search, inline term lookup, and personalized suggestions.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 px-[6.5%] py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between border-b border-[var(--border)] pb-5">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            PROJECTS
          </h2>

          <span className="text-[10px] tracking-[0.15em] text-[var(--muted)]">
            03
          </span>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
