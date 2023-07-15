import type { ToastOption } from '@contexts/ToastContext';
import { useToastContext } from '@contexts/ToastContext';

export const useToast = () => {
  const { setToastOptionList } = useToastContext();
  return {
    toast: (option: ToastOption) =>
      setToastOptionList?.((prevToastOptionList) => [
        ...prevToastOptionList,
        option,
      ]),
  };
};
