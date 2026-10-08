import ExperienceCard from "../components/ui/ExperienceCard";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-20 px-[6.5%] py-32"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Section heading */}
        <div className="mb-16 flex items-end justify-between border-b border-[var(--border)] pb-5">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            EXPERIENCE
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.number}
              experience={experience}
            />
          ))}
        </div>

      </div>
    </section>
  );
}