type Activity = {
  number: string;
  organization: string;
  role: string;
  type: string;
  period: string;
  description: string;
  images: string[];
  bullets: string[];
};

type ActivityCardProps = {
  activity: Activity;
};

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="group border border-[var(--border)] bg-black/20 p-4 transition-colors duration-300 hover:border-[var(--border-strong)] hover:bg-white/[0.025] sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[80px_minmax(0,1fr)_460px] lg:gap-7">
        {/* LOGO - LEFT CORNER */}
        <div className="flex items-start justify-start">
          <div className="flex h-25 w-25 items-center justify-center overflow-hidden bg-[var(--surface-light)]">
            <img
              src={activity.images[0]}
              alt={`${activity.organization} logo`}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex min-w-0 flex-col">
          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[10px] font-semibold tracking-[0.18em] text-violet-300">
              {activity.number}
            </span>

            <p className="min-w-0 flex-1 text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)]">
              {activity.type}
            </p>

            <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--muted)]">
              {activity.period}
            </span>
          </div>

          {/* Organization */}
          <h3 className="font-[var(--font-display)] text-[clamp(1.7rem,3vw,3.25rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--foreground)]">
            {activity.organization}
          </h3>

          {/* Role */}
          <p className="mt-3 text-sm font-semibold tracking-[0.04em] text-violet-300">
            {activity.role}
          </p>

          {/* Description */}
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted-light)]">
            {activity.description}
          </p>

          {/* Contributions */}
          <div className="mt-5 border-t border-[var(--border)] pt-4">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-[var(--muted)]">
              CONTRIBUTIONS
            </p>

            {/* One bullet per row */}
            <ul className="space-y-2.5">
              {activity.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2.5 text-sm leading-5 text-[var(--muted-light)]"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-400" />

                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TEAM PHOTOS - RIGHT */}
        <div className="grid grid-cols-1 gap-3 lg:content-start lg:px-15">
          {activity.images.slice(1, 3).map((image, index) => (
            <div
              key={image}
              className="aspect-[3/2] min-w-0 overflow-hidden bg-[var(--surface-light)]"
            >
              <img
                src={image}
                alt={`${activity.organization} team ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
