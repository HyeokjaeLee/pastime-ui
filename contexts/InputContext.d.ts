import type { Dispatch, SetStateAction } from 'react';
export declare const InputContext: import("react").Context<Dispatch<SetStateAction<boolean>> | undefined>;
export declare const useInputContext: () => {
    setReadonly: Dispatch<SetStateAction<boolean>>;
};
