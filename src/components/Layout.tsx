import React, { useEffect, useState } from 'react';

interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200 relative">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-400/30 via-purple-400/20 to-transparent dark:from-emerald-600/40 dark:via-purple-700/30 blur-3xl opacity-70"></div>
      </div>
      <header className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/trayicon.png" alt="Clok Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Clok</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/features" label="Features" />
            <NavLink href="/pricing" label="Pricing" />
            <NavLink href="/docs" label="Documentation" />
            <NavLink href="/about" label="About" />
            <NavLink href="/releases" label="Download" />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <a href="https://github.com/Citosoft/clok" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
            <button
              id="theme-toggle"
              onClick={handleToggle}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              <svg className="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
              </svg>
              <svg className="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-20 relative z-10">{children}</main>
      <footer className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border-t border-gray-200 dark:border-slate-700 mt-20">
        <div className="container mx-auto px-4 py-12 text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Clok. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  const isActive = typeof window !== 'undefined' && window.location.pathname.startsWith(href);
  return (
    <a
      href={href}
      className={`text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors px-3 py-2 rounded-lg ${
        isActive ? 'bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-emerald-400/20 shadow font-semibold pointer-events-none' : ''
      }`}
    >
      {label}
    </a>
  );
};

export default Layout; 