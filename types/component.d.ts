import type { DisableSetter } from '../hooks';
export type Size = 'small' | 'medium' | 'large';
export type InnerStateChangeEventHandler<T> = (event: {
    value: T;
    preventInnerStateChange: DisableSetter;
}) => void;
