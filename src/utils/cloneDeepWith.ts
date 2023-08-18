import { cloneDeep } from 'lodash-es';

/** lodash의 cloneDeepWith이 내부의 값 수정이 외부에 영향을 미치는 문제가 있엇서 이를 해결하기 위해 만든 함수 */
export const cloneDeepWith = <TOriginalValue, TCustomizerReturn>(
  value: TOriginalValue,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customizer: (value: any) => TCustomizerReturn,
) => {
  const newValue = cloneDeep(value);
  return customizer(newValue);
};
