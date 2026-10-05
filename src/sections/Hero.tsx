import TypingText from "../components/ui/TypingText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-[84px] sm:px-[6.5%] md:py-0"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-15 md:flex-row md:justify-between md:gap-16">
        {/* LEFT */}
        <div className="relative z-10 w-full md:w-[58%]">
          {/* Eyebrow */}
          <p className="mb-8 text-sm font-semibold tracking-[0.18em] text-[var(--muted)]">
            Backend Engineer · HO CHI MINH CITY, VIETNAM
          </p>

          {/* Name */}
          <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,14vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.055em] text-[var(--foreground)] md:text-[clamp(5rem,9vw,10rem)]">
            <span className="block">Phan</span>
            <span className="block">Hoang</span>
            <span className="block">KHANG</span>
          </h1>
          <TypingText />
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex w-full justify-center md:w-[38%]">
          {/* glow */}
          <div
            className="
              absolute
              h-[300px]
              w-[300px]
              sm:h-[360px]
              sm:w-[360px]
              md:h-[520px]
              md:w-[520px]
              rounded-full
              bg-white/[0.025]
              blur-3xl
            "
          />

          {/* Image */}
          <div className="relative flex h-[232px] w-[232px] items-center justify-center sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px]">
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
                h-[216px]
                w-[216px]
                sm:h-[264px]
                sm:w-[264px]
                md:h-[340px]
                md:w-[340px]
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
