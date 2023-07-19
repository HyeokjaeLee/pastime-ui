import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  LiHTMLAttributes,
  TextareaHTMLAttributes,
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
  | 'input'
  | 'textarea';

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
  : T extends 'textarea'
  ? CleanedTagProps<TextareaHTMLAttributes<HTMLTextAreaElement>>
  : CleanedTagProps<HTMLAttributes<HTMLElement>>;
