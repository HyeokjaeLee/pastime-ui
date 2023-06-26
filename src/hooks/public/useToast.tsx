import { useContext } from 'react';

import { ToastContext } from '@contexts';
import type { ToastOption } from '@contexts';

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
