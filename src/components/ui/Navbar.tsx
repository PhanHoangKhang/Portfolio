import { useEffect, useState } from "react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "AWARDS", href: "#awards" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent body from scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.35;
      const currentSection = navItems
        .map((item) => document.querySelector<HTMLElement>(item.href))
        .filter((section): section is HTMLElement => section !== null)
        .filter(
          (section) => section.getBoundingClientRect().top <= activationPoint,
        )
        .at(-1);

      setActiveSection(currentSection?.id ?? "home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex h-[84px] items-center justify-between border-b border-[var(--border)] px-[6.5%] bg-black/40 backdrop-blur-md">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-[20px] font-black tracking-[-0.04em]"
          >
            KHANG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`group relative text-[12px] font-semibold tracking-[0.08em] transition-colors ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-[11px] left-0 h-px w-full bg-[var(--foreground)]" />
                  )}
                </a>
              );
            })}

            <a
              href="/resume.pdf"
              className="ml-1 text-[12px] font-bold tracking-[0.08em] text-[var(--foreground)] underline underline-offset-[6px]"
            >
              RESUME ↓
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Open menu"
          >
            <div className="relative h-4 w-6">
              <span className="absolute left-0 top-0 h-px w-6 bg-[var(--foreground)]" />
              <span className="absolute left-0 top-1/2 h-px w-6 bg-[var(--foreground)]" />
              <span className="absolute left-0 top-full h-px w-6 bg-[var(--foreground)]" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-screen w-[78%] max-w-[340px] border-l border-[var(--border)] bg-[var(--surface)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-7 pb-8 pt-[100px]">
          {/* Close button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute right-7 top-7 flex h-9 w-9 items-center justify-center"
          >
            <div className="relative h-5 w-5">
              <span className="absolute left-0 top-1/2 h-px w-5 rotate-45 bg-[var(--foreground)]" />
              <span className="absolute left-0 top-1/2 h-px w-5 -rotate-45 bg-[var(--foreground)]" />
            </div>
          </button>

          {/* Small label */}
          <p className="mb-8 text-xs font-semibold tracking-[0.2em] text-[var(--muted)]">
            NAVIGATION
          </p>

          {/* Links */}
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-[var(--border)] py-4"
              >
                <span
                  className={`text-[1.15rem] font-bold tracking-[-0.025em] transition-transform duration-300 group-hover:translate-x-1.5 ${
                    activeSection === item.href.slice(1)
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {item.label}
                </span>

                <span className="text-xs text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}

            {/* Resume */}
            <a
              href="/resume.pdf"
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-[var(--border)] py-4"
            >
              <span className="text-[1.15rem] font-bold tracking-[-0.025em] text-[var(--foreground)]">
                RESUME
              </span>

              <span className="text-xs text-[var(--foreground)]">↓</span>
            </a>
          </div>

          {/* Bottom info */}
          <div className="mt-auto">
            <p className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)]">
              Phan Hoang Khang · Backend Engineer
            </p>

            <p className="mt-1.5 text-xs tracking-[0.12em] text-[var(--muted)]">
              HO CHI MINH CITY, VIETNAM
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
