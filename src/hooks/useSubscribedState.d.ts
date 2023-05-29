/// <reference types="react" />
export declare function useSubscribedState<T>(subscribedState: T | (() => T), dependencyList?: React.DependencyList): [T, import("react").Dispatch<import("react").SetStateAction<T>>];
