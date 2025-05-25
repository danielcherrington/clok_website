const CTASection = () => {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="relative max-w-2xl w-full mx-auto px-8 py-16 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-emerald-400/30 shadow-2xl ring-4 ring-emerald-400/20 ring-offset-2 ring-offset-white dark:ring-offset-slate-900">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
          No credit card required
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Ready to start tracking time effectively?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Join thousands of teams already using Clok and boost your productivity today.
        </p>
        <a
          href="/releases"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform"
        >
          Get Started Free
        </a>
      </div>
    </section>
  );
};

export default CTASection; 