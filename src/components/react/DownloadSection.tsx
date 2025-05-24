import { FaWindows } from 'react-icons/fa';
import { SiApple, SiLinux, SiAndroid } from 'react-icons/si';
import type { DownloadSectionProps } from './types';

const DownloadSection = ({ platform, downloadUrl, downloadLabel, error }: DownloadSectionProps) => {
  return (
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
  );
};

export default DownloadSection; 