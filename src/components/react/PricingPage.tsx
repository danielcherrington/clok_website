import React from 'react';

const PricingPage = () => {
  const handlePurchase = () => {
    window.location.href = '/checkout';
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-purple-700 bg-clip-text text-transparent">
              Simple Licensing
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download Clok for free and try it for 30 days. Purchase a license to continue using all features.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-purple-700/20 rounded-3xl blur-3xl" />
            
            {/* Main Card */}
            <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur rounded-3xl shadow-2xl overflow-hidden border border-emerald-400/20">
              {/* Header Section */}
              <div className="p-8 sm:p-12 bg-gradient-to-br from-emerald-600/90 to-purple-700/90 text-white/90">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">Clok Pro License</h2>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-6xl font-bold">£50</span>
                    <div className="text-left">
                      <span className="text-2xl font-medium">/ user</span>
                      <span className="block text-white/80">annual subscription</span>
                    </div>
                  </div>
                  <p className="text-xl text-white/90 mb-8">Start with a 7-day free trial, then purchase a license to continue</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handlePurchase}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                      Purchase License
                    </button>
                    <a
                      href="/download"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
                    >
                      Download Free Trial
                    </a>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="p-8 sm:p-12">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Includes</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">Smart time tracking with automatic app detection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">Flexible manual time entry</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">Seamless SaaS platform integration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">Detailed time analytics and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">Productivity monitoring with idle alerts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">Smart time consolidation and organization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">Regular software updates and new features</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">24/7 online support and assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage; 