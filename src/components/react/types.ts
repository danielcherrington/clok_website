export type Platform = 'windows' | 'mac' | 'linux' | 'other';

export interface DownloadSectionProps {
  platform: Platform;
  downloadUrl: string;
  downloadLabel: string;
  error: string | null;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface HeroSectionProps {
  isDarkMode: boolean;
}

export interface CTASectionProps {
  // Add props if needed
} 