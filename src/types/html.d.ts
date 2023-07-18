import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LiHTMLAttributes,
} from 'react';

type HTMLTags =
  | 'section'
  | 'dt'
  | 'dd'
  | 'dl'
  | 'ul'
  | 'li'
  | 'button'
  | 'div'
  | 'input';

type CleanedTagProps<TAttributes extends HTMLAttributes<infer TElement>> = Omit<
  DetailedHTMLProps<TAttributes, TElement>,
  'ref'
>;

export type HTMLTagProps<T extends HTMLTags> = T extends 'dl'
  ? CleanedTagProps<HTMLAttributes<HTMLDListElement>>
  : T extends 'ul'
  ? CleanedTagProps<HTMLAttributes<HTMLUListElement>>
  : T extends 'button'
  ? CleanedTagProps<ButtonHTMLAttributes<HTMLButtonElement>>
  : T extends 'li'
  ? CleanedTagProps<LiHTMLAttributes<HTMLLIElement>>
  : T extends 'div'
  ? CleanedTagProps<HTMLAttributes<HTMLDivElement>>
  : T extends 'input'
  ? CleanedTagProps<InputHTMLAttributes<HTMLInputElement>>
  : CleanedTagProps<HTMLAttributes<HTMLElement>>;
