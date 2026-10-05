import { useEffect, useState } from "react";

const phrases = ["BUILDING SYSTEMS", "SECURING THE WEB", "SOLVING PROBLEMS"];

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentPhrase.slice(0, text.length + 1));

          if (text.length === currentPhrase.length) {
            setDeleting(true);
          }
        } else {
          setText(currentPhrase.slice(0, text.length - 1));

          if (text.length === 0) {
            setDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      deleting ? 45 : text.length === currentPhrase.length ? 1800 : 75,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <p className="mt-8 font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-violet-300 drop-shadow-[0_0_12px_rgba(196,181,253,0.45)]">
      {text}
      <span className="ml-2 inline-block animate-pulse text-violet-100 drop-shadow-[0_0_16px_rgba(221,214,254,0.75)]">
        |
      </span>
    </p>
  );
}
