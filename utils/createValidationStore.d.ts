/// <reference types="react" />
type ValidationStoreData = Map<string, () => string | undefined>;
export declare const ValidationContext: import("react").Context<ValidationStoreData | null>;
export declare const createValidationStore: () => ValidationStoreData & {
    provideValidationStore: (children: React.ReactNode) => JSX.Element;
    validateAll: () => {
        isValid: boolean;
        invalidKeys: string[];
    };
};
export type ValidationStore = ReturnType<typeof createValidationStore>;
export {};
