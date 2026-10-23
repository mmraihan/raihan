export default function Newsletter() {
  return (
    <section className="pb-20 md:pb-28" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="glass-card glow-primary relative overflow-hidden p-8 sm:p-10 md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          />
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 id="newsletter-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Subscribe to My Newsletter
              </h2>
              <p className="mt-3 text-muted">
                Get the latest updates on my projects, blog posts, and tech insights delivered straight to your inbox.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="input min-w-0 flex-1"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
