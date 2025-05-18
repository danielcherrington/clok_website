import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
            About Clok
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Time tracking made simple, beautiful, and accessible for everyone.
          </p>
        </div>
        <div className="mb-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur rounded-2xl border border-emerald-400/20 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Clok was created to help individuals and teams focus on what matters most—doing great work—while we handle the time tracking. We believe in making productivity tools that are intuitive, privacy-friendly, and delightful to use.
          </p>
        </div>
        <div className="mb-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur rounded-2xl border border-purple-400/20 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Simplicity:</span> Easy to use, no clutter, no distractions.
            </li>
            <li>
              <span className="font-semibold text-purple-600 dark:text-purple-400">Transparency:</span> Clear pricing, open communication, honest support.
            </li>
            <li>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Privacy:</span> Your data is yours. We never sell or misuse your information.
            </li>
            <li>
              <span className="font-semibold text-purple-600 dark:text-purple-400">Continuous Improvement:</span> We listen to feedback and keep making Clok better.
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Ready to take control of your time? Try Clok for free or contribute to our open-source project on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.clok.citosoft.co.uk"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform"
            >
              Get Started Free
            </a>
            <a
              href="https://github.com/Citosoft/clok"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white/80 dark:bg-slate-900/80 text-emerald-600 dark:text-emerald-300 border border-emerald-400/20 shadow-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage; 