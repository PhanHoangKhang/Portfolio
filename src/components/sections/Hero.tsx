export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-[6.5%] pt-[84px]"
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-16">
        {/* LEFT */}
        <div className="relative z-10 w-[58%]">
          {/* Eyebrow */}
          <p className="mb-8 text-[11px] font-semibold tracking-[0.18em] text-[var(--muted)]">
            Backend Engineer · HO CHI MINH CITY, VIETNAM
          </p>

          {/* Name */}
          <h1 className="font-[var(--font-display)] text-[clamp(5rem,9vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.055em] text-[var(--foreground)]">
            <span className="block">Phan</span>
            <span className="block">Hoang</span>
            <span className="block">KHANG</span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex w-[38%] justify-center">
          {/* glow */}
          <div
            className="
              absolute
              h-[520px]
              w-[520px]
              rounded-full
              bg-white/[0.025]
              blur-3xl
            "
          />

          {/* Image */}
          <div className="relative flex h-[360px] w-[360px] items-center justify-center">
            {/* Animated outer glow */}
            <div
              className="
      avatar-ring
      absolute
      inset-0
      rounded-full
      border
      border-purple-400/40
    "
            />

            {/* Main avatar */}
            <div
              className="
                avatar-frame
                relative
                h-[340px]
                w-[340px]
                overflow-hidden
                rounded-full
                bg-[#777]
                "
            >
              <img
                src="/profile.png"
                alt="Phan Hoang Khang"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
