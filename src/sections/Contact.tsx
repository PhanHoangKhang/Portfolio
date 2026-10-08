const contacts = [
  {
    label: "GITHUB",
    value: "github.com/PhanHoangKhang",
    href: "https://github.com/PhanHoangKhang",
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/hoang-khang-phan-35b941353",
    href: "https://www.linkedin.com/in/hoang-khang-phan-35b941353",
    external: true,
  },
  {
    label: "EMAIL",
    value: "togaphan@gmail.com",
    href: "mailto:togaphan@gmail.com",
    external: false,
  },
  {
    label: "PHONE",
    value: "0707631223",
    href: "tel:0707631223",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 px-[6.5%] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-24">
          <h2
            className="
              max-w-[1100px]
              font-[var(--font-display)]
              text-[clamp(4rem,9.5vw,9.5rem)]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.065em]
              text-[var(--foreground)]
            "
          >
            LET&apos;S MAKE
            <br />
            SOMETHING.
          </h2>

          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300 sm:text-[11px]">
            OPEN TO FULL-TIME ROLES, FREELANCE, AND INTERESTING PROBLEMS.
          </p>
        </div>

        {/* Contact List */}
        <div className="border-t border-[var(--border)]">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="
                group
                grid
                grid-cols-[100px_minmax(0,1fr)_32px]
                items-center
                gap-5
                border-b
                border-[var(--border)]
                py-7
                transition-colors
                duration-300
                hover:bg-white/[0.02]
                sm:grid-cols-[120px_minmax(0,1fr)_40px]
                sm:py-8
              "
            >
              {/* Label */}
              <span className="text-[10px] font-semibold tracking-[0.16em] text-[var(--muted)]">
                {contact.label}
              </span>

              {/* Value */}
              <span
                className="
                  min-w-0
                  truncate
                  font-[var(--font-display)]
                  text-[clamp(1.2rem,2.5vw,2.2rem)]
                  font-semibold
                  tracking-[-0.035em]
                  text-[var(--foreground)]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                {contact.value}
              </span>

              {/* Arrow */}
              <span className="text-right text-lg font-light text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--foreground)]">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}