import type { Project } from "../types";

export const projects: Project[] = [
  {
    number: "01",
    name: "FINRECRUIT",
    type: "Recruitment Management Platform",
    period: "Aug 2025 — PRESENT",
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

  {
    number: "03",
    name: "CI/CD Pipeline",
    type: "Cloud Deployment & CI/CD Platform",
    period: "2026",
    role: "Team Lead · DevOps Engineer",
    description:
      "CI/CD pipeline project focused on automating the deployment, configuration, and orchestration of an RMIT e-commerce platform.",
    technologies: [
      "DOCKER",
      "DOCKER COMPOSE",
      "DOCKER SWARM",
      "ANSIBLE",
      "AWS EC2",
      "CI/CD",
    ],
    github: "#",
    image: "/projects/cicd.png",
    bullets: [
      "Led a 5-member team through Agile/Scrum sprints, coordinating technical tasks, tracking progress, and aligning delivery across the project.",
      "Containerized the frontend and backend services with Docker and designed Docker Compose configurations for consistent local and deployment environments.",
      "Automated EC2 server provisioning and configuration using Ansible, reducing repetitive manual setup and improving deployment consistency.",
      "Configured Docker Swarm orchestration to deploy and manage containerized services on AWS infrastructure with a focus on scalability and repeatability.",
    ],
  },

  {
    number: "04",
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
    number: "05",
    name: "REACT2SHELL",
    type: "CVE-2025-55182 Detection & Validation Lab",
    period: "JUL 2026 — AUG 2026",
    role: "Security Researcher",
    description:
      "Security research project for analyzing and detecting CVE-2025-55182 across vulnerable and patched Next.js environments.",
    technologies: ["PYTHON", "DOCKER", "NEXT.JS", "REACT", "LINUX"],
    github: "#",
    image: "/projects/react2shell.png",
    bullets: [
      "Analyzed the React Server Components deserialization vulnerability and mapped its execution flow across vulnerable and patched Next.js targets.",
      "Designed a containerized dual-application lab with isolated local networking to safely reproduce and validate security behavior.",
      "Built a reproducible validation environment to compare vulnerable and patched configurations without exposing test services externally.",
      "Developed a Python static-analysis scanner to identify potentially vulnerable Next.js dependency versions from package manifests and lockfiles.",
    ],
  },

  {
    number: "06",
    name: "JET2HOLIDAYS",
    type: "E-commerce Bookstore",
    period: "NOV 2025 — JAN 2026",
    role: "Full-Stack Developer",
    description:
      "Full-featured online bookstore with shopping, payment, authentication, and centralized inventory management.",
    technologies: [
      "EJS",
      "JAVASCRIPT",
      "NODE.JS",
      "MONGODB",
      "CLOUDINARY",
      "GOOGLE OAUTH",
      "VIETQR",
    ],
    github: "#",
    image: "/projects/jet2holidays-bookstore.png",
    bullets: [
      "Developed the bookstore from scratch, implementing product browsing, shopping cart, payment, and admin order management workflows.",
      "Built backend validation and input sanitization to reduce common web security risks including malicious user input and XSS.",
      "Implemented Google OAuth and bcrypt password hashing to provide secure authentication and credential storage.",
      "Integrated Cloudinary for image management and VietQR for streamlined payment workflows while applying backend request validation.",
    ],
  },

  {
    number: "07",
    name: "UNIPROOF",
    type: "AI-Assisted Academic Writing Platform",
    period: "OCT 2025",
    role: "Website Leader",
    description:
      "AI-assisted academic writing platform combining automated feedback with human-reviewed assessment.",
    technologies: ["MERN", "OPENAI API", "WEBSOCKET", "SOCKET.IO", "JWT"],
    github: "#",
    image: "/projects/uniproof.png",
    bullets: [
      "Led website development for an MVP platform providing AI-assisted and human-reviewed feedback on academic writing.",
      "Integrated OpenAI API to provide AI-powered grammar and vocabulary suggestions through an interactive chat interface.",
      "Implemented real-time mentor-student communication using WebSockets and Socket.IO for instant feedback discussions.",
      "Applied JWT authentication and role-based access controls to isolate assignments and protect students' academic work.",
    ],
  },
];
