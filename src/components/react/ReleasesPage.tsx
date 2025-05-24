import React, { useEffect, useState } from 'react';
import { fetchAllReleases } from '../../utils/github';
import type { Release } from '../../types/github';
import { FaWindows } from 'react-icons/fa';
import { SiApple, SiLinux } from 'react-icons/si';

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
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {release.name || release.tag_name}
                    </h2>
                    {release.prerelease && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        Pre-release
                      </span>
                    )}
                  </div>
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
                          {asset.name.endsWith('.exe') && <FaWindows className="w-5 h-5" />}
                          {asset.name.endsWith('.msi') && <FaWindows className="w-5 h-5" />}
                          {asset.name.endsWith('.dmg') && <SiApple className="w-5 h-5" />}
                          {asset.name.endsWith('.AppImage') && <SiLinux className="w-5 h-5" />}
                          {asset.name.endsWith('.deb') && <SiLinux className="w-5 h-5" />}
                          {asset.name.endsWith('.rpm') && <SiLinux className="w-5 h-5" />}
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