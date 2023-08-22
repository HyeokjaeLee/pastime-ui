// eslint-disable-next-line func-names, @typescript-eslint/no-empty-function, no-empty-function
export const AsyncFunction = async function () {}.constructor;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isAsyncFunction = <TParams, TReturn>(
  fn: (params: TParams) => TReturn | Promise<TReturn>,
): fn is (params: TParams) => Promise<TReturn> => fn instanceof AsyncFunction;
