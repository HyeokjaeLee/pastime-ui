import type { ButtonProps } from '../../molecules';
import { HTMLTagProps } from '@types';
export interface TabItemProps extends Omit<HTMLTagProps<'li'>, 'children' | 'onClick'>, Pick<ButtonProps, 'disabled' | 'children' | 'onClick' | 'icon' | 'iconDirection'> {
    active?: boolean;
}
export declare const TabItem: ({ active, children, disabled, onClick, icon, iconDirection, className, ...restLiProps }: TabItemProps) => import("react/jsx-runtime").JSX.Element;
