import type { Activity } from "../../types";

type ActivityCardProps = {
  activity: Activity;
};

export default function ActivityCard({
  activity,
}: ActivityCardProps) {
  return (
    <article className="group border border-[var(--border)] bg-black/20 p-4 transition-all duration-500 hover:border-[var(--border-strong)] hover:bg-white/[0.025] sm:p-5 lg:p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr] xl:grid-cols-[420px_1fr]">

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-light)] lg:aspect-auto lg:min-h-[320px]">
          <img
            src={activity.image}
            alt={activity.organization}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          <span className="absolute bottom-4 left-4 text-[9px] font-semibold tracking-[0.18em] text-white">
            {activity.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between py-2 lg:py-3 lg:pr-6">

          {/* Header */}
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
                {activity.type}
              </p>

              <span className="text-[9px] font-semibold tracking-[0.15em] text-[var(--muted)]">
                {activity.period}
              </span>
            </div>

            <h3 className="font-[var(--font-display)] text-[clamp(2rem,4vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[var(--foreground)]">
              {activity.organization}
            </h3>

            <p className="mt-5 text-xs font-semibold tracking-[0.08em] text-violet-300">
              {activity.role}
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted-light)]">
              {activity.description}
            </p>
          </div>

          {/* Contributions */}
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="mb-4 text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
              CONTRIBUTIONS
            </p>

            <ul className="space-y-3">
              {activity.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-xs leading-6 text-[var(--muted-light)]"
                >
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </article>
  );
}