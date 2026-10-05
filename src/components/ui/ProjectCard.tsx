type Project = {
  number: string;
  name: string;
  type: string;
  period: string;
  description: string;
  technologies: string[];
  github: string;
  image?: string;
  bullets: string[];
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-[var(--border)] bg-black/20 p-5 transition-all duration-500 hover:border-[var(--border-strong)] hover:bg-white/[0.025] sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[var(--muted)]">
          {project.number}
        </span>

        <span className="text-[9px] font-semibold tracking-[0.15em] text-[var(--muted)]">
          {project.period}
        </span>
      </div>

      {/* Title */}
      <div className="mt-8">
        <p className="mb-2 text-[8px] font-semibold tracking-[0.2em] text-[var(--muted)]">
          {project.type}
        </p>

        <h3 className="font-[var(--font-display)] text-[clamp(2rem,4vw,4rem)] font-black uppercase leading-[0.85] tracking-[-0.05em] text-[var(--foreground)]">
          {project.name}
        </h3>

        <p className="mt-4 max-w-2xl text-xs leading-6 text-[var(--muted-light)]">
          {project.description}
        </p>
      </div>

      {/* Tech + Github */}
      <div className="mt-6 flex flex-col gap-4 border-y border-[var(--border)] py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-[8px] font-semibold tracking-[0.1em] text-[var(--muted-light)]"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-[9px] font-semibold tracking-[0.15em] text-[var(--foreground)] transition-colors hover:text-violet-300"
        >
          VIEW GITHUB ↗
        </a>
      </div>

      {/* Preview */}
      {project.image && (
        <div className="mt-6 aspect-[16/7] overflow-hidden bg-[var(--surface-light)]">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Contributions */}
      <div className="mt-7">
        <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-3">
          <p className="text-[8px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            CONTRIBUTIONS
          </p>

          <span className="text-[8px] tracking-[0.15em] text-[var(--muted)]">
            {project.bullets.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-3">
          {project.bullets.map((bullet, index) => (
            <div key={bullet} className="flex gap-3">
              <span className="w-5 shrink-0 text-[8px] font-semibold tracking-[0.1em] text-violet-300">
                0{index + 1}
              </span>

              <p className="text-xs leading-6 text-[var(--muted-light)]">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}