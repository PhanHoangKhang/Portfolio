import type { Project } from "../../types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[var(--border)] bg-black/20">
      {/* Project Preview */}
      {project.image && (
        <div className="aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-light)]">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Number + Period */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)]">
            {project.number}
          </span>

          <span className="text-xs font-semibold tracking-[0.12em] text-[var(--muted)]">
            {project.period}
          </span>
        </div>

        {/* Project Name */}
        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[var(--muted)]">
            {project.type}
          </p>

          <h3 className="font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.8rem)] font-black uppercase leading-[0.88] tracking-[-0.045em] text-[var(--foreground)]">
            {project.name}
          </h3>
        </div>

        {/* Stack */}
        <p className="mt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] text-[var(--muted-light)]">
          {project.technologies.join(" · ")}
        </p>

        {/* Role */}
        <p className="mt-2 text-xs tracking-[0.08em] text-[var(--muted)]">
          {project.role}
        </p>

        {/* Description */}
        <p className="mt-5 text-sm leading-6 text-[var(--muted-light)]">
          {project.description}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-[var(--border)]" />

        {/* Contributions */}
        <ul className="flex-1 space-y-3">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-sm leading-6 text-[var(--muted-light)]"
            >
              <span className="shrink-0 text-[var(--muted)]">-</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Github */}
        <div className="mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex border border-[var(--border)] px-3 py-2 text-xs font-semibold tracking-[0.15em] text-[var(--muted-light)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
          >
            GITHUB ↗
          </a>
        </div>
      </div>
    </article>
  );
}
