import type { ButtonProps } from '../../molecules';
import { HTMLTagProps } from '@types';
export interface PaginationProps extends Omit<HTMLTagProps<'ul'>, 'onChange'>, Pick<ButtonProps, 'size'> {
    onChange?: (page: number) => void;
    totalItems?: number;
    pageSize?: number;
    page?: number;
    buttonCount?: number;
}
export declare const Pagination: ({ onChange, buttonCount, totalItems, pageSize, page, size, className, ...restUlProps }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
