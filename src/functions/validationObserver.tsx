/* eslint-disable func-names */
import { ValidationContext } from '@contexts';
import type { ValidationContextValue } from '@contexts';

export const validationObserver = <T extends object>(
  Component: (props: T) => JSX.Element | null,
) => {
  const validationStore: ValidationContextValue = new Map();
  return function (props: T) {
    return (
      <ValidationContext.Provider value={validationStore}>
        <Component {...props} />
      </ValidationContext.Provider>
    );
  };
};
