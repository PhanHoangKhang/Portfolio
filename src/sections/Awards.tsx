type Award = {
  number: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  link?: string;
};

const awards: Award[] = [
  {
    number: "01",
    title: "CONSOLATION PRIZE — ATTACKER 2026",
    meta: "FINAI · TEAM LEAD · 2026",
    description:
      "Led a team of 5 to build FinAI, a financial news intelligence platform that removes duplicate articles and surfaces key market insights, reducing reading time from 10 minutes to 1–2 minutes. Developed an in-article term lookup tool that delivers explanations in under 30 seconds.",
    image: "/attacker.jpg",
    // link: "https://github.com/your-repository",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative z-20 px-[6.5%] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--muted)]" />
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Awards & Achievements
            </h2>
          </div>

          <span className="text-[10px] font-semibold tracking-[0.14em] text-[var(--muted)]">
            {String(awards.length).padStart(2, "0")} AWARD
            {awards.length !== 1 ? "S" : ""}
          </span>
        </div>

        {/* Award list */}
        <div className="border-b border-[var(--border)]">
          {awards.map((award) => (
            <article
              key={award.number}
              className="group grid gap-5 border-t border-[var(--border)] py-8 sm:py-10 lg:grid-cols-[52px_minmax(0,1fr)_220px] lg:gap-7"
            >
              {/* Number */}
              <span className="pt-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--foreground)]">
                {award.number}
              </span>

              {/* Award details */}
              <div className="min-w-0">
                <h3 className="font-[var(--font-display)] text-[clamp(1.65rem,3.2vw,3rem)] font-bold uppercase leading-[1.05] tracking-[-0.045em] text-[var(--foreground)]">
                  {award.title}
                </h3>

                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-violet-300/80">
                  {award.meta}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted-light)]">
                  {award.description}
                </p>

                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex border border-[var(--border)] px-3 py-2 text-[9px] font-semibold tracking-[0.12em] text-[var(--muted-light)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                  >
                    VIEW PROJECT ↗
                  </a>
                )}
              </div>

              {/* Award image */}
              <div className="overflow-hidden bg-[var(--surface-light)] lg:self-start">
                <img
                  src={award.image}
                  alt={`${award.title} award`}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}