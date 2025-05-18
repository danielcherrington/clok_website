import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const FeaturesPage = () => {
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setExpandedImage({ src, alt });
  };

  const handleClose = () => {
    setExpandedImage(null);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12 pb-6 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
            Powerful Features for Modern Teams
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to track time, manage tasks, and boost productivity.
          </p>
        </div>

        {/* Time Tracking */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 p-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Time Tracking</h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
              Track time effortlessly with our intuitive interface. Start and stop timers with a single click, and let Clok handle the rest.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Automated application tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">One-click timer start/stop</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Automatic time rounding</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Idle time detection</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Manual time entry</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="group relative w-56 h-56 mx-auto">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-2xl group-hover:w-[600px] group-hover:h-[450px] group-hover:-left-[172px] group-hover:z-[9999] border-2 border-gray-200 dark:border-gray-800 shadow-xl cursor-pointer"
                onClick={() => handleImageClick('/images/screenshots/today.png', 'Time Tracking Interface')}
              >
                <img
                  src="/images/screenshots/today.png"
                  alt="Time Tracking Interface"
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Task Management */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 p-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="order-1 md:order-1">
            <div className="group relative w-56 h-56 mx-auto">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-2xl group-hover:w-[600px] group-hover:h-[450px] group-hover:-left-[172px] group-hover:z-[9999] border-2 border-gray-200 dark:border-gray-800 shadow-xl cursor-pointer"
                onClick={() => handleImageClick('/images/screenshots/tasks.png', 'Task Management Interface')}
              >
                <img
                  src="/images/screenshots/tasks.png"
                  alt="Task Management Interface"
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Task Management</h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
              Seamlessly integrate and manage tasks from multiple sources. Pull tasks from popular SASS platforms and allocate time efficiently.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Integration with popular SASS platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Multi-source time allocation</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Advanced task filtering and sorting</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Manual time allocation interface</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reports & Analytics */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 p-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Reports & Analytics</h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
              Gain comprehensive insights with detailed category breakdowns, goal tracking, and productivity analytics to optimize your team's performance.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Category and application time breakdowns</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Goal setting and progress tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Productivity metrics and trends</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Custom report generation</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="group relative w-56 h-56 mx-auto">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-2xl group-hover:w-[600px] group-hover:h-[450px] group-hover:-left-[172px] group-hover:z-[9999] border-2 border-gray-200 dark:border-gray-800 shadow-xl cursor-pointer"
                onClick={() => handleImageClick('/images/screenshots/reports.png', 'Reports and Analytics Interface')}
              >
                <img
                  src="/images/screenshots/reports.png"
                  alt="Reports and Analytics Interface"
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="p-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Seamless Integrations</h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
              Connect Clok with your favorite tools and services.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-800">
                  <span className="text-xl font-bold text-emerald-500">S</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">SugarCRM</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-800">
                  <span className="text-xl font-bold text-emerald-500">E</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">EspoCRM</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-800">
                  <span className="text-xl font-bold text-emerald-500">C</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">CitoHR</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-800">
                  <span className="text-xl font-bold text-emerald-500">G</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Google Sheets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {expandedImage && createPortal(
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="relative w-[800px] h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default FeaturesPage; 