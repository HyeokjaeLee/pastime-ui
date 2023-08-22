export interface UseFilteredSearchOptionsParams {
    options?: string[];
    filterByKeyword?: boolean;
    inputValue?: string;
}
export declare const useFilteredSearchOptions: ({ options, filterByKeyword, inputValue, }: UseFilteredSearchOptionsParams) => {
    label: string;
    value: string;
}[] | undefined;
