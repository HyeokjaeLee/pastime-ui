import type { DisableSetter } from '@hooks';

export type Size = 'small' | 'medium' | 'large';

export type InputDisabled = boolean | 'readonly';

export type ChangeEvent<
  T extends {
    target: object;
  },
> = Omit<T, 'target'> & {
  target: {
    preventChangeInnerState: DisableSetter;
  };
};
