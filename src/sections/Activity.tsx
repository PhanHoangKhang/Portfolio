import ActivityCard from "../components/ui/ActivityCard";

const activities = [
  {
    number: "01",
    organization: "NEO LEAGUE SEASON 2",
    role: "Program Team Member",
    type: "Innovation Humanity Challenge",
    period: "FEB 2026 — MAY 2026",
    description:
      "Nationwide university competition focused on developing functional hardware and IoT solutions addressing real-world challenges and the UN Sustainable Development Goals.",
    images: [
      "/activities/neo-league.jpg",
      "/activities/program-team.jpg",
      "/activities/neo-team-2.jpg",
    ],
    bullets: [
      "Contributed to developing the official competition website and preparing round requirements, guidelines, schedules, and participant information.",
      "Collaborated with the program team to design logic-based challenges, technical questions, workshops, and activities supporting participants' technical and pitching skills.",
      "Coordinated with organizers and participants while monitoring live event timelines, supporting key events, and addressing risks around deadlines and competition operations.",
    ],
  },
];

export default function Activity() {
  return (
    <section id="activities" className="relative z-20 px-[6.5%] py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between border-b border-[var(--border)] pb-5">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] text-[var(--muted)]">
            ACTIVITIES
          </h2>

          <span className="text-[10px] tracking-[0.15em] text-[var(--muted)]">
            04
          </span>
        </div>

        <div className="space-y-5">
          {activities.map((activity) => (
            <ActivityCard key={activity.number} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
