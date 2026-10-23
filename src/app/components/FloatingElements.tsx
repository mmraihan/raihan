// Lightweight ambient background: a masked hairline grid plus one soft
// primary-tinted glow. Pure CSS (no JS animation loop); the slow orb drift
// is disabled under prefers-reduced-motion in globals.css.
export default function FloatingElements() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ambient-grid absolute inset-0" />
      <div
        className="ambient-orb -left-32 -top-40 h-[28rem] w-[28rem] sm:h-[36rem] sm:w-[36rem]"
        style={{ background: "var(--orb-primary)" }}
      />
    </div>
  );
}
