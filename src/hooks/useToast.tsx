import { useContext } from 'react';
import type { ReactNode } from 'react';

import { ToastProviderContext } from '../contexts/ToastProviderContext';

export const useToast = () => {
  const pushToast = useContext(ToastProviderContext);
  return (message: ReactNode, icon?: ReactNode) =>
    pushToast({
      children: message,
      icon,
    });
};
