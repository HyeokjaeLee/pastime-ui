export const isRefObject = <T>(ref: React.Ref<T>): ref is React.RefObject<T> =>
  typeof ref !== 'function';
