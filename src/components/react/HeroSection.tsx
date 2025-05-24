import { getThemeScreenshot } from '../../utils/theme';
import type { HeroSectionProps } from './types';

const HeroSection = ({ isDarkMode }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Track Time,</span><br />
              <span className="bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">Boost Productivity</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Simple and intuitive time tracking for teams and individuals. 
              Focus on what matters while we handle the time tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/releases"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-emerald-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
              >
                Get Started Free
              </a>
              <a
                href="/documentation"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl dark:shadow-slate-900/50 bg-gradient-to-br from-emerald-500/10 to-purple-600/10 p-4">
              <img
                src={getThemeScreenshot('today', isDarkMode)}
                alt="Clok Dashboard Preview"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 