type Experience = {
  number: string;
  company: string;
  role: string;
  type: string;
  period: string;
  logo?: string;
  description: string;
  technologies: string[];
  bullets: string[];
};

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group border border-[var(--border)] bg-black/20 p-6 transition-all duration-500 hover:border-[var(--border-strong)] hover:bg-white/[0.025] sm:p-8 lg:p-10">
      {/* Header */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[80px_1fr_180px]">
        <div className="flex w-20 shrink-0 flex-col items-start">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-[var(--muted)]">
            {experience.number}
          </span>

          {experience.logo ? (
            <div className="mt-3 flex h-16 w-16 items-center justify-center overflow-hidden border border-[var(--border)] bg-white">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="h-full w-full object-contain"
              />
            </div>
          ) : null}
        </div>

        {/* Main information */}
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--muted)]">
            {experience.type}
          </p>

          <h3 className="font-[var(--font-display)] text-[clamp(2rem,3.0vw,3.5rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[var(--foreground)]">
            {experience.company}
          </h3>

          <p className="mt-5 text-sm font-semibold tracking-[0.08em] text-violet-300">
            {experience.role}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted-light)]">
            {experience.description}
          </p>
        </div>

        {/* Period */}
        <div className="lg:text-right">
          <span className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)]">
            {experience.period}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-[var(--border)]" />

      {/* Details */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[180px_1fr]">
        {/* Technologies */}
        <div>
          <p className="mb-4 text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            AREA
          </p>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-[var(--border)] px-2.5 py-1.5 text-[9px] font-semibold tracking-[0.1em] text-[var(--muted-light)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <div>
          <p className="mb-4 text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            CONTRIBUTIONS
          </p>

          <ul className="space-y-3">
            {experience.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-7 text-[var(--muted-light)]"
              >
                <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
