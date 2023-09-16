import { useEffect } from 'react';

import { cleanClassName } from '@utils';

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
    const { classList } = document.body;
    const classNames = cleanClassName(
      `${backgroundScroll && styles['fixed-body']} ${styles['body-size']}`,
    );

    if (isPrevent && classNames) {
      classList.add(classNames);

      return () => classList.remove(classNames);
    }
  }, [isPrevent, backgroundScroll]);
};
