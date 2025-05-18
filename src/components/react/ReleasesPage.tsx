import React, { useEffect, useState } from 'react';
import { fetchAllReleases } from '../../utils/github';
import type { Release } from '../../types/github';

const ReleasesPage = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReleases = async () => {
      try {
        const data = await fetchAllReleases();
        setReleases(data);
      } catch (error) {
        console.error('Error fetching releases:', error);
        setError('Failed to load releases. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadReleases();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center text-gray-500 dark:text-gray-400">Loading releases...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-purple-600 bg-clip-text text-transparent">
            Clok Releases
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Download the latest versions of Clok for Windows, macOS, and Linux.
          </p>
        </div>
        
        {releases.length > 0 ? (
          <>
            {releases.map((release) => (
              <div key={release.tag_name} className="mb-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur rounded-2xl border border-emerald-400/20 shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {release.name || release.tag_name}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(release.published_at).toLocaleDateString()}
                  </span>
                </div>
                <div
                  className="prose dark:prose-invert max-w-none mb-4"
                  dangerouslySetInnerHTML={{ __html: release.body }}
                />
                <div className="flex flex-wrap gap-4">
                  {release.assets && release.assets.length > 0 ? (
                    <>
                      {release.assets.map((asset) => (
                        <a
                          key={asset.id}
                          href={asset.browser_download_url}
                          className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-emerald-700 to-purple-800 text-white border border-emerald-200/80 dark:border-emerald-400/40 shadow hover:opacity-90 transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download ${asset.name}`}
                        >
                          {asset.name.endsWith('.exe') && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M1.5 3.75l9.75-1.5v9.5h-9.75zm9.75 10.25v9.5l-9.75-1.5v-8zm2.25-11.13l10.5-1.62v11.25h-10.5zm10.5 12.38v11.25l-10.5-1.62v-9.63z" />
                            </svg>
                          )}
                          {asset.name.endsWith('.dmg') && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07zM21.64 17.36c-.23.53-.48 1.03-.76 1.5-.5.8-1.02 1.56-1.56 2.28-.7.9-1.44 1.8-2.36 1.8-.86 0-1.21-.58-2.26-.58-1.05 0-1.44.56-2.26.58-.92 0-1.62-.87-2.36-1.8-.56-.72-1.09-1.48-1.56-2.28-.28-.47-.53-.97-.76-1.5-.5-1.13-.9-2.32-.9-3.6 0-2.7 1.7-4.13 3.37-4.13.8 0 1.38.59 2.26.59.84 0 1.36-.59 2.26-.59 1.13 0 2.32.7 3.04 1.9-2.67 1.28-2.3 4.62.4 5.13z" />
                            </svg>
                          )}
                          {asset.name.endsWith('.AppImage') && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6.36-3.22c-.2.32-.54.52-.92.52-.19 0-.38-.05-.54-.16-.44-.29-.98-.46-1.56-.46-.58 0-1.12.17-1.56.46-.16.11-.35.16-.54.16-.38 0-.72-.2-.92-.52-.2-.32-.22-.72-.06-1.06.36-.7 1.13-1.22 2.08-1.22.95 0 1.72.52 2.08 1.22.16.34.14.74-.06 1.06z" />
                            </svg>
                          )}
                          {asset.name.endsWith('.deb') && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <circle cx="12" cy="12" r="4" fill="white" />
                            </svg>
                          )}
                          {asset.name.endsWith('.zip') && (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2" />
                              <path d="M9 3v2m3-2v2m3-2v2M9 21v-2m3 2v-2m3 2v-2" />
                            </svg>
                          )}
                          {asset.name}
                        </a>
                      ))}
                    </>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">No assets found.</span>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">No releases found.</div>
        )}
      </div>
    </section>
  );
};

export default ReleasesPage; 