import { Release } from '../types/github';

export const fetchLatestRelease = async (): Promise<Release> => {
  const response = await fetch('/api/github?path=/releases/latest');
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }
  
  return response.json();
};

export const fetchAllReleases = async (): Promise<Release[]> => {
  const response = await fetch('/api/github?path=/releases');
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }
  
  return response.json();
}; 