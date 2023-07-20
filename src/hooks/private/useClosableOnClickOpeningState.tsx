import { useEffect, useState } from 'react';

export const useClosableOnClickOpeningState = () => {
  const openingState = useState(false);
  const [opened, setOpened] = openingState;

  let closable = false;

  useEffect(() => {
    if (opened) {
      const handleClickedOutside = () => {
        if (closable) setOpened(false);
      };

      window.addEventListener('click', handleClickedOutside);
      return () => window.removeEventListener('click', handleClickedOutside);
    }
  }, [closable, opened, setOpened]);

  return {
    openingState,
    setClosableOnClick: (value: boolean) => {
      closable = value;
    },
  };
};
