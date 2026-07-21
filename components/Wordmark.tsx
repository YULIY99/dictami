/**
 * The name, set plainly.
 *
 * Two coloured treatments were tried and dropped: a full stop after the word
 * (the default startup move of the last decade, and visibly bolted on) and a
 * coloured tittle on the final "i" (which needed a dotless letter plus a drawn
 * dot, and read as a rendering glitch). The mark beside it is already blue, so
 * the wordmark does not need to repeat the colour — it needs size and spacing.
 */
export function Wordmark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  /** On a dark section the letters need to be light. */
  tone?: "ink" | "light";
}) {
  return (
    <span
      className={`font-display font-medium tracking-[-0.015em] ${
        tone === "light" ? "text-white" : "text-ink"
      } ${className}`}
    >
      Dictami
    </span>
  );
}
