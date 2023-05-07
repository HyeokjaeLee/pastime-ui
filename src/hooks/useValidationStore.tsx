import { useMemo } from 'react';

import { createValidationStore } from '../utils';

export const useValidationStore = () => useMemo(createValidationStore, []);
