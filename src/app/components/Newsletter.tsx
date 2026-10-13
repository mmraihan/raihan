export default function Newsletter() {
  return (
    <section className="py-20">
       <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up">
        <div className="p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Get the latest updates on my projects, blog posts, and tech insights delivered straight to your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-900 dark:text-white dark:bg-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 