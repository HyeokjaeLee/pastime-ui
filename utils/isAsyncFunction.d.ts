export declare const AsyncFunction: Function;
export declare const isAsyncFunction: <TParams, TReturn>(fn: (params: TParams) => TReturn | Promise<TReturn>) => fn is (params: TParams) => Promise<TReturn>;
