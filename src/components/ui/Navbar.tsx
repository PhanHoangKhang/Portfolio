export default function Navbar() {
  const navItems = [
    "HOME",
    "ABOUT",
    "PROJECTS",
    "TECH",
    "EXPERIENCE",
    "CONTACT",
  ];

  return (
    <nav className="absolute left-1/2 top-6 z-30 -translate-x-1/2">
      <div
        className="flex items-center gap-1 rounded-full px-2 py-2 backdrop-blur-md"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "0 0 30px var(--glow)",
        }}
      >
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="rounded-full px-5 py-3 text-sm font-medium tracking-[0.14em] transition-all duration-300"
            style={{
              color:
                index === 0
                  ? "var(--foreground)"
                  : "var(--muted)",

              background:
                index === 0
                  ? "var(--primary)"
                  : "transparent",

              boxShadow:
                index === 0
                  ? "0 0 20px var(--glow)"
                  : "none",
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}