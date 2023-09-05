import { useEffect, useState } from 'react';

export type FixedDarkMode = 'light' | 'dark';

const DARK_MODE_CLASS = 'dark';

const checkDarkMode = () => {
  if (typeof document === 'undefined') return false;

  return document.documentElement.classList.contains(DARK_MODE_CLASS);
};

export const useDarkMode = (fixedDarkMode?: FixedDarkMode) => {
  const [isDarkMode, setIsDarkMode] = useState(
    fixedDarkMode ? fixedDarkMode === 'dark' : checkDarkMode(),
  );

  useEffect(() => {
    if (fixedDarkMode) return setIsDarkMode(fixedDarkMode === 'dark');

    const darkModeObserver = new MutationObserver((mutations) =>
      mutations.forEach(({ attributeName }) => {
        if (attributeName === 'class') setIsDarkMode(checkDarkMode);
      }),
    );

    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => darkModeObserver.disconnect();
  }, [fixedDarkMode]);

  return {
    isDarkMode,
  };
};
