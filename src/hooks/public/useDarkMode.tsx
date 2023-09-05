import { useEffect, useState } from 'react';

enum MODE_TYPE {
  LIGHT = 'pastime:light',
  DARK = 'pastime:dark',
}

export type FixedDarkMode = 'light' | 'dark';

const checkDarkMode = () => {
  if (typeof document === 'undefined' || typeof window === 'undefined')
    return false;

  const { classList } = document.documentElement;

  const isDeviceDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  return (
    !classList.contains(MODE_TYPE.LIGHT) &&
    (classList.contains(MODE_TYPE.DARK) || isDeviceDarkMode)
  );
};

export const useDarkMode = (fixedDarkMode?: FixedDarkMode) => {
  const [isDarkMode, setIsDarkMode] = useState(checkDarkMode());

  useEffect(() => {
    if (fixedDarkMode) return;

    const html = document?.documentElement;

    if (!html) return;

    setIsDarkMode(checkDarkMode());

    const darkModeObserver = new MutationObserver((mutations) => {
      mutations.forEach(({ attributeName }) => {
        if (attributeName === 'class') setIsDarkMode(checkDarkMode());
      });
    });

    darkModeObserver.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => darkModeObserver.disconnect();
  }, [fixedDarkMode]);

  return {
    isDarkMode: fixedDarkMode ? fixedDarkMode === 'dark' : isDarkMode,

    setIsDarkMode: (isDarkMode: boolean) => {
      setIsDarkMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add(MODE_TYPE.DARK);
        document.documentElement.classList.remove(MODE_TYPE.LIGHT);
      } else {
        document.documentElement.classList.add(MODE_TYPE.LIGHT);
        document.documentElement.classList.remove(MODE_TYPE.DARK);
      }
    },
  };
};
