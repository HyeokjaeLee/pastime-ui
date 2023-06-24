import { createContext } from 'react';

export type ValidationContextValue = Map<string, () => string | undefined>;

export const ValidationContext = createContext<ValidationContextValue | null>(
  null,
);
