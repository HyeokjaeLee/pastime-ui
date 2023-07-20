/// <reference types="react" />
export declare const HIDDEN: {
    table: {
        disable: boolean;
    };
};
export declare const DARK_MODE: {
    control: string;
    description: string;
    table: {
        defaultValue: {
            summary: boolean;
        };
    };
};
export declare const SIZE: {
    options: string[];
    control: string;
    description: string;
    table: {
        defaultValue: {
            summary: string;
        };
        type: {
            summary: string;
        };
    };
};
export declare const SELECT_OPTIONS: {
    description: string;
    control: string;
};
export declare const SELECT_MULTIPLE: {
    control: string;
    description: string;
    table: {
        defaultValue: {
            summary: boolean;
        };
    };
};
export declare const SELECT_CANCELABLE: {
    control: string;
    description: string;
};
export declare const SELECT_OPTIONS_FLOAT: {
    options: string[];
    control: string;
    description: string;
    table: {
        defaultValue: {
            summary: string;
        };
    };
};
export declare const SELECT_USED_DECORATORS: ((Story: any) => JSX.Element)[];
export declare const VALIDATION: {
    control: boolean;
    description: string;
};
export declare const INPUT_PLACEHOLDER: {
    description: string;
    control: string;
    table: {
        type: {
            summary: string;
        };
    };
};
export declare const INPUT_DISABLED: {
    description: string;
    options: (string | boolean)[];
    control: {
        type: string;
    };
    table: {
        type: {
            summary: string;
        };
        defaultValue: {
            summary: boolean;
        };
    };
};
export declare const INPUT_CHILDREN: {
    description: string;
    control: string;
    table: {
        type: {
            summary: string;
        };
    };
};
export declare const INPUT_REVERSED: {
    description: string;
    control: string;
    table: {
        type: {
            summary: string;
        };
        defaultValue: {
            summary: boolean;
        };
    };
};
