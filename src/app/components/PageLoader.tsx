// Short branded intro overlay. Pure CSS so it is part of the static HTML and
// fades itself out without waiting for hydration (never blocks content or input).
export default function PageLoader() {
  return (
    <div
      aria-hidden="true"
      className="page-loader pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-border border-t-primary" />
        <div className="glow-primary absolute inset-0 m-auto h-4 w-4 rounded-full bg-primary" />
      </div>
    </div>
  )
}
