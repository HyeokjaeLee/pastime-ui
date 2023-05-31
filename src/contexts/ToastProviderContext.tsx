import { createContext } from 'react';

import type { ToastInfo } from '../components/molecules';

export const ToastProviderContext = createContext<
  (toastInfo: ToastInfo) => void
>(() => undefined);
