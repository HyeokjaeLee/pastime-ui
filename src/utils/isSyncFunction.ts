import { AsyncFunction } from './isAsyncFunction';

export const isSyncFunction = <TParams, TReturn>(
  fn: (params: TParams) => TReturn | Promise<TReturn>,
): fn is (params: TParams) => TReturn => !(fn instanceof AsyncFunction);
