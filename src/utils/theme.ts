/**
 * Gets the path to a theme-based screenshot
 * @param name The name of the screenshot without extension
 * @param isDarkMode Whether dark mode is active
 * @returns The full path to the screenshot
 */
export const getThemeScreenshot = (name: string, isDarkMode: boolean): string => 
  `/images/screenshots/${isDarkMode ? 'dark' : 'light'}/${name}.png`;

/**
 * Checks if dark mode is currently active
 * @returns boolean indicating if dark mode is active
 */
export const isDarkModeActive = (): boolean => 
  document.documentElement.classList.contains('dark');

/**
 * Sets up a listener for theme changes
 * @param callback Function to call when theme changes
 * @returns Cleanup function to remove the listener
 */
export const onThemeChange = (callback: (isDark: boolean) => void): (() => void) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        callback(isDarkModeActive());
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });

  return () => observer.disconnect();
}; 