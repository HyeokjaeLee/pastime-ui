export const useDarkMode = () => {
  const isDevicePrefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const hasDarkModeClass =
    document.documentElement.classList.contains('pastime:dark');
  const hasLightModeClass =
    document.documentElement.classList.contains('pastime:light');

  return {
    isDarkMode:
      !hasLightModeClass && (hasDarkModeClass || isDevicePrefersDarkMode),

    setDarkMode: (isDarkMode: boolean) => {
      if (isDarkMode) {
        document.documentElement.classList.add('pastime:dark');
        document.documentElement.classList.remove('pastime:light');
      } else {
        document.documentElement.classList.add('pastime:light');
        document.documentElement.classList.remove('pastime:dark');
      }
    },
  };
};
