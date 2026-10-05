const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EDUCATION", href: "#education" },
  { label: "AWARDS", href: "#awards" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex h-[84px] items-center justify-between border-b border-[var(--border)] px-[6.5%]">
        
        {/* Logo */}
        <a
          href="#"
          className="text-[20px] font-black tracking-[-0.04em]"
        >
          KHANG
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative text-[12px] font-semibold tracking-[0.08em] transition-colors ${
                index === 0
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted)]"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute -bottom-[11px] left-0 h-px w-full bg-[var(--foreground)]" />
              )}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/resume.pdf"
            className="ml-1 text-[12px] font-bold tracking-[0.08em] text-[var(--foreground)] underline underline-offset-[6px]"
          >
            RESUME ↓
          </a>
        </div>

      </nav>
    </header>
  );
}