import { useEffect, useState } from 'react';
import type { Asset } from '../../types/github';
import { isDarkModeActive, onThemeChange } from '../../utils/theme';
import HeroSection from './HeroSection';
import DownloadSection from './DownloadSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import type { Platform } from './types';

const HomePage = () => {
  const [platform, setPlatform] = useState<Platform>('other');
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
      <HeroSection isDarkMode={isDarkMode} />
      <DownloadSection
        platform={platform}
        downloadUrl={downloadUrl}
        downloadLabel={downloadLabel}
        error={error}
      />
      <FeaturesSection />
      <CTASection />
    </>
  );
};

export default HomePage; 