import { useEffect } from 'react';

import styles from './useBodyPortalStyle.module.scss';

interface useBodyPortalStyleParams {
  backgroundScroll: boolean;
  active: boolean;
}

export const useBodyPortalStyle = ({
  backgroundScroll,
  active,
}: useBodyPortalStyleParams) => {
  useEffect(() => {
    const { classList } = document.body;

    if (active) {
      classList.add(styles['body-size']);
      if (!backgroundScroll) classList.add(styles['fixed-body']);

      return () => {
        classList.remove(styles['body-size']);
        if (!backgroundScroll) classList.remove(styles['fixed-body']);
      };
    }
  }, [active, backgroundScroll]);
};
