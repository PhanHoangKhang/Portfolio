export default function Monitor() {
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-background font-mono"
      style={{
        color: "var(--foreground)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero */}
      <div className="relative flex h-full flex-col items-center justify-center text-center">

        {/* Role */}
        <div
          className="text-xl font-semibold tracking-[0.45em]"
          style={{
            color: "var(--primary-light)",
          }}
        >
          FULL-STACK DEVELOPER
        </div>

        {/* Name */}
        <h1
          className="mt-5 text-6xl font-bold tracking-tight"
          style={{
            color: "var(--primary-light)",
            textShadow: `
              0 0 10px var(--glow-strong),
              0 0 30px var(--glow),
              0 0 60px var(--glow)
            `,
          }}
        >
          Phan Hoang Khang
        </h1>

        {/* Description */}
        <p
          className="mt-5 text-2xl"
          style={{
            color: "var(--foreground)",
          }}
        >
          &gt; I build{" "}
          <span
            style={{
              color: "var(--primary-light)",
              textShadow: "0 0 12px var(--glow)",
            }}
          >
            secure, scalable software
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-9 flex gap-4">
          <button
            className="rounded-md px-7 py-3 text-xl font-bold"
            style={{
              color: "var(--foreground)",
              background: "var(--primary)",
              boxShadow: `
                0 0 15px var(--glow),
                0 0 30px var(--glow)
              `,
            }}
          >
            DOWNLOAD CV
          </button>

          <button
            className="rounded-md border px-7 py-3 text-xl font-bold"
            style={{
              color: "var(--foreground)",
              borderColor: "var(--primary-light)",
              boxShadow: "0 0 8px var(--glow)",
            }}
          >
            CONTACT INFO
          </button>
        </div>

        {/* Availability */}
        <div
          className="mt-7 text-2xl font-bold tracking-[0.35em]"
          style={{
            color: "var(--code-green)",
            textShadow: "0 0 10px var(--code-green)",
          }}
        >
          AVAILABLE
        </div>
      </div>
    </div>
  );
}