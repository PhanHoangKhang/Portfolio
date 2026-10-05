export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-[var(--border)] px-[6.5%] py-16">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center">
        <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.055em] text-[var(--foreground)]">
          PHAN HOANG KHANG
        </h2>

        <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-[var(--muted)]">
          © 2026 PHAN HOANG KHANG · BUILT WITH CURIOSITY. SHAPED BY CODE.
        </p>
      </div>
    </footer>
  );
}