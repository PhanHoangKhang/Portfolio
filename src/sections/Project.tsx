import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

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
