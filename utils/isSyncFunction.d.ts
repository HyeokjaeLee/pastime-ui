export declare const isSyncFunction: <TParams, TReturn>(fn: (params: TParams) => TReturn | Promise<TReturn>) => fn is (params: TParams) => TReturn;
