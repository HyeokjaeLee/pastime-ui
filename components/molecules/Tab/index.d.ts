/// <reference types="react" />
import type { ButtonProps } from '@components/atoms';
import { HTMLTagProps } from '@types';
export type { TabItemProps } from './TabItem';
export type TabProps = Omit<HTMLTagProps<'ul'>, 'size' | 'ref'> & Pick<ButtonProps, 'size'>;
export declare const Tab: (({ size, className, children, ...restUlProps }: TabProps) => JSX.Element) & {
    Item: ({ active, children, disabled, onClick, icon, iconDirection, className, ...restLiProps }: import("./TabItem").TabItemProps) => JSX.Element;
};
