const techStack = [
  "JAVA",
  "SPRING BOOT",
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "MONGODB",
  "POSTGRESQL",
  "DOCKER",
  "AWS",
  "GIT",
];

export default function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative z-20 overflow-hidden border-y border-[var(--border)] bg-black/20 py-5">
      <div className="marquee-track flex w-max items-center">
        {items.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center"
          >
            <span className="px-20 text-sm font-semibold tracking-[0.16em] text-[var(--muted)]">
              {tech}
            </span>

            <span className="text-sm text-[var(--primary-dark)]">
              /
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}