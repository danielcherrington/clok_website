import { useEffect, useState } from 'react';
import type { Asset } from '../../types/github';
import { FaWindows } from 'react-icons/fa';
import { SiApple, SiLinux, SiAndroid } from 'react-icons/si';
import { getThemeScreenshot, isDarkModeActive, onThemeChange } from '../../utils/theme';

const HomePage = () => {
  const [platform, setPlatform] = useState<'windows' | 'mac' | 'linux' | 'other'>('other');
  const [downloadUrl, setDownloadUrl] = useState('/api/github?path=/releases');
  const [downloadLabel, setDownloadLabel] = useState('Download');
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial theme
    setIsDarkMode(isDarkModeActive());
    
    // Listen for theme changes
    return onThemeChange(setIsDarkMode);
  }, []);

  useEffect(() => {
    const loadRelease = async () => {
      try {
        const response = await fetch('/api/github?path=/releases');
        if (!response.ok) {
          throw new Error('Failed to fetch release');
        }
        const release = await response.json();
        const assets: Asset[] = release.assets || [];

        const getPlatform = () => {
          const { userAgent, platform } = window.navigator;
          if (/Win/i.test(platform)) return 'windows';
          if (/Mac/i.test(platform)) return 'mac';
          if (/Linux/i.test(platform)) return 'linux';
          return 'other';
        };

        const getAssetForPlatform = (platform: string) => {
          if (platform === 'windows') return assets.find(a => a.name.endsWith('.exe'));
          if (platform === 'mac') return assets.find(a => a.name.endsWith('.dmg'));
          if (platform === 'linux') return assets.find(a => a.name.endsWith('.AppImage')) || assets.find(a => a.name.endsWith('.deb'));
          return null;
        };

        const detectedPlatform = getPlatform();
        setPlatform(detectedPlatform);
        const asset = getAssetForPlatform(detectedPlatform);

        if (asset) {
          setDownloadUrl(asset.browser_download_url);
          if (detectedPlatform === 'windows') setDownloadLabel('Download for Windows');
          else if (detectedPlatform === 'mac') setDownloadLabel('Download for macOS');
          else if (detectedPlatform === 'linux') setDownloadLabel('Download for Linux');
        }
      } catch (error) {
        console.error('Failed to fetch release:', error);
        setError('Failed to load download information. Please try again later.');
      }
    };

    loadRelease();
  }, []);

  return (
    <>
      {/* Hero Section */}
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

      {/* Central Download Section */}
      <section className="py-8 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div id="download-cta" className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              id="main-download-btn"
              href={downloadUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-700 to-purple-800 text-white border border-emerald-200/80 dark:border-emerald-400/40 shadow-lg hover:opacity-90 transition-all"
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {platform === 'windows' && <FaWindows className="w-6 h-6" />}
                {platform === 'mac' && <SiApple className="w-6 h-6" />}
                {platform === 'linux' && <SiLinux className="w-6 h-6" />}
                {platform === 'other' && <SiAndroid className="w-6 h-6" />}
              </span>
              <span>{downloadLabel}</span>
            </a>
            <a
              href="https://github.com/Citosoft/clok/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-white/80 dark:bg-slate-900/80 text-emerald-700 dark:text-emerald-300 border border-emerald-400/20 shadow-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              See all downloads
            </a>
          </div>
          {error ? (
            <span className="text-red-500 text-sm">{error}</span>
          ) : (
            <span className="text-gray-600 dark:text-gray-300 text-sm">Clok is available for Windows, macOS, and Linux.</span>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to track time effectively
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Powerful features to help you and your team stay on track
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Simple Time Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">Start and stop timers with a single click. Track time across multiple projects effortlessly.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Detailed Reports</h3>
              <p className="text-gray-600 dark:text-gray-300">Generate comprehensive reports to analyze time spent on projects and tasks.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Auto-Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">Automatically tracks your application usage and intelligently categorizes your time for effortless productivity insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 flex justify-center items-center">
        <div className="relative max-w-2xl w-full mx-auto px-8 py-16 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-emerald-400/30 shadow-2xl ring-4 ring-emerald-400/20 ring-offset-2 ring-offset-white dark:ring-offset-slate-900">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">No credit card required</span>
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
    </>
  );
};

export default HomePage; 