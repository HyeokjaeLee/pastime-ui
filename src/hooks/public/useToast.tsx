import { useContext } from 'react';

import type { ToastOption } from '@contexts/ToastContext';
import { ToastContext } from '@contexts/ToastContext';

export const useToast = () => {
  const setToastOptionList = useContext(ToastContext);
  return {
    toast: (option: ToastOption) =>
      setToastOptionList?.((prevToastOptionList) => [
        ...prevToastOptionList,
        option,
      ]),
  };
};
