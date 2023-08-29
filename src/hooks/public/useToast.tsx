import { useRef } from 'react';

import type { ToastOption } from '@contexts/ToastContext';
import { useToastContext } from '@contexts/ToastContext';

export const useToast = () => {
  const { setToastOptionList } = useToastContext();
  const { current } = useRef({
    toast: (option: ToastOption) =>
      setToastOptionList?.((prevToastOptionList) => [
        ...prevToastOptionList,
        option,
      ]),
  });

  return current;
};
