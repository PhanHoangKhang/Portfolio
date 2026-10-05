const footballPhotos = [
  "/football-1.jpg",
  "/football-2.jpg",
  "/football-3.jpg",
];

export default function Education() {
  return (
    <section id="education" className="relative z-20 px-[6.5%] py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-16 flex items-end justify-between border-b border-[var(--border)] pb-5">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            EDUCATION
          </h2>
        </div>

        {/* Education */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[240px_1fr]">
          {/* RMIT Logo */}
          <div className="flex h-[140px] w-[140px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-white p-5 sm:h-[160px] sm:w-[160px] sm:p-6 md:h-[180px] md:w-[180px] md:p-7">
            <img
              src="/rmit-logo.jpg"
              alt="RMIT University Vietnam"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Education information */}
          <div>
            <p className="mb-5 text-[10px] font-semibold tracking-[0.18em] text-[var(--muted)]">
              2024 — 2027 · EXPECTED
            </p>

            <h3 className="font-[var(--font-display)] text-[clamp(2rem,3.5vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[var(--foreground)]">
              RMIT UNIVERSITY VIETNAM
            </h3>

            <p className="mt-8 text-base font-medium text-[var(--foreground)]">
              Bachelor of Information Technology
            </p>

            <p className="mt-2 text-xs tracking-[0.08em] text-[var(--muted)]">
              HO CHI MINH CITY, VIETNAM
            </p>

            {/* Academic focus */}
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
                  MINOR
                </p>

                <p className="text-sm font-medium text-[var(--foreground)]">
                  Enterprise System Development
                </p>
              </div>

              <div>
                <p className="mb-3 text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
                  FOCUS
                </p>

                <p className="text-sm font-medium text-[var(--foreground)]">
                  Backend Development · Web Security
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Outside Activities */}
        <div className="mt-32">
          <div className="mb-10 flex items-end justify-between border-b border-[var(--border)] pb-5">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
                OUTSIDE ACTIVITIES
              </p>

              <h3 className="mt-3 font-[var(--font-display)] text-3xl font-black uppercase tracking-[-0.04em]">
                FOOTBALL
              </h3>
            </div>

            <span className="text-[10px] tracking-[0.15em] text-[var(--muted)]">
              TEAMWORK · DISCIPLINE · ENERGY
            </span>
          </div>

          {/* Football gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {footballPhotos.map((photo, index) => (
              <div
                key={photo}
                className="group relative aspect-[4/3] overflow-hidden bg-[var(--surface-light)]"
              >
                <img
                  src={photo}
                  alt={`Football activity ${index + 1}`}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />

                <span className="absolute bottom-4 left-4 text-[9px] font-semibold tracking-[0.18em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
