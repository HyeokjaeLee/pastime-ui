/// <reference types="react" />
type Setter<T> = React.Dispatch<React.SetStateAction<T>>;
export type DisableSetter = () => void;
/**
 * @returns [value, setter, disableSetter]
 * @disableSetter setter를 사용하지 못하게 만드는 함수입니다. (setter이전에 호출되어야 합니다.)
 */
export declare function useSubscribedState<T>(subscribedState: T | (() => T), dependencyList?: React.DependencyList): [T, Setter<T>, DisableSetter];
export type SubscribedState<T> = ReturnType<typeof useSubscribedState<T>>;
export {};
