import { useEffect } from 'react';

import styles from './usePreventBackgroundScroll.module.scss';

interface UsePreventBackgroundScrollParams {
  backgroundScroll: boolean;
  isPrevent: boolean;
}

export const usePreventBackgroundScroll = ({
  backgroundScroll,
  isPrevent,
}: UsePreventBackgroundScrollParams) => {
  useEffect(() => {
    if (!backgroundScroll) {
      const { classList } = document.body;
      if (isPrevent) classList.add(styles['fixed-body']);

      return () => classList.remove(styles['fixed-body']);
    }
  }, [isPrevent, backgroundScroll]);
};
