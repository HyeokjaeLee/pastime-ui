import { Toast as ToastMain } from './Toast';
import { ToastProvider } from './ToastProvider';

export type { ToastProps } from './Toast';
export type { ToastProviderProps } from './ToastProvider';

export const Toast = Object.assign(ToastMain, {
  Provider: ToastProvider,
});
