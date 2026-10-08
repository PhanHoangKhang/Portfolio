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
            <span className="px-20 text-xs font-semibold tracking-[0.16em] text-violet-300">
              {tech}
            </span>

            <span className="text-xs text-violet-500/70">
              /
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}