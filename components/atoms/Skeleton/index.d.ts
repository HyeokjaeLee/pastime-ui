/// <reference types="react" />
import { HTMLTagProps } from '@types';
export type SkeletonProps = Omit<HTMLTagProps<'div'>, 'children'>;
export declare const Skeleton: ({ className, ...restDivProps }: SkeletonProps) => JSX.Element;
