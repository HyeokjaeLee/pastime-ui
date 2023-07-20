import { cloneDeep } from 'lodash-es';

export const cloneDeepWith = <TOriginalValue, TCustomizerReturn>(
  value: TOriginalValue,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customizer: (value: any) => TCustomizerReturn,
) => {
  const newValue = cloneDeep(value);
  return customizer(newValue);
};
