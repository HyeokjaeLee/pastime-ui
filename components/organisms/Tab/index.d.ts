import type { ButtonProps } from '../../molecules';
import { HTMLTagProps } from '../../../types';
export type { TabItemProps } from './TabItem';
export type TabProps = Omit<HTMLTagProps<'ul'>, 'size' | 'ref'> & Pick<ButtonProps, 'size'>;
export declare const Tab: (({ size, className, children, ...restUlProps }: TabProps) => import("react/jsx-runtime").JSX.Element) & {
    Item: ({ active, children, disabled, onClick, icon, iconDirection, className, ...restLiProps }: import("./TabItem").TabItemProps) => import("react/jsx-runtime").JSX.Element;
};
