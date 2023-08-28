import { useEffect, useState } from 'react';

enum MODE_TYPE {
  LIGHT = 'pastime:light',
  DARK = 'pastime:dark',
}

export type FixedDarkMode = 'light' | 'dark';

export const useDarkMode = (fixedDarkMode?: FixedDarkMode) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (fixedDarkMode) return;

    const html = document?.documentElement;

    if (!html) return;

    const setDarkMode = () => {
      const { classList } = html;
      const isDeviceDarkMode =
        window?.matchMedia('(prefers-color-scheme: dark)').matches ?? false;

      const isDarkMode =
        !classList.contains(MODE_TYPE.LIGHT) &&
        (classList.contains(MODE_TYPE.DARK) || isDeviceDarkMode);

      setIsDarkMode(isDarkMode);
    };

    setDarkMode();

    const darkModeObserver = new MutationObserver((mutations) => {
      mutations.forEach(({ attributeName }) => {
        if (attributeName === 'class') setDarkMode();
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

    setDarkMode: (isDarkMode: boolean) => {
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
