import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
          Support
        </h1>
        
        <div className="space-y-12">
          {/* Contact Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Need help? We're here to assist you. Choose the best way to reach us below.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:support@clok.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
              >
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Email Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">support@citosoft.co.uk</p>
                </div>
              </a>
              <a
                href="https://github.com/Citosoft/clok/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
              >
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">GitHub Issues</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Report bugs or request features</p>
                </div>
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">How do I get started with Clok?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Download Clok from our releases page and follow the installation instructions. You can find detailed setup guides in our documentation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Is Clok free to use?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clok offers both free and premium versions. Check our pricing page for detailed information about our plans and features.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">How can I report a bug?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can report bugs through our GitHub issues page or by emailing our support team. Please include as much detail as possible about the issue.
                </p>
              </div>
            </div>
          </section>

          {/* Documentation Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Documentation</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out our comprehensive documentation for detailed guides, tutorials, and API references.
            </p>
            <a
              href="/documentation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              View Documentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SupportPage; 