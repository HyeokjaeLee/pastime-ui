import type { DisableSetter } from '@hooks';

export type Size = 'small' | 'medium' | 'large';

export type InputDisabled = boolean | 'readonly';

export type InnerStateChangeEventHandler<T> = (event: {
  value: T;
  preventInnerStateChange: DisableSetter;
}) => void;
